import React from 'react';
import styled from 'styled-components/native';
import { greyColor, backGroundColor } from '../../theme';
import TextBox from '../TextBox';
import PriceGraph from './PriceGraph';
const SearchList = ({ item }) => {
  return (
    <SearchListContainer>
      <Content>
        <PriceGraph item={item} />
        <ImgSection source={{ uri: 'https://cdn.pixabay.com/photo/2022/04/10/19/33/house-7124141_960_720.jpg' }} />
      </Content>
    </SearchListContainer>
  );
};

const SearchListContainer = styled.View`
  padding: 14px;
  width: 100%;
  height: 140px;
  background-color: ${backGroundColor};
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
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

const ImgSection = styled.Image`
  border-radius: 10px;
  width: 80px;
  height: 80px;
`;

export default SearchList;
