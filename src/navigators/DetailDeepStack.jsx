import React from 'react';
import styled from 'styled-components/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactScreen from '../screens/ContactScreen';

const DetailDeepStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen //
        name='Contact'
        component={ContactScreen}
        options={{
          title: 'ㄹㅇㄴㅇㄹㅁㄴ',
        }}
      />
    </Stack.Navigator>
  );
};

export default DetailDeepStack;
