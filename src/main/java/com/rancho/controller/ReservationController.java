package com.rancho.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.net.URI;
import java.util.List;

import com.rancho.dto.ReservationDTO;
import com.rancho.model.Reservation;
import com.rancho.service.IReservationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/reservations")
@RequiredArgsConstructor
public class ReservationController {

    private final IReservationService service;
    @Qualifier("reservationMapper")
    private final ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<ReservationDTO>> findAll() throws Exception {
        List<ReservationDTO> list = service.findAll().stream().map(e -> modelMapper.map(e, ReservationDTO.class)).toList();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReservationDTO> findById(@PathVariable("id") Integer id) throws Exception {
        Reservation obj = service.findById(id);
        return ResponseEntity.ok(modelMapper.map(obj, ReservationDTO.class));
    }

    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody ReservationDTO dto) throws Exception {
        Reservation obj = service.save(modelMapper.map(dto, Reservation.class));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdReservation()).toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/batch")
    public ResponseEntity<List<ReservationDTO>> saveAll(@RequestBody List<ReservationDTO> dtos) throws Exception {
        List<Reservation> list = dtos.stream().map(dto -> modelMapper.map(dto, Reservation.class)).toList();
        List<Reservation> saved = service.saveAll(list);
        List<ReservationDTO> savedDtos = saved.stream().map(item -> modelMapper.map(item, ReservationDTO.class)).toList();
        return ResponseEntity.ok(savedDtos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ReservationDTO> update(@RequestBody ReservationDTO dto, @PathVariable("id") Integer id) throws Exception {
        Reservation obj = service.update(modelMapper.map(dto, Reservation.class), id);
        return ResponseEntity.ok(modelMapper.map(obj, ReservationDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Integer id) throws Exception {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/pageable")
    public ResponseEntity<Page<Reservation>> listPageable(Pageable pageable){
        Page<Reservation> page = service.listPage(pageable);
        return ResponseEntity.ok(page);
    }
}