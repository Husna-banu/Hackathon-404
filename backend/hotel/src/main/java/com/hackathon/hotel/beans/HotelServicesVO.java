package com.hackathon.hotel.beans;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HotelServicesVO {

    private Long serviceId;
    private String serviceName;
    private String capacity;
    private String availableSpace;
    private Map<String,List<String>> subMenu;

}
