import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { greyColor } from '../../theme';
import { DetailContainer, TitleText } from './InvestmentScore';

const SaleInformation = () => {
  return (
    <DetailContainer>
      <TitleText>매물 정보</TitleText>
      <GreyView>
        <Text>아직 거래 나온 매물이 없네요</Text>
      </GreyView>
    </DetailContainer>
  );
};

const GreyView = styled.View`
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 140px;
  margin: 20px auto;

  background-color: ${greyColor};
`;

export default SaleInformation;
