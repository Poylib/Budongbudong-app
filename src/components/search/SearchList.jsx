import React from 'react';
import styled from 'styled-components/native';
import { greyColor } from '../../theme';
const SearchList = ({ item }) => {
  return (
    <ListView>
      <Content>
        <TextSection>
          <StyledText>{item.text}</StyledText>
        </TextSection>
        <ImgSection></ImgSection>
      </Content>
    </ListView>
  );
};

const ListView = styled.View`
  padding: 20px 14px 0 14px;
  height: 140px;
  align-items: center;
  background-color: ${greyColor};
`;

const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
  border-radius: 7px;
  background-color: white;
`;

const StyledText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: black;
`;

const TextSection = styled.View`
  /* flex: 1; */
  width: 80%;
`;

const ImgSection = styled.View``;

export default SearchList;
