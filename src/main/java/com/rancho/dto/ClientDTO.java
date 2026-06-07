package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.*;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClientDTO {

    private Integer idClient;

    @NotNull
    @Min(value = 0, message = "El DNI debe ser mayor o  0")
    @Max(value = 99999999, message = "El DNI debe ser menor a 99999999")
    private Integer dni;

    @NotNull
    @Size(min = 2, max = 50)
    private String name;

    @NotNull
    @Size(min = 2, max = 50)
    private String lastName;

    @NotNull
    @Size(min = 9, max = 12)
    private String phone;

    @NotNull
    @Email(message = "El email debe ser válido")
    private String email;

    @NotNull
    private LocalDate birthDate;

    @NotNull
    private String address;
    private String ruc;
}
