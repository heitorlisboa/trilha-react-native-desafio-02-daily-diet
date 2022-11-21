import AsyncStorage from '@react-native-async-storage/async-storage';

import { getMealById } from './get-meal-by-id';
import { getAllMeals } from './get-all-meals';
import { MEALS_STORAGE_KEY } from '../storage-keys';
import { AppError } from '@app/utils/app-error';

export async function removeMealById(mealId: string) {
  const mealExists = Boolean(await getMealById(mealId));

  if (!mealExists) {
    throw new AppError('Refeição não encontrada.');
  }

  const storedMeals = await getAllMeals();

  const nextMealsState = storedMeals.filter(
    (currentMeal) => currentMeal.id !== mealId
  );
  const nextMealsStateAsString = JSON.stringify(nextMealsState);

  await AsyncStorage.setItem(MEALS_STORAGE_KEY, nextMealsStateAsString);
}
