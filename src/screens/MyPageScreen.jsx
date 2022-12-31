import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MyPageScreen = () => {
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('login');
      console.log('Done.');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SafeAreaView>
      <View>
        <Text style={{ width: 40, backgroundColor: 'blue' }}>MyPageScreen</Text>
      </View>
      <TouchableOpacity //
        onPress={() => removeValue()}
        style={{ backgroundColor: 'red', height: 40 }}></TouchableOpacity>
    </SafeAreaView>
  );
};

export default MyPageScreen;
