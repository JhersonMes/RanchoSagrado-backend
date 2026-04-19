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
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idIngredient;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 20)
    private String unitOfMeasure;

    @Column(length = 255)
    private String description;

    @Column(nullable = false)
    private boolean status;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal unitCost;

    // Relación Muchos a Uno con CategoriaIngrediente
    @ManyToOne
    @JoinColumn(name = "id_category", nullable = false,
            foreignKey = @ForeignKey(name = "FK_INGREDIENT_CATEGORY"))
    private IngredientCategory ingredientCategory;
}