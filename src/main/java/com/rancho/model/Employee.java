package com.rancho.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Employee {

    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEmployee;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, length = 50)
    private String lastName;

    @Column(nullable = false, length = 100)
    private String address;

    @Column(nullable = false, length = 100)
    private String job;

    @Column(nullable = false, length = 9)
    private String phone;

    @Column(nullable = false, length = 15)
    private String status;

    @Column(nullable = false, length = 8, unique = true)
    private String dni;

    // Muchos a Muchos con Turnos
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "employee_shift",
            joinColumns = @JoinColumn(name = "id_employee", referencedColumnName = "idEmployee"),
            inverseJoinColumns = @JoinColumn(name = "id_shift", referencedColumnName = "idShift"),
            foreignKey = @ForeignKey(name = "FK_EMPLOYEE_SHIFT"),
            inverseForeignKey = @ForeignKey(name = "FK_SHIFT_EMPLOYEE")
    )
    private List<Shift> shifts;

    // Cuenta de sistema del empleado (opcional): permite, por ejemplo, saber qué
    // Employee corresponde al Mesero autenticado. No todo Employee tiene una cuenta,
    // y no todo User es un Employee (p. ej. los Clientes), por eso la relación es
    // opcional y vive del lado de Employee, no de User.
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_user", unique = true, foreignKey = @ForeignKey(name = "FK_EMPLOYEE_USER"))
    private User user;
}