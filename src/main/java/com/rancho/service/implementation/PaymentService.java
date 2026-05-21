package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.Payment;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IPaymentRepository;
import com.rancho.service.IPaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentService extends GenericService<Payment, Integer> implements IPaymentService {

    private final IPaymentRepository repo;

    @Override
    public IGenericRepository<Payment, Integer> getRepo() {
        return repo;
    }
}