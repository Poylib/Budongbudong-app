import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';

const DetailStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen //
        name='Detail'
        component={DetailScreen}
        options={{
          title: '상세정보',
        }}
      />
    </Stack.Navigator>
  );
};

export default DetailStack;
