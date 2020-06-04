package com.hackathon.hotel.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EntityScan
public class HotelServicesDTO {

    private Long serviceId;
    private String serviceName;
    private String capacity;
    private String availableSpace;
    private Map<String, Object[]> subMenu;
}
