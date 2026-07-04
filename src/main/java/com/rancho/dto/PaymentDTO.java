package com.rancho.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDTO {

    private Integer idPayment;

    @NotNull(message = "La fecha del pago es requerida")
    private LocalDateTime paymentDate;

    @NotNull(message = "El monto es requerido")
    @Min(value = 0, message = "El monto debe ser mayor o igual a 0")
    private BigDecimal amount;

    @NotNull(message = "El metodo de pago es requerido")
    @Size(min = 2, max = 50, message = "El metodo de pago debe tener entre 2 y 50 caracteres")
    private String paymentMethod;

    @Size(max = 100, message = "Los detalles de la tarjeta deben tener como máximo 100 caracteres")
    private String cardDetails;

    @NotNull(message = "El estado del pago es requerido")
    @Size(min = 2, max = 50, message = "El estado del pago debe tener entre 2 y 50 caracteres")
    private String status;

    @NotNull(message = "El pedido es requerido")
    private OrderDTO order;
}
