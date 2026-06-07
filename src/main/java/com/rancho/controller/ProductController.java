package com.rancho.controller;

import java.net.URI;
import java.util.List;

import com.rancho.dto.ProductDTO;
import com.rancho.model.Product;
import com.rancho.service.IProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {

    private final IProductService service;
    @Qualifier("productMapper")
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<ProductDTO>> findAll() throws Exception {
        List<ProductDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, ProductDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> findById(@PathVariable("id") Integer id) throws Exception {
        Product obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, ProductDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody ProductDTO dto) throws Exception {
        Product obj = service.save(modelMapper.map(dto, Product.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdProduct()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<ProductDTO>> saveAll(@RequestBody List<ProductDTO> dtos) throws Exception {
        List<Product> list = dtos.stream().map(dto -> modelMapper.map(dto, Product.class)).toList();
        List<Product> saved = service.saveAll(list);
        List<ProductDTO> savedDtos = saved.stream().map(product -> modelMapper.map(product, ProductDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductDTO> update(@RequestBody ProductDTO dto, @PathVariable("id") Integer id) throws Exception {
        Product obj = service.update(modelMapper.map(dto, Product.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, ProductDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}