import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';
import commonStyle from '../commonStyles';
import styles from './style';
import Logout from '../components/Logout';

export default function Order({route, navigation}) {
  const [volatile, setVolatile] = useState({
    cartCount: 0,
    hideCart: true,
    itemArray: [],
  });
  const backToPage = () => {
    navigation.goBack();
  };
  useEffect(() => {
    const {itemArray, itemCount} = route.params;
    setVolatile(state => ({
      ...state,
      cartCount: itemCount,
      hideCart: itemCount ? true : false,
      itemArray: Array.from(new Set(itemArray)),
    }));
  }, [route.params]);

  const incrementCart = i => {
    const newitemArray = volatile.itemArray;
    const newItem = newitemArray[i];
    newItem.cartCount =
      newItem.cartCount >= 0 ? parseInt(newItem?.cartCount ?? 0, 0) + 1 : 0;
    setVolatile(state => ({
      ...state,
      itemArray: newitemArray,
    }));
  };
  const decrementCart = i => {
    const newitemArray = volatile.itemArray;
    const newItem = newitemArray[i];
    newItem.cartCount =
      newItem.cartCount > 0 ? parseInt(newItem?.cartCount ?? 0, 0) - 1 : 0;
    setVolatile(state => ({
      ...state,
      itemArray: newitemArray,
    }));
  };
  const orderStatus = () => {
    navigation.navigate('OrderStatus');
  };
  const deleteAll = () => {
    setVolatile(state => ({
      ...state,
      cartCount: 0,
      hideCart: false,
      itemArray: [],
    }));
  };
  const deleteCart = (event, i) => {
    event.preventDefault();
    const data = volatile.itemArray.slice();
    data.splice(i, 1);
    setVolatile(state => ({
      ...state,
      itemArray: data,
    }));
  };
  const renderItem = ({item, index}) => {
    const itemName = Object.keys(item)[0];
    const cartCount = Object.keys(item)[1];
    return (
      <View style={commonStyle.cartBody}>
        <View style={commonStyle.cartBody}>
          <Text style={styles.cartWidth}> {itemName}</Text>
          <Text style={styles.cartItemPrice}>
            Rs.{item[cartCount] * parseInt(item[itemName], 0)}
          </Text>
          <View style={commonStyle.cartBody}>
            <Text
              style={styles.cartButton}
              onPress={event => decrementCart(index)}>
              -
            </Text>
            <Text style={styles.cartCountStyle}>{item[cartCount]}</Text>
            <Text
              style={styles.cartButton}
              onPress={event => incrementCart(index)}>
              +
            </Text>
          </View>
          <AntIcon
            style={styles.deleteIcon}
            name="delete"
            size={20}
            onPress={event => deleteCart(event, index)}
          />
        </View>
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
          <Text style={commonStyle.heading}>Your Cart</Text>
          <Logout navigation={navigation} />
        </View>
        {volatile.hideCart ? (
          <View
            style={[
              commonStyle.flatListContainerStyle,
              styles.orderContentStyle,
            ]}>
            <TouchableOpacity>
              <Text style={styles.textInput} onPress={orderStatus}>
                Proceed to Order
              </Text>
            </TouchableOpacity>
            <FlatList
              data={volatile.itemArray}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity>
              <View style={styles.deleteSaveButtonContainerStyle}>
                <Text style={styles.deleteWidth} onPress={deleteAll}>
                  Delete
                </Text>
                <Text style={styles.deleteWidth}>Save for later</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={commonStyle.successMessage}>
            Your Order Cart is empty.
          </Text>
        )}
      </SafeAreaView>
    </View>
  );
}
