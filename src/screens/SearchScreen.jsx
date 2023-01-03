import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FixedHeader from '../components/Header';
import Card from '../components/search/Card';
import SearchData from '../../mock/SearchData.json';
import { greyColor } from '../theme';

const SearchScreen = () => {
  const [sort, setSort] = useState('');
  const [flatData, setFlatData] = useState(SearchData);
  useEffect(() => {
    if (sort === '수익순') {
      let arr = flatData.sort((a, b) => a.profit - b.profit);
      setFlatData([...arr]);
    } else if (sort === '가격순') {
      let arr = flatData.sort((a, b) => a.price - b.price);
      setFlatData([...arr]);
    } else if (sort === '인기순') {
      let arr = flatData.sort((a, b) => a.like - b.like);
      setFlatData([...arr]);
    } else {
      console.log('error');
    }
  }, [sort]);
  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'white', borderBottomColor: greyColor, borderBottomWidth: 1 }} edges={['top']}>
        <FixedHeader sort={sort} setSort={setSort} />
      </SafeAreaView>
      <FlatList //
        data={flatData}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.id}
        bounces={false}
        extraData={sort}
      />
    </>
  );
};

export default SearchScreen;
