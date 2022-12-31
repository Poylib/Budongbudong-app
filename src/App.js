import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNav from './navigators/BottomNav';
import LoginScreen from './screens/LoginScreen';
import Root from './navigators/Root';
const App: () => Node = () => {
  const [loginCheck, setLoginCheck] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('login');
        if (value !== null) {
          setIsLogin(true);
          console.log(value);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [loginCheck]);

  return (
    <>
      {isLogin ? (
        <NavigationContainer>
          {/* <BottomNav /> */}
          <Root />
        </NavigationContainer>
      ) : (
        <LoginScreen setLoginCheck={setLoginCheck} />
      )}
    </>
  );
};

export default App;
