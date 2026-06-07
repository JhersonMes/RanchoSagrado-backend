package com.rancho.controller;

import java.net.URI;
import java.util.List;

import com.rancho.dto.ShiftDTO;
import com.rancho.model.Shift;
import com.rancho.service.IShiftService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/shifts")
@RequiredArgsConstructor
public class ShiftController {

    private final IShiftService service;
    @Qualifier("shiftMapper")
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<ShiftDTO>> findAll() throws Exception {
        List<ShiftDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, ShiftDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ShiftDTO> findById(@PathVariable("id") Integer id) throws Exception {
        Shift obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, ShiftDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody ShiftDTO dto) throws Exception {
        Shift obj = service.save(modelMapper.map(dto, Shift.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdShift()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ShiftDTO> update(@RequestBody ShiftDTO dto, @PathVariable("id") Integer id) throws Exception {
        Shift obj = service.update(modelMapper.map(dto, Shift.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, ShiftDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}