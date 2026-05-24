package com.rancho.controller;

import com.rancho.dto.OrderDetailDTO;
import com.rancho.model.OrderDetail;
import com.rancho.service.IOrderDetailService;
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
@RequestMapping("/order-details")
@CrossOrigin(origins = "*")
public class OrderDetailController {

    private final IOrderDetailService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<OrderDetailDTO>> findAll() throws Exception {
        List<OrderDetailDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, OrderDetailDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDetailDTO> findById(@PathVariable Integer id) throws Exception {
        OrderDetail obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, OrderDetailDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody OrderDetailDTO dto) throws Exception {
        OrderDetail obj = service.save(modelMapper.map(dto, OrderDetail.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdOrderDetail()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<OrderDetailDTO>> saveAll(@RequestBody List<OrderDetailDTO> dtos) throws Exception {
        List<OrderDetail> details = dtos.stream().map(dto -> modelMapper.map(dto, OrderDetail.class)).toList();
        List<OrderDetail> savedDetails = service.saveAll(details);
        List<OrderDetailDTO> savedDtos = savedDetails.stream().map(item -> modelMapper.map(item, OrderDetailDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrderDetailDTO> update(@PathVariable Integer id, @RequestBody OrderDetailDTO dto) throws Exception {
        OrderDetail obj = service.update(modelMapper.map(dto, OrderDetail.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, OrderDetailDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<OrderDetailDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        OrderDetail obj = service.findById(id);
        EntityModel<OrderDetailDTO> entityModel = EntityModel.of(modelMapper.map(obj, OrderDetailDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(OrderDetailController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(OrderDetailController.class).findAll());

        entityModel.add(link1.withRel("orderdetail-self-info"));
        entityModel.add(link2.withRel("orderdetail-all-info"));

        return entityModel;
    }
}
