package com.hackathon.hotel.repository.Impl;

import com.hackathon.hotel.entity.HotelDTO;
import com.hackathon.hotel.entity.HotelServicesDTO;
import com.hackathon.hotel.repository.HotelDAO;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class HotelDAOImpl implements HotelDAO {
    @Override
    public List<HotelDTO> getDetailsOfHotels(){

        List<HotelDTO> allHotelList = new ArrayList<>();

        List<HotelServicesDTO> hotelServices = new ArrayList<>();

        hotelServices.add(new HotelServicesDTO(123L,"Restaurant","50","45",null));
        hotelServices.add(new HotelServicesDTO(234L,"Spa","10","2",null));
        hotelServices.add(new HotelServicesDTO(345L,"Laundry","80","79",null));
        hotelServices.add(new HotelServicesDTO(456L,"Room Cleaning","10.15 A.M.","",null));
        hotelServices.add(new HotelServicesDTO(567L,"Emergency Service","","",null));
        hotelServices.add(new HotelServicesDTO(678L,"Room Maintenance","","",null));

        allHotelList.add(new HotelDTO(1234L,"Hotel Hastinapur",5L,"India",hotelServices));
        allHotelList.add(new HotelDTO(2345L,"Hotel Gandhar",3L,"India",hotelServices));
        allHotelList.add(new HotelDTO(3456L,"Hotel Indraprastha",4L,"India",hotelServices));
        allHotelList.add(new HotelDTO(4567L,"Hotel Gokul",5L,"India",hotelServices));

        return allHotelList;
    }

    @Override
    public HotelServicesDTO getServiceDetails(String serviceName) {

        HotelServicesDTO hotelServicesDTO = new HotelServicesDTO();
        Map<String, Object[]> subMenu = new HashMap<>();
        Map<String,String> map = new HashMap<>();

        if(("Restaurant").equalsIgnoreCase(serviceName)){

            map = new HashMap<>();
            map.put("Plain Rice","70");
            map.put("Daal Fry","90");
            map.put("Veg Kofta","120");
            map.put("Jeera Rice","100");
            map.put("Plain Paratha","45");
            map.put("Paneer Makhni","165");
            map.put("Jeera Aloo","80");
            map.put("Aloo Gobi","95");

            subMenu.put("Veg",map.entrySet().toArray());

            map = new HashMap<>();
            map.put("Mixed Fried Rice","170");
            map.put("Egg Fried Rice","190");
            map.put("Cicken Masala","220");
            map.put("Butter Chicken","400");
            map.put("Mutton Roganjosh","450");
            map.put("Mutton Kurma","465");

            subMenu.put("Non-Veg",map.entrySet().toArray());

            map = new HashMap<>();
            map.put("Non-Veg","170");
            map.put("Veg","90");

            subMenu.put("Thali",map.entrySet().toArray());

            map = new HashMap<>();
            map.put("Non-Veg","270");
            map.put("Veg","190");

            subMenu.put("Snacks",map.entrySet().toArray());

            map = new HashMap<>();
            map.put("Soft","45");
            map.put("Hard","390");

            subMenu.put("Drinks",map.entrySet().toArray());

            hotelServicesDTO = new HotelServicesDTO(123L,"Restaurant","50","45",subMenu);

        }
        if(("Spa").equalsIgnoreCase(serviceName)){
            subMenu = new HashMap<>();

            map = new HashMap<>();
            map.put("Wash","200");
            map.put("Straightening","800");
            map.put("Curling","400");
            map.put("Spa","1200");

            subMenu.put("Hair",map.entrySet().toArray());

            map = new HashMap<>();
            map.put("Full Body Massage","1500");
            map.put("Sona","850");

            map.put("Jacuzzi","1150");
            map.put("Waxing","400");

            subMenu.put("Body",map.entrySet().toArray());

            map = new HashMap<>();
            map.put("Eye Brow","45");
            map.put("Waxing","390");
            map.put("Facial","250");
            map.put("Massage","1200");

            subMenu.put("Face",map.entrySet().toArray());

            map = new HashMap<>();
            map.put("Massage","400");
            map.put("Waxing","390");
            map.put("Manicure","450");
            map.put("Detan","390");
            map.put("Spa","800");

            subMenu.put("Hands",map.entrySet().toArray());

            map = new HashMap<>();
            map.put("Massage","400");
            map.put("Waxing","390");
            map.put("Pedicure","450");
            map.put("Detan","390");
            map.put("Spa","800");

            subMenu.put("Legs",map.entrySet().toArray());
            hotelServicesDTO = new HotelServicesDTO(234L,"Spa","10","2",subMenu);

        }
        if(("Laundry").equalsIgnoreCase(serviceName)){

            subMenu = new HashMap<>();
            map = new HashMap<>();
            map.put("Shirt","50");
            map.put("T-Shirt","59");
            map.put("Trouser","55");
            map.put("Jeanse","59");
            subMenu.put("Washing",map.entrySet().toArray());

            map = new HashMap<>();
            map.put("Shirt","40");
            map.put("T-Shirt","39");
            map.put("Trouser","45");
            map.put("Jeanse","39");
            subMenu.put("Ironing",map.entrySet().toArray());

            hotelServicesDTO = new HotelServicesDTO(345L,"Laundry","80","79",subMenu);

        }
        if(("Room Cleaning").equalsIgnoreCase(serviceName)){

            subMenu = new HashMap<>();
            map = new HashMap<>();
            map.put("Yes","Free");
            map.put("No","Free");
            subMenu.put("Wash Room",map.entrySet().toArray());

            map = new HashMap<>();
            map.put("Yes","Free");
            map.put("No","Free");
            subMenu.put("Room",map.entrySet().toArray());

            hotelServicesDTO =  new HotelServicesDTO(456L,"Room Cleaning","10.15 A.M.","",subMenu);

        }
        if(("Emergency Service").equalsIgnoreCase(serviceName)){

            subMenu = new HashMap<>();
            map = new HashMap<>();
            map.put("Yes","Doctor Charges");
            map.put("No","");
            subMenu.put("Medical",map.entrySet().toArray());

            map = new HashMap<>();
            map.put("Yes","200");
            map.put("No","");
            subMenu.put("Departmental",map.entrySet().toArray());

            map = new HashMap<>();
            map.put("Yes","900");
            map.put("No","");
            subMenu.put("Ambulance",map.entrySet().toArray());

            hotelServicesDTO = new HotelServicesDTO(567L,"Emergency Service","","",subMenu);

        }
        if(("Room Maintenance").equalsIgnoreCase(serviceName)){

            subMenu = new HashMap<>();
            map = new HashMap<>();
            map.put("Cold","Free");
            map.put("Hot","Free");
            map.put("Normal","Free");
            map.put("Packaged Cold","45");
            map.put("Packaged Normal","40");
            subMenu.put("Water",map.entrySet().toArray());

            map = new HashMap<>();
            map.put("Plain","Free");
            map.put("Wet","Free");
            subMenu.put("Paper",map.entrySet().toArray());

            map = new HashMap<>();
            map.put("Normal","Free");
            map.put("Wet","Free");
            subMenu.put("Towel",map.entrySet().toArray());

            map = new HashMap<>();
            map.put("Fan","Free");
            map.put("AC","Free");
            map.put("Light","Free");
            subMenu.put("Electricity",map.entrySet().toArray());

            hotelServicesDTO = new HotelServicesDTO(678L,"Room Maintenance","","",subMenu);

        }

        return hotelServicesDTO;
    }

}
