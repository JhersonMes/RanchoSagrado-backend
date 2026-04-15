package com.rancho.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Integer idIngredient;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 20)
    private String unit; // KG, LITRO, UNIDAD, GRAMO

    @Column(nullable = false, precision = 10, scale = 3)
    private BigDecimal stock;

    @Column(nullable = false, precision = 10, scale = 3)
    private BigDecimal minStock;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal unitCost;

    @Column(nullable = false)
    private boolean status;

    @ManyToOne
    @JoinColumn(name = "idSupplier", nullable = true)
    private Supplier supplier;
}
