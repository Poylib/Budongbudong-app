import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomNav from './navigators/BottomNav';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'red' : 'grey',
    color: isDarkMode ? 'blue' : 'white',
  };

  return (
    <>
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    </>
  );
};

export default App;
