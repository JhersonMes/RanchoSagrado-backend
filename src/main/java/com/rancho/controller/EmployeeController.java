package com.rancho.controller;

import com.rancho.dto.EmployeeDTO;
import com.rancho.model.Employee;
import com.rancho.service.IEmployeeService;
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
@RequestMapping("/employees")
@CrossOrigin(origins = "*")
public class EmployeeController {

    private final IEmployeeService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> findAll() throws Exception {
        List<EmployeeDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, EmployeeDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDTO> findById(@PathVariable Integer id) throws Exception {
        Employee obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, EmployeeDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody EmployeeDTO dto) throws Exception {
        Employee obj = service.save(modelMapper.map(dto, Employee.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdEmployee()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDTO> update(@PathVariable Integer id, @RequestBody EmployeeDTO dto) throws Exception {
        Employee obj = service.update(modelMapper.map(dto, Employee.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, EmployeeDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<EmployeeDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        Employee obj = service.findById(id);
        EntityModel<EmployeeDTO> entityModel = EntityModel.of(modelMapper.map(obj, EmployeeDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(EmployeeController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(EmployeeController.class).findAll());

        entityModel.add(link1.withRel("employee-self-info"));
        entityModel.add(link2.withRel("employee-all-info"));

        return entityModel;
    }
}
