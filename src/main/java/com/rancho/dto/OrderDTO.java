package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {
    private Integer idOrder;

    @NotNull(message = "La fecha del pedido es requerida")
    private LocalDateTime orderDate;

    @NotNull(message = "El estado del pedido es requerido")
    @Size(min = 2, max = 50, message = "El estado del pedido debe tener entre 2 y 50 caracteres")
    private String status;

    @Size(max = 255, message = "El detalle del pedido debe tener como máximo 255 caracteres")
    private String detail;

    @NotNull(message = "El subtotal del pedido es requerido")
    @Min(value = 0, message = "El subtotal del pedido debe ser mayor o igual a 0")
    private BigDecimal subTotal;

    @NotNull(message = "El total del pedido es requerido")
    @Min(value = 0, message = "El total del pedido debe ser mayor o igual a 0")
    private BigDecimal total;

    private ClientDTO client;
    @NotNull(message = "El empleado es requerido")
    private EmployeeDTO employee;
    private RestaurantTableDTO restaurantTable;
}
