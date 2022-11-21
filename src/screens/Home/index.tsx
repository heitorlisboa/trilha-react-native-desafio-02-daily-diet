import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { getAllMeals } from '@app/storage/meals/get-all-meals';
import type { Meal } from '@app/storage/meals/types';

import { BottomGradient, Container } from './styles';

import { Header } from './components/Header';
import { Percent } from './components/Percent';
import { Meals } from './components/Meals';

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [allMealsData, setAllMealsData] = useState<Meal[]>([]);

  useFocusEffect(
    useCallback(() => {
      async function updateMealsState() {
        setIsLoading(true);

        try {
          const meals = await getAllMeals();
          setAllMealsData(meals);
        } catch (error) {
          Alert.alert('Refeições', 'Não foi possível carregar as refeições.');
          console.error(error);
        }

        setIsLoading(false);
      }

      updateMealsState();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Percent mealsData={allMealsData} isLoading={isLoading} />
      <Meals mealsData={allMealsData} isLoading={isLoading} />
      <BottomGradient />
    </Container>
  );
}
