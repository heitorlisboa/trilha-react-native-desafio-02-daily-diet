import { useEffect } from 'react';
import { Alert } from 'react-native';
import { Controller, type FieldErrors, useForm } from 'react-hook-form';
import { getHours, getMinutes, set } from 'date-fns';

import { getMealById } from '@app/storage/meals/get-meal-by-id';
import type { MealWithoutId } from '@app/storage/meals/types';

import {
  InputContainer,
  InputLabel,
  InputRow,
  RadioButton,
  RadioButtonIcon,
  RadioButtonText,
  TextInput,
  Title,
} from './styles';

import { BaseLayout } from '../BaseLayout';
import { DateTimeInput } from './components/DateTimeInput';
import { RadioGroup } from './components/RadioGroup';
import { Button } from '@app/components/Button';

type MealFormSchema = {
  name: string;
  description: string;
  date: Date;
  time: Date;
  inDiet: 'true' | 'false';
};

type MealFormProps =
  | {
      action: 'register';
      onSubmit: (data: MealWithoutId) => void;
    }
  | {
      mealId: string;
      action: 'edit';
      onSubmit: (data: MealWithoutId) => void;
    };

export function MealFormLayout(props: MealFormProps) {
  const currentDate = new Date();
  const { control, reset, handleSubmit } = useForm<MealFormSchema>({
    defaultValues: {
      date: currentDate,
      time: currentDate,
    },
  });

  const titleText =
    props.action === 'register' ? 'Nova refeição' : 'Editar refeição';
  const submitButtonText =
    props.action === 'register' ? 'Cadastrar refeição' : 'Salvar alterações';

  function handleConfirm({
    name,
    description,
    date,
    time,
    inDiet,
  }: MealFormSchema) {
    const dateTime = set(date, {
      hours: getHours(time),
      minutes: getMinutes(time),
      seconds: 0,
      milliseconds: 0,
    });

    const mealData: MealWithoutId = {
      name,
      description,
      dateTime,
      inDiet: inDiet === 'true',
    };

    props.onSubmit(mealData);
  }

  function handleInvalidSubmit(errors: FieldErrors<MealFormSchema>) {
    // Getting all the form error messages
    const errorMessages = Object.values(errors)
      .filter((error) => error.message !== undefined)
      .map((error) => error.message as string);

    // Combining the errors on a single string
    const combinedErrorMessages = errorMessages.reduce(
      (prevValue, currentError, index, array) => {
        const isLastError = index === array.length - 1;
        // Each line will look like '- Error message'
        return prevValue + '- ' + currentError + (isLastError ? '' : '\n');
      },
      ''
    );

    Alert.alert('Refeição inválida', combinedErrorMessages);
  }

  useEffect(() => {
    async function initializeFormState() {
      if (props.action !== 'edit') return;

      try {
        const meal = await getMealById(props.mealId);

        if (!meal) {
          return Alert.alert('Editar refeição', 'Refeição não encontrada.');
        }

        reset({
          name: meal.name,
          description: meal.description,
          date: meal.dateTime,
          time: meal.dateTime,
          inDiet: meal.inDiet ? 'true' : 'false',
        });
      } catch (error) {
        Alert.alert('Editar refeição', 'Não foi possível carregar a refeição.');
        console.error(error);
      }
    }

    initializeFormState();
  }, []);

  return (
    <BaseLayout
      color="neutral"
      Header={<Title>{titleText}</Title>}
      Content={
        <>
          <InputContainer>
            <InputLabel>Nome</InputLabel>
            <Controller
              name="name"
              control={control}
              rules={{
                maxLength: {
                  value: 50,
                  message:
                    'O nome deve ter um tamanho máximo de 50 caracteres.',
                },
                required: 'O nome é obrigatório.',
              }}
              render={({ field: { value, onChange } }) => (
                <TextInput value={value} onChangeText={onChange} />
              )}
            />
          </InputContainer>

          <InputContainer>
            <InputLabel>Descrição</InputLabel>
            <Controller
              name="description"
              control={control}
              rules={{
                maxLength: {
                  value: 250,
                  message:
                    'A descrição deve ter um tamanho máximo de 250 caracteres.',
                },
                required: 'A descrição é obrigatória.',
              }}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  style={{ height: 120 }}
                  value={value}
                  textAlignVertical="top"
                  multiline
                  onChangeText={onChange}
                />
              )}
            />
          </InputContainer>

          <InputRow>
            <InputContainer style={{ flex: 1, marginRight: 20 }}>
              <InputLabel>Data</InputLabel>
              <Controller
                name="date"
                control={control}
                rules={{ required: 'A data é obrigatória.' }}
                render={({ field: { value, onChange } }) => (
                  <DateTimeInput
                    mode="date"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </InputContainer>

            <InputContainer style={{ flex: 1 }}>
              <InputLabel>Hora</InputLabel>
              <Controller
                name="time"
                control={control}
                rules={{ required: 'O horário é obrigatório.' }}
                render={({ field: { value, onChange } }) => (
                  <DateTimeInput
                    mode="time"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </InputContainer>
          </InputRow>

          <InputLabel>Está dentro da dieta?</InputLabel>
          <Controller
            name="inDiet"
            control={control}
            rules={{
              required: 'É necessário informar se a refeição está na dieta.',
            }}
            render={({ field: { value, onChange } }) => (
              <RadioGroup.Root
                value={value === undefined ? null : value}
                onValueChange={(value) => onChange(value)}
              >
                <InputRow>
                  <RadioGroup.Item
                    value="true"
                    render={({ selected, updateRadioGroupValue }) => (
                      <RadioButton
                        style={{ marginRight: 8 }}
                        color="positive"
                        selected={selected}
                        onPress={updateRadioGroupValue}
                      >
                        <RadioButtonIcon color="positive" />
                        <RadioButtonText>Sim</RadioButtonText>
                      </RadioButton>
                    )}
                  />
                  <RadioGroup.Item
                    value="false"
                    render={({ selected, updateRadioGroupValue }) => (
                      <RadioButton
                        color="negative"
                        selected={selected}
                        onPress={updateRadioGroupValue}
                      >
                        <RadioButtonIcon color="negative" />
                        <RadioButtonText>Não</RadioButtonText>
                      </RadioButton>
                    )}
                  />
                </InputRow>
              </RadioGroup.Root>
            )}
          />

          <Button
            style={{ marginTop: 'auto' }}
            title={submitButtonText}
            onPress={handleSubmit(handleConfirm, handleInvalidSubmit)}
          />
        </>
      }
    />
  );
}
