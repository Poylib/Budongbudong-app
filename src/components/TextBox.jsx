import React from 'react';
import styled from 'styled-components/native';
import { greyColor } from '../theme';
const TextBox = props => {
  return (
    <StyledTextBox>
      <StyledText large={props.large}>{props.leftText}</StyledText>
      <Line />
      <StyledText large={props.large}>{props.rightText}</StyledText>
    </StyledTextBox>
  );
};

const StyledTextBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 25px;
  width: 100%;
  color: black;
`;

const StyledText = styled.Text`
  width: 30%;
  font-size: ${({ large }) => (large ? '20px' : '16px')};
  font-weight: ${({ large }) => (large ? 'bold' : 'normal')};
`;
const Line = styled.Text`
  width: 2px;
  height: 90%;
  background-color: ${greyColor};
`;

export default TextBox;
