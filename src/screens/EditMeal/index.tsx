import { useNavigation } from '@react-navigation/native';

import type { MealWithoutId } from '@app/storage/meals/types';

import { MealFormLayout } from '@app/layouts/MealFormLayout';

export function EditMeal() {
  const navigation = useNavigation();
  async function handleEditMeal(meal: MealWithoutId) {
    // Redirecting the user back to the meal screen
    navigation.navigate('meal', { id: '' });
  }

  return <MealFormLayout action="edit" mealId="" onSubmit={handleEditMeal} />;
}
