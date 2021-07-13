import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StarMapScreen from './screens/StarMap';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
          <Stack.Screen name="DailyPic" component={DailyPicScreen} />
          <Stack.Screen name="StarMap" component={StarMapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


