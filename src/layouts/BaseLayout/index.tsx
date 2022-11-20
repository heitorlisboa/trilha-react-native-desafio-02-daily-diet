import { useNavigation } from '@react-navigation/native';
import type { FC, ReactElement } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import {
  BackButton,
  BackIcon,
  Container,
  type ContainerColorProp,
  ContentContainer,
  HeaderContainer,
  InnerContainer,
} from './styles';

type BaseLayoutProps = {
  color: ContainerColorProp;
  Header: FC | ReactElement;
  Content: FC | ReactElement;
  headerContainerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export function BaseLayout({
  color,
  Header,
  Content,
  headerContainerStyle,
  contentContainerStyle,
}: BaseLayoutProps) {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  const HeaderFc: FC = typeof Header === 'function' ? Header : () => Header;
  const ContentFc: FC = typeof Content === 'function' ? Content : () => Content;

  return (
    <Container color={color}>
      <InnerContainer>
        <HeaderContainer style={headerContainerStyle}>
          <BackButton onPress={handleGoBack}>
            <BackIcon color={color} />
          </BackButton>

          <HeaderFc />
        </HeaderContainer>

        <ContentContainer style={contentContainerStyle}>
          <ContentFc />
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
}
