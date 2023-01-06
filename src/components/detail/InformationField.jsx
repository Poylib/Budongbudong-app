import React, { useState } from 'react';
import styled from 'styled-components/native';
import { FilterData, schoolData } from '../../constant';
import { blueColor } from '../../theme';
import CategoryBtn from './CategoryBtn';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { DetailContainer, TitleText } from './InvestmentScore';
import { View } from 'react-native';
import { GreyLine } from './SpaceSelectModal';

const InformationField = () => {
  const [select, setSelect] = useState('');
  const [school, setSchool] = useState('');
  return (
    <DetailContainer>
      <TitleText>분야별 정보</TitleText>
      <ExplainText>
        주변 부동산 대비 <ExplainText color={blueColor}>교통, 교육, 주거환경, 편의시설, 수익률</ExplainText>이 우수합니다.
      </ExplainText>
      <Chart>
        <ExplainText>Chart</ExplainText>
      </Chart>
      <CategoryBtn data={FilterData} setFunc={setSelect} />
      <FilterView>
        <Score>
          <Medal>
            <Ionicons name={'ios-trophy'} size={40} color={blueColor} />
          </Medal>
          <View style={{ width: '70%' }}>
            <FillterText>
              교통점수가 지역내 <FillterText style={{ fontWeight: 'bold' }}>상위 9%</FillterText>입니다
            </FillterText>
            <FillterText style={{ fontSize: 13 }}>
              평택제천선, 평택화성선을 통한 <FillterText style={{ fontSize: 13, color: blueColor }}>고속도로</FillterText> 접근성이 우수합니다.
            </FillterText>
          </View>
        </Score>
      </FilterView>
      <GreyLine />
      <FilterView>
        <Score>
          <Medal>
            <Ionicons name={'ios-trophy'} size={40} color={blueColor} />
          </Medal>
          <View style={{ width: '70%' }}>
            <FillterText>
              교육점수가 지역내 <FillterText style={{ fontWeight: 'bold' }}>상위 9%</FillterText>입니다
            </FillterText>
            <FillterText style={{ fontSize: 13 }}>
              상대적으로 <FillterText style={{ fontSize: 13, color: blueColor }}>유치원</FillterText>의 접근성이 우수합니다.
            </FillterText>
          </View>
        </Score>
        <CategoryBtn data={schoolData} setFunc={setSchool} />
      </FilterView>
      <GreyLine />
      <FilterView>
        <Score>
          <Medal>
            <Ionicons name={'ios-trophy'} size={40} color={blueColor} />
          </Medal>
          <View style={{ width: '70%' }}>
            <FillterText>
              주거환경이 지역내 <FillterText style={{ fontWeight: 'bold' }}>상위 17%</FillterText>입니다
            </FillterText>
            <FillterText style={{ fontSize: 13 }}>
              <FillterText style={{ fontSize: 13, fontWeight: 'bold' }}>지상/지하 </FillterText>주차장이 갖춰져 있고, <FillterText style={{ fontSize: 13, fontWeight: 'bold' }}>가구당 주차대수</FillterText>가 적정하고, 인근에{' '}
              <FillterText style={{ fontSize: 13, fontWeight: 'bold' }}>공원</FillterText>이 가깝습니다
            </FillterText>
          </View>
        </Score>
      </FilterView>
      <GreyLine />
      <FilterView>
        <Score>
          <Medal>
            <Ionicons name={'ios-trophy'} size={40} color={blueColor} />
          </Medal>
          <View style={{ width: '70%' }}>
            <FillterText>
              편의시설이 지역내 <FillterText style={{ fontWeight: 'bold' }}>상위 17%</FillterText>입니다
            </FillterText>
            <FillterText style={{ fontSize: 13 }}>
              상대적으로 주변에 <FillterText style={{ fontSize: 13, color: blueColor }}>쇼핑시설</FillterText>이 적당히 있습니다.
            </FillterText>
            <FillterText style={{ fontSize: 13 }}>
              <FillterText style={{ fontSize: 13, color: blueColor }}>문화시설</FillterText>과<FillterText style={{ fontSize: 13, color: blueColor }}>개인병원</FillterText>이 적당히 있습니다.
            </FillterText>
          </View>
        </Score>
      </FilterView>
    </DetailContainer>
  );
};

const ExplainText = styled.Text`
  color: ${({ color }) => color};
`;

const Chart = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 90%;
  height: 300px;
  background-color: lightgrey;
`;

const FilterView = styled.View`
  margin: 20px 0;
`;

const Score = styled.View`
  flex-direction: row;
  align-items: center;
`;
const FillterText = styled.Text`
  margin-bottom: 10px;
  width: 100%;
  font-size: 15px;
`;
const Medal = styled.View`
  margin: 20px;
  width: 60px;
  height: 60px;
`;

export default InformationField;
