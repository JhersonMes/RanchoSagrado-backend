package com.rancho.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.net.URI;
import java.util.List;

import com.rancho.dto.RoleDTO;
import com.rancho.model.Role;
import com.rancho.service.IRoleService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/roles")
@RequiredArgsConstructor
@PreAuthorize("hasAuthority('Administrador')")
public class RoleController {

    private final IRoleService service;
    @Qualifier("roleMapper")
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<RoleDTO>> findAll() throws Exception {
        List<RoleDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, RoleDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoleDTO> findById(@PathVariable("id") Integer id) throws Exception {
        Role obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, RoleDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody RoleDTO dto) throws Exception {
        Role obj = service.save(modelMapper.map(dto, Role.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdRole()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<RoleDTO> update(@RequestBody RoleDTO dto, @PathVariable("id") Integer id) throws Exception {
        Role obj = service.update(modelMapper.map(dto, Role.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, RoleDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/pageable")
    public ResponseEntity<Page<Role>> listPageable(Pageable pageable){
        Page<Role> page = service.listPage(pageable);
        return ResponseEntity.ok(page);
    }
}