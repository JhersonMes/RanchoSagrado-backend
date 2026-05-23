package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDTO {

    private Integer idPayment;
    private LocalDateTime paymentDate;
    private BigDecimal amount;
    private String paymentMethod;
    private String cardDetails;
    private String status;
    private OrderDTO order;
}
