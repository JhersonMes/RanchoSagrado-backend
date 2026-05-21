package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.Shift;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IShiftRepository;
import com.rancho.service.IShiftService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ShiftService extends GenericService<Shift, Integer> implements IShiftService {

    private final IShiftRepository repo;

    @Override
    public IGenericRepository<Shift, Integer> getRepo() {
        return repo;
    }
}