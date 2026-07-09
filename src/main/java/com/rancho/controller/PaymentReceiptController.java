package com.rancho.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.net.URI;
import java.util.List;

import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.rancho.dto.PaymentReceiptDTO;
import com.rancho.model.PaymentReceipt;
import com.rancho.service.IPaymentReceiptService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/payment-receipts")
@RequiredArgsConstructor
public class PaymentReceiptController {

    private final IPaymentReceiptService service;
    @Qualifier("paymentReceiptMapper")
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<PaymentReceiptDTO>> findAll() throws Exception {
        List<PaymentReceiptDTO> list = service.findAll().stream()
                .map(e -> modelMapper.map(e, PaymentReceiptDTO.class))
                .toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PaymentReceiptDTO> findById(@PathVariable("id") Integer id) throws Exception {
        PaymentReceipt obj = service.findById(id);

        return ResponseEntity.ok(modelMapper.map(obj, PaymentReceiptDTO.class));
    }

    @PreAuthorize("hasAuthority('Administrador')")
    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody PaymentReceiptDTO dto) throws Exception {
        PaymentReceipt obj = service.save(modelMapper.map(dto, PaymentReceipt.class));

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(obj.getIdReceipt())
                .toUri();

        return ResponseEntity.created(location).build();
    }

    @PreAuthorize("hasAuthority('Administrador')")
    @PostMapping("/batch")
    public ResponseEntity<List<PaymentReceiptDTO>> saveAll(@RequestBody List<PaymentReceiptDTO> dtos) throws Exception {
        List<PaymentReceipt> list = dtos.stream().map(dto -> modelMapper.map(dto, PaymentReceipt.class)).toList();
        List<PaymentReceipt> saved = service.saveAll(list);
        List<PaymentReceiptDTO> savedDtos = saved.stream().map(receipt -> modelMapper.map(receipt, PaymentReceiptDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PreAuthorize("hasAuthority('Administrador')")
    @PutMapping("/{id}")
    public ResponseEntity<PaymentReceiptDTO> update(@PathVariable("id") Integer id, @RequestBody PaymentReceiptDTO dto) throws Exception {
        PaymentReceipt obj = service.update(modelMapper.map(dto, PaymentReceipt.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, PaymentReceiptDTO.class));
    }

    @PreAuthorize("hasAuthority('Administrador')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<PaymentReceiptDTO> findByIdHateoas(@PathVariable("id") Integer id) throws Exception {
        PaymentReceipt obj = service.findById(id);
        EntityModel<PaymentReceiptDTO> entityModel = EntityModel.of(modelMapper.map(obj, PaymentReceiptDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(PaymentReceiptController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(PaymentReceiptController.class).findAll());

        entityModel.add(link1.withRel("payment-receipt-self-info"));
        entityModel.add(link2.withRel("payment-receipt-all-info"));

        return entityModel;
    }
    @GetMapping("/pageable")
    public ResponseEntity<Page<PaymentReceipt>> listPageable(Pageable pageable){
        Page<PaymentReceipt> page = service.listPage(pageable);
        return ResponseEntity.ok(page);
    }
}