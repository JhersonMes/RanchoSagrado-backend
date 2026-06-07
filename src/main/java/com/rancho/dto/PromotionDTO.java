package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PromotionDTO {

    private Integer idPromotion;

    @NotNull(message = "El nombre es requerido")
    @Size(min = 2, max = 50, message = "El nombre debe tener entre 2 y 50 caracteres")
    private String name;

    @NotNull(message = "La descripcion es requerida")
    @Size(min = 2, max = 50, message = "La descripcion debe tener entre 2 y 50 caracteres")
    private String description;

    @NotNull(message = "El descuento es requerido")
    @Min(value = 0, message = "El descuento debe ser mayor o igual a 0")
    private BigDecimal discountPercentage;

    @NotNull(message = "La fecha de inicio es requerida")
    private LocalDate startDate;

    @NotNull(message = "La fecha de fin es requerida")
    private LocalDate endDate;

    @NotNull(message = "El estado es requerido")
    private boolean status;

    private List<ProductDTO> products;
}