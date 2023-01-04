import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FixedHeader from '../components/Header';
import Card from '../components/search/Card';
import styled from 'styled-components/native';
import SearchData from '../../mock/SearchData.json';
import { greyColor } from '../theme';
import SearchBar from '../components/search/SearchBar';

const SearchScreen = () => {
  const [sort, setSort] = useState('');
  const [flatData, setFlatData] = useState(SearchData);
  useEffect(() => {
    if (sort === '수익순') {
      let arr = flatData.sort((a, b) => b.profit - a.profit);
      setFlatData([...arr]);
    } else if (sort === '가격순') {
      let arr = flatData.sort((a, b) => b.price - a.price);
      setFlatData([...arr]);
    } else if (sort === '인기순') {
      let arr = flatData.sort((a, b) => b.like - a.like);
      setFlatData([...arr]);
    }
  }, [sort]);
  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'white', borderBottomColor: greyColor, borderBottomWidth: 1 }} edges={['top']}>
        <SearchBar />
        <FixedHeader sort={sort} setSort={setSort} />
        <FlatList //
          data={flatData}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={item => item.id}
          bounces={false}
          extraData={sort}
        />
      </SafeAreaView>
    </>
  );
};

export default SearchScreen;
