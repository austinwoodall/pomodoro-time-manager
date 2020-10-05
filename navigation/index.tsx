import React from 'react';
import {
	createStackNavigator,
	CardStyleInterpolators,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Timer from '../screens/Timer';
import Home from '../screens/Home';
import { BottomNavigationComponent } from '../components/BottomTabBar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					options={{ headerShown: false }}
					name={'Task'}
					component={ApplicationTabs}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

function ApplicationTabs() {
	return (
		<Tab.Navigator
			tabBar={(props) => <BottomNavigationComponent {...props} />}>
			<Tab.Screen name="Home Screen" component={Home} />
			<Tab.Screen name={'Timer'} component={Timer} />
		</Tab.Navigator>
	);
}

export default AppNavigator;
