package com.rancho.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.rancho.dto.EmployeeDTO;
import com.rancho.model.Employee;
import com.rancho.model.User;
import com.rancho.repository.IEmployeeRepository;
import com.rancho.repository.IUserRepository;
import com.rancho.service.IEmployeeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/employees")
public class EmployeeController {

    private final IEmployeeService service;
    private final IEmployeeRepository employeeRepository;
    private final IUserRepository userRepository;
    @Qualifier("employeeMapper")
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> findAll() throws Exception {
        List<EmployeeDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, EmployeeDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/me")
    public ResponseEntity<EmployeeDTO> findMine() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findOneByUsername(username);
        Employee employee = user == null ? null : employeeRepository.findOneByUser_IdUser(user.getIdUser());
        if (employee == null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(modelMapper.map(employee, EmployeeDTO.class));
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDTO> findById(@PathVariable("id") Integer id) throws Exception {
        Employee obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, EmployeeDTO.class));
    }

    @PreAuthorize("hasAuthority('Administrador')")
    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody EmployeeDTO dto) throws Exception {
        Employee obj = service.save(modelMapper.map(dto, Employee.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdEmployee()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PreAuthorize("hasAuthority('Administrador')")
    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDTO> update(@PathVariable("id") Integer id, @RequestBody EmployeeDTO dto) throws Exception {
        Employee obj = service.update(modelMapper.map(dto, Employee.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, EmployeeDTO.class));
    }

    @PreAuthorize("hasAuthority('Administrador')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<EmployeeDTO> findByIdHateoas(@PathVariable("id") Integer id) throws Exception {
        Employee obj = service.findById(id);
        EntityModel<EmployeeDTO> entityModel = EntityModel.of(modelMapper.map(obj, EmployeeDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(EmployeeController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(EmployeeController.class).findAll());

        entityModel.add(link1.withRel("employee-self-info"));
        entityModel.add(link2.withRel("employee-all-info"));

        return entityModel;
    }

    @GetMapping("/pageable")
    public ResponseEntity<Page<Employee>> listPageable(Pageable pageable){
        Page<Employee> page = service.listPage(pageable);
        return ResponseEntity.ok(page);
    }
}