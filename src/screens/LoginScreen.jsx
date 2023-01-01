import React, { useState } from 'react';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '@react-native-seoul/kakao-login';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { blueColor } from '../theme';

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
        <Swiper //
          style={{ height: 550 }}
          showsButtons={false}
          paginationStyle={{ top: 15, alignItems: 'flex-start' }}
          activeDotStyle={{ width: 25 }}
          autoplay={true}
          autoplayTimeout={1.5}>
          <SwiperView>
            <TextRow>
              <BlackText>내 상황에 맞는</BlackText>
            </TextRow>
            <TextRow>
              <BlackText>아파트 거래</BlackText>
              <BlueText> 시뮬레이션</BlueText>
            </TextRow>
          </SwiperView>
          <SwiperView>
            <TextRow>
              <BlackText>내</BlackText>
              <BlueText> 선호도</BlueText>
              <BlackText>에 따른</BlackText>
            </TextRow>
            <TextRow>
              <BlackText>전국 아파트</BlackText>
              <BlueText> 매물 추천</BlueText>
            </TextRow>
          </SwiperView>
          <SwiperView>
            <TextRow>
              <BlackText>전국 어디서든</BlackText>
            </TextRow>
            <TextRow>
              <BlueText>딱 </BlueText>
              <BlackText>맞는 아파트</BlackText>
              <BlueText> 분석</BlueText>
            </TextRow>
          </SwiperView>
          <SwiperView>
            <TextRow>
              <BlackText>거래시기별</BlackText>
            </TextRow>
            <TextRow>
              <BlueText>세금 </BlueText>
              <BlackText>비교 및</BlackText>
              <BlueText> 타이밍 </BlueText>
              <BlackText>까지</BlackText>
            </TextRow>
          </SwiperView>
          <SwiperView>
            <TextRow>
              <BlackText>빅데이터 기반</BlackText>
            </TextRow>
            <TextRow>
              <BlackText>부동산</BlackText>
              <BlueText> 시황분석 레포트</BlueText>
            </TextRow>
          </SwiperView>
        </Swiper>
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

const SwiperView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BlackText = styled.Text`
  font-size: 30px;
`;
const BlueText = styled.Text`
  font-size: 30px;
  color: ${blueColor};
`;

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
