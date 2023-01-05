import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import React, { useRef, useState } from 'react';
import { Keyboard } from 'react-native';

const SearchBar = ({
  //
  query,
  setQuery,
  setModal,
  searchList,
  setFlatData,
}) => {
  const timeSet = useRef();

  const onChangeText = text => {
    clearTimeout(timeSet.current);
    timeSet.current = setTimeout(() => {
      setQuery(text);
    }, 300);
  };
  // console.log(query);
  const SearchActive = () => {
    setModal(false);
    setFlatData(searchList);
  };
  return (
    <SearchView>
      <Search //
        placeholder='검색어를 입력해 주세요. [지역, 집 이름, 가격]'
        returnKeyType='search'
        autoCorrect={false}
        onChangeText={onChangeText}
        onFocus={() => setModal(true)}
        onSubmitEditing={SearchActive}
      />
      <SearchIcon onPress={SearchActive}>
        <Ionicons name={'md-search-outline'} color={'grey'} size={25} />
      </SearchIcon>
    </SearchView>
  );
};

const SearchView = styled.View`
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

const Search = styled.TextInput`
  padding: 12px;
  margin: 0 10px;
  width: 90%;
  border: 1px solid grey;
  border-radius: 5px;
`;

const SearchIcon = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  top: 18%;
  right: 8%;
  position: absolute;
`;

export default SearchBar;
