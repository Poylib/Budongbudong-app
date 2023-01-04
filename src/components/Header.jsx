import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Line } from './search/PriceGraph';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { greyColor, SCREEN_HEIGHT, blueColor } from '../theme';

const FixedHeader = ({ sort, setSort }) => {
  const sortName = ['수익순', '가격순', '인기순'];
  return (
    <HeaderContainer>
      <SortFilterBar>
        <Sort>
          {sortName.map((name, idx) => {
            return (
              <SortTouch //
                key={name}
                onPress={() => setSort(name)}>
                <SortingText //
                  select={sort === name ? 1 : 0}>
                  {name}
                </SortingText>
                {idx !== 2 && <Line bold={false} />}
              </SortTouch>
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
  padding-bottom: 15px;
  width: 100%;
  height: 60px;
  background-color: white;
  align-items: center;
  justify-content: flex-end;
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
  flex-direction: row;
  height: 100%;
`;

const SortingText = styled.Text`
  font-size: 13px;
  color: ${({ select }) => (select ? blueColor : 'grey')};
`;

const Filter = styled.TouchableOpacity`
  justify-content: flex-end;
`;

export default FixedHeader;
