package com.rancho.dto;

import java.math.BigDecimal;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class IngredientDTO {

    private Integer idIngredient;

    @NotNull(message = "El nombre es requerido")
    @Size(min = 2, max = 50, message = "El nombre debe tener entre 2 y 50 caracteres")
    private String name;

    @NotNull(message = "La unidad de medida es requerida")
    @Size(min = 2, max = 50, message = "La unidad de medida debe tener entre 2 y 50 caracteres")
    private String unitOfMeasure;

    @NotNull(message = "La descripción es requerida")
    @Size(min = 2, max = 50, message = "La descripción debe tener entre 2 y 50 caracteres")
    private String description;

    private Boolean status;

    @NotNull(message = "El costo unitario es requerido")
    @Min(value = 0, message = "El costo unitario debe ser mayor o igual a 0")
    private BigDecimal unitCost;

    @NotNull(message = "La categoría del ingrediente es requerida")
    private IngredientCategoryDTO ingredientCategory;
}
