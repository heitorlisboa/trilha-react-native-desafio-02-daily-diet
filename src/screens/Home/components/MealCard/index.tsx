import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

import { Container, Time, InDietIndicator, Separator, Title } from './styles';

type MealCardProps = {
  mealId: string;
  title: string;
  dateTime: Date;
  inDiet: boolean;
};

export function MealCard({ mealId, title, dateTime, inDiet }: MealCardProps) {
  const navigation = useNavigation();

  function handleGoToMeal() {
    navigation.navigate('meal', { id: mealId });
  }

  const time = format(dateTime, "HH':'mm");

  return (
    <Container onPress={handleGoToMeal}>
      <Time>{time}</Time>
      <Separator />
      <Title numberOfLines={1}>{title}</Title>
      <InDietIndicator inDiet={inDiet} />
    </Container>
  );
}
