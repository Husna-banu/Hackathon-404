package com.hackathon.hotel.repository.Impl;

import com.hackathon.hotel.entity.AdminDTO;
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

        //superAdmin, guest, hotelAdmin

        //USER
        userDTOList.add(new UserDTO("piyalee@gmail.com","piyali@123","GUEST",70000L));
        userDTOList.add(new UserDTO("niharika@gmail.com","niharika@123","GUEST",70000L));

        //ADMIN
        userDTOList.add(new UserDTO("husna@gmail.com","husna@123","HOTEL_ADMIN",70000L));
        userDTOList.add(new UserDTO("snehanjana@gmail.com","snehanjana@123","HOTEL_ADMIN",70000L));


        //SUPER ADMIN
        userDTOList.add(new UserDTO("harsha@gmail.com","harsha@123","HOTEL_ADMIN",70000L));
        userDTOList.add(new UserDTO("aparna@gmail.com","aparna@123","HOTEL_ADMIN",70000L));




        return userDTOList;

    }

    //POST API



}
