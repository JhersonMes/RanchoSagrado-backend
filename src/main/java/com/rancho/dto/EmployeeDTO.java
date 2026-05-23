package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDTO {

    private Integer idEmployee;
    private String name;
    private String lastName;
    private String address;
    private String job;
    private String phone;
    private String status;
    private String dni;
}
