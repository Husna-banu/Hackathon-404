import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, StatusBar, SafeAreaView, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import commonStyle from '../commonStyles';
import {getFetch , postFetch}from '../utils/fetchAPI';

export default function Login({navigation}) {
  const [stateData, setStateData] = useState({
    emailId: '',
    password: '',
    hotelName: '',
    hotelId: 0,
    listOfServices: [],
    passwordError: false,
    emailIdError: false,
  });

  useEffect(() => {
     getFetch('http://backendproject5.herokuapp.com/fetchHotelDetails').then((lists)=>{
      console.log(lists);
      lists.forEach((list) => {
        if (list.hotelId === 1234) {
          setStateData((state) => ({
            ...state,
            hotelName: list.hotemName,
            hotelId: list.hotelId,
            listOfServices: list.listOfServices,
          }));
        }
      });
    })
    .catch(err => console.log(err));
  }, []);

  const onChangeText = (text, name) => {
    const nameField = `${name}Error`;
    if (text === '') {
      setStateData((state) => ({
        ...state,
        [nameField]: true,
      }));
    } else {
      setStateData((state) => ({
        ...state,
        [nameField]: false,
      }));
    }
    setStateData((state) => ({ ...state, [name]: text }));
  };

  const _login = () => {
    if (stateData.emailId === '') {
      setStateData((state) => ({
        ...state,
        emailIdError: true,
      }));
    } else {
      const body = {
                    userId:stateData.emailId,
                    password:stateData.password
                    };

       postFetch('http://backendproject5.herokuapp.com/fetchUserDetailsById',body).then((response)=>{
                    console.log('response',response);
       })
      setStateData((state) => ({
        ...state,
        emailIdError: false,
      }));
      navigation.navigate('Dashborad', {hotelId: stateData.hotelId, listOfServices: stateData.listOfServices});
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
          <View style={styles.emailContainer}>
            <Text style={styles.inputTitle}>Email address/Username: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => onChangeText(text, 'emailId')}
              value={stateData.emailId}
              placeholder="Email Address/User name"
            />
            {stateData.emailIdError && (
              <Text style={styles.errorMsg}>Please enter email address</Text>
            )}
          </View>
          <View style={styles.emailContainer}>
            <Text style={styles.inputTitle}>Password: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => onChangeText(text, 'password')}
              value={stateData.password}
              placeholder="Password"
              secureTextEntry={true}
            />
            {stateData.passwordError && (
              <Text style={styles.errorMsg}>Please enter password address</Text>
            )}
          </View>
          <Button title="Login" onPress={() => _login()} style={{ paddingTop: 10 }} />
        </View>
      </SafeAreaView>
    </View>
  );
}
