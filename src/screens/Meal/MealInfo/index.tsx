import {
  DateTime,
  DateTimeTitle,
  Description,
  Tag,
  TagIcon,
  TagText,
  Title,
} from './styles';

export function MealInfo() {
  return (
    <>
      <Title>Sanduíche</Title>
      <Description>
        Sanduíche de pão integral com atum e salada de alface e tomate
      </Description>

      <DateTimeTitle>Data e hora</DateTimeTitle>
      <DateTime>12/08/2022 às 16:00</DateTime>

      <Tag>
        <TagIcon inDiet={true} />
        <TagText>dentro da dieta</TagText>
      </Tag>
    </>
  );
}
