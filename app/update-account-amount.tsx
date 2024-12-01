import IconButton from "@/components/IconButton";
import {router} from "expo-router";
import {ThemedText} from "@/components/ThemedText";
import {StatusBar} from "expo-status-bar";
import {
	Keyboard,
	KeyboardAvoidingView,
	KeyboardAvoidingViewComponent,
	Platform,
	StyleSheet,
	TextInput,
	TouchableWithoutFeedback,
	View
} from "react-native";
import {PageView} from "@/components/PageView";
import React from "react";
import {Theme} from "@/constants/Colors";
import {useThemeColor} from "@/hooks/useThemeColor";
import Button from "@/components/Button";
import * as SecureStore from 'expo-secure-store';
import {Store} from "@/constants/Store";
import {useAmountOnAccount} from "@/contexts/amountOnAccount";
import {ThemedView} from "@/components/ThemedView";

export default function UpdateAccountAmount() {
	const borderColor = useThemeColor({}, "border")
	const textColor = useThemeColor({}, "text")
	const {refetch, amount: initialAmount} = useAmountOnAccount()
	const [amount, setAmount] = React.useState(initialAmount);
	const [isUpdating, setIsUpdating] = React.useState(false);
	const [focused, setFocused] = React.useState(false);

	const updateAmount =  () => {
		setIsUpdating(true)
		SecureStore.setItemAsync(Store.AMOUNT_ON_ACCOUNT, amount)
			.then(() => {
				refetch()
					.then(() => {
						router.replace("../")
					})
			})
			.finally(() => {
				setIsUpdating(false)
			})
	}

	return (
		<PageView>
			<IconButton style={{alignItems: "flex-end"}} variant="secondary" icon="close" onPress={() => router.replace("../")} />
			<KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<ThemedView style={{flex: 1, gap: 8}}>
						<ThemedText type="title" style={{marginTop: 16}}>Actualisation du montant</ThemedText>
						<ThemedText>Entrez le montant actuel sur votre compte. Cette option est principalement pertinente en début de mois</ThemedText>
						<View style={{
							borderColor,
							...styles.inputContainer
						}}>
							<TextInput
								value={amount.toString()}
								keyboardType="numeric"
								onChangeText={setAmount}
								selectTextOnFocus
								onFocus={() => setFocused(true)}
								onBlur={() => setFocused(false)}
								style={{
									...styles.textInput,
									color: textColor
								}}
								placeholder="Montant"
							/>
							<ThemedText style={styles.inputSuffix}>€</ThemedText>
						</View>
					</ThemedView>
				</TouchableWithoutFeedback>
				<Button
					style={{
						marginBottom: focused ? 80 : 0
					}}
					loading={isUpdating}
					onPress={updateAmount}
					disabled={amount.length < 1 || amount === "0"}>
					<ThemedText type="button">Enregister</ThemedText>
				</Button>
			</KeyboardAvoidingView>
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
