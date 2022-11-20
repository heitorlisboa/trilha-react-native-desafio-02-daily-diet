import { useNavigation } from '@react-navigation/native';

import type { MealWithoutId } from '@app/storage/meals/types';

import { MealFormLayout } from '@app/layouts/MealFormLayout';

export function RegisterMeal() {
  const navigation = useNavigation();

  async function handleRegisterMeal(meal: MealWithoutId) {
    navigation.navigate('feedback', { inDiet: meal.inDiet });
  }

  return <MealFormLayout action="register" onSubmit={handleRegisterMeal} />;
}
