package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.Reservation;
import com.rancho.repository.IReservationRepository;
import com.rancho.service.IReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReservationService implements IReservationService {

    private final IReservationRepository repo;

    @Override
    public Reservation save(Reservation reservation) throws Exception {
        return repo.save(reservation);
    }

    @Override
    public List<Reservation> saveAll(List<Reservation> reservations) throws Exception {
        return repo.saveAll(reservations);
    }

    @Override
    public Reservation update(Reservation reservation, Integer id) throws Exception {
        reservation.setIdReservation(id);
        return repo.save(reservation);
    }

    @Override
    public List<Reservation> findAll() throws Exception {
        return repo.findAll();
    }

    @Override
    public Reservation findById(Integer id) throws Exception {
        return repo.findById(id).orElse(new Reservation());
    }

    @Override
    public void delete(Integer id) throws Exception {
        repo.deleteById(id);
    }
}