package com.rancho.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.net.URI;
import java.util.List;

import com.rancho.dto.PromotionDTO;
import com.rancho.model.Promotion;
import com.rancho.service.IPromotionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/promotions")
@RequiredArgsConstructor
public class PromotionController {

    private final IPromotionService service;
    @Qualifier("promotionMapper")
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<PromotionDTO>> findAll() throws Exception {
        List<PromotionDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, PromotionDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PromotionDTO> findById(@PathVariable("id") Integer id) throws Exception {
        Promotion obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, PromotionDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody PromotionDTO dto) throws Exception {
        Promotion obj = service.save(modelMapper.map(dto, Promotion.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdPromotion()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<PromotionDTO>> saveAll(@RequestBody List<PromotionDTO> dtos) throws Exception {
        List<Promotion> list = dtos.stream().map(dto -> modelMapper.map(dto, Promotion.class)).toList();
        List<Promotion> saved = service.saveAll(list);
        List<PromotionDTO> savedDtos = saved.stream().map(item -> modelMapper.map(item, PromotionDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PromotionDTO> update(@RequestBody PromotionDTO dto, @PathVariable("id") Integer id) throws Exception {
        Promotion obj = service.update(modelMapper.map(dto, Promotion.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, PromotionDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/pageable")
    public ResponseEntity<Page<Promotion>> listPageable(Pageable pageable){
        Page<Promotion> page = service.listPage(pageable);
        return ResponseEntity.ok(page);
    }
}