import React, { useState, useEffect } from 'react';
import {View, Text, StatusBar, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import commonStyle from '../commonStyles';
import servicesList from '../data/hotelList.json';

export default function Login({navigation}) {
  const [stateData, setStateData] = useState({});
  useEffect(() => {
    servicesList.forEach((list) => {
      if (list.hotelId === 1234) {
        setStateData((state) => list.listOfServices);
      }
    });
  }, [servicesList]);
  const backToPage = () => {
    navigation.goBack();
  };
  const serviceDetails = (serviceId) => {
    if (serviceId) {
      navigation.navigate('ServiceDetails', { serviceId: serviceId });
    }
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => serviceDetails(item.serviceId)}>
        <View style={styles.servicesListStyle}>
          <Text style={styles.serviceNameStyle}>{item.serviceName}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={commonStyle.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={commonStyle.header}>
          <Icon name="arrow-left" style={commonStyle.backButton} size={20} onPress={backToPage} />
          <Text style={commonStyle.heading}>Services List</Text>
        </View>
        <View style={commonStyle.content}>
          <FlatList
            data={stateData}
            renderItem={renderItem}
            keyExtractor={item => item.serviceId.toString()}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
