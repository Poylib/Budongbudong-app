import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import axios from 'axios';
import FixedHeader from '../components/Header';
import SearchList from '../components/search/SearchList';
import { useEffect } from 'react';
import data from '../../mock/data.json';
const SearchScreen = () => {
  return (
    <>
      <FixedHeader />
      <StyledFlatList //
        data={data}
        renderItem={SearchList}
        keyExtractor={item => item.id.toString()}
        bounces={false}
      />
    </>
  );
};

const StyledFlatList = styled.FlatList``;

const StyledContainer = styled.View``;

export default SearchScreen;
