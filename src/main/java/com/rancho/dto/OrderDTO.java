package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {

    private Integer idOrder;
    private LocalDateTime orderDate;
    private String status;
    private String detail;
    private BigDecimal subTotal;
    private BigDecimal total;
    private ClientDTO client;
    private EmployeeDTO employee;
}
