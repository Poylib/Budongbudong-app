import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { DetailContainer, TitleText } from './InvestmentScore';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { greyColor } from '../../theme';
import { BlueText } from '../swiper/LoginSwiper';
import CategoryBtn from './CategoryBtn';
import { periodData, priceData } from '../../constant/CategoryBtn';

const TransactionPrice = () => {
  const [pickKind, setPickKind] = useState(priceData.dataSet[0].title);
  const [pickPeriod, setpickPeriod] = useState(periodData.dataSet[0].title);
  return (
    <DetailContainer>
      <NameRow>
        <TitleText>실거래가 정보</TitleText>
        <TitleToggle //
          containerStyle={{ overflow: 'visible' }}
          style={styles.shadow}
          activeOpacity={1}>
          <Text style={{ fontSize: 13 }}>36평형</Text>
          <AntDesign name={'down'} size={10} />
        </TitleToggle>
      </NameRow>
      <CategoryBtn //
        data={priceData}
        setFunc={setPickKind}
      />
      <Average>
        <AverageView>
          <Text style={{ fontSize: 12 }}>최근 실거래가 평균</Text>
          <Text style={{ fontSize: 12 }}>(3건 평균)</Text>
        </AverageView>
        <AverageView>
          <BlueText style={{ fontWeight: 'bold', fontSize: 30 }}>33.4억원</BlueText>
        </AverageView>
      </Average>
      <HorizontalBorder />
      <PeriodCategory>
        <CategoryBtn //
          data={periodData}
          setFunc={setpickPeriod}
        />
        <GraphSection>
          <Text>Graph</Text>
        </GraphSection>
        <TradeTitleRow>
          <Text>계약일</Text>
          <Text>가격</Text>
          <Text>타입</Text>
          <Text>층</Text>
        </TradeTitleRow>
      </PeriodCategory>
      <HorizontalBorder />
      <MoreButton>
        <Text>실거래가 더보기 +</Text>
      </MoreButton>
    </DetailContainer>
  );
};

const NameRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const TitleToggle = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  height: 25px;
  width: 85px;
  justify-content: center;
  background-color: white;
  flex-direction: row;
  border-radius: 10px;
`;

const Average = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 90px;
`;

const AverageView = styled.View`
  width: 50%;
  align-items: center;
`;

const HorizontalBorder = styled.View`
  position: static;
  left: -20px;
  width: 110%;
  height: 2px;
  background-color: ${greyColor};
`;

const PeriodCategory = styled.View`
  margin: 20px 0;
`;
const GraphSection = styled.View`
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  height: 300px;
`;

const TradeTitleRow = styled.View`
  padding: 0 30px;
  flex-direction: row;
  justify-content: space-between;
`;
const TradeRow = styled.View`
  flex-direction: row;
  padding: 0 20px;
  justify-content: space-between;
`;
const MoreButton = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  height: 60px;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
`;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black', // IOS
    shadowOffset: { height: 1.4, width: 0 }, // IOS
    shadowOpacity: 0.3, // IOS
    shadowRadius: 2, //IOS
    elevation: 5, // Android
    alignItems: 'center',
  },
});
export default TransactionPrice;
