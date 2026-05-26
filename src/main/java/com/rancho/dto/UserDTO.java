package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private Integer idUser;
    private String username;
    private String email;
    // No ponemos la contraseña ya que va a ir al frontend
    private boolean enabled;

    private EmployeeDTO employee;
    private RoleDTO role;
}