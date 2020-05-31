package com.hackathon.hotel.repository;

import com.hackathon.hotel.entity.HotelDTO;
import com.hackathon.hotel.entity.UserDTO;

import java.util.List;

public interface UserDAO {
    public List<UserDTO> getDetailsOfUsers();
}
