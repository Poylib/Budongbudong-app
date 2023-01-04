import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { greyColor } from '../../theme';
import { DetailContainer, TitleText } from './InvestmentScore';

const Prediction = () => {
  return (
    <DetailContainer>
      <TitleText>부동부동 시세 예측</TitleText>
      <Chart>
        <Text>Chart</Text>
      </Chart>
    </DetailContainer>
  );
};

const Chart = styled.View`
  width: 90%;
  height: 250px;
  background-color: ${greyColor};
  margin: 20px auto;
  align-items: center;
  justify-content: center;
`;

export default Prediction;
