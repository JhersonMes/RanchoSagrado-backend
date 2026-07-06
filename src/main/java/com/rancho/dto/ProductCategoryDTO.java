package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductCategoryDTO {

    // El id es autogenerado por la BD al crear; no se valida como NotNull.
    private Integer idProductCategory;

    @NotNull(message = "El nombre de la categoria es requerido")
    @Size(min = 2, max = 50, message = "El nombre de la categoria debe tener entre 2 y 50 caracteres")
    private String name;

    @NotNull(message = "La descripcion de la categoria es requerida")
    @Size(min = 2, max = 50, message = "La descripcion de la categoria debe tener entre 2 y 50 caracteres")
    private String description;

    @NotNull(message = "La carta es requerida")
    private MenuDTO menu;
}