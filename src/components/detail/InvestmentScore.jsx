import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { blueColor } from '../../theme';
import { Line } from '../search/PriceGraph';

const InvestmentScore = () => {
  const titleText = ['전세가율', '갭가격', '시가총액', '평당매매가'];

  const WonConversion = num => {
    if (num >= 100000000) return `${String(Math.ceil((num / 100000000) * 10) / 10)}억`;
    else return `${String(Math.ceil((num / 10000000) * 10) / 10)}천만`;
  };
  const arr = [
    {
      id: 1,
      value: '68.5%',
      top: '68%',
    },
    {
      id: 2,
      value: 130000000,
      top: '68%',
    },
    {
      id: 3,
      value: 58.4,
      top: '68%',
    },
    {
      id: 4,
      value: 58.4,
      top: '68%',
    },
  ];
  return (
    <DetailContainer>
      <TitleText>투자 항목 점수</TitleText>
      <ContentColumn>
        {arr.map((row, idx) => {
          return (
            <ContentRow key={row.id}>
              <RowName>{titleText[idx]}</RowName>
              <StatsBox>
                <Text>{typeof row.value === 'number' ? WonConversion(row.value) : row.value}</Text>
                <Line bold={true} />
                <RowPercent>상위 {row.top}</RowPercent>
              </StatsBox>
            </ContentRow>
          );
        })}
      </ContentColumn>
    </DetailContainer>
  );
};
export const DetailContainer = styled.View`
  width: 100%;
  padding: 25px 15px 0 15px;
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
  margin-bottom: 30px;
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
