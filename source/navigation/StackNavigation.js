import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DrawerNavigator from './DrawerNavigation';
import LoginScreen from '../screens/LoginScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LogIn" component={LoginScreen} options={{ headerShown: false}} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="Home" component={DrawerNavigator}  options={{ headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;