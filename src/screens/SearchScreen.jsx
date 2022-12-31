import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import FixedHeader from '../components/Header';
import SearchList from '../components/search/SearchList';
import data from '../../mock/data.json';
import { greyColor } from '../theme';
const SearchScreen = () => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'white', borderBottomColor: greyColor, borderBottomWidth: 1 }} edges={['top']}>
        <FixedHeader />
      </SafeAreaView>
      <FlatList //
        data={data}
        renderItem={({ item }) => <SearchList item={item} />}
        keyExtractor={item => item.id.toString()}
        bounces={false}
      />
    </>
  );
};

export default SearchScreen;
