package com.hackathon.hotel.resource;

import com.hackathon.hotel.beans.Hotel;
import com.hackathon.hotel.beans.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public interface UserService {

    @GetMapping("/fetchUserDetails")
    public List<User> fetchUserDetails();
}
