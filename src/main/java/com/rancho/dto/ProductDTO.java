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
public class ProductDTO {
    private Integer idProduct;

    @NotNull(message = "El nombre es requerido")
    @Size(min = 2, max = 50, message = "El nombre debe tener entre 2 y 50 caracteres")
    private String name;

    @NotNull(message = "La descripcion es requerida")
    @Size(min = 2, max = 50, message = "La descripcion debe tener entre 2 y 50 caracteres")
    private String description;

    @NotNull(message = "El tiempo de preparacion es requerido")
    @Min(value = 0, message = "El tiempo de preparacion debe ser mayor o igual a 0")
    private Float preparationTime;

    @NotNull(message = "El precio es requerido")
    @Min(value = 0, message = "El precio debe ser mayor o igual a 0")
    private BigDecimal price;

    @NotNull(message = "La disponibilidad es requerida")
    private boolean availability;

    @NotNull(message = "La categoría del producto es requerida")
    private ProductCategoryDTO category;
}
