package com.hackathon.hotel.beans;

import com.hackathon.hotel.entity.HotelServicesDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Hotel {

	private Long hotelId;
    private String hotemName;
    private Long hotelLevel;
    private String hotelLocation;
    private List<HotelServicesDTO> listOfServices;

}
