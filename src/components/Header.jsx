import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const FixedHeader = () => {
  return (
    <HeaderView>
      <SearchNav //
        placeholder='검색어를 입력해 주세요. [지역, 집 이름, 가격]'
      />
    </HeaderView>
  );
};

const HeaderView = styled.View`
  padding-top: 20px;
  width: 100%;
  height: ${SCREEN_HEIGHT / 7}px;
  background-color: white;
  border-bottom: 2px solid grey;
  align-items: center;
  justify-content: center;
`;

const SearchNav = styled.TextInput`
  padding: 10px;
  margin: 0 10px;
  width: 90%;
  border: 1px solid grey;
`;

export default FixedHeader;
