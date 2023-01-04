import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Store data done');
  } catch (error) {
    console.log(error);
  }
};
export const getData = async key => {
  const jsonKey = JSON.stringify(key);
  try {
    await AsyncStorage.getItem(jsonKey);
  } catch (e) {
    console.log('error', 'e');
  }
};
