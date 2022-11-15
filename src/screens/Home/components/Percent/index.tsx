import { ArrowIcon, Container, Subtitle, Title } from './styles';

export function Percent() {
  return (
    <Container accessibilityHint="Acessa as estatísticas da sua dieta">
      <Title>90,86%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
      <ArrowIcon />
    </Container>
  );
}
