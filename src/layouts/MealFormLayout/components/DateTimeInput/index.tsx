import { useState } from 'react';
import { Modal } from 'react-native';
import { format } from 'date-fns';
import type { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import {
  Container,
  DateTimePicker,
  InputValue,
  ModalContainer,
  ModalContent,
} from './styles';

import { Button } from '@app/components/Button';

type DateTimeInputProps = {
  mode: 'date' | 'time';
  value: Date;
  onChange: (date: Date) => void;
};

export function DateTimeInput({ mode, value, onChange }: DateTimeInputProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const displayValue =
    mode === 'date'
      ? format(value, "dd'/'MM'/'yyyy")
      : format(value, "HH':'mm");

  function handleOpenModal() {
    setModalVisible(true);
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  function handleDateTimePickerChange(event: DateTimePickerEvent, date?: Date) {
    const isSetEvent = event.type === 'set' && date !== undefined;
    if (isSetEvent) onChange(date);
  }

  return (
    <>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent
        onRequestClose={handleCloseModal}
      >
        <ModalContainer>
          <ModalContent>
            <DateTimePicker
              value={value}
              mode={mode}
              display="spinner"
              onChange={handleDateTimePickerChange}
            />
            <Button
              style={{ marginTop: 16 }}
              title="Fechar"
              onPress={handleCloseModal}
            />
          </ModalContent>
        </ModalContainer>
      </Modal>

      <Container onPress={handleOpenModal}>
        <InputValue>{displayValue}</InputValue>
      </Container>
    </>
  );
}
