import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';
import commonStyle from '../commonStyles';
import styles from './style';

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
    setVolatile(state => ({
      ...state,
      cartCount: volatile && volatile.cartCount + 1,
    }));
  };
  const decrementCart = i => {
    setVolatile(state => ({
      ...state,
      cartCount: volatile && volatile.cartCount > 0 && volatile.cartCount - 1,
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
  const renderItem = (item, index) => {
    return (
      <View style={commonStyle.cartBody}>
        {Object.keys(item).map((key, i) => (
          <View style={commonStyle.cartBody}>
            <Text style={styles.cartWidth}> {key}</Text>
            <Text style={{color: 'blue', marginRight: 20, marginTop: 10}}>
              {item[key]}
            </Text>
            <View style={commonStyle.cartBody}>
              <Text
                style={styles.cartButton}
                onPress={event => decrementCart(index)}>
                -
              </Text>
              <Text style={{padding: 5}}>{volatile.cartCount}</Text>
              <Text
                style={styles.cartButton}
                onPress={event => incrementCart(index)}>
                +
              </Text>
            </View>
            <AntIcon
              style={{marginLeft: 10, marginTop: 10}}
              name="delete"
              size={20}
              onPress={event => deleteCart(event, index)}
            />
          </View>
        ))}
      </View>
    );
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
          <AntIcon
            style={{marginLeft: 200}}
            name="logout"
            size={20}
            onPress={logout}
          />
        </View>
        {volatile.hideCart ? (
          <View>
            <TouchableOpacity>
              <Text style={styles.textInput} onPress={orderStatus}>
                Proceed to Order
              </Text>
            </TouchableOpacity>
            {volatile.itemArray.map((item, index) => renderItem(item, index))}
            <TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
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
