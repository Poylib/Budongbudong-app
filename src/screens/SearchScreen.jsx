import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FixedHeader from '../components/Header';
import Card from '../components/search/Card';
import SearchData from '../../mock/SearchData.json';
import { greyColor } from '../theme';

const SearchScreen = () => {
  const [sort, setSort] = useState('');
  const [flatData, setFlatDat] = useState(SearchData);
  useEffect(() => {
    console.log(sort);
  }, [sort]);
  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'white', borderBottomColor: greyColor, borderBottomWidth: 1 }} edges={['top']}>
        <FixedHeader sort={sort} setSort={setSort} />
      </SafeAreaView>
      <FlatList //
        data={SearchData}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.id}
        bounces={false}
      />
    </>
  );
};

export default SearchScreen;
