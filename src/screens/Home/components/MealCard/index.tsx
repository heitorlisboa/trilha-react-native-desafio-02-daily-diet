import { format } from 'date-fns';

import { Container, Time, InDietIndicator, Separator, Title } from './styles';

type MealCardProps = {
  title: string;
  dateTime: Date;
  inDiet: boolean;
};

export function MealCard({ title, dateTime, inDiet }: MealCardProps) {
  const time = format(dateTime, "HH':'mm");

  return (
    <Container>
      <Time>{time}</Time>
      <Separator />
      <Title numberOfLines={1}>{title}</Title>
      <InDietIndicator inDiet={inDiet} />
    </Container>
  );
}
