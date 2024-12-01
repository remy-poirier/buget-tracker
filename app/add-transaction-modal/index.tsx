import {PageView} from "@/components/PageView";
import {ThemedText} from "@/components/ThemedText";
import {StatusBar} from "expo-status-bar";
import {Platform, View} from "react-native";
import React from "react";
import IconButton from "@/components/IconButton";
import {router} from "expo-router";
import {Theme} from "@/constants/Colors";
import {useThemeColor} from "@/hooks/useThemeColor";
import Button from "@/components/Button";
import StepperHeader from "@/app/add-transaction-modal/stepper-header";

export default function AddTransactionModalKindStep() {
	const inputBackground = useThemeColor({}, "primaryBg")
	const tint = useThemeColor({}, "tint")

	const next = () => {
		router.navigate("/add-transaction-modal/amount")
	}

	return (
		<PageView>
			<StepperHeader step={1} />
			<ThemedText type="title">
				Type de transaction
			</ThemedText>
			<Button onPress={next}>
				<ThemedText type="button">
					Continuer
				</ThemedText>
			</Button>
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</PageView>
	);
}
