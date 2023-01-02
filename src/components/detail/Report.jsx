import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { blueColor } from '../../theme';
import Carousel from './Carousel';
import { DetailContainer, TitleText } from './InvestmentScore';
import { HorizontalBorder, MoreButton, MoreText } from './TransactionPrice';
import reportData from '../../../mock/reportData.json';
const Report = () => {
  const navigation = useNavigation();
  const screenWidth = Math.round(Dimensions.get('window').width);
  return (
    <DetailContainer>
      <TitleText>레포트로 보는 단지</TitleText>
      <View style={{ marginVertical: 15 }}>
        <Text>해당 단지의 지역에 대해 부동부동이 준비한 분석을</Text>
        <Text>
          <Text style={{ color: blueColor }}>부동부동 레포트로</Text> 만나보세요!
        </Text>
      </View>
      <Carousel //
        gap={12}
        offset={15}
        pages={reportData}
        pageWidth={screenWidth - (12 + 15) * 2}
      />
      <HorizontalBorder />
      <MoreButton onPress={() => navigation.replace('Tabs', { screen: '레포트' })}>
        <MoreText>더 많은 컨텐츠 보러가기</MoreText>
      </MoreButton>
    </DetailContainer>
  );
};

export default Report;
