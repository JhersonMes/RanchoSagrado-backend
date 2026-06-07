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
public class PaymentReceiptDTO {

    @NotNull(message = "El id del recibo es requerido")
    private Integer idReceipt;

    @NotNull(message = "El tipo de recibo es requerido")
    @Size(min = 2, max = 50, message = "El tipo de recibo debe tener entre 2 y 50 caracteres")
    private String receiptType;

    @NotNull(message = "El numero del recibo es requerido")
    @Size(min = 2, max = 50, message = "El numero del recibo debe tener entre 2 y 50 caracteres")
    private String receiptNumber;

    @NotNull(message = "La serie del recibo es requerida")
    @Size(min = 2, max = 50, message = "La serie del recibo debe tener entre 2 y 50 caracteres")
    private String series;

    @NotNull(message = "La fecha de emision es requerida")
    private LocalDateTime emissionDate;

    @NotNull(message = "El subtotal es requerido")
    @Min(value = 0, message = "El subtotal debe ser mayor o igual a 0")
    private BigDecimal subTotal;

    @NotNull(message = "El igv es requerido")
    @Min(value = 0, message = "El igv debe ser mayor o igual a 0")
    private BigDecimal igv;

    @NotNull(message = "El total es requerido")
    @Min(value = 0, message = "El total debe ser mayor o igual a 0")
    private BigDecimal totalAmount;

    @NotNull(message = "El estado es requerido")
    @Size(min = 2, max = 50, message = "El estado debe tener entre 2 y 50 caracteres")
    private String status;

    @NotNull(message = "El metodo de pago es requerido")
    @Size(min = 2, max = 50, message = "El metodo de pago debe tener entre 2 y 50 caracteres")
    private String paymentMethod;

    @NotNull(message = "El nombre de la empresa es requerido")
    @Size(min = 2, max = 50, message = "El nombre de la empresa debe tener entre 2 y 50 caracteres")
    private String businessName;

    @NotNull(message = "El ruc es requerido")
    @Size(min = 2, max = 50, message = "El ruc debe tener entre 2 y 50 caracteres")
    private String ruc;

    @NotNull(message = "La direccion fiscal es requerida")
    @Size(min = 2, max = 50, message = "La direccion fiscal debe tener entre 2 y 50 caracteres")
    private String fiscalAddress;

    private OrderDTO order;
}
