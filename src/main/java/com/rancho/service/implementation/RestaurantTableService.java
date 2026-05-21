package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.RestaurantTable;
import com.rancho.repository.IRestaurantTableRepository;
import com.rancho.service.IRestaurantTableService;
import com.rancho.repository.IGenericRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RestaurantTableService extends GenericService<RestaurantTable, Integer>
        implements IRestaurantTableService {

    private final IRestaurantTableRepository repo;

    @Override
    public IGenericRepository<RestaurantTable, Integer> getRepo() {
        return repo;
    }
}