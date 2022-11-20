import { Button } from '@app/components/Button';
import { Modal } from 'react-native';

import { Buttons, Container, Content, Title } from './styles';

type DeleteMealModalProps = {
  visible: boolean;
  onRequestClose: () => void;
  onConfirmDeleteMeal: () => void;
};

export function DeleteMealModal({
  visible,
  onRequestClose,
  onConfirmDeleteMeal,
}: DeleteMealModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onRequestClose}
    >
      <Container>
        <Content>
          <Title>Deseja realmente excluir o registro da refeição?</Title>
          <Buttons>
            <Button
              style={{ flex: 1 }}
              title="Cancelar"
              variant="outline"
              onPress={onRequestClose}
            />
            <Button
              style={{ flex: 1, marginLeft: 12 }}
              title="Sim, excluir"
              onPress={onConfirmDeleteMeal}
            />
          </Buttons>
        </Content>
      </Container>
    </Modal>
  );
}
