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
        <BlankChart source={require('../../../assets/images/blank_graph.png')} />
      </Chart>
    </DetailContainer>
  );
};

const Chart = styled.View`
  align-items: center;
  margin: 20px auto;
  width: 90%;
  height: 250px;
`;

const BlankChart = styled.Image`
  width: 90%;
  height: 230px;
`;

export default Prediction;
