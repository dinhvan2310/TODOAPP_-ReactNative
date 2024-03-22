import React from 'react';
import {StatusBar} from 'react-native';
import HomeScreen from './src/home/HomeScreen';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor="transparent"
      />
      <HomeScreen />
    </>
  );
}

export default App;
