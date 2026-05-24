package com.rancho.controller;

import com.rancho.dto.IngredientCategoryDTO;
import com.rancho.model.IngredientCategory;
import com.rancho.service.IIngredientCategoryService;
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
@RequestMapping("/ingredient-category")
@CrossOrigin(origins = "*")
public class IngredientCategoryController {

    private final IIngredientCategoryService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<IngredientCategoryDTO>> findAll() throws Exception {
        List<IngredientCategoryDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, IngredientCategoryDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<IngredientCategoryDTO> findById(@PathVariable Integer id) throws Exception {
        IngredientCategory obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, IngredientCategoryDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody IngredientCategoryDTO dto) throws Exception {
        IngredientCategory obj = service.save(modelMapper.map(dto, IngredientCategory.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdCategory()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<IngredientCategoryDTO> update(@PathVariable Integer id, @RequestBody IngredientCategoryDTO dto) throws Exception {
        IngredientCategory obj = service.update(modelMapper.map(dto, IngredientCategory.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, IngredientCategoryDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<IngredientCategoryDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        IngredientCategory obj = service.findById(id);
        EntityModel<IngredientCategoryDTO> entityModel = EntityModel.of(modelMapper.map(obj, IngredientCategoryDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(IngredientCategoryController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(IngredientCategoryController.class).findAll());

        entityModel.add(link1.withRel("ingredientcategory-self-info"));
        entityModel.add(link2.withRel("ingredientcategory-all-info"));

        return entityModel;
    }
}
