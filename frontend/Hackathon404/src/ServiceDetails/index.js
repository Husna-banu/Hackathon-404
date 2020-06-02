import React, { useState, useEffect } from 'react';
import {View, Text, StatusBar, SafeAreaView, FlatList, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import styles from './style';
import commonStyle from '../commonStyles';
import servicesList from '../data/servicesList.json';

export default function Login({route, navigation}) {
  const [stateData, setStateData] = useState({});
  useEffect(() => {
    const { serviceId } = route.params;
    servicesList.forEach((list) => {
      if (list.serviceId === serviceId) {
        console.log('list', list);
        setStateData((state) => list);
      }
    });
  }, [servicesList]);
  const backToPage = () => {
    navigation.goBack();
  };
  const renderItemList = ({ item }) => {
    return (
      <View style={styles.listItemStyle}>
        <EntypoIcon name="dot-single" style={commonStyle.backButton} size={20} />
        <View style={styles.listItemContentStyle}>
          <Text style={styles.listItemNameStyle}>{item}</Text>
          <Text style={styles.addCartButton}>Add to Cart</Text>
        </View>
      </View>
    );
  };
  const renderItem = ({ item, index }) => {
    console.log(item, index);
    return (
      <View style={styles.servicesListStyle}>
        <Text style={styles.itemNameStyle}>{item.itemName}</Text>
        <FlatList
          data={item.itemList}
          renderItem={renderItemList}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  return (
    <View style={commonStyle.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={commonStyle.header}>
          <Icon name="arrow-left" style={commonStyle.backButton} size={20} onPress={backToPage} />
          <Text style={commonStyle.heading}>{stateData.serviceName} Services</Text>
        </View>
        <View style={commonStyle.content}>
          <FlatList
            data={stateData.subMenu}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
