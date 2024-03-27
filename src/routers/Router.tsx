import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../home/HomeScreen';
import AddNewTask from '../task/AddNewTask';

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddNewTask" component={AddNewTask} />
    </Stack.Navigator>
  );
};

export default Router;