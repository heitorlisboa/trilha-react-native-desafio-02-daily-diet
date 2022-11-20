import { MealFormLayout } from '@app/layouts/MealFormLayout';

export function RegisterMeal() {
  return (
    <MealFormLayout
      action="register"
      onSubmit={(data) => {
        console.log(data);
      }}
    />
  );
}
