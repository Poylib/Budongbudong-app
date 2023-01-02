import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTabs from './BottomTabs';
import DetailStack from './DetailStack';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import DetailDeepStack from './DetailDeepStack';

const Root = () => {
  const RootNav = createNativeStackNavigator();
  return (
    <RootNav.Navigator initialRouteName='SplashScreen'>
      <RootNav.Screen //
        name='SplashScreen'
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <RootNav.Screen //
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <RootNav.Screen //
        name='Tabs'
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <RootNav.Screen //
        name='Stack'
        component={DetailStack}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: 'black',
          title: '상세정보',
        }}
      />
      <RootNav.Screen //
        name='DetailDeepStack'
        component={DetailDeepStack}
        options={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'left',
          title: '무슨 학교',
        }}
      />
    </RootNav.Navigator>
  );
};

export default Root;
