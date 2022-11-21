import { Subtitle, Title } from './styles';

type PercentProps = {
  percentOfDietMeals: number;
};

export function Percent({ percentOfDietMeals }: PercentProps) {
  return (
    <>
      <Title>{percentOfDietMeals.toFixed(2)}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </>
  );
}
