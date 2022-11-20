import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, type IconProps } from 'phosphor-react-native';
import type { ScrollViewProps } from 'react-native';

enum ContainerColors {
  'neutral' = 'gray-200',
  'positive' = 'green-100',
  'negative' = 'red-100',
}

export type ContainerColorProp = keyof typeof ContainerColors;

export const Container = styled(SafeAreaView)<{
  color: ContainerColorProp;
}>`
  flex: 1;
  background-color: ${({ theme, color }) =>
    theme.colors[ContainerColors[color]]};
`;

export const InnerContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
  scrollEnabled: false,
} as ScrollViewProps)``;

export const HeaderContainer = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;

  margin: 24px;
  margin-top: 28px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
`;

enum BackIconColors {
  'neutral' = 'gray-800',
  'positive' = 'green-700',
  'negative' = 'red-700',
}

type BackIconProps = {
  color: keyof typeof BackIconColors;
};

export const BackIcon = styled(ArrowLeft).attrs<BackIconProps>(
  ({ theme, color }) =>
    ({
      color: theme.colors[BackIconColors[color]],
      size: 24,
    } as IconProps)
)<BackIconProps>``;

export const ContentContainer = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors['gray-50']};

  padding: 32px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  shadow-color: black;
  shadow-opacity: 0.05;
  shadow-radius: 15px;
`;
