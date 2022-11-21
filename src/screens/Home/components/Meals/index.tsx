import { useCallback, useState } from 'react';
import { Alert, SectionList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Plus } from 'phosphor-react-native';
import { format } from 'date-fns';

import { getAllMeals } from '@app/storage/meals/get-all-meals';
import { groupMealsByDate } from '@app/storage/meals/group-meals-by-date';
import type { MealsGroupedByDate } from '@app/storage/meals/types';

import {
  Container,
  MealSectionFooter,
  MealSectionHeader,
  Title,
} from './styles';

import { Button } from '@app/components/Button';
import { Loading } from '@app/components/Loading';
import { MealCard } from '../MealCard';

export function Meals() {
  const [isLoading, setIsLoading] = useState(false);

  const [groupedMeals, setGroupedMeals] = useState<MealsGroupedByDate[]>([]);

  const navigation = useNavigation();
  function handleGoToRegisterMeal() {
    navigation.navigate('registerMeal');
  }

  useFocusEffect(
    useCallback(() => {
      async function updateGroupedMealsState() {
        setIsLoading(true);

        try {
          const meals = await getAllMeals();
          const mealsGroupedByDate = groupMealsByDate(meals);
          setGroupedMeals(mealsGroupedByDate);
        } catch (error) {
          Alert.alert('Refeições', 'Não foi possível carregar as refeições.');
          console.error(error);
        }

        setIsLoading(false);
      }

      updateGroupedMealsState();
    }, [])
  );

  return (
    <Container>
      <Title>Refeições</Title>
      <Button
        style={{ marginTop: 8 }}
        title="Nova refeição"
        Icon={Plus}
        onPress={handleGoToRegisterMeal}
      />
      {/* Enabling loading only when the grouped meals state is an empty array,
       so the loading animation doesn't happen when there's already meal data in
       the state, resetting the scroll position caused by rendering the loading
       animation and then rendering again the `SectionList` */}
      {isLoading && groupedMeals.length === 0 ? (
        <Loading />
      ) : (
        <SectionList
          style={{ marginTop: 32 }}
          contentContainerStyle={{ paddingBottom: 32 }}
          sections={groupedMeals}
          renderItem={({ item }) => (
            <MealCard
              mealId={item.id}
              title={item.name}
              dateTime={item.dateTime}
              inDiet={item.inDiet}
            />
          )}
          renderSectionHeader={({ section }) => (
            <MealSectionHeader>
              {format(section.date, "dd'.'MM'.'yy")}
            </MealSectionHeader>
          )}
          renderSectionFooter={() => <MealSectionFooter />}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
}
