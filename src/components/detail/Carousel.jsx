import React from 'react';
import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';

const Carousel = ({ pages, pageWidth, gap, offset }) => {
  const renderItem = ({ item }) => {
    return (
      <PageItem //
        style={{ width: pageWidth, marginHorizontal: gap / 2 }}>
        <PageBg source={{ uri: item.img }}></PageBg>
        <Blur />
        <TextView>
          <WhiteTitle>주간 레포트</WhiteTitle>
          <WhiteLine />
          <Content>{item.textFirst}</Content>
          <Content>{item.textSecond}</Content>
        </TextView>
      </PageItem>
    );
  };
  return (
    <Container>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate='fast'
        horizontal
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment='start'
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

const Container = styled.View`
  position: static;
  left: -15px;
  height: 240px;
  width: 110%;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

const PageItem = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const WhiteTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const Content = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const PageBg = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const Blur = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  opacity: 0.5;
  background-color: black;
`;

const TextView = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const WhiteLine = styled.View`
  width: 50%;
  height: 2px;
  margin: 5px 0;
  background-color: white;
`;
export default Carousel;
