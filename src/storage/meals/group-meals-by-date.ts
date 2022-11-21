import { isSameDay, set } from 'date-fns';

import type { Meal, MealsGroupedByDate } from './types';

export function groupMealsByDate(meals: Meal[]): MealsGroupedByDate[] {
  const mealsSortedByDateDescending = [...meals].sort(
    (a, b) => b.dateTime.valueOf() - a.dateTime.valueOf()
  );

  const mealsGroupedByDate: MealsGroupedByDate[] = [];

  for (const meal of mealsSortedByDateDescending) {
    const existingMealGroup = mealsGroupedByDate.find((currentGroup) =>
      isSameDay(currentGroup.date, meal.dateTime)
    );

    if (existingMealGroup) {
      existingMealGroup.data.push(meal);
    } else {
      const newMealGroup: MealsGroupedByDate = {
        date: set(meal.dateTime, {
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
        }),
        data: [meal],
      };
      mealsGroupedByDate.push(newMealGroup);
    }
  }

  return mealsGroupedByDate;
}
