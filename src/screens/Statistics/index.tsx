import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { getAllMeals } from '@app/storage/meals/get-all-meals';
import { getBestDietMealSequence } from '@app/storage/meals/get-best-diet-meal-sequence';
import type { Meal } from '@app/storage/meals/types';

import { BaseLayout } from '@app/layouts/BaseLayout';
import { Loading } from '@app/components/Loading';
import { Percent } from './components/Percent';
import { Content } from './components/Content';

export function Statistics() {
  const [isLoading, setIsLoading] = useState(false);
  const [allMealsData, setAllMealsData] = useState<Meal[]>([]);

  const numberOfMeals = allMealsData.length;
  const numberOfDietMeals = allMealsData.filter(
    (currentMeal) => currentMeal.inDiet
  ).length;
  const numberOfOffDietMeals = numberOfMeals - numberOfDietMeals;
  const percentOfDietMeals =
    numberOfMeals === 0 ? 0 : (numberOfDietMeals * 100) / numberOfMeals;
  const bestDietMealSequence = getBestDietMealSequence(allMealsData);

  const layoutColor =
    numberOfMeals === 0 || percentOfDietMeals === 50
      ? 'neutral'
      : percentOfDietMeals > 50
      ? 'positive'
      : 'negative';

  useEffect(() => {
    async function initializeMealsData() {
      setIsLoading(true);

      try {
        const meals = await getAllMeals();
        setAllMealsData(meals);
      } catch (error) {
        Alert.alert(
          'Estatísticas',
          'Não foi possível carregar as estatísticas das refeições.'
        );
        console.error(error);
      }

      setIsLoading(false);
    }

    initializeMealsData();
  }, []);

  return (
    <BaseLayout
      headerContainerStyle={{ flexDirection: 'column', marginBottom: 32 }}
      color={layoutColor}
      Header={
        isLoading ? (
          <Loading transparent />
        ) : (
          <Percent percentOfDietMeals={percentOfDietMeals} />
        )
      }
      Content={
        isLoading ? (
          <Loading />
        ) : (
          <Content
            bestDietMealSequence={bestDietMealSequence}
            numberOfMeals={numberOfMeals}
            numberOfDietMeals={numberOfDietMeals}
            numberOfOffDietMeals={numberOfOffDietMeals}
          />
        )
      }
    />
  );
}
