package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MenuDTO {

    private Integer idMenu;
    private String name;
    private Integer dishQuantity;
    private String description;
    private BigDecimal price;
}
