package com.rancho.controller;

import com.rancho.dto.PaymentDTO;
import com.rancho.model.Payment;
import com.rancho.service.IPaymentService;
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
@RequestMapping("/payments")
public class PaymentController {

    private final IPaymentService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<PaymentDTO>> findAll() throws Exception {
        List<PaymentDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, PaymentDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PaymentDTO> findById(@PathVariable Integer id) throws Exception {
        Payment obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, PaymentDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody PaymentDTO dto) throws Exception {
        Payment obj = service.save(modelMapper.map(dto, Payment.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdPayment()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<PaymentDTO>> saveAll(@RequestBody List<PaymentDTO> dtos) throws Exception {
        List<Payment> payments = dtos.stream().map(dto -> modelMapper.map(dto, Payment.class)).toList();
        List<Payment> savedPayments = service.saveAll(payments);
        List<PaymentDTO> savedDtos = savedPayments.stream().map(item -> modelMapper.map(item, PaymentDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PaymentDTO> update(@PathVariable Integer id, @RequestBody PaymentDTO dto) throws Exception {
        Payment obj = service.update(modelMapper.map(dto, Payment.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, PaymentDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<PaymentDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        Payment obj = service.findById(id);
        EntityModel<PaymentDTO> entityModel = EntityModel.of(modelMapper.map(obj, PaymentDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(PaymentController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(PaymentController.class).findAll());

        entityModel.add(link1.withRel("payment-self-info"));
        entityModel.add(link2.withRel("payment-all-info"));

        return entityModel;
    }
}