import React from 'react';
import type { Node } from 'react';
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNav from './navigators/BottomNav';

const App: () => Node = () => {
  return (
    <>
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    </>
  );
};

export default App;
