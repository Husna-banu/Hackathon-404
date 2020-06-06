import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  useAccessState,
  useAccessDispatch,
} from '../../utils/AppContext/loginContext';

const Logout = ({navigation}) => {
  const {loginName} = useAccessState();
  const dispatch = useAccessDispatch();

  const logout = () => {
    dispatch({type: 'logout', payload: loginName});
    navigation.navigate('Login');
  };
  return (
    <AntDesign
      style={{position: 'absolute', right: 10}}
      name="logout"
      size={20}
      onPress={logout}
    />
  );
};

export default Logout;
