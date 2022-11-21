import {
  InfoBox,
  InfoBoxRow,
  InfoBoxSubtitle,
  InfoBoxTitle,
  Title,
} from './styles';

type ContentProps = {
  bestDietMealSequence: number;
  numberOfMeals: number;
  numberOfDietMeals: number;
  numberOfOffDietMeals: number;
};

export function Content({
  bestDietMealSequence,
  numberOfMeals,
  numberOfDietMeals,
  numberOfOffDietMeals,
}: ContentProps) {
  return (
    <>
      <Title>Estatísticas gerais</Title>

      <InfoBox color="neutral">
        <InfoBoxTitle>{bestDietMealSequence}</InfoBoxTitle>
        <InfoBoxSubtitle>
          melhor sequência de pratos dentro da dieta
        </InfoBoxSubtitle>
      </InfoBox>

      <InfoBox style={{ marginTop: 12 }} color="neutral">
        <InfoBoxTitle>{numberOfMeals}</InfoBoxTitle>
        <InfoBoxSubtitle>refeições registradas</InfoBoxSubtitle>
      </InfoBox>

      <InfoBoxRow style={{ marginTop: 12 }}>
        <InfoBox style={{ flex: 1, marginRight: 12 }} color="positive">
          <InfoBoxTitle>{numberOfDietMeals}</InfoBoxTitle>
          <InfoBoxSubtitle>refeições dentro da dieta</InfoBoxSubtitle>
        </InfoBox>

        <InfoBox style={{ flex: 1 }} color="negative">
          <InfoBoxTitle>{numberOfOffDietMeals}</InfoBoxTitle>
          <InfoBoxSubtitle>refeições fora da dieta</InfoBoxSubtitle>
        </InfoBox>
      </InfoBoxRow>
    </>
  );
}
