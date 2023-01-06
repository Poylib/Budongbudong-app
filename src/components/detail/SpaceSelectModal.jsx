import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { blueColor, greyColor } from '../../theme';

const SpaceSelectModal = ({ setIsOpen, moveScroll }) => {
  const closeModal = () => {
    moveScroll();
    setIsOpen(false);
  };
  return (
    <Container>
      <TitleRow>
        <Title>아파트 평형 선택</Title>
        <CloseBtn
          onPress={() => {
            setIsOpen(false);
            closeModal();
          }}>
          <Text style={{ color: 'grey' }}>닫기</Text>
        </CloseBtn>
      </TitleRow>
      <ContentTouch onPress={() => closeModal()}>
        <ContentRow>
          <TextView width={45}>
            <BoldBlue>33평형</BoldBlue>
            <ThinBlue>공급 108㎡</ThinBlue>
          </TextView>
          <TextView width={30}>
            <BoldBlue>매매</BoldBlue>
            <BoldBlue>3.2억원</BoldBlue>
          </TextView>
        </ContentRow>
        <ContentRow>
          <TextView width={45}>
            <ThinBlue>140세대</ThinBlue>
            <ThinBlue>공급 108㎡</ThinBlue>
          </TextView>
          <TextView width={30}>
            <BoldBlue>전세</BoldBlue>
            <BoldBlue>3.2억원</BoldBlue>
          </TextView>
        </ContentRow>
      </ContentTouch>
      <GreyLine />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  margin-top: 170px;
  padding: 25px;
  background-color: white;
  border-radius: 15px;
`;
const TitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const CloseBtn = styled.TouchableOpacity.attrs({ activeOpacity: 1 })``;

const ContentRow = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const BoldBlue = styled.Text`
  color: ${blueColor};
  font-weight: 700;
  font-size: 15px;
`;
const ThinBlue = styled.Text`
  color: ${blueColor};
`;

const TextView = styled.View`
  width: ${({ width }) => width}%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContentTouch = styled.TouchableOpacity.attrs({ activeOpacity: 1 })``;

export const GreyLine = styled.View`
  width: 100%;
  background-color: ${greyColor};
  height: 1px;
`;

export default SpaceSelectModal;
