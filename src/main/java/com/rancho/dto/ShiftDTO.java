package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ShiftDTO {

    private Integer idShift;
    private String name;
    private LocalTime startTime;
    private LocalTime endTime;
    private String daysOfWeek;
}