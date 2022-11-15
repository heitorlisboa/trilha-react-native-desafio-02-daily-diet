import { useNavigation } from '@react-navigation/native';

import { BackButton, BackIcon, Container, Subtitle, Title } from './styles';

export function Percent() {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <BackIcon />
      </BackButton>

      <Title>90,86%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
