package com.rancho.controller;

import com.rancho.dto.PaymentReceiptDTO;
import com.rancho.model.PaymentReceipt;
import com.rancho.service.IPaymentReceiptService;
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
@RequestMapping("/payment-receipts")
@CrossOrigin(origins = "*")
public class PaymentReceiptController {

    private final IPaymentReceiptService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<PaymentReceiptDTO>> findAll() throws Exception {
        List<PaymentReceiptDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, PaymentReceiptDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PaymentReceiptDTO> findById(@PathVariable Integer id) throws Exception {
        PaymentReceipt obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, PaymentReceiptDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody PaymentReceiptDTO dto) throws Exception {
        PaymentReceipt obj = service.save(modelMapper.map(dto, PaymentReceipt.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdReceipt()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<PaymentReceiptDTO>> saveAll(@RequestBody List<PaymentReceiptDTO> dtos) throws Exception {
        List<PaymentReceipt> entities = dtos.stream().map(dto -> modelMapper.map(dto, PaymentReceipt.class)).toList();
        List<PaymentReceipt> savedEntities = service.saveAll(entities);
        List<PaymentReceiptDTO> savedDtos = savedEntities.stream().map(item -> modelMapper.map(item, PaymentReceiptDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PaymentReceiptDTO> update(@PathVariable Integer id, @RequestBody PaymentReceiptDTO dto) throws Exception {
        PaymentReceipt obj = service.update(modelMapper.map(dto, PaymentReceipt.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, PaymentReceiptDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<PaymentReceiptDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        PaymentReceipt obj = service.findById(id);
        EntityModel<PaymentReceiptDTO> entityModel = EntityModel.of(modelMapper.map(obj, PaymentReceiptDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(PaymentReceiptController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(PaymentReceiptController.class).findAll());

        entityModel.add(link1.withRel("paymentreceipt-self-info"));
        entityModel.add(link2.withRel("paymentreceipt-all-info"));

        return entityModel;
    }
}