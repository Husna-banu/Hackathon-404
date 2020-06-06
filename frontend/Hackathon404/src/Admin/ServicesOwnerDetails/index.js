import React from 'react';
import {View, Text, StatusBar, SafeAreaView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import commonStyle from '../../commonStyles';
import Logout from '../../components/Logout';
import styles from './style';

export default function AdminServiceOwnerDetails({route, navigation}) {
  const stateData = {
    serviceOwner: [
      {
        serviceName: 'Restaurant',
        serviceOwnerName: 'Ram Kumar',
        contactNo: +9173892005,
      },
      {
        serviceName: 'Spa',
        serviceOwnerName: 'Shyam Kumar',
        contactNo: +9173892004,
      },
      {
        serviceName: 'Laundary',
        serviceOwnerName: 'Rahul Kumar',
        contactNo: +9173892003,
      },
      {
        serviceName: 'Emergency Service',
        serviceOwnerName: 'Rohit Kumar',
        contactNo: +9173892002,
      },
      {
        serviceName: 'Room Maintenance',
        serviceOwnerName: 'Raghu k',
        contactNo: +9173892000,
      },
    ],
  };
  const backToPage = () => {
    navigation.goBack();
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={commonStyle.servicesListStyle}>
        <Text style={(commonStyle.fnBold, commonStyle.fnSizePadding)}>
          {item.serviceName}
        </Text>
        <Text style={commonStyle.fnSize_12}>{item.serviceOwnerName}</Text>
        <Text style={commonStyle.fnSize_12}>{item.contactNo}</Text>
        <FontAwesome name="pencil-square" size={25} style={styles.editIcon} />
        <AntDesign name="delete" size={20} style={styles.deleteIcon} />
      </View>
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
          <Text style={commonStyle.heading}> Services Owner Details</Text>
          <FontAwesome
            name="plus-circle"
            style={styles.addIconStyle}
            size={25}
          />
          <Logout navigation={navigation} />
        </View>
        <View style={commonStyle.content}>
          <FlatList
            data={stateData.serviceOwner}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
