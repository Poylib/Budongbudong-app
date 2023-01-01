import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { DetailContainer, TitleText } from './InvestmentScore';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { greyColor } from '../../theme';

const TransactionPrice = () => {
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
      <PriceCategory></PriceCategory>
    </DetailContainer>
  );
};

const NameRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const TitleToggle = styled.TouchableOpacity`
  height: 25px;
  width: 85px;
  justify-content: center;
  flex-direction: row;
`;

const PriceCategory = styled.View`
  flex-direction: row;
  background-color: ${greyColor};
  border-radius: 15px;
  margin: 10px 0;
  width: 100%;
  height: 30px;
`;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black', // IOS
    shadowOffset: { height: 1.4, width: 0 }, // IOS
    shadowOpacity: 0.3, // IOS
    shadowRadius: 2, //IOS
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5, // Android
    alignItems: 'center',
  },
});
export default TransactionPrice;
