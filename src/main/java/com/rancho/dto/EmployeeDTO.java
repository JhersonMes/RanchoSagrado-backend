package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDTO {
    @NotNull(message = "El id del empleado es requerido")
    private Integer idEmployee;

    @NotNull(message = "El nombre es requerido")
    @Size(min = 2, max = 50, message = "El nombre debe tener entre 2 y 50 caracteres")
    private String name;

    @NotNull(message = "El apellido es requerido")
    @Size(min = 2, max = 50, message = "El apellido debe tener entre 2 y 50 caracteres")
    private String lastName;

    @NotNull(message = "La dirección es requerida")
    private String address;

    @NotNull(message = "El puesto es requerido")
    private String job;

    @NotNull(message = "El teléfono es requerido")
    private String phone;
    private String status;
    private String dni;
}
