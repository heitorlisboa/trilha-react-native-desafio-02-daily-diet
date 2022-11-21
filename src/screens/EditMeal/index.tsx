import { Alert } from 'react-native';
import {
  type RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { updateMealById } from '@app/storage/meals/update-meal-by-id';
import { AppError } from '@app/utils/app-error';
import type { MealWithoutId } from '@app/storage/meals/types';
import type { RoutesWithParams } from '@app/@types/navigation';

import { MealFormLayout } from '@app/layouts/MealFormLayout';

type EditMealRouteProp = RouteProp<RoutesWithParams, 'editMeal'>;

export function EditMeal() {
  const navigation = useNavigation();
  const {
    params: { id: mealId },
  } = useRoute<EditMealRouteProp>();

  async function handleEditMeal(meal: MealWithoutId) {
    try {
      await updateMealById(mealId, meal);
      // Redirecting the user back to the meal screen
      navigation.navigate('meal', { id: mealId });
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Editar refeição', error.message);
      }

      Alert.alert('Editar refeição', 'Não foi possível editar a refeição.');
      console.error(error);
    }
  }

  return (
    <MealFormLayout action="edit" mealId={mealId} onSubmit={handleEditMeal} />
  );
}
