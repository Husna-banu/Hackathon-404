import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import commonStyle from '../commonStyles';
import Logout from '../components/Logout';
import { useAccessState } from '../utils/AppContext/loginContext';

export default function Login({ route, navigation }) {
  const { loginName } = useAccessState();
  const indexOfAt = loginName.indexOf('@');
  const guestName = loginName.substring(0, indexOfAt);
  const [stateData, setStateData] = useState({
    hotelId: 0,
    menuList: [
      {
        menuName: 'Hotel Services',
        menuRouteName: 'ServiceLists',
      },
      {
        menuName: 'Housekeeping & Laundry Request',
        menuRouteName: '',
      },
      {
        menuName: 'Arogya Setu',
        menuRouteName: '',
      },
      {
        menuName: 'Maintenance Request',
        menuRouteName: '',
      },
      {
        menuName: 'Make Reservation',
        menuRouteName: 'Covid9Info',
      },
      {
        menuName: 'Payment details',
        menuRouteName: '',
      },
    ],
  });
  useEffect(() => {
    const { hotelId, listOfServices } = route.params;
    setStateData(state => ({
      ...state,
      hotelId: hotelId,
      listOfServices: listOfServices,
    }));
  }, [route.params]);
  const serviceDetails = menuRouteName => {
    if (menuRouteName) {
      navigation.navigate(menuRouteName, {
        hotelId: stateData.hotelId,
        listOfServices: stateData.listOfServices,
      });
    }
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => serviceDetails(item.menuRouteName)}>
        <View style={styles.servicesListStyle}>
          <Text style={styles.serviceNameStyle}>{item.menuName}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={commonStyle.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={commonStyle.safeAreaViewStyle}>
        <View style={commonStyle.header}>
          <Text style={commonStyle.heading}>Guest Dashboard</Text>
          <Logout navigation={navigation} />
        </View>
        <View style={commonStyle.content}>
          <Text
            style={
              commonStyle.heading
            }>{`Welcome ${guestName} Room No: 404`}</Text>
          <FlatList
            data={stateData.menuList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns="2"
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
