package com.rancho.controller;

import com.rancho.dto.UserDTO;
import com.rancho.model.User;
import com.rancho.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final IUserService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<UserDTO>> findAll() throws Exception {
        List<UserDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, UserDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> findById(@PathVariable Integer id) throws Exception {
        User obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, UserDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody UserDTO dto) throws Exception {
        User obj = service.save(modelMapper.map(dto, User.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdUser()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<UserDTO>> saveAll(@RequestBody List<UserDTO> dtos) throws Exception {
        List<User> entities = dtos.stream().map(dto -> modelMapper.map(dto, User.class)).toList();
        List<User> savedEntities = service.saveAll(entities);
        List<UserDTO> savedDtos = savedEntities.stream().map(item -> modelMapper.map(item, UserDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> update(@PathVariable Integer id, @RequestBody UserDTO dto) throws Exception {
        User obj = service.update(modelMapper.map(dto, User.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, UserDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<UserDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        User obj = service.findById(id);
        EntityModel<UserDTO> entityModel = EntityModel.of(modelMapper.map(obj, UserDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(UserController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(UserController.class).findAll());

        entityModel.add(link1.withRel("user-self-info"));
        entityModel.add(link2.withRel("user-all-info"));

        return entityModel;
    }
}