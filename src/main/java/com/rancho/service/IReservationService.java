package com.rancho.service;

import com.rancho.model.Reservation;
import java.util.List;

public interface IReservationService {
    Reservation save(Reservation reservation) throws Exception;
    List<Reservation> saveAll(List<Reservation> reservations) throws Exception;
    Reservation update(Reservation reservation, Integer id) throws Exception;
    List<Reservation> findAll() throws Exception;
    Reservation findById(Integer id) throws Exception;
    void delete(Integer id) throws Exception;
}