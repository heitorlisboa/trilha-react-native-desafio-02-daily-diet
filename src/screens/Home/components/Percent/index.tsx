import { useNavigation } from '@react-navigation/native';

import type { Meal } from '@app/storage/meals/types';

import { ArrowIcon, Container, Subtitle, Title } from './styles';

import { Loading } from '@app/components/Loading';

type PercentProps = {
  mealsData: Meal[];
  isLoading: boolean;
};

export function Percent({ mealsData, isLoading }: PercentProps) {
  const numberOfMeals = mealsData.length;
  const numberOfDietMeals = mealsData.filter(
    (currentMeal) => currentMeal.inDiet
  ).length;
  const percentOfDietMeals =
    numberOfMeals === 0 ? 0 : (numberOfDietMeals * 100) / numberOfMeals;

  const layoutColor =
    numberOfMeals === 0 || percentOfDietMeals === 50
      ? 'neutral'
      : percentOfDietMeals > 50
      ? 'positive'
      : 'negative';

  const navigation = useNavigation();
  function handleGoToStatistics() {
    navigation.navigate('statistics');
  }

  return (
    <Container
      color={layoutColor}
      accessibilityHint="Acessa as estatísticas da sua dieta"
      onPress={handleGoToStatistics}
    >
      {isLoading ? (
        <Loading transparent />
      ) : (
        <>
          <Title>{percentOfDietMeals.toFixed(2)}%</Title>
          <Subtitle>das refeições dentro da dieta</Subtitle>
          <ArrowIcon color={layoutColor} />
        </>
      )}
    </Container>
  );
}
