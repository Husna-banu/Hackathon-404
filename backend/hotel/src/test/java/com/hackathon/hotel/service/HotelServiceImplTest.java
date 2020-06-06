package com.hackathon.hotel.service;

import com.hackathon.hotel.entity.HotelServicesDTO;
import com.hackathon.hotel.repository.HotelDAO;
import com.hackathon.hotel.resource.HotelService;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class HotelServiceImplTest {

    @Autowired
    HotelService hotelService;

    @Mock
    HotelDAO hotelDAO;


    @Test
    void testToFetchHotelDetails() {

        hotelDAO = mock(HotelDAO.class);
        hotelService = new HotelServiceImpl(hotelDAO);

        when(hotelDAO.getDetailsOfHotels()).thenReturn(new ArrayList<>());
        Assert.assertNotNull(hotelService.fetchHotelDetails());
    }

    @Test
    void testToFetchServiceDetails() {

        hotelDAO = mock(HotelDAO.class);
        hotelService = new HotelServiceImpl(hotelDAO);
        Map<String, Object[]> subMenu = new HashMap<>();
        HotelServicesDTO hotelServicesDTO = new HotelServicesDTO(123L,"Restaurant","50","45",subMenu);

        when(hotelDAO.getServiceDetails(any())).thenReturn(hotelServicesDTO);
        Assert.assertNotNull(hotelService.fetchServiceDetails("Restaurant"));
    }
}