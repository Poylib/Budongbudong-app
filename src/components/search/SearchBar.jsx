import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const SearchBar = () => {
  return (
    <SearchView>
      <Search //
        placeholder='검색어를 입력해 주세요. [지역, 집 이름, 가격]'
        returnKeyType='search'
        autoCorrect={false}
        clearTextOnFocus={true}
      />
      <SearchIcon>
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

const SearchIcon = styled.View`
  top: 18%;
  right: 8%;
  position: absolute;
`;

export default SearchBar;
