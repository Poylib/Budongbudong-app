import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';
import { blueColor } from '../../theme';

const LoginSwiper = () => {
  return (
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
export const BlueText = styled.Text`
  font-size: 30px;
  color: ${blueColor};
`;

export default LoginSwiper;
