import styled from 'styled-components/native';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { blueColor, greyColor } from '../../theme';
import { pushDetail } from '../../utils';
const Title = ({ activeLike, like, otherRank, data }) => {
  const navigation = useNavigation();
  return (
    data && (
      <TitleContainer>
        <RankBox>
          <SmallRanking>{otherRank[0].rank}위</SmallRanking>
          <BigRankig>
            <View>
              <Ionicons name={'stats-chart'} color={'white'} size={23} />
              <Hline />
            </View>
            <View style={{ paddingLeft: 7, alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: 'white' }}>순위</Text>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>{data.rank}위</Text>
            </View>
          </BigRankig>
          <SmallRanking>{otherRank[1].rank}위</SmallRanking>
        </RankBox>
        <TextBox>
          {otherRank[0].rank !== 0 && (
            <RankBtn onPress={() => pushDetail(navigation, otherRank[0].name)}>
              <LightText>{otherRank[0].name}</LightText>
            </RankBtn>
          )}
          <BoldText>{data.name}</BoldText>
          <RankBtn onPress={() => pushDetail(navigation, otherRank[1].name)}>
            <LightText>{otherRank[1].name}</LightText>
          </RankBtn>
        </TextBox>
        <LikeButton onPress={activeLike}>
          <AntDesign name={'heart'} size={18} color={like ? blueColor : 'lightgrey'} />
        </LikeButton>
      </TitleContainer>
    )
  );
};

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 15px;
  background-color: white;
`;

const SmallRanking = styled.Text`
  margin: 2px 0;
  font-size: 11px;
  color: lightgrey;
`;
const RankBox = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 80px;
`;

const BigRankig = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: ${blueColor};
`;
const BoldText = styled.Text.attrs({ ellipsizeMode: 'tail', numberOfLines: 1 })`
  margin: 3px 0;
  font-size: 24px;
  font-weight: 600;
`;
const Hline = styled.View`
  width: 100%;
  height: 1px;
  background-color: white;
`;
const TextBox = styled.View`
  justify-content: center;
  width: 60%;
`;

const RankBtn = styled.TouchableOpacity.attrs({ activeOpacity: 1 })``;

const LightText = styled.Text.attrs({ ellipsizeMode: 'tail', numberOfLines: 1 })`
  font-size: 15px;
  color: lightgrey;
`;
export const LikeButton = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background-color: ${greyColor};
`;

export default Title;
