import '../tamagui-web.css'
import { Provider } from '@/Provider'
import { Inter_400Regular, Inter_900Black, useFonts } from '@expo-google-fonts/inter'
import { inject } from '@vercel/analytics'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { useTheme } from 'tamagui'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter_400Regular,
    Inter_900Black,
  })

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  }

  inject()

  return (
    <Provider>
      <RootLayoutNav />
    </Provider>
  )
}

function RootLayoutNav() {
  const theme = useTheme()

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="modal"
        options={{
          title: 'Tamagui + Expo',
          presentation: 'modal',
          animation: 'slide_from_right',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          contentStyle: {
            backgroundColor: theme.background.val,
          },
        }}
      />
    </Stack>
  )
}
