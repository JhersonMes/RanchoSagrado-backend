package com.rancho.controller;

import com.rancho.dto.ContractDTO;
import com.rancho.model.Contract;
import com.rancho.service.IContractService;
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
@RequestMapping("/contracts")
@CrossOrigin(origins = "*")
public class ContractController {

    private final IContractService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<ContractDTO>> findAll() throws Exception {
        List<ContractDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, ContractDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContractDTO> findById(@PathVariable Integer id) throws Exception {
        Contract obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, ContractDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody ContractDTO dto) throws Exception {
        Contract obj = service.save(modelMapper.map(dto, Contract.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(obj.getIdContract()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ContractDTO> update(@PathVariable Integer id, @RequestBody ContractDTO dto) throws Exception {
        Contract obj = service.update(modelMapper.map(dto, Contract.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, ContractDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<ContractDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        Contract obj = service.findById(id);
        EntityModel<ContractDTO> entityModel = EntityModel.of(modelMapper.map(obj, ContractDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder
                .linkTo(WebMvcLinkBuilder.methodOn(ContractController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder
                .linkTo(WebMvcLinkBuilder.methodOn(ContractController.class).findAll());

        entityModel.add(link1.withRel("contract-self-info"));
        entityModel.add(link2.withRel("contract-all-info"));

        return entityModel;
    }
}
