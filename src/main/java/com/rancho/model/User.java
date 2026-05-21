package com.rancho.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Integer idUser;

    @Column(nullable = false, length = 50, unique = true)
    private String username;

    @Column(nullable = false, length = 50, unique = true)
    private String email;

    @Column(nullable = false, length = 200)
    private String password;

    @Column(nullable = false)
    private boolean enabled;

    // Relación 1:1 con Empleado
    @OneToOne
    @JoinColumn(name = "id_employee", nullable = false,
            foreignKey = @ForeignKey(name = "FK_USER_EMPLOYEE"))
    private Employee employee;

    // CAMBIO: Ahora es ManyToOne (Muchos Usuarios tienen un mismo Rol)
    @ManyToOne
    @JoinColumn(name = "id_role", nullable = false,
            foreignKey = @ForeignKey(name = "FK_USER_ROLE"))
    private Role role;
}