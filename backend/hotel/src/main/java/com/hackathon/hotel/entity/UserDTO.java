package com.hackathon.hotel.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EntityScan
public class UserDTO {

	private String userId;
    private String password;
    private String userType;
    private Long userTotalBalance;

}
