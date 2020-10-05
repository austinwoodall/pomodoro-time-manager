import React from 'react';
import {
	createStackNavigator,
	CardStyleInterpolators,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Timer from '../screens/Timer';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name={'Task'} component={Home} />
				<Stack.Screen name={'Timer'} component={Timer} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
