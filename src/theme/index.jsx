import { Dimensions, StyleSheet } from 'react-native';
export const { height: SCREEN_HEIGHT } = Dimensions.get('window');
export const { width: SCREEN_WIDTH } = Dimensions.get('window');
export const greyColor = '#f5f5f5';
export const blueColor = '#276dff';
export const redColor = '#fa5e68';
export const backGroundColor = '#f1f1f1';

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black', // IOS
    shadowOffset: { height: 1.4, width: 0 }, // IOS
    shadowOpacity: 0.3, // IOS
    shadowRadius: 2, //IOS
    elevation: 8, // Android
    backgroundColor: 'white',
  },
});
