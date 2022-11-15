import { BottomGradient, Container } from './styles';

import { Header } from './components/Header';
import { Percent } from './components/Percent';
import { Meals } from './components/Meals';

export function Home() {
  return (
    <Container>
      <Header />
      <Percent />
      <Meals />
      <BottomGradient />
    </Container>
  );
}
