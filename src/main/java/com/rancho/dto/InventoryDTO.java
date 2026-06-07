package com.rancho.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Min;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InventoryDTO {

    private Integer idInventory;

    @NotNull(message = "La cantidad en stock es requerida")
    @Min(value = 0, message = "La cantidad en stock debe ser mayor o igual a 0")
    private BigDecimal stockQuantity;

    @NotNull(message = "La fecha de reposición es requerida")
    private LocalDate lastReplenishmentDate;

    @NotNull(message = "El stock mínimo es requerido")
    @Min(value = 0, message = "El stock mínimo debe ser mayor o igual a 0")
    private BigDecimal minStock;

    @NotNull(message = "El stock máximo es requerido")
    @Min(value = 0, message = "El stock máximo debe ser mayor o igual a 0")
    private BigDecimal maxStock;

    private IngredientDTO ingredient;
}
