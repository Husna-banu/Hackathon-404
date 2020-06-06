import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import commonStyle from '../../commonStyles';
import Logout from '../../components/Logout';

export default function Dashboard({route, navigation}) {
  const [stateData, setStateData] = useState({
    hotelId: 0,
    menuList: [
      {
        menuName: 'Guest',
        menuRouteName: '',
      },
      {
        menuName: 'Services List',
        menuRouteName: 'AdminService',
      },
      {
        menuName: 'Service Manager',
        menuRouteName: 'AdminServiceOwnerDetails',
      },
      {
        menuName: 'Guest Request',
        menuRouteName: '',
      },
    ],
  });
  useEffect(() => {
    const {hotelId, listOfServices} = route.params;
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
  const renderItem = ({item}) => {
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
          <Text style={commonStyle.heading}>Services List</Text>
          <Logout navigation={navigation} />
        </View>
        <View style={commonStyle.content}>
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
