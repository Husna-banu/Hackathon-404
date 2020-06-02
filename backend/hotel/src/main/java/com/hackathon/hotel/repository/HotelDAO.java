package com.hackathon.hotel.repository;

import com.hackathon.hotel.entity.HotelDTO;
import com.hackathon.hotel.entity.HotelServicesDTO;

import java.util.List;

public interface HotelDAO {
    public List<HotelDTO> getDetailsOfHotels();
    public HotelServicesDTO getServiceDetails(String serviceName);
}
