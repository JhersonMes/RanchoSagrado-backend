package com.rancho.service;

import com.rancho.model.PaymentReceipt;
import java.util.List;

public interface IPaymentReceiptService {
    PaymentReceipt save(PaymentReceipt receipt) throws Exception;
    List<PaymentReceipt> saveAll(List<PaymentReceipt> receipts) throws Exception;
    PaymentReceipt update(PaymentReceipt receipt, Integer id) throws Exception;
    List<PaymentReceipt> findAll() throws Exception;
    PaymentReceipt findById(Integer id) throws Exception;
    void delete(Integer id) throws Exception;
}