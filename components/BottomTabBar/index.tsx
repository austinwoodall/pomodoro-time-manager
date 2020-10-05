import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {
	BottomNavigation,
	BottomNavigationTab,
	Button,
	Icon,
	Layout,
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const PlusIcon = (props: any) => (
	<Icon style={{ width: 40, height: 40 }} {...props} name={'plus-outline'} />
);

const GridIcon = (props: any) => <Icon {...props} name="grid-outline" />;

// const TrashIcon = (props) => (
// 	<Icon {...props} name='trash-outline'/>
// );

const CheckIcon = (props: any) => (
	<Icon {...props} name="checkmark-square-outline" />
);

export const BottomNavigationComponent = ({ state }) => {
	const navigation = useNavigation();

	return (
		<>
			<Layout
				style={{
					position: 'absolute',
					right: 20,
					bottom: 80,
					backgroundColor: 'transparent',
				}}>
				<Button
					onPress={() => navigation.navigate('New Item')}
					accessoryRight={PlusIcon}
					style={{
						borderRadius: 100,
						height: 60,
						width: 60,
						fontSize: 30,
					}}
				/>
			</Layout>
			<BottomNavigation
				appearance="noIndicator"
				style={styles.bottomNavigation}
				selectedIndex={state.index}
				onSelect={(index) =>
					navigation.navigate(state.routeNames[index])
				}>
				<BottomNavigationTab icon={GridIcon} />
				<BottomNavigationTab icon={CheckIcon} />
			</BottomNavigation>
		</>
	);
};

const styles = StyleSheet.create({
	bottomNavigation: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 50,
		position: 'absolute',
		justifyContent: 'space-between',
		bottom: 0,
		padding: 10,
		width: DEVICE_WIDTH,
		zIndex: 8,
	},
});
