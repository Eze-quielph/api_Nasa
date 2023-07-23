import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Configure Routes
import { RouteStackParams } from '../types';
const Stack = createNativeStackNavigator<RouteStackParams>();

const routeScreenDefaultOptions ={
  headerStyle:{
    backgroundColor: 'rgba(7,26,93,255)',
  },
  headerTitleStyle:{
    color:'#FFF',
  },
}

//Components
import Home from '../views/Home/Home'
import Details from '../views/Details/Details';

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={routeScreenDefaultOptions}/>
      <Stack.Screen name='Details' component={Details} options={routeScreenDefaultOptions}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
