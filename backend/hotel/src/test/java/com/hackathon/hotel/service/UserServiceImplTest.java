package com.hackathon.hotel.service;

import com.hackathon.hotel.beans.User;
import com.hackathon.hotel.repository.UserDAO;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class UserServiceImplTest {

    @Autowired
    UserServiceImpl userService;

    @Mock
    UserDAO userDAO;

    @Test
    void testToFetchUserDetails() {
        userDAO = mock(UserDAO.class);
        userService = new UserServiceImpl(userDAO);
        when(userDAO.getDetailsOfUsers()).thenReturn(new ArrayList<>());
        Assert.assertNotNull(userService.fetchUserDetails());

    }

    @Test
    void testToFetchUserDetailsById() {
        userDAO = mock(UserDAO.class);
        userService = new UserServiceImpl(userDAO);
        when(userDAO.getDetailsOfUsers()).thenReturn(new ArrayList<>());
        Assert.assertNotNull(userService.fetchUserDetailsById(new User("hotelguest@abc.com","hotelguest@123",null,null)));

    }
}