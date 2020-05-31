package com.hackathon.hotel.repository.Impl;

import com.hackathon.hotel.entity.HotelDTO;
import com.hackathon.hotel.repository.HotelDAO;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class HotelDAOImpl implements HotelDAO {
    @Override
    public List<HotelDTO> getDetailsOfHotels(){

        List<HotelDTO> allHotelList = new ArrayList<>();

        allHotelList.add(new HotelDTO(1234L,"Hotel Hastinapur",5L,"India"));
        allHotelList.add(new HotelDTO(2345L,"Hotel Gandhar",3L,"India"));
        allHotelList.add(new HotelDTO(3456L,"Hotel Indraprastha",4L,"India"));
        allHotelList.add(new HotelDTO(4567L,"Hotel Gokul",5L,"India"));

        return allHotelList;
    }

}
