import { Container } from './styles';

import { Header } from './components/Header';
import { Percent } from './components/Percent';

export function Home() {
  return (
    <Container>
      <Header />
      <Percent />
    </Container>
  );
}
