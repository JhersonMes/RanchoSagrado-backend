package com.rancho.controller;

import com.rancho.dto.UserDTO;
import com.rancho.model.Role;
import com.rancho.model.User;
import com.rancho.repository.IRoleRepository;
import com.rancho.repository.IUserRepository;
import com.rancho.security.JwtRequest;
import com.rancho.security.JwtResponse;
import com.rancho.security.JwtTokenUtil;
import com.rancho.security.JwtUserDetailsService;
import com.rancho.service.IUserService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class LoginController {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;
    private final JwtUserDetailsService jwtUserDetailsService;
    private final IUserService userService;
    private final IUserRepository userRepository;
    private final IRoleRepository roleRepository;
    @Qualifier("userMapper")
    private final ModelMapper modelMapper;

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest jwtRequest) throws Exception {
        //public ResponseEntity<Boolean> login(@RequestBody JwtRequest jwtRequest, HttpServletResponse response) throws Exception {
        try{
            authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());

            final UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(jwtRequest.getUsername());
            final String accessToken = jwtTokenUtil.generateToken(userDetails);

            return ResponseEntity.ok(new JwtResponse(accessToken));
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("/register")
    public ResponseEntity<UserDTO> register(@Valid @RequestBody UserDTO userDTO) throws Exception {
        User user = modelMapper.map(userDTO, User.class);

        Role clientRole = roleRepository.findOneByName("Cliente");
        if (clientRole == null) {
            throw new IllegalStateException("El rol 'Cliente' no existe. Verifique los datos semilla.");
        }
        user.setRole(clientRole);

        User savedUser = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(modelMapper.map(savedUser, UserDTO.class));
    }

    private void authenticate(String username, String password) throws Exception{
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }


    @GetMapping("/auth/logout")
    public ResponseEntity<Void> logout(HttpServletResponse response) {
        ResponseCookie cookie = ResponseCookie.from("jwt", "")
                .httpOnly(true)
                .secure(false)
                .path("/")
                .sameSite("Lax")
                .maxAge(0)
                .build();

        response.setHeader(HttpHeaders.SET_COOKIE, cookie.toString());

        return ResponseEntity.ok().build();
    }

    @GetMapping("/auth/user")
    public ResponseEntity<UserDTO> getUserInfo(){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findOneByUsername(username);
        return ResponseEntity.ok(modelMapper.map(user, UserDTO.class));
    }
}
