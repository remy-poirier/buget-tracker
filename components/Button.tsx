import { Pressable, type PressableProps, View, type ViewProps} from "react-native";
import {useThemeColor} from "@/hooks/useThemeColor";
import {Theme} from "@/constants/Colors";
import Animated, {Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming} from "react-native-reanimated";
import AntDesign from '@expo/vector-icons/AntDesign';
import React from "react";

type Props = PressableProps & Pick<ViewProps, "style"> & {
	loading?: boolean
}

export default function Button({style, disabled, loading, onPress, children, ...otherProps}: Props) {
	const textColor = useThemeColor({}, "tintText")
	const backgroundColor = useThemeColor({}, "tint")
	const boxShadow = useThemeColor({}, "shadow")

	const d = loading || disabled

	const computeTextColor =  () => {
		if(loading) {
			return "transparent"
		}

		if(disabled) {
			return "rgba(0, 0, 0, 0.5)"
		}

		return textColor
	}

	const rotation = useSharedValue(0);

	if (loading) {
		rotation.value = withRepeat(
			withTiming(360, {
				duration: 1000,
				easing: Easing.linear
			}), // 1 seconde par rotation
			-1, // Répétition infinie
			false // Reversing à false pour éviter les rotations inversées
		);
	}

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ rotate: `${rotation.value}deg` }],
	}));

	return (
		<Pressable
			{...!disabled && {onPress}}
			style={({pressed}) => [{
				backgroundColor,
				borderRadius: Theme.radius,
				paddingVertical: 10,
				opacity: (disabled || pressed) ? 0.5 : 1,
				position: "relative",
				display: "flex",
				flexDirection: "row",
				gap: 8,
				paddingHorizontal: 16,
				alignItems: "center",
				justifyContent: "center",
				boxShadow
			}, style]}
			{...otherProps}
		>
			{(state) => (
				<>
					{loading && (
						<View style={{
							position: "absolute",
							display: "flex",
							borderRadius: Theme.radius,
							alignItems: "center",
							justifyContent: "center",
							left: 0, right: 0, top: 0, bottom: 0,
							overflow: "hidden",
							backgroundColor: "rgba(255, 255, 255, 0.5)",
						}}>
							<Animated.View style={animatedStyle}>
								<AntDesign name="loading1" size={24} color={textColor} />
							</Animated.View>
						</View>
					)}
					{typeof children === "function" ? children(state) : children}
				</>
			)}

		</Pressable>
	)

}
