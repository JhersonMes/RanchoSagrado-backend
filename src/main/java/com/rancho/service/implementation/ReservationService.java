package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.Reservation;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IReservationRepository;
import com.rancho.service.IReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReservationService extends GenericService<Reservation, Integer> implements IReservationService {

    private final IReservationRepository repo;

    @Override
    public IGenericRepository<Reservation, Integer> getRepo() {
        return repo;
    }
}