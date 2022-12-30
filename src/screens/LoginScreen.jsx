import React from 'react';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

const statusBarHeight = getStatusBarHeight(true);

const LoginScreen = () => {
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
      <SocialLogin></SocialLogin>
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
  background-color: blue;
`;

const KakaoLogin = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: lavenderblush;
`;

export default LoginScreen;
