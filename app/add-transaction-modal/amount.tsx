import React from "react";
import {ThemedText} from "@/components/ThemedText";
import {PageView} from "@/components/PageView";
import {router} from "expo-router";
import {Platform, StyleSheet, TextInput, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import IconButton from "@/components/IconButton";
import {Theme} from "@/constants/Colors";
import {useThemeColor} from "@/hooks/useThemeColor";
import StepperHeader from "@/app/add-transaction-modal/stepper-header";

export default function AddTransactionModal() {

	const [amount, setAmount] = React.useState<string>("0");
	const borderColor = useThemeColor({}, "border")
	const textColor = useThemeColor({}, "text")
	const inputBackgroundColor = useThemeColor({}, "primaryBg")

	return (
		<PageView>
			<StepperHeader step={2} />
			<ThemedText type="title" style={{textAlign: "center"}}>Montant</ThemedText>
			<View style={{
				borderColor,
				backgroundColor: inputBackgroundColor,
				...styles.inputContainer
			}}>
				<TextInput
					value={amount.toString()}
					keyboardType={"numeric"}
					onChangeText={setAmount}
					selectTextOnFocus
					style={{
						...styles.textInput,
						color: textColor
					}}
					placeholder="Montant"
				/>
				<ThemedText style={styles.inputSuffix}>€</ThemedText>
			</View>

			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</PageView>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		borderWidth: 1,
		borderRadius: Theme.radius,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
	textInput: {
		flex: 1,
		fontSize: 40,
	},
	inputSuffix: {
		fontSize: 40,
		lineHeight: 56, // fontSize + double padding from container
	}
});
