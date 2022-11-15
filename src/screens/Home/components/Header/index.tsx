import { Container, UserImage } from './styles';

import Logo from '@app/assets/logo.svg';
import userImg from '@app/assets/user.png';

export function Header() {
  return (
    <Container>
      <Logo />
      <UserImage source={userImg} />
    </Container>
  );
}
