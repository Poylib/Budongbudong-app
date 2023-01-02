import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { greyColor } from '../../theme';

const CategoryBtn = ({ data, setFunc }) => {
  const { buttonStyle, dataSet } = data;
  const [select, setSelect] = useState(dataSet[0].title);
  const selectFunc = name => {
    setSelect(name);
    setFunc(name);
  };
  return (
    <Category boxheight={buttonStyle.height}>
      {dataSet.map((name, idx) => {
        return (
          <DetailToggle //
            key={name.id}
            onPress={() => selectFunc(name.title)}
            style={select === name.title && styles.shadow}>
            <TextToggle //
              select={select === name.title ? true : false}
              size={buttonStyle.size}>
              {name.title}
            </TextToggle>
          </DetailToggle>
        );
      })}
    </Category>
  );
};
const Category = styled.View`
  flex-direction: row;
  background-color: ${greyColor};
  padding: 3px;
  border-radius: 50px;
  margin-top: 10px;
  width: 100%;
  height: ${({ boxheight }) => `${boxheight}px`};
`;
const DetailToggle = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 2px;
  border-radius: 50px;
`;

const TextToggle = styled.Text`
  font-size: ${({ size }) => `${size}px`}
  color: ${({ select }) => (select ? 'black' : 'grey')};
`;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black', // IOS
    shadowOffset: { height: 1.4, width: 0 }, // IOS
    shadowOpacity: 0.3, // IOS
    shadowRadius: 2, //IOS
    elevation: 8, // Android
    backgroundColor: 'white',
  },
});

export default CategoryBtn;
