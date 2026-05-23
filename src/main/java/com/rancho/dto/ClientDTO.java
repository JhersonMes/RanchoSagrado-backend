package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClientDTO {

    private Integer idClient;
    private Integer dni;
    private String name;
    private String lastName;
    private String phone;
    private String email;
    private LocalDate birthDate;
    private String address;
    private String ruc;
}
