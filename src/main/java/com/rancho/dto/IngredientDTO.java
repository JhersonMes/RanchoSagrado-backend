package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class IngredientDTO {

    private Integer idIngredient;
    private String name;
    private String unitOfMeasure;
    private String description;
    private boolean status;
    private BigDecimal unitCost;
    private IngredientCategoryDTO ingredientCategory;
}
