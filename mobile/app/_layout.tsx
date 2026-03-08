import { Stack } from "expo-router";
import './global.css'
import { StatusBar, Text as RNText } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Text from '@/components/Text'; // Your custom Text

// Make your custom Text the default
// @ts-ignore - This is a hack to override the default Text
global.Text = Text;

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'AveriaLibre_400Regular': require('../node_modules/@expo-google-fonts/averia-libre/400Regular/AveriaLibre_400Regular.ttf'),
    'AveriaLibre_700Bold': require('../node_modules/@expo-google-fonts/averia-libre/700Bold/AveriaLibre_700Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return(
    <>
      <Stack screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
      </Stack>
      <StatusBar backgroundColor='gray' />
    </>
  )
}