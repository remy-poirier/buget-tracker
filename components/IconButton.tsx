import {Button, Pressable, type PressableProps, View} from "react-native";
import {IconSymbol, IconSymbolName} from "@/components/ui/IconSymbol";
import {useThemeColor} from "@/hooks/useThemeColor";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = PressableProps &{
	icon: string
	onPress: () => void
	variant?: "primary" | "secondary"
}

export default function IconButton({icon, variant = "primary", ...rest}: Props) {
	const tintColor = useThemeColor({}, "tint")
	const secondaryColor = useThemeColor({}, "tintSecondary")

	const backgroundColor = variant === "primary" ? tintColor : secondaryColor

	return (
		<Pressable
			{...rest}
		>
			<View
				style={[{
					backgroundColor, borderRadius: 30, width: 35, height: 35,
					display: "flex", justifyContent: "center", alignItems: "center",
				}]}
			>
				{/* @ts-ignore */}
				<AntDesign name={icon} size={20} color="white" />
			</View>
		</Pressable>
	)
}
