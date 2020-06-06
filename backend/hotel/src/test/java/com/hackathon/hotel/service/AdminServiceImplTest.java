package com.hackathon.hotel.service;

import com.hackathon.hotel.entity.AdminDTO;
import com.hackathon.hotel.repository.AdminDAO;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class AdminServiceImplTest {

    @Autowired
    AdminServiceImpl adminService;

    @Mock
    AdminDAO adminDAO;

    @Test
    public void testToFetchAllAdminDetails(){
        List<AdminDTO> mockList = mock(List.class);
        adminDAO = mock(AdminDAO.class);
        when(adminDAO.getDetailsOfHotels()).thenReturn(mockList);
        adminService = new AdminServiceImpl(adminDAO);
        Assert.assertNotNull(adminService.fetchAllAdminDetails());
    }

}