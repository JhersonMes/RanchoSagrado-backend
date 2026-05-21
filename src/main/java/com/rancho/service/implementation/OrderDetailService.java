package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.OrderDetail;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IOrderDetailRepository;
import com.rancho.service.IOrderDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderDetailService extends GenericService<OrderDetail, Integer> implements IOrderDetailService {
    private final IOrderDetailRepository repo;

    @Override
    public IGenericRepository<OrderDetail, Integer> getRepo() {
        return repo;
    }
}
