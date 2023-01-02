import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { blueColor } from '../../theme';
import { DetailContainer, TitleText } from './InvestmentScore';
import { HorizontalBorder, MoreButton } from './TransactionPrice';

const Report = () => {
  const navigation = useNavigation();
  return (
    <DetailContainer>
      <TitleText>레포트로 보는 단지</TitleText>
      <View style={{ marginVertical: 15 }}>
        <Text>해당 단지의 지역에 대해 부동부동이 준비한 분석을</Text>
        <Text>
          <Text style={{ color: blueColor }}>부동부동 레포트로</Text> 만나보세요!
        </Text>
      </View>
      <HorizontalBorder />
      <MoreButton onPress={() => navigation.replace('Tabs', { screen: '레포트' })}>
        <Text>더 많은 컨텐츠 보러가기</Text>
      </MoreButton>
    </DetailContainer>
  );
};

export default Report;
