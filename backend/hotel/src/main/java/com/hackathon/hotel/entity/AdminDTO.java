package com.hackathon.hotel.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EntityScan
public class AdminDTO {

    private Long adminId;
    private String adminName;
    private String adminLastName;
    private String adminPosition;
    private Long adminSalary;
    private Long adminAge;
}
