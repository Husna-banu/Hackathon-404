import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, StatusBar, SafeAreaView, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import commonStyle from '../commonStyles';
import hotelList from '../data/hotelList.json';

export default function Login({navigation}) {
  const [stateData, setStateData] = useState({
    emailId: '',
    hotelName: ''
  });

  useEffect(() => {
    hotelList.forEach((list) => {
      if (list.hotelId === 1234) {
        setStateData((state) => ({
          ...state,
          hotelName: list.hotelName,
        }));
      }
    });
  }, [hotelList]);
  const onChangeText = (text) => {
    if (text === '') {
      setStateData((state) => ({
        ...state,
        emailIdError: true,
      }));
    } else {
      setStateData((state) => ({
        ...state,
        emailIdError: false,
      }));
    }
    setStateData((state) => ({ ...state, emailId: text }));
  };
  const login = () => {
    if (stateData.emailId === '') {
      setStateData((state) => ({
        ...state,
        emailIdError: true,
      }));
    } else {
      setStateData((state) => ({
        ...state,
        emailIdError: false,
      }));
      navigation.navigate('Dashborad');
    }
  };
  const backToPage = () => {
    navigation.goBack();
  };
  return (
    <View style={commonStyle.container}>
      <StatusBar barStyle="dark-content" backgroundColor='skyblue' />
      <SafeAreaView>
        <View style={commonStyle.header}>
          <Icon name="arrow-left" style={commonStyle.backButton} size={20} onPress={backToPage}/>
          <Text style={commonStyle.heading}>Login</Text>
        </View>
        <View style={commonStyle.content}>
          <Text style={styles.hotelName}>{stateData.hotelName}</Text>
          <View style={styles.emailContainer}>
            <Text style={styles.inputTitle}>Please enter your email address: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeText}
              value={stateData.emailId}
              placeholder="Email Address"
            />
            {stateData.emailIdError && (
              <Text style={styles.errorMsg}>Please enter email address</Text>
            )}
          </View>
          <Button title="Login" onPress={() => login()} style={{ paddingTop: 10 }} />
        </View>
      </SafeAreaView>
    </View>
  );
}
