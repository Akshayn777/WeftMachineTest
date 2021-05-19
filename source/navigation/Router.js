import React from 'react';
import {View} from 'react-native';
import StackNavigator from './StackNavigation';
import { NavigationContainer } from '@react-navigation/native';

const Router =()=>{
    return(
    <NavigationContainer>
    <StackNavigator/>
    </NavigationContainer>
    );
}

export default Router;