package com.rancho.service.implementation;

import com.rancho.service.IOrderService;
import java.util.List;
import com.rancho.model.Order;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IOrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderService extends GenericService<Order, Integer> implements IOrderService {
    private final IOrderRepository repo;

    @Override
    public IGenericRepository<Order, Integer> getRepo() {
        return repo;
    }
}
