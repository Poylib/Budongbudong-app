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
        <SwiperView style={styles.slide1}>
          <CenterText style={styles.text}>Hello Swiper</CenterText>
        </SwiperView>
        <SwiperView style={styles.slide2}>
          <CenterText style={styles.text}>Beautiful</CenterText>
        </SwiperView>
        <SwiperView style={styles.slide3}>
          <CenterText style={styles.text}>And simple</CenterText>
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

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
