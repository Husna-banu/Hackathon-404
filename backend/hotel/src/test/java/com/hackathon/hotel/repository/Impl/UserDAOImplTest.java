package com.hackathon.hotel.repository.Impl;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;

class UserDAOImplTest {

    @Autowired
    UserDAOImpl userDAO;

    @Test
    public void testForGettingDetailsOfUsers(){
        userDAO = new UserDAOImpl();
        Assert.assertTrue(userDAO.getDetailsOfUsers().stream().filter(userDTO -> userDTO.getUserId().equalsIgnoreCase("hotelguest@abc.com")).findFirst().isPresent());
    }

}