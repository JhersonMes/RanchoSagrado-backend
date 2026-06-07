package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private Integer idUser;

    @NotNull(message = "El nombre de usuario es requerido")
    @Size(min = 2, max = 50, message = "El nombre de usuario debe tener entre 2 y 50 caracteres")
    private String username;

    @NotNull(message = "El email es requerido")
    @Size(min = 2, max = 50, message = "El email debe tener entre 2 y 50 caracteres")
    private String email;
    // No ponemos la contraseña ya que va a ir al frontend
    private boolean enabled;

    private EmployeeDTO employee;
    private RoleDTO role;
}