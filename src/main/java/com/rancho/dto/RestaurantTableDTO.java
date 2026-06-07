package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RestaurantTableDTO {

    private Integer idTable;

    @NotNull(message = "El numero de mesa es requerido")
    @Min(value = 0, message = "El numero de mesa debe ser mayor o igual a 0")
    private Integer tableNumber;

    @NotNull(message = "La capacidad es requerida")
    @Min(value = 0, message = "La capacidad debe ser mayor o igual a 0")
    private Integer capacity;

    @NotNull(message = "La ubicacion es requerida")
    @Size(min = 2, max = 50, message = "La ubicacion debe tener entre 2 y 50 caracteres")
    private String location;

    @NotNull(message = "El estado es requerido")
    @Size(min = 2, max = 50, message = "El estado debe tener entre 2 y 50 caracteres")
    private String status;
}