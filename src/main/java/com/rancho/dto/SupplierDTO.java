package com.rancho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SupplierDTO {

    private Integer idSupplier;
    private String companyName;
    private String ruc;
    private String contactEmail;
    private String phone;
    private String address;
    private String supplyType;
    private String status;
}