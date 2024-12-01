import {SafeAreaView, type ViewProps} from "react-native";
import {ThemedView} from "@/components/ThemedView";
import {useThemeColor} from "@/hooks/useThemeColor";

export type Props = ViewProps

export function PageView({style, children, ...otherProps}: Props) {
	const backgroundColor = useThemeColor({}, 'background');

	return (
		<SafeAreaView
			style={[{
				backgroundColor,
				flex: 1,
				height: "100%",

				display: "flex",
				gap: 8,
			}, style]}
			{...otherProps}
		>
			<ThemedView
				style={{
					paddingVertical: 16,
					paddingHorizontal: 16,
					gap: 10,
					display: "flex",
					flex: 1,
				}}
			>
				{children}
			</ThemedView>
		</SafeAreaView>
	)
}
