import { useNavigation } from '@react-navigation/native';

import { ArrowIcon, Container, Subtitle, Title } from './styles';

export function Percent() {
  const navigation = useNavigation();
  function handleGoToStatistics() {
    navigation.navigate('statistics');
  }

  return (
    <Container
      accessibilityHint="Acessa as estatísticas da sua dieta"
      onPress={handleGoToStatistics}
    >
      <Title>90,86%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
      <ArrowIcon />
    </Container>
  );
}
