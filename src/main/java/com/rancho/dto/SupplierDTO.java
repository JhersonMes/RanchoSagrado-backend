package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SupplierDTO {

    private Integer idSupplier;

    @NotNull(message = "El nombre de la empresa es requerido")
    @Size(min = 2, max = 50, message = "El nombre de la empresa debe tener entre 2 y 50 caracteres")
    private String companyName;

    @NotNull(message = "El RUC es requerido")
    @Size(min = 2, max = 50, message = "El RUC debe tener entre 2 y 50 caracteres")
    private String ruc;

    @NotNull(message = "El correo de contacto es requerido")
    @Size(min = 2, max = 50, message = "El correo de contacto debe tener entre 2 y 50 caracteres")
    private String contactEmail;

    @NotNull(message = "El teléfono es requerido")
    @Size(min = 2, max = 50, message = "El teléfono debe tener entre 2 y 50 caracteres")
    private String phone;

    @NotNull(message = "La direccion es requerida")
    @Size(min = 2, max = 50, message = "La direccion debe tener entre 2 y 50 caracteres")
    private String address;

    @NotNull(message = "El tipo de suministro es requerido")
    @Size(min = 2, max = 50, message = "El tipo de suministro debe tener entre 2 y 50 caracteres")
    private String supplyType;

    @NotNull(message = "El estado es requerido")
    @Size(min = 2, max = 50, message = "El estado debe tener entre 2 y 50 caracteres")
    private String status;
}