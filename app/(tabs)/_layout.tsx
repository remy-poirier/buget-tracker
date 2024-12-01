import {router, Tabs} from "expo-router";
import {Colors, Theme} from "@/constants/Colors";
import {useColorScheme} from "@/hooks/useColorScheme";
import {HapticTab} from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import {Platform} from "react-native";
import React from "react";
import {IconSymbol} from "@/components/ui/IconSymbol";
import AntDesign from "@expo/vector-icons/AntDesign";
import {useThemeColor} from "@/hooks/useThemeColor";

export default function TabLayout(){
	const colorScheme = useColorScheme();
	const textColor = useThemeColor({}, "text")

	return (
		<Tabs screenOptions={{
			headerTintColor: Colors[colorScheme ?? 'light'].text,
			tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
			// headerShown: false,
			tabBarButton: HapticTab,
			// tabBarBackground: TabBarBackground,
			tabBarStyle: Platform.select({
				ios: {
					// Use a transparent background on iOS to show the blur effect
					position: 'absolute',
					backgroundColor: Colors[colorScheme ?? 'light'].background,
					borderTopWidth: 0,
					height: Theme.tabBarHeight,
				},
				default: {
					height: Theme.tabBarHeight
				},
			}),
			headerStyle: {
				backgroundColor: Colors[colorScheme ?? 'light'].background,
				borderBottomWidth: 0,
			},
		}}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Accueil",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => <IconSymbol size={28} name="house.fill" color={focused ? color : textColor} />,
			}}
			/>
			<Tabs.Screen
				name="transactions"
				options={{
					title: "Transactions",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => <IconSymbol size={28} name="chart.line.uptrend.xyaxis" color={focused ? color : textColor} />,
				}}
			/>
		</Tabs>
	)
}
