package com.hackathon.hotel.repository.Impl;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestComponent;

import static org.junit.jupiter.api.Assertions.*;

class AdminDAOImplTest {

    @Autowired
    AdminDAOImpl adminDAO;

    @Test
    public void testForGettingDetailsOfHotels(){
        adminDAO = new AdminDAOImpl();
        Assert.assertEquals(java.util.Optional.of(876L),adminDAO.getDetailsOfHotels().get(0).getAdminId());
    }

}