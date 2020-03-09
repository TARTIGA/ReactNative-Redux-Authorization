import React, { useState } from 'react'
import { AutorizationScreen, HomeScreen } from './screens'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store'

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const RootStack = createStackNavigator();


import { connect } from 'react-redux';

//don`t use expressions
const AppStackScreen = () =>
  <AppStack.Navigator >
    <AppStack.Screen name="Home" component={HomeScreen} />
  </AppStack.Navigator>

const AuthStackScreen = () =>
  <AuthStack.Navigator >
    <AuthStack.Screen name="Authorization" component={AutorizationScreen} options={{
      headerShown: false
    }} />
  </AuthStack.Navigator>

const RootStackScreen = ({ userToken }) =>
  <RootStack.Navigator headerMode="none">
    {userToken ?
      <RootStack.Screen name="App" component={AppStackScreen} /> :
      <RootStack.Screen name="Auth" component={AuthStackScreen} />}
  </RootStack.Navigator>


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
}

export default App;