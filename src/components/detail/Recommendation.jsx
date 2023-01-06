import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { AirbnbRating } from 'react-native-ratings';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { blueColor, greyColor, SCREEN_WIDTH, styles } from '../../theme';
import { DetailContainer, TitleText } from './InvestmentScore';
import { NameRow } from './TransactionPrice';
import SearchData from '../../../mock/SearchData.json';
import { imgArr } from '../../constant/buildingImg';
import { LikeButton } from './Title';
import { pushDetail, WonConversion } from '../../utils';
import { useNavigation } from '@react-navigation/native';
const Recommendation = ({ data }) => {
  const { getItem, setItem } = useAsyncStorage('rating');
  const [rating, setRating] = useState(0);
  const [randomData, setRandomData] = useState(SearchData);
  const writeItemToStorage = async newValue => {
    await setItem(newValue);
    setRating(newValue);
  };
  const shuffleArray = array => {
    const ran = array.sort(() => Math.random() - 0.5);
    return ran;
  };
  useEffect(() => {
    (async () => {
      const item = await getItem();
      if (item !== null) setRating(item);
      else setRating(5);
    })();
    setRandomData(
      shuffleArray(SearchData)
        .slice(0, 6)
        .filter(el => el.text !== data.name),
    );
  }, []);
  return (
    <>
      <DetailContainer>
        <NameRow>
          <TitleText>부동부동 추천 집</TitleText>
          <MoreBtn>
            <Text style={{ color: blueColor }}>더보기 +</Text>
          </MoreBtn>
        </NameRow>
        <RecList //
          data={randomData}
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
    </>
  );
};

const RecCard = ({ data }) => {
  const [recLike, setRecLike] = useState(false);
  const navigation = useNavigation();
  return (
    <Card style={styles.shadow} onPress={() => pushDetail(navigation, data.text)}>
      <ImgView>{data.img ? <Img source={{ uri: data.img }} /> : <Icon source={imgArr[data.id % 5]} />}</ImgView>
      <TextView>
        <View>
          <BoldText>
            {data.text.length > 5 ? data.text.slice(0, 5) + '... ' : data.text}
            {` `}
            <GreyText>
              매매 {WonConversion(data.price)} 전세 {WonConversion(data.leasePrice)}
            </GreyText>
          </BoldText>
          <GreyText style={{ paddingVertical: 5 }}>
            {data.address} | {data.pyeong}
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
  padding: 5px 0;
  margin-bottom: 30px;
  height: 230px;
  width: 110%;
`;

const Card = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  width: 300px;
  height: 90%;
  border-radius: 10px;
`;
const ImgView = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${greyColor};
`;
const Img = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Icon = styled.Image`
  width: 80px;
  height: 100px;
`;

const TextView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
`;

const GreyText = styled.Text.attrs({ ellipsizeMode: 'tail', numberOfLines: 1 })`
  font-size: 12px;
  font-weight: 400;
  color: grey;
`;
const BoldText = styled.Text.attrs({ ellipsizeMode: 'tail', numberOfLines: 1 })`
  font-weight: 600;
  font-size: 16px;
`;

const RatingView = styled.View`
  align-items: center;
  justify-content: center;
`;

export default Recommendation;
