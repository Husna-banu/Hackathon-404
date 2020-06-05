import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Dashboard from './Dashboard';
import ServiceLists from './ServiceLists';
import ServiceDetails from './ServiceDetails';
import AdminDashboard from './Admin/Dashboard';
import AdminService from './Admin/Services';
import AdminServiceDetails from './Admin/ServiceDetails';
import AdminServiceOwnerDetails from './Admin/ServicesOwnerDetails';
import Order from './Order';
import Covid9Info from './Covid9Info';
import OrderStatus from './OrderStatus';
import { AccessProvider } from './utils/AppContext/loginContext'

const Stack = createStackNavigator();
export default function AppRoute() {
  return (
    <AccessProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ServiceLists" component={ServiceLists} />
          <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
          <Stack.Screen name="Order" component={Order} />
          <Stack.Screen name="OrderStatus" component={OrderStatus} />
          <Stack.Screen name="Covid9Info" component={Covid9Info} />
          <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
          <Stack.Screen name="AdminService" component={AdminService} />
          <Stack.Screen name="AdminServiceDetails" component={AdminServiceDetails} />
          <Stack.Screen name="AdminServiceOwnerDetails" component={AdminServiceOwnerDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </AccessProvider>
  );
}
