import React from 'react';
import { Image, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import EmptyTaskSVG from '../../components/EmptyTaskSVG';

function Home() {
	return (
		<Layout style={{ flex: 1, paddingHorizontal: 20 }}>
			<View style={{ height: 200, justifyContent: 'center', alignItems }}>
				<Text
					style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>
					Task
				</Text>
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<EmptyTaskSVG style={{ height: 10, width: 100 }} />
				</View>
			</View>
		</Layout>
	);
}

export default Home;
