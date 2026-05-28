package com.rancho.controller;

import com.rancho.dto.ShiftDTO;
import com.rancho.model.Shift;
import com.rancho.service.IShiftService;
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
@RequestMapping("/shifts")
@CrossOrigin(origins = "*")
public class ShiftController {

    private final IShiftService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<ShiftDTO>> findAll() throws Exception {
        List<ShiftDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, ShiftDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ShiftDTO> findById(@PathVariable Integer id) throws Exception {
        Shift obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, ShiftDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody ShiftDTO dto) throws Exception {
        Shift obj = service.save(modelMapper.map(dto, Shift.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdShift()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<ShiftDTO>> saveAll(@RequestBody List<ShiftDTO> dtos) throws Exception {
        List<Shift> entities = dtos.stream().map(dto -> modelMapper.map(dto, Shift.class)).toList();
        List<Shift> savedEntities = service.saveAll(entities);
        List<ShiftDTO> savedDtos = savedEntities.stream().map(item -> modelMapper.map(item, ShiftDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ShiftDTO> update(@PathVariable Integer id, @RequestBody ShiftDTO dto) throws Exception {
        Shift obj = service.update(modelMapper.map(dto, Shift.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, ShiftDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<ShiftDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        Shift obj = service.findById(id);
        EntityModel<ShiftDTO> entityModel = EntityModel.of(modelMapper.map(obj, ShiftDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ShiftController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ShiftController.class).findAll());

        entityModel.add(link1.withRel("shift-self-info"));
        entityModel.add(link2.withRel("shift-all-info"));

        return entityModel;
    }
}