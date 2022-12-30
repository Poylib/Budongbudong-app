import React, { useState } from 'react';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { login } from '@react-native-seoul/kakao-login';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

const statusBarHeight = getStatusBarHeight(true);

const LoginScreen = () => {
  const [result, setResult] = useState('');
  const signInWithKakao = async () => {
    try {
      const token = await login();
      setResult(JSON.stringify(token));
      console.log(result);
    } catch (err) {
      console.error('login err', err);
    }
  };
  return (
    <>
      <Swiper //
        containerStyle={{ marginTop: statusBarHeight }}
        showsButtons={false}
        paginationStyle={{ top: 15, alignItems: 'flex-start' }}
        activeDotStyle={{ width: 25 }}
        autoplay={true}
        autoplayTimeout={1.5}>
        <SwiperView>
          <CenterText>Hello Swiper</CenterText>
        </SwiperView>
        <SwiperView>
          <CenterText>Beautiful</CenterText>
        </SwiperView>
        <SwiperView>
          <CenterText>And simple</CenterText>
        </SwiperView>
      </Swiper>
      <SocialLogin>
        <KakaoLogin //
          activeOpacity={1}
          onPress={() => signInWithKakao()}>
          <KakaoImg source={require('../../assets/icons/kakao_login.png')} />
          <KakaoText>카카오톡 로그인</KakaoText>
        </KakaoLogin>
      </SocialLogin>
    </>
  );
};

const LoginScreenContainer = styled.View`
  margin-top: ${statusBarHeight}px;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const SwiperView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const CenterText = styled.Text`
  font-size: 40px;
  font-weight: bold;
`;

const SocialLogin = styled.View`
  height: 30%;
  width: 100%;
  padding: 30px 20px;
`;

const KakaoLogin = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #fee500;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const KakaoImg = styled.Image`
  position: absolute;
  left: 85px;
  width: 20px;
  height: 20px;
`;

const KakaoText = styled.Text`
  font-size: 20px;
  margin: 0 auto;
`;
export default LoginScreen;
