package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.Payment;
import com.rancho.repository.IPaymentRepository;
import com.rancho.service.IPaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentService implements IPaymentService {

    private final IPaymentRepository repo;

    @Override
    public Payment save(Payment payment) throws Exception {
        return repo.save(payment);
    }

    @Override
    public List<Payment> saveAll(List<Payment> payments) throws Exception {
        return repo.saveAll(payments);
    }

    @Override
    public Payment update(Payment payment, Integer id) throws Exception {
        payment.setIdPayment(id);
        return repo.save(payment);
    }

    @Override
    public List<Payment> findAll() throws Exception {
        return repo.findAll();
    }

    @Override
    public Payment findById(Integer id) throws Exception {
        return repo.findById(id).orElse(new Payment());
    }

    @Override
    public void delete(Integer id) throws Exception {
        repo.deleteById(id);
    }
}