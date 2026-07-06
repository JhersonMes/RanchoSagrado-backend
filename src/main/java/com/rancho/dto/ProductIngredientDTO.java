package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductIngredientDTO {

    // El id es autogenerado por la BD al crear; no se valida como NotNull.
    private Integer idProductIngredient;

    @NotNull(message = "La cantidad es requerida")
    @Min(value = 0, message = "La cantidad debe ser mayor o igual a 0")
    private BigDecimal quantity;

    @NotNull(message = "La unidad de medida es requerida")
    @Size(min = 2, max = 50, message = "La unidad de medida debe tener entre 2 y 50 caracteres")
    private String unitOfMeasure;

    @NotNull(message = "Las observaciones son requeridas")
    @Size(min = 2, max = 50, message = "Las observaciones deben tener entre 2 y 50 caracteres")
    private String observations;

    @NotNull(message = "El producto es requerido")
    private ProductDTO product;
    @NotNull(message = "El ingrediente es requerido")
    private IngredientDTO ingredient;
}