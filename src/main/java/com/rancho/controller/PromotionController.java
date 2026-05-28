package com.rancho.controller;

import com.rancho.dto.PromotionDTO;
import com.rancho.model.Promotion;
import com.rancho.service.IPromotionService;
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
@RequestMapping("/promotions")
@CrossOrigin(origins = "*")
public class PromotionController {

    private final IPromotionService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<PromotionDTO>> findAll() throws Exception {
        List<PromotionDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, PromotionDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PromotionDTO> findById(@PathVariable Integer id) throws Exception {
        Promotion obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, PromotionDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody PromotionDTO dto) throws Exception {
        Promotion obj = service.save(modelMapper.map(dto, Promotion.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdPromotion()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<PromotionDTO>> saveAll(@RequestBody List<PromotionDTO> dtos) throws Exception {
        List<Promotion> entities = dtos.stream().map(dto -> modelMapper.map(dto, Promotion.class)).toList();
        List<Promotion> savedEntities = service.saveAll(entities);
        List<PromotionDTO> savedDtos = savedEntities.stream().map(item -> modelMapper.map(item, PromotionDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PromotionDTO> update(@PathVariable Integer id, @RequestBody PromotionDTO dto) throws Exception {
        Promotion obj = service.update(modelMapper.map(dto, Promotion.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, PromotionDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<PromotionDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        Promotion obj = service.findById(id);
        EntityModel<PromotionDTO> entityModel = EntityModel.of(modelMapper.map(obj, PromotionDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(PromotionController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(PromotionController.class).findAll());

        entityModel.add(link1.withRel("promotion-self-info"));
        entityModel.add(link2.withRel("promotion-all-info"));

        return entityModel;
    }
}