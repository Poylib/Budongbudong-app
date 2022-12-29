import React from 'react';
import { Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';
const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const FixedHeader = () => {
  return <HeaderView></HeaderView>;
};

const HeaderView = styled.View`
  padding-top: 20px;
  width: 100%;
  height: ${SCREEN_HEIGHT / 7}px;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export default FixedHeader;
