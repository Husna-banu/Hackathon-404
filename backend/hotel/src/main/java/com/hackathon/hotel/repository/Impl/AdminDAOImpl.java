package com.hackathon.hotel.repository.Impl;

import com.hackathon.hotel.entity.AdminDTO;
import com.hackathon.hotel.repository.AdminDAO;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class AdminDAOImpl implements AdminDAO {
    @Override
    public List<AdminDTO> getDetailsOfHotels() {
        List<AdminDTO> adminList = new ArrayList<>();

        adminList.add(new AdminDTO(876L,"Aparna","Roy Singh Chouhan","Head Of The Housekeeping",4000000L,46L));
        adminList.add(new AdminDTO(987L,"Harsha","Mulani","Head Of The Housekeeping",4000000L,35L));

        return adminList;
    }
}
