package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservationDTO {

    private Integer idReservation;
    private LocalDateTime reservationDate;
    private Integer numberOfPeople;
    private String specialOccasion;
    private String status;
    private String notes;

    private ClientDTO client;
    private RestaurantTableDTO restaurantTable;
}