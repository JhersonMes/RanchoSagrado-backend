package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.PaymentReceipt;
import com.rancho.repository.IPaymentReceiptRepository;
import com.rancho.service.IPaymentReceiptService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentReceiptService implements IPaymentReceiptService {

    private final IPaymentReceiptRepository repo;

    @Override
    public PaymentReceipt save(PaymentReceipt receipt) throws Exception {
        return repo.save(receipt);
    }

    @Override
    public List<PaymentReceipt> saveAll(List<PaymentReceipt> receipts) throws Exception {
        return repo.saveAll(receipts);
    }

    @Override
    public PaymentReceipt update(PaymentReceipt receipt, Integer id) throws Exception {
        receipt.setIdReceipt(id);
        return repo.save(receipt);
    }

    @Override
    public List<PaymentReceipt> findAll() throws Exception {
        return repo.findAll();
    }

    @Override
    public PaymentReceipt findById(Integer id) throws Exception {
        return repo.findById(id).orElse(new PaymentReceipt());
    }

    @Override
    public void delete(Integer id) throws Exception {
        repo.deleteById(id);
    }
}