package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductIngredientDTO {

    private Integer idProductIngredient;
    private BigDecimal quantity;
    private String unitOfMeasure;
    private String observations;

    private ProductDTO product;
    private IngredientDTO ingredient;
}