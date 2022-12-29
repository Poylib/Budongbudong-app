import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import FixedHeader from '../components/Header';
import SearchList from '../components/search/SearchList';

const SearchScreen = () => {
  const todos = [
    { id: 1, text: '샤워하기', done: true },
    { id: 2, text: '기술 공부하기', done: false },
    { id: 3, text: '작업하기', done: false },
    { id: 4, text: '작업하기', done: false },
    { id: 5, text: '작업하기', done: false },
    { id: 6, text: '작업하기', done: false },
    { id: 7, text: '작업하기', done: false },
    { id: 8, text: '작업하기', done: false },
    { id: 9, text: '작업하기', done: false },
    { id: 10, text: '작업하기', done: false },
    { id: 11, text: '작업하기', done: true },
    { id: 12, text: '작업하기', done: false },
    { id: 13, text: '작업하기', done: false },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={[styles.text, item.done && styles.lineThrough]}>{item.text}</Text>
      </View>
    );
  };
  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <FixedHeader />
      <StyledFlatList //
        style={styles.list}
        data={todos}
        renderItem={SearchList}
        keyExtractor={item => item.id.toString()}
        bounces={false}
      />
    </View>
    // </SafeAreaView>
  );
};

const StyledFlatList = styled.FlatList``;

const StyledContainer = styled.View``;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
});

export default SearchScreen;
