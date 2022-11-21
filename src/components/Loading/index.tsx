import { Container, LoadIndicator } from './styles';

type LoadingProps = {
  transparent?: boolean;
};

export function Loading({ transparent = false }: LoadingProps) {
  return (
    <Container transparent={transparent}>
      <LoadIndicator />
    </Container>
  );
}
