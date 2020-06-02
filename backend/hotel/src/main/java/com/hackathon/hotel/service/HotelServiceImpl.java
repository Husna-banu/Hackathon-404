package com.hackathon.hotel.service;

import com.hackathon.hotel.beans.Hotel;
import com.hackathon.hotel.beans.HotelServicesVO;
import com.hackathon.hotel.entity.HotelServicesDTO;
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
                    hotelDTO.getHotelLocation(),
                    hotelDTO.getListOfServices());
            return hotel;
        }).collect(Collectors.toList());
    }

    @Override
    public HotelServicesVO fetchServiceDetails(String serviceName){

        HotelServicesDTO hotelServicesDTO = hotelDAO.getServiceDetails(serviceName);
        return new HotelServicesVO(hotelServicesDTO.getServiceId(),hotelServicesDTO.getServiceName(),hotelServicesDTO.getCapacity(),hotelServicesDTO.getAvailableSpace(),hotelServicesDTO.getSubMenu());

    }

}
