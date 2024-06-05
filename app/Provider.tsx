import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import { CurrentToast } from 'app/CurrentToast'
import { type mode, themeWithToggle } from 'app/atoms/theme'
import { useAtom } from 'jotai'
import { Appearance } from 'react-native'
import { TamaguiProvider, type TamaguiProviderProps } from 'tamagui'
import { config } from '../tamagui.config'

export const themeAtom = themeWithToggle('dark' as mode)

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const [scheme] = useAtom(themeAtom)

  const current = () => {
    if (scheme === ('system' as mode)) {
      return Appearance.getColorScheme() as mode
    }
    return scheme
  }

  return (
    <ThemeProvider value={current() === 'dark' ? DarkTheme : DefaultTheme}>
      <TamaguiProvider
        config={config}
        defaultTheme={current() === 'dark' ? 'dark' : 'light'}
        {...rest}
      >
        <ToastProvider
          swipeDirection="horizontal"
          duration={6000}
          native={
            [
              /* uncomment the next line to do native toasts on mobile. NOTE: it'll require you making a dev build and won't work with Expo Go */
              // 'mobile'
            ]
          }
        >
          {children}
          <CurrentToast />
          <ToastViewport top="$8" left={0} right={0} />
        </ToastProvider>
      </TamaguiProvider>
    </ThemeProvider>
  )
}