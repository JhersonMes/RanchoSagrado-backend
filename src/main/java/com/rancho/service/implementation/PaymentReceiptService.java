package com.rancho.service.implementation;

import java.util.List;
import com.rancho.model.PaymentReceipt;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IPaymentReceiptRepository;
import com.rancho.service.IPaymentReceiptService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentReceiptService extends GenericService<PaymentReceipt, Integer> implements IPaymentReceiptService {

    private final IPaymentReceiptRepository repo;

    @Override
    public IGenericRepository<PaymentReceipt, Integer> getRepo() {
        return repo;
    }
}