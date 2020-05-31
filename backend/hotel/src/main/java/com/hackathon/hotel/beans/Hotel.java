package com.hackathon.hotel.beans;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Hotel {

    private Long hotelId;
    private String hotemName;
    private Long hotelLevel;
    private String hotelLocation;

}
