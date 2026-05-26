package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentReceiptDTO {
    private Integer idReceipt;
    private String receiptType;
    private String receiptNumber;
    private String series;
    private LocalDateTime emissionDate;
    private BigDecimal subTotal;
    private BigDecimal igv;
    private BigDecimal totalAmount;
    private String status;
    private String paymentMethod;
    private String businessName;
    private String ruc;
    private String fiscalAddress;

    private OrderDTO order;
}
