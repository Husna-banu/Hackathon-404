package com.hackathon.hotel.resource;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Component
public class ApplicationStatus {
    @GetMapping("/applicationisupandrunning")
    public String applicationIsUpAndRunning() {
        return "Application Is Up And Running.......";
    }
}
