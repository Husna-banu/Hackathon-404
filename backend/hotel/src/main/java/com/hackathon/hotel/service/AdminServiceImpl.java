package com.hackathon.hotel.service;

import com.hackathon.hotel.beans.Admin;
import com.hackathon.hotel.repository.AdminDAO;
import com.hackathon.hotel.resource.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminDAO adminDAO;

    @Override
    public List<Admin> fetchAllAdminDetails() {
        return adminDAO.getDetailsOfHotels().stream().map( adminDTO -> {
           return new Admin(
                   adminDTO.getAdminId(),
                   adminDTO.getAdminName(),
                   adminDTO.getAdminLastName(),
                   adminDTO.getAdminPosition(),
                   adminDTO.getAdminSalary(),
                   adminDTO.getAdminAge());
        }).collect(Collectors.toList());
    }
}
