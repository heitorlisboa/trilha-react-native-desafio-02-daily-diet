import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEALS_STORAGE_KEY } from '../storage-keys';
import type { Meal } from './types';

export type MealWithDateAsString = Omit<Meal, 'dateTime'> & {
  dateTime: string;
};

export async function getAllMeals() {
  const mealsAsString = await AsyncStorage.getItem(MEALS_STORAGE_KEY);

  const mealsWithDatesAsStrings: MealWithDateAsString[] = mealsAsString
    ? JSON.parse(mealsAsString)
    : [];

  // Converting all string dates to date objects
  const meals: Meal[] = mealsWithDatesAsStrings.map((currentMeal) => ({
    ...currentMeal,
    dateTime: new Date(currentMeal.dateTime),
  }));

  return meals;
}
