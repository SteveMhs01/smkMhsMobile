import {View, Text, Image} from 'react-native';
import React from 'react';
import Home from './src/pages/Home';
import Burger from './src/pages/Burger'
import Sukses from './src/pages/Sukses'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Burger" component={Burger} />
        <Stack.Screen name="Sukses" component={Sukses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
