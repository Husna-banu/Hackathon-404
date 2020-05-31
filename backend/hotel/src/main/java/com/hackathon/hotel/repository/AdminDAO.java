package com.hackathon.hotel.repository;

import com.hackathon.hotel.entity.AdminDTO;
import com.hackathon.hotel.entity.HotelDTO;

import java.util.List;

public interface AdminDAO {
    public List<AdminDTO> getDetailsOfHotels();
}
