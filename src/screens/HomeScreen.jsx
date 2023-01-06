import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Image style={{ width: '60%', height: '30%', marginBottom: 30 }} source={require('../../assets/images/ready.png')} />
        <Text>서비스 준비중입니다</Text>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
