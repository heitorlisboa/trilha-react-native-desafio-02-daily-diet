import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';

import { Title } from './styles';

import { BaseLayout } from '@app/layouts/BaseLayout';
import { DeleteMealModal } from './DeleteMealModal';
import { MealInfo } from './MealInfo';
import { Button } from '@app/components/Button';

export function Meal() {
  const [deleteMealModalVisible, setDeleteMealModalVisible] = useState(false);

  function handleOpenDeleteMealModal() {
    setDeleteMealModalVisible(true);
  }

  function handleCloseDeleteMealModal() {
    setDeleteMealModalVisible(false);
  }

  const navigation = useNavigation();

  function handleGoToEditMeal() {
    navigation.navigate('editMeal', { id: '' });
  }

  function handleDeleteMeal() {
    // Redirecting the user to the home screen
    navigation.navigate('home');
  }

  return (
    <BaseLayout
      color="positive"
      Header={<Title>Refeição</Title>}
      Content={
        <>
          <DeleteMealModal
            visible={deleteMealModalVisible}
            onRequestClose={handleCloseDeleteMealModal}
            onConfirmDeleteMeal={handleDeleteMeal}
          />

          <MealInfo />

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
      }
    />
  );
}
