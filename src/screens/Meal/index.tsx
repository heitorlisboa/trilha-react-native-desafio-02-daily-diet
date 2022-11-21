import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import {
  type RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';

import { getMealById } from '@app/storage/meals/get-meal-by-id';
import { removeMealById } from '@app/storage/meals/remove-meal-by-id';
import { AppError } from '@app/utils/app-error';
import type { Meal as MealData } from '@app/storage/meals/types';
import type { RoutesWithParams } from '@app/@types/navigation';

import { Title } from './styles';

import { BaseLayout } from '@app/layouts/BaseLayout';
import { Loading } from '@app/components/Loading';
import { DeleteMealModal } from './components/DeleteMealModal';
import { MealInfo } from './components/MealInfo';
import { Button } from '@app/components/Button';

type MealRouteProp = RouteProp<RoutesWithParams, 'meal'>;

export function Meal() {
  const {
    params: { id: mealId },
  } = useRoute<MealRouteProp>();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [mealData, setMealData] = useState<MealData | null>(null);
  const [deleteMealModalVisible, setDeleteMealModalVisible] = useState(false);

  const layoutColor = mealData
    ? mealData.inDiet
      ? 'positive'
      : 'negative'
    : 'neutral';

  function handleOpenDeleteMealModal() {
    setDeleteMealModalVisible(true);
  }

  function handleCloseDeleteMealModal() {
    setDeleteMealModalVisible(false);
  }

  function handleGoToEditMeal() {
    navigation.navigate('editMeal', { id: mealId });
  }

  async function handleDeleteMeal() {
    try {
      await removeMealById(mealId);
      // Redirecting the user to the home screen
      navigation.navigate('home');
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Excluir refeição', error.message);
      }

      Alert.alert('Excluir refeição', 'Não foi possível excluir a refeição.');
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      async function updateMealDataState() {
        setIsLoading(true);

        try {
          const meal = await getMealById(mealId);

          if (!meal) {
            return Alert.alert('Refeição', 'Refeição não encontrada.');
          }

          setMealData(meal);
        } catch (error) {
          Alert.alert('Refeição', 'Não foi possível carregar a refeição.');
          console.error(error);
        }

        setIsLoading(false);
      }

      updateMealDataState();
    }, [])
  );

  return (
    <BaseLayout
      color={layoutColor}
      Header={<Title>Refeição</Title>}
      Content={() =>
        isLoading ? (
          <Loading />
        ) : (
          mealData && (
            <>
              <DeleteMealModal
                visible={deleteMealModalVisible}
                onRequestClose={handleCloseDeleteMealModal}
                onConfirmDeleteMeal={handleDeleteMeal}
              />

              <MealInfo mealData={mealData} />

              <Button
                style={{ marginTop: 'auto' }}
                title="Editar refeição"
                Icon={PencilSimpleLine}
                onPress={handleGoToEditMeal}
              />
              <Button
                style={{ marginTop: 8 }}
                title="Excluir refeição"
                variant="outline"
                Icon={Trash}
                onPress={handleOpenDeleteMealModal}
              />
            </>
          )
        )
      }
    />
  );
}
