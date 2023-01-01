import React, { useState } from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '@react-native-seoul/kakao-login';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { blueColor } from '../theme';
import LoginSwiper from '../components/swiper/LoginSwiper';

const LoginScreen = () => {
  const navigation = useNavigation();
  const signInWithKakao = async () => {
    try {
      const data = await login();
      const test = JSON.parse(JSON.stringify(data));
      storeData(test.accessToken);
      navigation.replace('Tabs');
    } catch (err) {
      console.error('login err', err);
    }
  };

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('login', jsonValue);
      console.log('Store data done');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <LoginSwiper />
        <SocialLogin>
          <KakaoLogin //
            activeOpacity={1}
            onPress={() => signInWithKakao()}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <KakaoImg source={require('../../assets/icons/kakao_login.png')} />
              <KakaoText>카카오톡 로그인</KakaoText>
            </View>
          </KakaoLogin>
        </SocialLogin>
      </ScrollView>
    </SafeAreaView>
  );
};

const SocialLogin = styled.View`
  height: 30%;
  padding: 30px 20px;
`;

const KakaoLogin = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  background-color: #fee500;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const KakaoImg = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 7px;
`;

const KakaoText = styled.Text`
  font-size: 20px;
  margin: 0 auto;
`;
export default LoginScreen;
