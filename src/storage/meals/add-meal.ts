import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidV4 } from 'uuid';

import { getAllMeals } from './get-all-meals';
import { MEALS_STORAGE_KEY } from '../storage-keys';
import type { Meal, MealWithoutId } from './types';

export async function addMeal(newMeal: MealWithoutId) {
  const storedMeals = await getAllMeals();

  const newMealWithId: Meal = {
    ...newMeal,
    id: uuidV4(),
  };
  const nextMealsState: Meal[] = [...storedMeals, newMealWithId];
  const nextMealsStateAsString = JSON.stringify(nextMealsState);

  await AsyncStorage.setItem(MEALS_STORAGE_KEY, nextMealsStateAsString);
}
