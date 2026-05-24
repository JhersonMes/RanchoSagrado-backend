package com.rancho.controller;

import com.rancho.dto.IngredientDTO;
import com.rancho.model.Ingredient;
import com.rancho.service.IIngredientService;
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
@RequestMapping("/ingredients")
@CrossOrigin(origins = "*")
public class IngredientController {

    private final IIngredientService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<IngredientDTO>> findAll() throws Exception {
        List<IngredientDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, IngredientDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<IngredientDTO> findById(@PathVariable Integer id) throws Exception {
        Ingredient obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, IngredientDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody IngredientDTO dto) throws Exception {
        Ingredient obj = service.save(modelMapper.map(dto, Ingredient.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdIngredient()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<IngredientDTO> update(@PathVariable Integer id, @RequestBody IngredientDTO dto) throws Exception {
        Ingredient obj = service.update(modelMapper.map(dto, Ingredient.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, IngredientDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<IngredientDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        Ingredient obj = service.findById(id);
        EntityModel<IngredientDTO> entityModel = EntityModel.of(modelMapper.map(obj, IngredientDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(IngredientController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(IngredientController.class).findAll());

        entityModel.add(link1.withRel("ingredient-self-info"));
        entityModel.add(link2.withRel("ingredient-all-info"));

        return entityModel;
    }
}