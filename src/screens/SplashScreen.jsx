import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { blueColor } from '../theme';

const SplashScreen = () => {
  const [animating, setAnimaing] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      setAnimaing(false);
      AsyncStorage.getItem('login').then(value => navigation.replace(value === null ? 'Login' : 'Tabs'));
    }, 1500);
  }, []);
  return (
    <SplashScreenContainer>
      <LogoImage source={require('../../assets/icons/main_icon.png')} />
      <ActivityIndicator //
        animating={animating}
        color={blueColor}
        size='large'
      />
    </SplashScreenContainer>
  );
};

const SplashScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const LogoImage = styled.Image`
  margin: 30px;
  width: 80px;
  height: 80px;
`;

export default SplashScreen;
