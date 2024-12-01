/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const textColorLight = '#030712';
const textColorDark = '#f9fafb';

export const Theme = {
	radius: 30,
	tabBarHeight: 80
}

const primary = "#f9fafb"

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: textColorLight,
		tint: "#7b39ed",
		tintText: "#f9fafb",
		tintSecondary: "rgba(0, 0, 0, 0.2)",
		cardBackground: "#ffffff",
		border: "#e5e7eb",
		shadow: "0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)",
		primaryBg: "#f8f5fe"
  },
  dark: {
    text: '#ECEDEE',
    background: '#09090b',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: textColorDark,
		tint: "#6d28d9",
		tintText: "#f9fafb",
		tintSecondary: "rgba(255, 255, 255, 0.2)",
		cardBackground: "#030712",
		border: "#1f2937",
		shadow: "0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)",
		primaryBg: "#170536"
  },
};
