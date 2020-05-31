package com.hackathon.hotel.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EntityScan
public class HotelDTO {

    private Long hotelId;
    private String hotemName;
    private Long hotelLevel;
    private String hotelLocation;
}
