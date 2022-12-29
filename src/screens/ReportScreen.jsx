import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextBox from '../components/TextBox';
const ReportScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ width: 100 }}>
        <Text>ReportScreen</Text>
        <TextBox leftText='예측' rightText='-4 %' weight='false' fontSize='true' />
      </View>
    </SafeAreaView>
  );
};
export default ReportScreen;
