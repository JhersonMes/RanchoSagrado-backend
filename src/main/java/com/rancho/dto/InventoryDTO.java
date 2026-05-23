package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InventoryDTO {

    private Integer idInventory;
    private BigDecimal stockQuantity;
    private LocalDate lastReplenishmentDate;
    private BigDecimal minStock;
    private BigDecimal maxStock;
    private IngredientDTO ingredient;
}
