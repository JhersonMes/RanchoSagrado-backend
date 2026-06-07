package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContractDTO {
    @NotNull(message = "El id del contrato es requerido")
    private Integer idContract;

    @NotNull(message = "La fecha de inicio es requerida")
    private LocalDate startDate;

    @NotNull(message = "La fecha de fin es requerida")
    private LocalDate endDate;

    @NotNull(message = "El tipo de contrato es requerido")
    @Size(min = 2, max = 50, message = "El tipo de contrato debe tener entre 2 y 50 caracteres")
    private String contractType;

    @NotNull(message = "El salario es requerido")
    @Min(value = 0, message = "El salario debe ser mayor o igual a 0")
    private BigDecimal salary;

    @NotNull(message = "La cláusula es requerida")
    @Size(min = 2, max = 50, message = "La cláusula debe tener entre 2 y 50 caracteres")
    private String clause;

    @NotNull(message = "El empleado es requerido")
    private EmployeeDTO employee;
}
