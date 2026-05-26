package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    private Integer idProduct;
    private String name;
    private String description;
    private Float preparationTime;
    private BigDecimal price;
    private boolean availability;

    private ProductCategoryDTO category;
}
