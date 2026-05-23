package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContractDTO {

    private Integer idContract;
    private LocalDate startDate;
    private LocalDate endDate;
    private String contractType;
    private BigDecimal salary;
    private String clause;
    private EmployeeDTO employee;
}
