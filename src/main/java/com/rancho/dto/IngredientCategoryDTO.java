package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class IngredientCategoryDTO {

    private Integer idCategory;

    @NotNull(message = "El nombre de la categoria es requerido")
    @Size(min = 2, max = 50, message = "El nombre de la categoria debe tener entre 2 y 50 caracteres")
    private String name;
}
