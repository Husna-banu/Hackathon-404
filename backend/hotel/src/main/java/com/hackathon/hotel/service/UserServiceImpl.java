package com.hackathon.hotel.service;

import com.hackathon.hotel.beans.User;
import com.hackathon.hotel.beans.UserResponse;
import com.hackathon.hotel.entity.UserDTO;
import com.hackathon.hotel.repository.UserDAO;
import com.hackathon.hotel.resource.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserDAO userDAO;

    @Override
    public List<User> fetchUserDetails(){

        return  userDAO.getDetailsOfUsers().stream().map( userDTO -> {
           return new User(
                    userDTO.getUserId(),
                    userDTO.getPassword(),
                    userDTO.getUserType(),
                    userDTO.getUserTotalBalance()
            );

        }).collect(Collectors.toList());
    }

    @Override
    public UserResponse fetchUserDetailsById(User user) {

        UserResponse response;
        UserDTO responseData;
        responseData = userDAO.getDetailsOfUsers().stream().filter(userDTO ->
            userDTO.getUserId().equalsIgnoreCase(user.getUserId()) && userDTO.getPassword().equalsIgnoreCase(user.getPassword())).findAny().orElse(null);

        if (null==responseData){
            response = new UserResponse("Failed","Invalid Request - User/Admin/Super Admin Not Found");
        }
        else {
            response = new UserResponse("Success","Valid Request");
            response.setUserId(responseData.getUserId());
            response.setPassword(responseData.getPassword());
            response.setUserType(responseData.getUserType());
            response.setUserTotalBalance(responseData.getUserTotalBalance());
        }

        return response;
    }

}
