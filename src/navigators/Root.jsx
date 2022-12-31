import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './BottomNav';
import DetailStack from './DetailStack';
import LoginScreen from '../screens/LoginScreen';

const Root = () => {
  const RootNav = createNativeStackNavigator();
  return (
    <RootNav.Navigator>
      <RootNav.Screen //
        name='Tabs'
        component={BottomNav}
        // component={LoginScreen}
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
    </RootNav.Navigator>
  );
};

export default Root;
