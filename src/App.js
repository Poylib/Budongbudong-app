import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNav from './navigators/BottomNav';
import LoginScreen from './screens/LoginScreen';

const App: () => Node = () => {
  const [loginCheck, setLoginCheck] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('storage_key');
        if (value !== null) {
          setLoginCheck(true);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@storage_key', value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loginCheck ? (
        <NavigationContainer>
          <BottomNav />
        </NavigationContainer>
      ) : (
        <LoginScreen />
      )}
    </>
  );
};

export default App;
