package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservationDTO {

    @NotNull(message = "El id de la reserva es requerido")
    private Integer idReservation;

    @NotNull(message = "La fecha de la reserva es requerida")
    private LocalDateTime reservationDate;

    @NotNull(message = "El numero de personas es requerido")
    @Min(value = 0, message = "El numero de personas debe ser mayor o igual a 0")
    private Integer numberOfPeople;

    @NotNull(message = "La ocasion especial es requerida")
    @Size(min = 2, max = 50, message = "La ocasion especial debe tener entre 2 y 50 caracteres")
    private String specialOccasion;

    @NotNull(message = "El estado es requerido")
    @Size(min = 2, max = 50, message = "El estado debe tener entre 2 y 50 caracteres")
    private String status;

    @NotNull(message = "Las notas son requeridas")
    @Size(min = 2, max = 50, message = "Las notas deben tener entre 2 y 50 caracteres")
    private String notes;

    private ClientDTO client;
    private RestaurantTableDTO restaurantTable;
}