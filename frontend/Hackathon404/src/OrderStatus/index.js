import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  Text,
  Box,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import commonStyle from '../commonStyles';

export default function OrderStatus({route, navigation}) {
  const backToPage = () => {
    navigation.goBack();
  };
  const logout = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={commonStyle.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={commonStyle.header}>
          <Icon
            name="arrow-left"
            style={commonStyle.backButton}
            size={20}
            onPress={backToPage}
          />
          <Text style={commonStyle.heading}>Your Cart</Text>
          <AntDesign
            style={{marginLeft: 200}}
            name="logout"
            size={20}
            onPress={logout}
          />
        </View>
        <Text style={commonStyle.successMessage}>
          Order Placed Successfully
        </Text>
      </SafeAreaView>
    </View>
  );
}
