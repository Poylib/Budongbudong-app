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
        <Text>MyPageScreen</Text>
      </View>
      <TouchableOpacity //
        onPress={() => removeValue()}
        style={{ backgroundColor: 'grey', height: 40, width: 90, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{}}>로그아웃 버튼</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MyPageScreen;
