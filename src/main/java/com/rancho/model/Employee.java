package com.rancho.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Integer idEmployee;

    @Column(nullable = false, length = 8)
    private Integer dni;

    @Column(nullable = false, length = 70)
    private String name;

    @Column(nullable = false, length = 70)
    private String lastName;

    @Column(nullable = false, length = 30)
    private String email;

    @Column(nullable = false, length = 10)
    private String phone;

    @Column(nullable = false, length = 30)
    private String role; // MESERO, COCINERO, CAJERO, ADMINISTRADOR

    @Column(nullable = false)
    private LocalDate hireDate;

    @Column(nullable = false)
    private boolean status;
}
