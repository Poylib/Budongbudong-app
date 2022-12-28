import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import PrescriptionScreen from '../screens/PrescriptionScreen';
import ReportScreen from '../screens/ReportScreen';
import MyPageScreen from '../screens/MyPageScreen';
const BottomNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name='Prescription' component={PrescriptionScreen} />
      <Tab.Screen name='Search' component={SearchScreen} />
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='ReportScreen' component={ReportScreen} />
      <Tab.Screen name='MyPageScreen' component={MyPageScreen} />
    </Tab.Navigator>
  );
};
export default BottomNav;
