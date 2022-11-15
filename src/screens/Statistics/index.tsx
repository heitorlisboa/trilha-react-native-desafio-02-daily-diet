import { Container } from './styles';

import { Percent } from './components/Percent';
import { Content } from './components/Content';

export function Statistics() {
  return (
    <Container>
      <Percent />
      <Content />
    </Container>
  );
}
