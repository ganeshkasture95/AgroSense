import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "../global.css";

SplashScreen.preventAutoHideAsync()

export default function Layout() {

  const [loaded] = useFonts({
    "Jakarta-Bold": require("../../public/assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../../public/assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../../public/assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../../public/assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../../public/assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("../../public/assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../../public/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  // if (!publishableKey) {
  //   throw new Error(
  //     "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env",
  //   );
  // }

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="(auth)" options={{headerShown:false}}/>
      <Stack.Screen name="(root)" options={{headerShown:false}} />
    </Stack>
  );
}
