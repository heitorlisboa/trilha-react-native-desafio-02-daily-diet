import { useState } from 'react';
import { Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';

import {
  MealDateTime,
  MealDateTimeTitle,
  MealDescription,
  MealName,
  MealTag,
  MealTagIcon,
  MealTagText,
  ModalButtons,
  ModalContainer,
  ModalContent,
  ModalTitle,
  Title,
} from './styles';

import { BaseLayout } from '@app/layouts/BaseLayout';
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
          <Modal
            visible={deleteMealModalVisible}
            animationType="fade"
            transparent
            onRequestClose={handleCloseDeleteMealModal}
          >
            <ModalContainer>
              <ModalContent>
                <ModalTitle>
                  Deseja realmente excluir o registro da refeição?
                </ModalTitle>
                <ModalButtons>
                  <Button
                    style={{ flex: 1 }}
                    title="Cancelar"
                    variant="outline"
                    onPress={handleCloseDeleteMealModal}
                  />
                  <Button
                    style={{ flex: 1, marginLeft: 12 }}
                    title="Sim, excluir"
                    onPress={handleDeleteMeal}
                  />
                </ModalButtons>
              </ModalContent>
            </ModalContainer>
          </Modal>

          <MealName>Sanduíche</MealName>
          <MealDescription>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </MealDescription>

          <MealDateTimeTitle>Data e hora</MealDateTimeTitle>
          <MealDateTime>12/08/2022 às 16:00</MealDateTime>

          <MealTag>
            <MealTagIcon inDiet={true} />
            <MealTagText>dentro da dieta</MealTagText>
          </MealTag>

          <Button
            style={{ marginTop: 'auto' }}
            title="Editar refeição"
            Icon={PencilSimpleLine}
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
