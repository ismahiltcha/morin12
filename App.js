import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScanScreen from './screens/ScanScreen';
import ActionScreen from './screens/ActionScreen';
import SuccessScreen from './screens/SuccessScreen';
import ActionSelectionScreen from './screens/ActionSelectionScreen';
import LoginScreen from './screens/LoginScreen';  // Import LoginScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Ensure only Stack.Screen components are direct children */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="ActionSelection" component={ActionSelectionScreen} />
        <Stack.Screen name="Action" component={ActionScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
