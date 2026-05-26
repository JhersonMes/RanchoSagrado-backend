package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RestaurantTableDTO {

    private Integer idTable;
    private Integer tableNumber;
    private Integer capacity;
    private String location;
    private String status;
}