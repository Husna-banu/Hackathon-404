package com.hackathon.hotel.repository;

import com.hackathon.hotel.entity.HotelDTO;

import java.util.List;

public interface HotelDAO {
    public List<HotelDTO> getDetailsOfHotels();
}
