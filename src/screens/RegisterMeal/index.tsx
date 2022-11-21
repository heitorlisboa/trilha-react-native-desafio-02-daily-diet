import { useNavigation } from '@react-navigation/native';

import { addMeal } from '@app/storage/meals/add-meal';
import type { MealWithoutId } from '@app/storage/meals/types';

import { MealFormLayout } from '@app/layouts/MealFormLayout';
import { Alert } from 'react-native';

export function RegisterMeal() {
  const navigation = useNavigation();

  async function handleRegisterMeal(meal: MealWithoutId) {
    try {
      await addMeal(meal);
      // Redirecting the user to the feedback screen
      navigation.navigate('feedback', { inDiet: meal.inDiet });
    } catch (error) {
      Alert.alert('Nova refeição', 'Não foi possível adicionar a refeição.');
    }
  }

  return <MealFormLayout action="register" onSubmit={handleRegisterMeal} />;
}
