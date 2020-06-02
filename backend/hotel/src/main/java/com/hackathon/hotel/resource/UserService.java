package com.hackathon.hotel.resource;

import com.hackathon.hotel.beans.User;
import com.hackathon.hotel.beans.UserResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public interface UserService {

    @GetMapping("/fetchUserDetails")
    public List<User> fetchUserDetails();

    @PostMapping("/fetchUserDetailsById")
    public UserResponse fetchUserDetailsById(@RequestBody User user);
}
