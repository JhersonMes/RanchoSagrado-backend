package com.rancho.controller;

import com.rancho.dto.RestaurantTableDTO;
import com.rancho.model.RestaurantTable;
import com.rancho.service.IRestaurantTableService;
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
@RequestMapping("/restaurant-tables")
@CrossOrigin(origins = "*")
public class RestaurantTableController {

    private final IRestaurantTableService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<RestaurantTableDTO>> findAll() throws Exception {
        List<RestaurantTableDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, RestaurantTableDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RestaurantTableDTO> findById(@PathVariable Integer id) throws Exception {
        RestaurantTable obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, RestaurantTableDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody RestaurantTableDTO dto) throws Exception {
        RestaurantTable obj = service.save(modelMapper.map(dto, RestaurantTable.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdTable()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<RestaurantTableDTO>> saveAll(@RequestBody List<RestaurantTableDTO> dtos) throws Exception {
        List<RestaurantTable> entities = dtos.stream().map(dto -> modelMapper.map(dto, RestaurantTable.class)).toList();
        List<RestaurantTable> savedEntities = service.saveAll(entities);
        List<RestaurantTableDTO> savedDtos = savedEntities.stream().map(item -> modelMapper.map(item, RestaurantTableDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RestaurantTableDTO> update(@PathVariable Integer id, @RequestBody RestaurantTableDTO dto) throws Exception {
        RestaurantTable obj = service.update(modelMapper.map(dto, RestaurantTable.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, RestaurantTableDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<RestaurantTableDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        RestaurantTable obj = service.findById(id);
        EntityModel<RestaurantTableDTO> entityModel = EntityModel.of(modelMapper.map(obj, RestaurantTableDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(RestaurantTableController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(RestaurantTableController.class).findAll());

        entityModel.add(link1.withRel("restauranttable-self-info"));
        entityModel.add(link2.withRel("restauranttable-all-info"));

        return entityModel;
    }
}