package com.rancho.service.implementation;

import com.rancho.exception.ModelNotFoundException;
import com.rancho.model.Order;
import com.rancho.model.Payment;
import com.rancho.repository.IGenericRepository;
import com.rancho.repository.IOrderRepository;
import com.rancho.repository.IPaymentRepository;
import com.rancho.service.IPaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class PaymentService extends GenericService<Payment, Integer> implements IPaymentService {

    private final IPaymentRepository repo;
    private final IOrderRepository orderRepo;

    @Override
    public IGenericRepository<Payment, Integer> getRepo() {
        return repo;
    }

    @Override
    @Transactional
    public Payment save(Payment payment) throws Exception {
        Order order = findLinkedOrder(payment);
        if (!"ENTREGADO".equalsIgnoreCase(order.getStatus())) {
            throw new IllegalStateException(
                    "Solo se pueden cobrar pedidos en estado ENTREGADO (estado actual: " + order.getStatus() + ")");
        }
        Payment saved = repo.save(payment);
        markOrderAsPaidIfNeeded(payment, order);
        return saved;
    }

    @Override
    @Transactional
    public Payment update(Payment payment, Integer id) throws Exception {
        payment.setIdPayment(id);
        Order order = findLinkedOrder(payment);
        Payment saved = repo.save(payment);
        markOrderAsPaidIfNeeded(payment, order);
        return saved;
    }

    private Order findLinkedOrder(Payment payment) {
        if (payment.getOrder() == null || payment.getOrder().getIdOrder() == null) {
            throw new IllegalStateException("El pago debe estar vinculado a un pedido existente");
        }
        Integer idOrder = payment.getOrder().getIdOrder();
        return orderRepo.findById(idOrder)
                .orElseThrow(() -> new ModelNotFoundException("Pedido no encontrado: " + idOrder));
    }

    private void markOrderAsPaidIfNeeded(Payment payment, Order order) {
        if ("PAGADO".equalsIgnoreCase(payment.getStatus()) && !"PAGADO".equalsIgnoreCase(order.getStatus())) {
            order.setStatus("PAGADO");
            orderRepo.save(order);
        }
    }
}
