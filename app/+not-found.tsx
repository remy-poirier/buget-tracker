import { Stack } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {ThemedText} from "@/components/ThemedText";
import Link from "@/components/Link";

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
			<View style={styles.container}>
				<ThemedText>
					Oops! Cette page n'existe pas.
				</ThemedText>
				<Link href="/">Go to home screen</Link>
			</View>
		</>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
