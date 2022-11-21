import { getAllMeals } from './get-all-meals';

export async function getMealById(mealId: string) {
  const storedMeals = await getAllMeals();
  const meal =
    storedMeals.find((currentMeal) => currentMeal.id === mealId) ?? null;
  return meal;
}
