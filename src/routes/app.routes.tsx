import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RoutesWithParams } from '@app/@types/navigation';

import { Home } from '@app/screens/Home';
import { Statistics } from '@app/screens/Statistics';
import { RegisterMeal } from '@app/screens/RegisterMeal';
import { Feedback } from '@app/screens/Feedback';
import { Meal } from '@app/screens/Meal';

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
      <Stack.Screen name="statistics" component={Statistics} />
      <Stack.Screen name="registerMeal" component={RegisterMeal} />
      <Stack.Screen name="feedback" component={Feedback} />
      <Stack.Screen name="meal" component={Meal} />
    </Stack.Navigator>
  );
}
