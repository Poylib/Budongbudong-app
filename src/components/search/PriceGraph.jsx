import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { blueColor, greyColor, redColor } from '../../theme';

const PriceGraph = ({ item }) => {
  return (
    <StyledPriceGraph>
      <StyledTitleBox>
        <ItemName>{item.text}</ItemName>
        <ItemSmallName>{item.squareMeter}</ItemSmallName>
      </StyledTitleBox>

      <StyledPriceBox>
        <Price>
          <TextRow>
            <PriceKind>예측</PriceKind>
            <Line />
            {item.profit > 0 ? (
              <Profit>
                <Ionicons name={'caret-up'} color={redColor} />
                <Percent compare={item.profit}>{item.profit} %</Percent>
              </Profit>
            ) : (
              <Profit>
                <Ionicons name={'caret-down'} color={blueColor} />
                <Percent compare={item.profit}>{item.profit} %</Percent>
              </Profit>
            )}
          </TextRow>
          <TextRow>
            <PriceKind>매매가</PriceKind>
            <Line />
            <PriceText>{item.price} 억</PriceText>
          </TextRow>
          <TextRow>
            <PriceKind>전세가</PriceKind>
            <Line />
            <PriceText>{item.leasePrice} 억</PriceText>
          </TextRow>
        </Price>
        <Graph source={require('../../../assets/images/graph.jpg')} />
      </StyledPriceBox>
    </StyledPriceGraph>
  );
};

const StyledPriceGraph = styled.View`
  width: 70%;
  height: 100%;
`;

const StyledTitleBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ItemName = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: black;
`;

const ItemSmallName = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  color: grey;
`;

const StyledPriceBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  width: 100%;
  color: black;
`;

const Price = styled.View`
  flex: 1;
  width: 50%;
`;
const TextRow = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: center;
`;

const Percent = styled.Text`
  margin-left: 2px;
  color: ${({ compare }) => (compare > 0 ? redColor : blueColor)};
`;

const PriceKind = styled.Text`
  margin: 4px 0;
  margin-right: 10px;
  font-size: 13px;
  color: grey;
`;
const Profit = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Line = styled.Text`
  width: 2px;
  height: 70%
  margin-right:10px;
  background-color: ${greyColor};
`;

const PriceText = styled.Text`
  font-size: 13px;
  color: #5b5b5b;
`;

const Graph = styled.Image`
  flex: 1;
  margin: 0 6px;
  height: 70px;
`;

export default PriceGraph;
