import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { defaultTheme } from '@app/themes/default';

import { Routes } from '@app/routes';
import { Loading } from '@app/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      {fontsLoaded ? <Routes /> : <Loading />}
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
