import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Line } from './search/PriceGraph';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { greyColor, SCREEN_HEIGHT, blueColor } from '../theme';

const FixedHeader = () => {
  const sortName = ['수익순', '가격순', '인기순'];
  const [sort, setSort] = useState();
  const sortFunc = e => {
    setSort(e);
  };
  return (
    <HeaderContainer>
      <SearchBar>
        <Search //
          placeholder='검색어를 입력해 주세요. [지역, 집 이름, 가격]'
          returnKeyType='search'
        />
        <SearchIcon>
          <Ionicons name={'md-search-outline'} color={'grey'} size={25} />
        </SearchIcon>
      </SearchBar>

      <SortFilterBar>
        <Sort>
          {sortName.map((name, idx) => {
            return (
              <>
                <SortTouch //
                  key={name}
                  onPress={() => sortFunc(name)}>
                  <SortingText //
                    select={sort === name ? 1 : 0}>
                    {name}
                  </SortingText>
                </SortTouch>
                {idx !== 2 && <Line bold={false} />}
              </>
            );
          })}
        </Sort>
        <Filter activeOpacity={1}>
          <AntDesign name={'filter'} color={'grey'} size={20} />
        </Filter>
      </SortFilterBar>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  padding: 10px 0;
  width: 100%;
  height: ${SCREEN_HEIGHT / 7}px;
  background-color: white;
  border-bottom: 2px solid grey;
  align-items: center;
  justify-content: space-between;
`;

const SearchBar = styled.View`
  align-items: center;
  width: 100%;
`;

const Search = styled.TextInput`
  padding: 12px;
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

const SortTouch = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  height: 100%;
`;

const SortingText = styled.Text`
  font-size: 12px;
  color: ${({ select }) => (select ? blueColor : 'grey')};
`;

const Filter = styled.TouchableOpacity`
  justify-content: flex-end;
`;

const SearchIcon = styled.View`
  top: 18%;
  right: 8%;
  position: absolute;
`;

export default FixedHeader;
