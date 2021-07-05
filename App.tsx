/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import OtherScreen from './pages/OtherMainScreen';
import Screens from './pages/Screens';

export type Props = {
  route: any,
  navigation: any
}

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const DetailScreen = () => {
  return (
    <></>
  )
}

const TabScreen = () => {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: '#e91e63'}}>
      <Tab.Screen name='Home' component={HomeScreen} 
      options={{
        tabBarBadge: 1,
        tabBarIcon: ({size, color}) => (<Ionicons name='logo-react' size={size} color={color}></Ionicons>),
      }}/>
      <Tab.Screen name='Other' component={OtherScreen}
      options={{
          tabBarIcon: ({size, color}) => (<Ionicons name='apps-outline' size={size} color={color}></Ionicons>),
        }} />
    </Tab.Navigator>
  )
}

const App = () => {
  var screens = []
  screens.push(<Stack.Screen name='Tab' component={TabScreen} />)
  screens.push(<Stack.Screen name='Detail' component={DetailScreen} />)
  Screens.forEach((item) => {
    screens.push(<Stack.Screen name={item.name} component={item.component}/>)
  })
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {screens}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;