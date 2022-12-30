import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Line } from './search/PriceGraph';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { greyColor } from '../theme';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const FixedHeader = () => {
  return (
    <HeaderContainer>
      <SearchBar //
        placeholder='검색어를 입력해 주세요. [지역, 집 이름, 가격]'
        returnKeyType='search'
      />
      <SortFilterBar>
        <Sort>
          <SortTouch activeOpacity={1}>
            <SortingText>수익순</SortingText>
          </SortTouch>
          <Line bold={false} />
          <SortTouch>
            <SortingText activeOpacity={1}>가격순</SortingText>
          </SortTouch>
          <Line bold={false} />
          <SortTouch>
            <SortingText activeOpacity={1}>인기순</SortingText>
          </SortTouch>
        </Sort>
        <Filter activeOpacity={1}>
          <AntDesign name={'filter'} color={'grey'} size={20} />
        </Filter>
      </SortFilterBar>
      <SearchIcon>
        <Ionicons name={'md-search-outline'} color={'grey'} size={25} />
      </SearchIcon>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  padding: 10px 0;
  width: 100%;
  height: ${SCREEN_HEIGHT / 8}px;
  background-color: white;
  border-bottom: 2px solid grey;
  align-items: center;
  justify-content: space-between;
`;

const SearchBar = styled.TextInput`
  padding: 14px;
  margin: 0 10px;
  width: 90%;
  border: 1px solid grey;
  border-radius: 5px;
`;

const SortFilterBar = styled.View`
  width: 90%;
  height: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Sort = styled.View`
  flex-direction: row;
  height: 17px;
`;

const SortTouch = styled.TouchableOpacity`
  height: 100%;
`;

const SortingText = styled.Text`
  font-size: 12px;
  color: grey;
`;

const Filter = styled.TouchableOpacity`
  justify-content: flex-end;
`;

const SearchIcon = styled.View`
  top: 23%;
  right: 8%;
  position: absolute;
`;

export default FixedHeader;
