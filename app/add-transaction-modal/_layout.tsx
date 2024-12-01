import {Stack} from "expo-router";

export default function AddTransactionModalLayout() {
	// TODO add context wrapper to store transaction data

	return (
		<Stack screenOptions={{
			headerShown: false
		}}>
			<Stack.Screen name="index" />
			<Stack.Screen name="amount" />
		</Stack>
	)
}
