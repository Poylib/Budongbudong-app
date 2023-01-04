import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { AirbnbRating } from 'react-native-ratings';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { blueColor, greyColor, styles } from '../../theme';
import { DetailContainer, TitleText } from './InvestmentScore';
import { NameRow } from './TransactionPrice';
import RecData from '../../../mock/RecData.json';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { LikeButton } from './Title';
import { getData } from '../../utils';
const Recommendation = () => {
  const { getItem, setItem } = useAsyncStorage('rating');
  const [rating, setRating] = useState(5);

  const readItemFromStorage = async () => {
    const item = await getItem();
    if (item !== null) setRating(item);
    else setRating(5);
  };

  const writeItemToStorage = async newValue => {
    await setItem(newValue);
    setRating(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);
  return (
    <DetailContainer>
      <NameRow>
        <TitleText>부동부동 추천 집</TitleText>
        <MoreBtn>
          <Text style={{ color: blueColor }}>더보기 +</Text>
        </MoreBtn>
      </NameRow>
      <RecList //
        data={RecData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RecCard data={item} />}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        ItemSeparatorComponent={() => <View style={{ width: 20, marginHorizontal: 5, backgroundColor: 'white' }} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        bounces={false}
        alwaysBounceHorizontal={false}
      />
      <RatingView>
        <BoldText>만족도를 입력해 주셔서 감사합니다</BoldText>
        <AirbnbRating //
          unSelectedColor={greyColor}
          defaultRating={Number(rating)}
          onFinishRating={rate => writeItemToStorage(String(rate))}
          ratingContainerStyle={{ paddingTop: 5, height: 30 }}
          reviews={[]}
          size={30}
        />
        <View style={{ marginVertical: 30, alignItems: 'center' }}>
          <GreyText>계속 발전하는 추천 아파트 알고리즘에</GreyText>
          <GreyText>만족도가 바뀌셨다면 수정해주세요</GreyText>
        </View>
      </RatingView>
    </DetailContainer>
  );
};

const RecCard = ({ data }) => {
  const [recLike, setRecLike] = useState(false);
  return (
    <Card style={styles.shadow}>
      <ImgView>{data.img ? <Img source={{ uri: data.img }} /> : <Icon source={require('../../../assets/images/red_building.png')} />}</ImgView>
      <TextView>
        <View>
          <BoldText>
            {data.name}
            {` `}
            <GreyText>
              매매 {data.salePrice}억원 전세 {data.leasePrice}억원
            </GreyText>
          </BoldText>
          <GreyText style={{ paddingVertical: 5 }}>
            {data.address} | {data.area}평
          </GreyText>
        </View>
        <LikeButton onPress={() => setRecLike(!recLike)}>
          <AntDesign name={'heart'} size={18} color={recLike ? blueColor : 'lightgrey'} />
        </LikeButton>
      </TextView>
    </Card>
  );
};

const MoreBtn = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 30px;
  border: 1px solid ${blueColor};
  border-radius: 10px;
`;

const RecList = styled.FlatList`
  position: static;
  left: -15px;
  height: 230px;
  width: 110%;
  padding: 5px 0;
  margin-bottom: 30px;
`;

const Card = styled.View`
  width: 300px;
  height: 90%;
  border-radius: 10px;
`;
const ImgView = styled.View`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
  background-color: ${greyColor};
`;
const Img = styled.Image`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: 100%;
`;

const Icon = styled.Image`
  width: 80px;
  height: 100px;
`;

const TextView = styled.View`
  flex-direction: row;
  padding: 10px 15px;
  justify-content: space-between;
`;

const GreyText = styled.Text`
  font-size: 13px;
  color: grey;
  font-weight: 400;
`;
const BoldText = styled.Text`
  font-weight: 600;
  font-size: 17px;
`;

const RatingView = styled.View`
  align-items: center;
  justify-content: center;
`;

export default Recommendation;
