package com.rancho.controller;

import com.rancho.dto.ReservationDTO;
import com.rancho.model.Reservation;
import com.rancho.service.IReservationService;
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
@RequestMapping("/reservations")
@CrossOrigin(origins = "*")
public class ReservationController {

    private final IReservationService service;
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<ReservationDTO>> findAll() throws Exception {
        List<ReservationDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, ReservationDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReservationDTO> findById(@PathVariable Integer id) throws Exception {
        Reservation obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, ReservationDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody ReservationDTO dto) throws Exception {
        Reservation obj = service.save(modelMapper.map(dto, Reservation.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdReservation()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<ReservationDTO>> saveAll(@RequestBody List<ReservationDTO> dtos) throws Exception {
        List<Reservation> entities = dtos.stream().map(dto -> modelMapper.map(dto, Reservation.class)).toList();
        List<Reservation> savedEntities = service.saveAll(entities);
        List<ReservationDTO> savedDtos = savedEntities.stream().map(item -> modelMapper.map(item, ReservationDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ReservationDTO> update(@PathVariable Integer id, @RequestBody ReservationDTO dto) throws Exception {
        Reservation obj = service.update(modelMapper.map(dto, Reservation.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, ReservationDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/hateoas/{id}")
    public EntityModel<ReservationDTO> findByIdHateoas(@PathVariable Integer id) throws Exception {
        Reservation obj = service.findById(id);
        EntityModel<ReservationDTO> entityModel = EntityModel.of(modelMapper.map(obj, ReservationDTO.class));

        WebMvcLinkBuilder link1 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ReservationController.class).findById(id));
        WebMvcLinkBuilder link2 = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ReservationController.class).findAll());

        entityModel.add(link1.withRel("reservation-self-info"));
        entityModel.add(link2.withRel("reservation-all-info"));

        return entityModel;
    }
}