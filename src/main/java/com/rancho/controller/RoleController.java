package com.rancho.controller;

import com.rancho.dto.RoleDTO;
import com.rancho.model.Role;
import com.rancho.service.IRoleService;
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
@RequestMapping("/roles")
@CrossOrigin(origins = "*")
public class RoleController {

    private final IRoleService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<RoleDTO>> findAll() throws Exception {
        List<RoleDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, RoleDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoleDTO> findById(@PathVariable Integer id) throws Exception {
        Role obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, RoleDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody RoleDTO dto) throws Exception {
        Role obj = service.save(modelMapper.map(dto, Role.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdRole()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<RoleDTO>> saveAll(@RequestBody List<RoleDTO> dtos) throws Exception {
        List<Role> entities = dtos.stream().map(dto -> modelMapper.map(dto, Role.class)).toList();
        List<Role> savedEntities = service.saveAll(entities);
        List<RoleDTO> savedDtos = savedEntities.stream().map(item -> modelMapper.map(item, RoleDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RoleDTO> update(@PathVariable Integer id, @RequestBody RoleDTO dto) throws Exception {
        Role obj = service.update(modelMapper.map(dto, Role.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, RoleDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<RoleDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        Role obj = service.findById(id);
        EntityModel<RoleDTO> entityModel = EntityModel.of(modelMapper.map(obj, RoleDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(RoleController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(RoleController.class).findAll());

        entityModel.add(link1.withRel("role-self-info"));
        entityModel.add(link2.withRel("role-all-info"));

        return entityModel;
    }
}