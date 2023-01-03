import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FixedHeader from '../components/Header';
import Card from '../components/search/Card';
import SearchData from '../../mock/SearchData.json';
import { greyColor } from '../theme';

const SearchScreen = () => {
  const [flatData, setFlatDat] = useState(SearchData);
  useEffect(() => {}, [flatData]);
  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'white', borderBottomColor: greyColor, borderBottomWidth: 1 }} edges={['top']}>
        <FixedHeader />
      </SafeAreaView>
      <FlatList //
        data={flatData}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.id.toString()}
        bounces={false}
      />
    </>
  );
};

export default SearchScreen;
