import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import commonStyle from '../commonStyles';
import Logout from '../components/Logout';

export default function ServiceLists({ route, navigation }) {
  const [stateData, setStateData] = useState({
    hotelName: '',
    hotelId: '',
    listOfServices: '',
  });

  useEffect(() => {
    const { hotelId, listOfServices } = route.params;
    setStateData(state => ({
      ...state,
      hotelId: hotelId,
      listOfServices: listOfServices,
    }));
  }, []);

  const backToPage = () => {
    navigation.goBack();
  };
  const serviceDetails = (serviceId, serviceName) => {
    if (serviceId && serviceName) {
      navigation.navigate('ServiceDetails', {
        serviceId: serviceId,
        serviceName: serviceName,
      });
    }
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => serviceDetails(item.serviceId, item.serviceName)}>
        <View style={styles.servicesListStyle}>
          <Text style={styles.serviceNameStyle}>{item.serviceName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={commonStyle.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={commonStyle.safeAreaViewStyle}>
        <View style={commonStyle.header}>
          <Icon
            name="arrow-left"
            style={commonStyle.backButton}
            size={20}
            onPress={backToPage}
          />
          <Text style={commonStyle.heading}>Services List</Text>
          <Logout navigation={navigation} />
        </View>
        <View style={commonStyle.content}>
          <FlatList
            data={stateData.listOfServices}
            renderItem={renderItem}
            keyExtractor={item => item.serviceId.toString()}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
