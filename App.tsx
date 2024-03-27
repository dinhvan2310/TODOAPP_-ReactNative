import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/home/HomeScreen';
import {colors} from './src/constants/colors';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.bgColor}}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.bgColor} />
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
