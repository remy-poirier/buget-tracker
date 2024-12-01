import {ThemedText} from "@/components/ThemedText";
import {type TextProps} from "react-native";

type Props = TextProps

export default function CardHeader({style, ...rest}: Props) {
	return (
		<ThemedText
			style={[{
				fontSize: 18,
				fontWeight: "bold"
			}, style]}
			{...rest}
		/>
	)
}
