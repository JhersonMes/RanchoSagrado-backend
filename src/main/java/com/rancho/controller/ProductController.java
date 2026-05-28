package com.rancho.controller;

import com.rancho.dto.ProductDTO;
import com.rancho.model.Product;
import com.rancho.service.IProductService;
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
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class ProductController {

    private final IProductService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<ProductDTO>> findAll() throws Exception {
        List<ProductDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, ProductDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> findById(@PathVariable Integer id) throws Exception {
        Product obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, ProductDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody ProductDTO dto) throws Exception {
        Product obj = service.save(modelMapper.map(dto, Product.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdProduct()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<ProductDTO>> saveAll(@RequestBody List<ProductDTO> dtos) throws Exception {
        List<Product> entities = dtos.stream().map(dto -> modelMapper.map(dto, Product.class)).toList();
        List<Product> savedEntities = service.saveAll(entities);
        List<ProductDTO> savedDtos = savedEntities.stream().map(item -> modelMapper.map(item, ProductDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductDTO> update(@PathVariable Integer id, @RequestBody ProductDTO dto) throws Exception {
        Product obj = service.update(modelMapper.map(dto, Product.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, ProductDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<ProductDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        Product obj = service.findById(id);
        EntityModel<ProductDTO> entityModel = EntityModel.of(modelMapper.map(obj, ProductDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ProductController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ProductController.class).findAll());

        entityModel.add(link1.withRel("product-self-info"));
        entityModel.add(link2.withRel("product-all-info"));

        return entityModel;
    }
}