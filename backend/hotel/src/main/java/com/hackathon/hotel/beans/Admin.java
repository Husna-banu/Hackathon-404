package com.hackathon.hotel.beans;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admin {

	private Long adminId;
    private String adminName;
    private String adminLastName;
    private String adminPosition;
    private Long adminSalary;
    private Long adminAge;

}
