import {
  InfoBox,
  InfoBoxRow,
  InfoBoxSubtitle,
  InfoBoxTitle,
  Title,
} from './styles';

export function Content() {
  return (
    <>
      <Title>Estatísticas gerais</Title>

      <InfoBox color="neutral">
        <InfoBoxTitle>22</InfoBoxTitle>
        <InfoBoxSubtitle>
          melhor sequência de pratos dentro da dieta
        </InfoBoxSubtitle>
      </InfoBox>

      <InfoBox style={{ marginTop: 12 }} color="neutral">
        <InfoBoxTitle>109</InfoBoxTitle>
        <InfoBoxSubtitle>refeições registradas</InfoBoxSubtitle>
      </InfoBox>

      <InfoBoxRow style={{ marginTop: 12 }}>
        <InfoBox style={{ flex: 1, marginRight: 12 }} color="positive">
          <InfoBoxTitle>99</InfoBoxTitle>
          <InfoBoxSubtitle>refeições dentro da dieta</InfoBoxSubtitle>
        </InfoBox>

        <InfoBox style={{ flex: 1 }} color="negative">
          <InfoBoxTitle>10</InfoBoxTitle>
          <InfoBoxSubtitle>refeições fora da dieta</InfoBoxSubtitle>
        </InfoBox>
      </InfoBoxRow>
    </>
  );
}
