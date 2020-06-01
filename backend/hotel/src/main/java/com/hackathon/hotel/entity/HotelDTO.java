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
	
	public HotelDTO(Long hotelId, String hotemName, Long hotelLevel, String hotelLocation) {
		super();
		this.hotelId = hotelId;
		this.hotemName = hotemName;
		this.hotelLevel = hotelLevel;
		this.hotelLocation = hotelLocation;
	}
	public Long getHotelId() {
		return hotelId;
	}
	public void setHotelId(Long hotelId) {
		this.hotelId = hotelId;
	}
	public String getHotemName() {
		return hotemName;
	}
	public void setHotemName(String hotemName) {
		this.hotemName = hotemName;
	}
	public Long getHotelLevel() {
		return hotelLevel;
	}
	public void setHotelLevel(Long hotelLevel) {
		this.hotelLevel = hotelLevel;
	}
	public String getHotelLocation() {
		return hotelLocation;
	}
	public void setHotelLocation(String hotelLocation) {
		this.hotelLocation = hotelLocation;
	}
}
