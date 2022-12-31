import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from './navigators/Root';
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default App;
