package com.rancho.controller;

import com.rancho.dto.OrderDTO;
import com.rancho.model.Order;
import com.rancho.service.IOrderService;
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
@RequestMapping("/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    private final IOrderService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<OrderDTO>> findAll() throws Exception {
        List<OrderDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, OrderDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDTO> findById(@PathVariable Integer id) throws Exception {
        Order obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, OrderDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody OrderDTO dto) throws Exception {
        Order obj = service.save(modelMapper.map(dto, Order.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdOrder()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<OrderDTO>> saveAll(@RequestBody List<OrderDTO> dtos) throws Exception {
        List<Order> orders = dtos.stream().map(dto -> modelMapper.map(dto, Order.class)).toList();
        List<Order> savedOrders = service.saveAll(orders);
        List<OrderDTO> savedDtos = savedOrders.stream().map(item -> modelMapper.map(item, OrderDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrderDTO> update(@PathVariable Integer id, @RequestBody OrderDTO dto) throws Exception {
        Order obj = service.update(modelMapper.map(dto, Order.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, OrderDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<OrderDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        Order obj = service.findById(id);
        EntityModel<OrderDTO> entityModel = EntityModel.of(modelMapper.map(obj, OrderDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(OrderController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(OrderController.class).findAll());

        entityModel.add(link1.withRel("order-self-info"));
        entityModel.add(link2.withRel("order-all-info"));

        return entityModel;
    }
}
