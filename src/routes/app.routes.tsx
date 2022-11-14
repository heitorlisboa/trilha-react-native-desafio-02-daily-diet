import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RoutesWithParams } from '@app/@types/navigation';

import { Home } from '@app/screens/Home';

const Stack = createNativeStackNavigator<RoutesWithParams>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}
