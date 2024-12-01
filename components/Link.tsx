import {Link as ExpoLink, type LinkProps} from "expo-router";
import {useThemeColor} from "@/hooks/useThemeColor";

export type Props = LinkProps

export default function Link({style, ...otherProps}: Props) {
	const tintColor = useThemeColor({}, "tint")
	return (
		<ExpoLink
			style={[{
				color: tintColor,
			}, style]}
			{...otherProps}
		/>
	)
}
