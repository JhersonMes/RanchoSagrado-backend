package com.rancho.service;

import com.rancho.model.Payment;
import java.util.List;

public interface IPaymentService {
    Payment save(Payment payment) throws Exception;
    List<Payment> saveAll(List<Payment> payments) throws Exception;
    Payment update(Payment payment, Integer id) throws Exception;
    List<Payment> findAll() throws Exception;
    Payment findById(Integer id) throws Exception;
    void delete(Integer id) throws Exception;
}