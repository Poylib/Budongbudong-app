import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { DetailContainer, TitleText } from './InvestmentScore';

const BasicInformation = () => {
  const rowArr = ['주소', '준공년월', '세대수', '주차가능수', '난방'];
  const dataArr = ['경기도 오산시 중앙동 865-1', '2006년 04월', '169세대 (총1개동)', '1.04대', '개별난방, 도시가스'];
  return (
    <DetailContainer>
      <TitleText>단지 기본정보</TitleText>
      <TextView>
        {rowArr.map((row, idx) => {
          return (
            <TextRow key={`${idx}`}>
              <BasicName>{row}</BasicName>
              <Text>{dataArr[idx]}</Text>
            </TextRow>
          );
        })}
      </TextView>
      <MapView>
        <Map source={require('../../../assets/images/map.png')}></Map>
      </MapView>
    </DetailContainer>
  );
};

const TextView = styled.View`
  margin: 20px auto;
  height: 180px;
  width: 90%;
`;

const TextRow = styled.View`
  flex-direction: row;
  padding: 10px 0;
`;
const BasicName = styled.Text`
  width: 90px;
  color: grey;
`;
const MapView = styled.View`
  justify-content: center;
  align-items: center;
  height: 170px;
  width: 90%;
  margin: 0 auto 30px auto;
`;
const Map = styled.Image`
  width: 100%;
  height: 100%;
`;

export default BasicInformation;
