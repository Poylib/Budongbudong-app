import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { greyColor, backGroundColor } from '../../theme';
import PriceGraph from './PriceGraph';
import { imgArr } from '../../constant/buildingImg';

const Card = ({ item }) => {
  const navigation = useNavigation();
  const goDetail = () => {
    navigation.navigate('Stack', { screen: 'Detail' });
  };

  return (
    <SearchListContainer //
      activeOpacity={1}
      onPress={goDetail}>
      <Content>
        <PriceGraph item={item} />
        <ImegeSection>
          {item.img !== null ? (
            <Img source={{ uri: item.img }} />
          ) : (
            <Img //
              style={{ width: 60, height: 75 }}
              source={imgArr[item.id % 3]}
            />
          )}
        </ImegeSection>
      </Content>
    </SearchListContainer>
  );
};

const SearchListContainer = styled.TouchableOpacity`
  padding: 14px;
  width: 100%;
  height: 140px;
  background-color: ${backGroundColor};
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 400px;
  padding: 20px 25px;
  border-radius: 7px;
  background-color: white;
`;

const TextSection = styled.View`
  width: 80%;
`;

const StyledText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: black;
`;

const Img = styled.Image`
  width: 85px;
  height: 85px;
  border-radius: 10px;
`;

const ImegeSection = styled.View`
  border: 0.5px solid lightgray;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 85px;
`;

export default Card;
