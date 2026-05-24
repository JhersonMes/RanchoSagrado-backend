package com.rancho.controller;

import com.rancho.dto.InventoryDTO;
import com.rancho.model.Inventory;
import com.rancho.service.IInventoryService;
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
@RequestMapping("/inventories")
@CrossOrigin(origins = "*")
public class InventoryController {

    private final IInventoryService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<InventoryDTO>> findAll() throws Exception {
        List<InventoryDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, InventoryDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<InventoryDTO> findById(@PathVariable Integer id) throws Exception {
        Inventory obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, InventoryDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody InventoryDTO dto) throws Exception {
        Inventory obj = service.save(modelMapper.map(dto, Inventory.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdInventory()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<InventoryDTO>> saveAll(@RequestBody List<InventoryDTO> dtos) throws Exception {
        List<Inventory> inventories = dtos.stream().map(dto -> modelMapper.map(dto, Inventory.class)).toList();
        List<Inventory> savedInventories = service.saveAll(inventories);
        List<InventoryDTO> savedDtos = savedInventories.stream().map(item -> modelMapper.map(item, InventoryDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<InventoryDTO> update(@PathVariable Integer id, @RequestBody InventoryDTO dto) throws Exception {
        Inventory obj = service.update(modelMapper.map(dto, Inventory.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, InventoryDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<InventoryDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        Inventory obj = service.findById(id);
        EntityModel<InventoryDTO> entityModel = EntityModel.of(modelMapper.map(obj, InventoryDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(InventoryController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(InventoryController.class).findAll());

        entityModel.add(link1.withRel("inventory-self-info"));
        entityModel.add(link2.withRel("inventory-all-info"));

        return entityModel;
    }
}
