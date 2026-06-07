package com.rancho.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetailDTO {

    private Integer idOrderDetail;

    @NotNull(message = "La cantidad es requerida")
    @Min(value = 0, message = "La cantidad debe ser mayor o igual a 0")
    private Integer quantity;

    @NotNull(message = "El precio unitario es requerido")
    @Min(value = 0, message = "El precio unitario debe ser mayor o igual a 0")
    private BigDecimal unitPrice;

    @NotNull(message = "Las notas son requeridas")
    @Size(min = 2, max = 50, message = "Las notas deben tener entre 2 y 50 caracteres")
    private String notes;

    private OrderDTO order;
}
