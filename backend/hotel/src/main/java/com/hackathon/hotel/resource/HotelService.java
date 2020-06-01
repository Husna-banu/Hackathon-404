package com.hackathon.hotel.resource;

import com.hackathon.hotel.beans.Hotel;
import com.hackathon.hotel.beans.HotelServicesVO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
public interface HotelService {

    @GetMapping("/fetchHotelDetails")
    public List<Hotel> fetchHotelDetails();

    @GetMapping("/fetchServiceDetails")
    public HotelServicesVO fetchServiceDetails(@PathParam("serviceName") String serviceName);

}
