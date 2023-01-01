import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { blueColor } from '../../theme';
import { Line } from '../search/PriceGraph';

const InvestmentScore = () => {
  return (
    <DetailContainer>
      <TitleText>투자 항목 점수</TitleText>
      <ContentColumn>
        <ContentRow>
          <RowName>전세가율</RowName>
          <StatsBox>
            <Text>58.4 %</Text>
            <Line bold={true} />
            <RowPercent>상위 69%</RowPercent>
          </StatsBox>
        </ContentRow>
        <ContentRow>
          <RowName>갭가격</RowName>
          <StatsBox>
            <Text>1.5억원</Text>
            <Line bold={true} />
            <RowPercent>상위 44%</RowPercent>
          </StatsBox>
        </ContentRow>
        <ContentRow>
          <RowName>시가총액</RowName>
          <StatsBox>
            <Text>703.7억원</Text>
            <Line bold={true} />
            <RowPercent>상위 56%</RowPercent>
          </StatsBox>
        </ContentRow>
        <ContentRow>
          <RowName>평당매매가</RowName>
          <StatsBox>
            <Text>1.4천만원</Text>
            <Line bold={true} />
            <RowPercent>상위 42%</RowPercent>
          </StatsBox>
        </ContentRow>
      </ContentColumn>
    </DetailContainer>
  );
};
export const DetailContainer = styled.View`
  width: 100%;
  padding: 25px 15px;
  margin-bottom: 15px;
  background-color: white;
`;
export const TitleText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  /* margin-bottom: 20px; */
`;

const ContentColumn = styled.View`
  margin-top: 20px;
`;
const ContentRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 10px;
`;

const RowName = styled.Text`
  font-size: 15px;
`;
const StatsBox = styled.View`
  align-items: center;
  flex-direction: row;
`;
const RowPrice = styled.Text``;
const RowPercent = styled.Text`
  color: ${blueColor};
`;

export default InvestmentScore;
