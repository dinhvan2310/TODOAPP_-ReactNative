import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {colors} from './src/constants/colors';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/routers/Router';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.bgColor}}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.bgColor} />
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
