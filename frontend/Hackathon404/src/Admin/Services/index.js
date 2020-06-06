import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';
import commonStyle from '../../commonStyles';
import Logout from '../../components/Logout';

export default function Login({route, navigation}) {
  const [stateData, setStateData] = useState({
    hotelName: '',
    hotelId: 0,
    listOfServices: [],
  });
  useEffect(() => {
    const {hotelId, listOfServices} = route.params;
    setStateData(state => ({
      ...state,
      hotelId: hotelId,
      listOfServices: listOfServices,
    }));
  }, [route.params]);
  const backToPage = () => {
    navigation.goBack();
  };
  const serviceDetails = (serviceId, serviceName) => {
    if (serviceId && serviceName) {
      navigation.navigate('AdminServiceDetails', {
        serviceId: serviceId,
        serviceName: serviceName,
      });
    }
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.servicesListStyle}>
        <TouchableOpacity
          onPress={() => serviceDetails(item.serviceId, item.serviceName)}>
          <Text style={styles.serviceNameStyle}>{item.serviceName}</Text>
        </TouchableOpacity>
        <FontAwesome
          name="pencil-square"
          size={25}
          style={{position: 'absolute', right: 40}}
        />
        <AntDesign
          name="delete"
          size={20}
          style={{position: 'absolute', right: 10}}
        />
      </View>
    );
  };
  return (
    <View style={commonStyle.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={commonStyle.safeAreaViewStyle}>
        <View style={commonStyle.header}>
          <FontAwesome
            name="arrow-left"
            style={commonStyle.backButton}
            size={20}
            onPress={backToPage}
          />
          <Text style={commonStyle.heading}>Services List</Text>
          <FontAwesome
            name="plus-circle"
            style={styles.addIconStyle}
            size={20}
          />
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
