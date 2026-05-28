package com.rancho.controller;

import com.rancho.dto.ProductCategoryDTO;
import com.rancho.model.ProductCategory;
import com.rancho.service.IProductCategoryService;
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
@RequestMapping("/product-categories")
@CrossOrigin(origins = "*")
public class ProductCategoryController {

    private final IProductCategoryService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<ProductCategoryDTO>> findAll() throws Exception {
        List<ProductCategoryDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, ProductCategoryDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductCategoryDTO> findById(@PathVariable Integer id) throws Exception {
        ProductCategory obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, ProductCategoryDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody ProductCategoryDTO dto) throws Exception {
        ProductCategory obj = service.save(modelMapper.map(dto, ProductCategory.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdProductCategory()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<ProductCategoryDTO>> saveAll(@RequestBody List<ProductCategoryDTO> dtos) throws Exception {
        List<ProductCategory> entities = dtos.stream().map(dto -> modelMapper.map(dto, ProductCategory.class)).toList();
        List<ProductCategory> savedEntities = service.saveAll(entities);
        List<ProductCategoryDTO> savedDtos = savedEntities.stream().map(item -> modelMapper.map(item, ProductCategoryDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductCategoryDTO> update(@PathVariable Integer id, @RequestBody ProductCategoryDTO dto) throws Exception {
        ProductCategory obj = service.update(modelMapper.map(dto, ProductCategory.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, ProductCategoryDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<ProductCategoryDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        ProductCategory obj = service.findById(id);
        EntityModel<ProductCategoryDTO> entityModel = EntityModel.of(modelMapper.map(obj, ProductCategoryDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ProductCategoryController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ProductCategoryController.class).findAll());

        entityModel.add(link1.withRel("productcategory-self-info"));
        entityModel.add(link2.withRel("productcategory-all-info"));

        return entityModel;
    }
}
