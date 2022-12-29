import React from 'react';
import styled from 'styled-components/native';

const TextBox = props => {
  return (
    <StyledTextBox>
      <StyledText weight={props.weight} size={props.fontSize}>
        {props.leftText}
      </StyledText>
      <StyledText>{props.rightText}</StyledText>
    </StyledTextBox>
  );
};

const StyledTextBox = styled.View`
  flex-direction: row;

  height: 20px;
  color: black;
`;

const StyledText = styled.Text`
  flex: 1;
  font-size: ${({ size }) => (size ? '20px' : '16px')};
  font-weight: ${({ weight }) => (weight ? 'bold' : 'normal')};
`;

export default TextBox;
