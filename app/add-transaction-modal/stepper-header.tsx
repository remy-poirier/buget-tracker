import IconButton from "@/components/IconButton";
import {router} from "expo-router";
import {View} from "react-native";
import {Theme} from "@/constants/Colors";
import React from "react";
import {useThemeColor} from "@/hooks/useThemeColor";

type Props = {
	step: 1 | 2 | 3
}

export default function StepperHeader({
	step
}: Props) {
	const inputBackground = useThemeColor({}, "primaryBg")
	const tint = useThemeColor({}, "tint")

	const computeProgress = () => {
		switch(step) {
			case 3:
				return "100%"
			case 2:
				return "66%"
			case 1:
			default:
				return "33%"
		}
	}

	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				marginBottom: 10
			}}
		>
			<IconButton style={{flex: 1}} variant="secondary" icon="arrowleft" onPress={() => router.replace("../")} />
			<View
				style={{flex: 1, height: 5, marginHorizontal: 10, borderRadius: Theme.radius, backgroundColor: inputBackground}}
			>
				<View style={{width: computeProgress(), borderRadius: Theme.radius, backgroundColor: tint, height: "100%"}} />
			</View>
			<IconButton style={{flex: 1, alignItems: "flex-end"}} variant="secondary" icon="close" onPress={() => router.replace("/transactions")} />
		</View>
	)
}
