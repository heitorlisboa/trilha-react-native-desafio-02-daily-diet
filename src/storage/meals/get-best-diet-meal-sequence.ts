import type { Meal } from './types';

export function getBestDietMealSequence(meals: Meal[]) {
  const mealsSortedByDateAscending = [...meals].sort(
    (a, b) => a.dateTime.valueOf() - b.dateTime.valueOf()
  );

  let bestSequence = 0;
  let currentSequence = 0;
  let prevItem: Meal;

  mealsSortedByDateAscending.forEach((currentItem, index) => {
    const isFirstItem = index === 0;
    if (isFirstItem) {
      prevItem = currentItem;
      if (currentItem.inDiet) {
        currentSequence = 1;
        bestSequence = currentSequence;
      }
      return;
    }

    if (prevItem.inDiet && currentItem.inDiet) {
      currentSequence += 1;
      if (currentSequence > bestSequence) bestSequence = currentSequence;
    } else if (currentItem.inDiet) {
      currentSequence = 1;
    } else {
      currentSequence = 0;
    }

    prevItem = currentItem;
  });

  return bestSequence;
}
