package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetailDTO {

    private Integer idOrderDetail;
    private Integer quantity;
    private BigDecimal unitPrice;
    private String notes;

    private OrderDTO order;
}
