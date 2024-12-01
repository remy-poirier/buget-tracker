import {View, type ViewProps} from "react-native";
import React from "react";
import {useThemeColor} from "@/hooks/useThemeColor";

type Props = ViewProps

export default function Card({style, ...otherProps}: Props) {
	const borderColor = useThemeColor({}, "border")
	const shadowColor = useThemeColor({}, "shadow")
	return (
		<View
			style={[{
				paddingHorizontal: 8,
				paddingVertical: 10,
				borderWidth: 1,
				borderColor,
				borderRadius: 8,
				boxShadow: shadowColor,
				display: "flex",
				gap: 10,
			}, style]}
			{...otherProps}
		/>
	)
}
