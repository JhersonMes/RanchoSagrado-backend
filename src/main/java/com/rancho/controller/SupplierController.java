package com.rancho.controller;

import com.rancho.dto.SupplierDTO;
import com.rancho.model.Supplier;
import com.rancho.service.ISupplierService;
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
@RequestMapping("/suppliers")
@CrossOrigin(origins = "*")
public class SupplierController {

    private final ISupplierService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<SupplierDTO>> findAll() throws Exception {
        List<SupplierDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, SupplierDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SupplierDTO> findById(@PathVariable Integer id) throws Exception {
        Supplier obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, SupplierDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody SupplierDTO dto) throws Exception {
        Supplier obj = service.save(modelMapper.map(dto, Supplier.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdSupplier()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<SupplierDTO>> saveAll(@RequestBody List<SupplierDTO> dtos) throws Exception {
        List<Supplier> entities = dtos.stream().map(dto -> modelMapper.map(dto, Supplier.class)).toList();
        List<Supplier> savedEntities = service.saveAll(entities);
        List<SupplierDTO> savedDtos = savedEntities.stream().map(item -> modelMapper.map(item, SupplierDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SupplierDTO> update(@PathVariable Integer id, @RequestBody SupplierDTO dto) throws Exception {
        Supplier obj = service.update(modelMapper.map(dto, Supplier.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, SupplierDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<SupplierDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        Supplier obj = service.findById(id);
        EntityModel<SupplierDTO> entityModel = EntityModel.of(modelMapper.map(obj, SupplierDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(SupplierController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(SupplierController.class).findAll());

        entityModel.add(link1.withRel("supplier-self-info"));
        entityModel.add(link2.withRel("supplier-all-info"));

        return entityModel;
    }
}
