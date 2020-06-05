import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default Logout = ({ navigation }) => {
  const logout = () => {
    navigation.navigate('Login');
  };
  return (
    <AntDesign
      style={{marginLeft: '45%'}}
      name="logout"
      size={20}
      onPress={logout}
    />
  );
};