import { Stack } from "expo-router";
import {AmountOnAccountProvider} from "@/contexts/amountOnAccount";

export default function RootLayout() {
  return (
		<AmountOnAccountProvider>
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="(tabs)" />
				<Stack.Screen
					name="add-transaction-modal"
					options={{
						presentation: "modal"
					}}
				/>
				<Stack.Screen
					name="update-account-amount"
					options={{
						presentation: "modal",
					}}
				/>
			</Stack>
		</AmountOnAccountProvider>
	);
}
