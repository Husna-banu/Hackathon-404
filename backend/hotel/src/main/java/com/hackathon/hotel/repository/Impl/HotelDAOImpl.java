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

        hotelServices.add(new HotelServicesDTO(123L,"Retaurent","50","45",null));
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

        if(("Retaurent").equalsIgnoreCase(serviceName)){

            Map<String,List<String>> subMenu = new HashMap<>();
            subMenu.put("Veg",new ArrayList(Arrays.asList("Plain Rice","Daal Fry","Veg Kofta","Jeera Rice","Plain Paratha","Paneer Makhni","Jeera Aloo","Aloo Gobi")));
            subMenu.put("Non-Veg",new ArrayList(Arrays.asList("Mixed Fried Rice","Egg Fried Rice","Cicken Masala","Butter Chicken","Mutton Roganjosh","Mutton Kurma")));
            subMenu.put("Thali",new ArrayList(Arrays.asList("Non-Veg","Veg")));
            subMenu.put("Snacks",new ArrayList(Arrays.asList("Non-Veg","Veg")));
            subMenu.put("Drinks",new ArrayList(Arrays.asList("Soft","Hard")));
            hotelServicesDTO = new HotelServicesDTO(123L,"Retaurent","50","45",subMenu);

        }
        if(("Spa").equalsIgnoreCase(serviceName)){

            Map<String,List<String>> subMenu = new HashMap<>();
            subMenu.put("Hair",new ArrayList(Arrays.asList("Wash","Straightening","Curling","Styling","Spa")));
            subMenu.put("Body",new ArrayList(Arrays.asList("Full Body Massage","Sona","Jacuzzi","Waxing")));
            subMenu.put("Face",new ArrayList(Arrays.asList("Eye Brow","Waxing","Facial","Massage")));
            subMenu.put("Hands",new ArrayList(Arrays.asList("Massage","Waxing","Detan","Spa","Manicure")));
            subMenu.put("Legs",new ArrayList(Arrays.asList("Massage","Waxing","Detan","Spa","Pedicure")));
            hotelServicesDTO = new HotelServicesDTO(234L,"Spa","10","2",subMenu);

        }
        if(("Laundry").equalsIgnoreCase(serviceName)){

            Map<String,List<String>> subMenu = new HashMap<>();
            subMenu.put("Washing",new ArrayList(Arrays.asList("Shirt","T-Shirt","Trouser","Jeanse")));
            subMenu.put("Ironing",new ArrayList(Arrays.asList("Shirt","T-Shirt","Trouser","Jeanse")));

            hotelServicesDTO = new HotelServicesDTO(345L,"Laundry","80","79",subMenu);

        }
        if(("Room Cleaning").equalsIgnoreCase(serviceName)){

            Map<String,List<String>> subMenu = new HashMap<>();
            subMenu.put("Wash Room",new ArrayList(Arrays.asList("Yes","No")));
            subMenu.put("Room",new ArrayList(Arrays.asList("Yes","No")));

            hotelServicesDTO =  new HotelServicesDTO(456L,"Room Cleaning","10.15 A.M.","",subMenu);

        }
        if(("Emergency Service").equalsIgnoreCase(serviceName)){

            Map<String,List<String>> subMenu = new HashMap<>();
            subMenu.put("Medical",new ArrayList(Arrays.asList("Yes","No")));
            subMenu.put("Departmental",new ArrayList(Arrays.asList("Yes","No")));
            subMenu.put("Ambulance",new ArrayList(Arrays.asList("Yes","No")));

            hotelServicesDTO = new HotelServicesDTO(567L,"Emergency Service","","",subMenu);

        }
        if(("Room Maintenance").equalsIgnoreCase(serviceName)){

            Map<String,List<String>> subMenu = new HashMap<>();
            subMenu.put("Water",new ArrayList(Arrays.asList("Cold","Hot","Normal")));
            subMenu.put("Paper",new ArrayList(Arrays.asList("Plain","Wet")));
            subMenu.put("Towel",new ArrayList(Arrays.asList("Normal","Wet")));
            subMenu.put("Electricity",new ArrayList(Arrays.asList("Fan","AC","Light")));

            hotelServicesDTO = new HotelServicesDTO(678L,"Room Maintenance","","",subMenu);

        }

        return hotelServicesDTO;
    }

}
