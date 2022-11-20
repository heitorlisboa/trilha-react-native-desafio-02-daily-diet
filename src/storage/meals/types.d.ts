export type Meal = {
  id: string;
  name: string;
  description: string;
  dateTime: Date;
  inDiet: boolean;
};

export type MealWithoutId = Omit<Meal, 'id'>;
