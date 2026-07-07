package com.rancho.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.rancho.dto.OrderDTO;
import com.rancho.model.Order;
import com.rancho.service.IOrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
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
public class OrderController {

    private final IOrderService service;
    @Qualifier("orderMapper")
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<OrderDTO>> findAll() throws Exception {
        List<OrderDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, OrderDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDTO> findById(@PathVariable("id") Integer id) throws Exception {
        Order obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, OrderDTO.class));
    }

    @PostMapping
    public ResponseEntity<OrderDTO> save(@Valid @RequestBody OrderDTO dto) throws Exception {
        Order obj = service.save(modelMapper.map(dto, Order.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdOrder()).toUri();
        // Devuelve el pedido creado (con su id) para que el frontend pueda registrar los detalles
        return ResponseEntity.created(location).body(modelMapper.map(obj, OrderDTO.class));
    }

    @PostMapping("/batch")
    public ResponseEntity<List<OrderDTO>> saveAll(@RequestBody List<OrderDTO> dtos) throws Exception {
        List<Order> orders = dtos.stream().map(dto -> modelMapper.map(dto, Order.class)).toList();
        List<Order> savedOrders = service.saveAll(orders);
        List<OrderDTO> savedDtos = savedOrders.stream().map(item -> modelMapper.map(item, OrderDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrderDTO> update(@PathVariable("id") Integer id, @RequestBody OrderDTO dto) throws Exception {
        Order order = modelMapper.map(dto, Order.class);
        order.setIdOrder(id); // Usa el id de la URL para actualizar y no crear un registro nuevo
        Order obj = service.update(order, id);
        return ResponseEntity.ok(modelMapper.map(obj, OrderDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    /**
     * Actualización parcial del estado del pedido (PATCH).
     * El chef usa este endpoint para marcar un pedido como LISTO o CANCELADO
     * sin necesidad de enviar toda la entidad.
     */
    @PatchMapping("/{id}")
    public ResponseEntity<OrderDTO> patchStatus(
            @PathVariable("id") Integer id,
            @RequestBody java.util.Map<String, String> body) throws Exception {
        Order order = service.findById(id);
        String newStatus = body.get("status");
        if (newStatus != null && !newStatus.isBlank()) {
            order.setStatus(newStatus.toUpperCase());
            order = service.update(order, id);
        }
        return ResponseEntity.ok(modelMapper.map(order, OrderDTO.class));
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<OrderDTO> findByIdHateoas(@PathVariable("id") Integer id) throws Exception {
        Order obj = service.findById(id);
        EntityModel<OrderDTO> entityModel = EntityModel.of(modelMapper.map(obj, OrderDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(OrderController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(OrderController.class).findAll());

        entityModel.add(link1.withRel("order-self-info"));
        entityModel.add(link2.withRel("order-all-info"));

        return entityModel;
    }

    @GetMapping("/pageable")
    public ResponseEntity<Page<Order>> listPageable(Pageable pageable){
        Page<Order> page = service.listPage(pageable);
        return ResponseEntity.ok(page);
    }
}