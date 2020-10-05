import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	TouchableOpacity,
	Alert,
} from 'react-native';

import {
	ApplicationProvider,
	Icon,
	IconRegistry,
	Layout,
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
// @ts-ignore
import BackgroundTimer from 'react-native-background-timer';
import moment from 'moment';

const StopIcon = (props: any) => (
	<Icon {...props} fill={'#fff'} name={'stop-circle-outline'} />
);
const PlayIcon = (props: any) => (
	<Icon {...props} fill={'#fff'} name={'play-circle-outline'} />
);

const Timer = () => {
	const [seconds, setSeconds] = useState<any>(1500);
	const [timerType, setTimerType] = useState('work');

	function startWorkTimer() {
		setTimerType('work');
		BackgroundTimer.runBackgroundTimer(() => {
			if (seconds === 0) {
				return BackgroundTimer.stopBackgroundTimer();
			}
			setSeconds((prevState: any) => {
				if (prevState === 0) {
					return prevState;
				}
				return prevState - 1;
			});
		}, 1000);
	}
	function startBreakTimer() {
		setTimerType('break');
		setSeconds(300);
		BackgroundTimer.runBackgroundTimer(() => {
			if (seconds === 0) {
				return BackgroundTimer.stopBackgroundTimer();
			}
			setSeconds((prevState: any) => {
				if (prevState === 0) {
					return prevState;
				}
				return prevState - 1;
			});
		}, 1000);
	}

	return (
		<Layout style={styles.container}>
			<StatusBar translucent backgroundColor={'transparent'} />
			<AnimatedCircularProgress
				size={250}
				width={5}
				fill={(seconds % (1000 * 60 * 60 * 60)) / 1000}
				tintColor="#f222ff"
				onAnimationComplete={() => console.log('onAnimationComplete')}
				backgroundColor="#e8e8e8">
				{() => (
					<View
						style={{
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Text style={{ color: '#fff', fontSize: 30 }}>
							{moment
								.utc(
									moment
										.duration(seconds, 'seconds')
										.asMilliseconds(),
								)
								.format('HH:mm:ss')}
						</Text>
						{timerType === 'work' ? (
							<Text style={{ color: '#fff', fontSize: 16 }}>
								WORK
							</Text>
						) : null}
						{timerType === 'break' ? (
							<Text style={{ color: '#fff', fontSize: 16 }}>
								SHORT BREAK
							</Text>
						) : null}
					</View>
				)}
			</AnimatedCircularProgress>
			<TouchableOpacity
				onPress={startBreakTimer}
				style={{
					backgroundColor: '#f222ff',
					borderRadius: 10,
					position: 'absolute',
					alignItems: 'center',
					justifyContent: 'center',
					paddingHorizontal: 20,
					paddingVertical: 10,
					left: 20,
					bottom: 50,
				}}>
				<Text style={{ color: '#fff', fontWeight: 'bold' }}>
					Break Time
				</Text>
				<Text style={{ color: '#fff', fontWeight: 'bold' }}>5 Min</Text>
			</TouchableOpacity>

			{/*<TouchableOpacity*/}
			{/*	onPress={startWorkTimer}*/}
			{/*	style={{*/}
			{/*		backgroundColor: '#f222ff',*/}
			{/*		borderRadius: 50,*/}
			{/*		position: 'absolute',*/}
			{/*		alignItems: 'center',*/}
			{/*		justifyContent: 'center',*/}
			{/*		paddingHorizontal: 20,*/}
			{/*		paddingVertical: 10,*/}
			{/*		right: 165,*/}
			{/*		left: 165,*/}
			{/*		bottom: 100,*/}
			{/*		width: 85,*/}
			{/*		height: 85,*/}
			{/*	}}>*/}
			{/*	<Text style={{ color: '#fff', fontWeight: 'bold' }}>*/}
			{/*		Pause*/}
			{/*	</Text>*/}
			{/*</TouchableOpacity>*/}

			<TouchableOpacity
				onPress={startWorkTimer}
				style={{
					backgroundColor: '#f222ff',
					borderRadius: 10,
					position: 'absolute',
					alignItems: 'center',
					justifyContent: 'center',
					paddingHorizontal: 20,
					paddingVertical: 10,
					right: 20,
					bottom: 50,
				}}>
				<Text style={{ color: '#fff', fontWeight: 'bold' }}>
					Work Time
				</Text>
				<Text style={{ color: '#fff', fontWeight: 'bold' }}>
					25 Min
				</Text>
			</TouchableOpacity>
		</Layout>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Timer;
