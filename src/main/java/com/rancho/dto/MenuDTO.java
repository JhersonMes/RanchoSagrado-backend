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
public class MenuDTO {

    // El id es autogenerado por la BD al crear; no se valida como NotNull.
    private Integer idMenu;

    @NotNull(message = "El nombre es requerido")
    @Size(min = 2, max = 50, message = "El nombre debe tener entre 2 y 50 caracteres")
    private String name;

    @NotNull(message = "La cantidad de platos es requerida")
    @Min(value = 0, message = "La cantidad de platos debe ser mayor o igual a 0")
    private Integer dishQuantity;

    @NotNull(message = "La descripción es requerida")
    @Size(min = 2, max = 50, message = "La descripción debe tener entre 2 y 50 caracteres")
    private String description;

    @NotNull(message = "El precio es requerido")
    @Min(value = 0, message = "El precio debe ser mayor o igual a 0")
    private BigDecimal price;
}
