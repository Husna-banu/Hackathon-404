package com.hackathon.hotel.service;

import com.hackathon.hotel.beans.User;
import com.hackathon.hotel.entity.UserDTO;
import com.hackathon.hotel.repository.UserDAO;
import com.hackathon.hotel.resource.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserDAO userDAO;

    @Override
    public List<User> fetchUserDetails(){

        return  userDAO.getDetailsOfUsers().stream().map( userDTO -> {
           return new User(
                    userDTO.getUserid(),
                    userDTO.getPassword(),
                    userDTO.getUserTotalBalance()
            );

        }).collect(Collectors.toList());
    }

}
