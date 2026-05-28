package com.rancho.controller;

import com.rancho.dto.ClientDTO;
import com.rancho.model.Client;
import com.rancho.service.IClientService;
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
@RequestMapping("/clients")
public class ClientController {

    private final IClientService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<ClientDTO>> findAll() throws Exception {
        List<ClientDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, ClientDTO.class)).toList();

        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClientDTO> findById(@PathVariable Integer id) throws Exception {
        Client obj = service.findById(id);

        return ResponseEntity.ok(modelMapper.map(obj, ClientDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody ClientDTO dto) throws Exception {
        Client obj = service.save(modelMapper.map(dto, Client.class));

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdClient())
                .toUri();

        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<ClientDTO>> saveAll(@RequestBody List<ClientDTO> dtos) throws Exception {
        List<Client> clients = dtos.stream().map(dto -> modelMapper.map(dto, Client.class)).toList();
        List<Client> savedClients = service.saveAll(clients);
        List<ClientDTO> savedDtos = savedClients.stream().map(client -> modelMapper.map(client, ClientDTO.class))
                .toList();

        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClientDTO> update(@PathVariable Integer id, @RequestBody ClientDTO dto) throws Exception {
        Client obj = service.update(modelMapper.map(dto, Client.class), id);

        return ResponseEntity.ok(modelMapper.map(obj, ClientDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<ClientDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        Client obj = service.findById(id);
        EntityModel<ClientDTO> entityModel = EntityModel.of(modelMapper.map(obj, ClientDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder
                .linkTo(WebMvcLinkBuilder.methodOn(ClientController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder
                .linkTo(WebMvcLinkBuilder.methodOn(ClientController.class).findAll());

        entityModel.add(link1.withRel("client-self-info"));
        entityModel.add(link2.withRel("client-all-info"));

        return entityModel;
    }
}
