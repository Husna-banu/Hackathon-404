import React from 'react';
import {View, Text, Button, StatusBar, SafeAreaView} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Welcome to Home Page</Text>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </SafeAreaView>
    </View>
  );
}
