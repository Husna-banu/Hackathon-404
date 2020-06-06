import React from 'react';
import {View, StatusBar, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import commonStyle from '../commonStyles';
import Logout from '../components/Logout';

export default function OrderStatus({route, navigation}) {
  const backToPage = () => {
    navigation.goBack();
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
          <Text style={commonStyle.heading}>Your Cart</Text>
          <Logout navigation={navigation} />
        </View>
        <Text style={commonStyle.successMessage}>
          Order Placed Successfully
        </Text>
      </SafeAreaView>
    </View>
  );
}
