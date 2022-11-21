import { format } from 'date-fns';

import type { Meal } from '@app/storage/meals/types';

import {
  DateTime,
  DateTimeTitle,
  Description,
  Tag,
  TagIcon,
  TagText,
  Title,
} from './styles';

type MealInfoProps = {
  mealData: Meal;
};

export function MealInfo({ mealData }: MealInfoProps) {
  const dateTimeText = format(mealData.dateTime, "dd'/'MM'/'yyyy' às 'HH':'mm");
  const mealBadgeText = mealData.inDiet ? 'dentro da dieta' : 'fora da dieta';

  return (
    <>
      <Title>{mealData.name}</Title>
      <Description>{mealData.description}</Description>

      <DateTimeTitle>Data e hora</DateTimeTitle>
      <DateTime>{dateTimeText}</DateTime>

      <Tag>
        <TagIcon inDiet={mealData.inDiet} />
        <TagText>{mealBadgeText}</TagText>
      </Tag>
    </>
  );
}
