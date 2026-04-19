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
public class ProductIngredient {

    // Clase intermedia para la relación N:M entre Product e Ingredient
    // Se mantiene como entidad porque contiene atributos adicionales (receta)

    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProductIngredient;

    @ManyToOne
    @JoinColumn(name = "id_product", nullable = false,
            foreignKey = @ForeignKey(name = "FK_PRODUCT_INGREDIENT_PRODUCT"))
    private Product product;

    @ManyToOne
    @JoinColumn(name = "id_ingredient", nullable = false,
            foreignKey = @ForeignKey(name = "FK_PRODUCT_INGREDIENT_INGREDIENT"))
    private Ingredient ingredient;

    @Column(nullable = false, precision = 10, scale = 3)
    private BigDecimal quantity;

    @Column(nullable = false, length = 100)
    private String unitOfMeasure;

    @Column(length = 200)
    private String observations;
}