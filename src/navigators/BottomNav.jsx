import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import PrescriptionScreen from '../screens/PrescriptionScreen';
import ReportScreen from '../screens/ReportScreen';
import MyPageScreen from '../screens/MyPageScreen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const BottomNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName='처방전'
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name='처방전'
        component={PrescriptionScreen}
        options={{
          tabBarIcon: ({color, size}) => <Ionicons name={'document-text'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='검색'
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => <Ionicons name={'search'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='홈'
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => <AntDesign name={'home'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='레포트'
        component={ReportScreen}
        options={{
          tabBarIcon: ({color, size}) => <Ionicons name={'newspaper-outline'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='마이페이지'
        component={MyPageScreen}
        options={{
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name={'dots-grid'} color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomNav;
