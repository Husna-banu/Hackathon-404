package com.hackathon.hotel.service;

import com.hackathon.hotel.beans.Hotel;
import com.hackathon.hotel.repository.HotelDAO;
import com.hackathon.hotel.resource.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HotelServiceImpl implements HotelService {

    @Autowired
    HotelDAO hotelDAO;

    @Override
    public List<Hotel> fetchHotelDetails(){

        return (List<Hotel>) hotelDAO.getDetailsOfHotels().stream().map(hotelDTO -> {
            Hotel hotel =  new Hotel(
                    hotelDTO.getHotelId(),
                    hotelDTO.getHotemName(),
                    hotelDTO.getHotelLevel(),
                    hotelDTO.getHotelLocation());
            return hotel;
        }).collect(Collectors.toList());
    }

}
