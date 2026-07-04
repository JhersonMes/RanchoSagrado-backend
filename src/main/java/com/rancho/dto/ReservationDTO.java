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

    private Integer idReservation;

    @NotNull(message = "La fecha de la reserva es requerida")
    private LocalDateTime reservationDate;

    @NotNull(message = "El numero de personas es requerido")
    @Min(value = 0, message = "El numero de personas debe ser mayor o igual a 0")
    private Integer numberOfPeople;

    private String specialOccasion;

    @NotNull(message = "El estado es requerido")
    @Size(min = 2, max = 50, message = "El estado debe tener entre 2 y 50 caracteres")
    private String status;

    private String notes;

    @NotNull(message = "El cliente es requerido")
    private ClientDTO client;
    @NotNull(message = "La mesa es requerida")
    private RestaurantTableDTO restaurantTable;
}