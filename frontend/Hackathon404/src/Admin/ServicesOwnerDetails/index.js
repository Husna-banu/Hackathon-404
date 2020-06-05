import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, SafeAreaView, FlatList, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import commonStyle from '../../commonStyles';

export default function AdminServiceOwnerDetails({ route, navigation }) {
    const [stateData, setStateData] = useState({
        serviceOwner: [{
            serviceName: 'Restaurant',
            serviceOwnerName: 'Ram Kumar',
            contactNo: +9173892005,
        }, {
            serviceName: 'Spa',
            serviceOwnerName: 'Shyam Kumar',
            contactNo: +9173892004,
        }, {
            serviceName: 'Laundary',
            serviceOwnerName: 'Rahul Kumar',
            contactNo: +9173892003,
        },
        {
            serviceName: 'Emergency Service',
            serviceOwnerName: 'Rohit Kumar',
            contactNo: +9173892002,
        },
        {
            serviceName: 'Room Maintenance',
            serviceOwnerName: 'Raghu k',
            contactNo: +9173892000,
        }]
    });

    const backToPage = () => {
        navigation.goBack();
    };


    return (
        <View style={commonStyle.container}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={commonStyle.header}>
                    <Icon name="arrow-left" style={commonStyle.backButton} size={20} onPress={backToPage} />
                    <Text style={commonStyle.heading}> Services Owner Details</Text>
                </View>
                <View style={commonStyle.content}>
                    {stateData.serviceOwner.map((item, index) => (
                        <View style={commonStyle.servicesListStyle}>
                            <Text style={commonStyle.fnBold, commonStyle.fnSizePadding}>{item.serviceName}</Text>
                            <Text style={commonStyle.fnSize_12}>{item.serviceOwnerName}</Text>
                            <Text style={commonStyle.fnSize_12}>{item.contactNo}</Text>
                        </View>))}
                </View>
            </SafeAreaView>
        </View>
    );
}
