package com.rancho.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.net.URI;
import java.util.List;

import com.rancho.dto.RestaurantTableDTO;
import com.rancho.model.RestaurantTable;
import com.rancho.service.IRestaurantTableService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/restaurant-tables")
@RequiredArgsConstructor
public class RestaurantTableController {

    private final IRestaurantTableService service;
    @Qualifier("restaurantTableMapper")
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<RestaurantTableDTO>> findAll() throws Exception {
        List<RestaurantTableDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, RestaurantTableDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RestaurantTableDTO> findById(@PathVariable("id") Integer id) throws Exception {
        RestaurantTable obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, RestaurantTableDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody RestaurantTableDTO dto) throws Exception {
        RestaurantTable obj = service.save(modelMapper.map(dto, RestaurantTable.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdTable()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<RestaurantTableDTO> update(@RequestBody RestaurantTableDTO dto, @PathVariable("id") Integer id) throws Exception {
        RestaurantTable obj = service.update(modelMapper.map(dto, RestaurantTable.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, RestaurantTableDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/pageable")
    public ResponseEntity<Page<RestaurantTable>> listPageable(Pageable pageable){
        Page<RestaurantTable> page = service.listPage(pageable);
        return ResponseEntity.ok(page);
    }
}