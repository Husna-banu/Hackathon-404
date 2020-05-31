package com.hackathon.hotel.repository.Impl;

import com.hackathon.hotel.entity.HotelDTO;
import com.hackathon.hotel.entity.UserDTO;
import com.hackathon.hotel.repository.UserDAO;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserDAOImpl implements UserDAO {

    @Override
    public List<UserDTO> getDetailsOfUsers(){

        List<UserDTO> userDTOList = new ArrayList<>();

        userDTOList.add(new UserDTO("piyalee","piyali@123",70000L));
        userDTOList.add(new UserDTO("husna","husna@123",50000L));
        userDTOList.add(new UserDTO("niharika","niharika@123",70000L));
        userDTOList.add(new UserDTO("snehanjana","snehanjana@123",50000L));

        return userDTOList;

    }



}
