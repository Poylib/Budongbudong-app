import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { greyColor } from '../../theme';
import { DetailContainer, TitleText } from './InvestmentScore';

const SaleInformation = () => {
  return (
    <DetailContainer>
      <TitleText>매물 정보</TitleText>
      <View>
        <BackImg source={require('../../../assets/images/blank.png')} />
        <BlankText>아직 거래 나온 매물이 없네요</BlankText>
      </View>
    </DetailContainer>
  );
};

const BackImg = styled.Image`
  margin: 0 auto 30px auto;
  width: 80%;
  height: 240px;
`;

const BlankText = styled.Text`
  position: absolute;
  top: 55%;
  left: 27%;
`;

export default SaleInformation;
