import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, SafeAreaView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import styles from './style';
import commonStyle from '../../commonStyles';
import Logout from '../../components/Logout';
import {getFetch} from '../../utils/fetchAPI';

export default function Login({route, navigation}) {
  const [stateData, setStateData] = useState({
    cartCount: 0,
    serviceDetails: [],
  });
  useEffect(() => {
    const {serviceName} = route.params;
    getFetch(`fetchServiceDetails?serviceName=${serviceName}`)
      .then(lists => {
        setStateData(state => ({
          ...state,
          serviceDetails: lists,
        }));
      })
      .catch(err => console.log(err));
  }, [route.params]);
  const backToPage = () => {
    navigation.goBack();
  };
  const renderItemList = ({item}) => {
    for (var i in item) {
      return (
        <View style={styles.listItemStyle}>
          <EntypoIcon
            name="dot-single"
            style={commonStyle.backButton}
            size={20}
          />
          <View style={styles.listItemContentStyle}>
            <Text style={styles.serviceNameStyle}>{i}</Text>
            <Text style={styles.servicePriceStyle}>Rs {item[i]}</Text>
          </View>
        </View>
      );
    }
  };

  const renderItem = ({item: mainItem}) => {
    const itemName =
      mainItem && Object.keys(mainItem).length > 0
        ? Object.keys(mainItem)[0]
        : '';
    return (
      <View style={styles.servicesListStyle}>
        <Text style={styles.itemNameStyle}>{itemName}</Text>
        <FlatList
          data={mainItem[itemName]}
          renderItem={renderItemList}
          keyExtractor={(item, index) => index.toString()}
        />
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
          <Text style={commonStyle.heading}>
            {stateData?.serviceDetails?.serviceName} Services
          </Text>
          <Logout navigation={navigation} />
        </View>
        <View style={commonStyle.content}>
          <FlatList
            data={stateData?.serviceDetails?.subMenu ?? []}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
