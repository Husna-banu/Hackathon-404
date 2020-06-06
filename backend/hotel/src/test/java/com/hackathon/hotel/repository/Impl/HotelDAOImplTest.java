package com.hackathon.hotel.repository.Impl;

import com.hackathon.hotel.entity.HotelDTO;
import com.hackathon.hotel.entity.HotelServicesDTO;
import com.hackathon.hotel.repository.HotelDAO;
import org.junit.Assert;
import org.junit.Before;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestComponent;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;

class HotelDAOImplTest {

    @Autowired
    HotelDAO hotelDAO;


    @Test
    public void testForGettingDetailsOfTheHotels() {
        hotelDAO = new HotelDAOImpl();
        Assert.assertEquals(Optional.of(1234L), java.util.Optional.ofNullable(hotelDAO.getDetailsOfHotels().get(0).getHotelId()));
    }

    @Test
    public void testForGettingServiceDetails() {
        hotelDAO = new HotelDAOImpl();
        Assert.assertTrue(hotelDAO.getServiceDetails("Restaurant").getSubMenu().keySet().contains("Non-Veg"));
    }
}