import styled, { css } from 'styled-components/native';
import { ArrowUpRight, type IconProps } from 'phosphor-react-native';

import { cssFontSizeAndLineHeight } from '@app/utils/css-font-size-and-line-height';

enum ContainerColors {
  'neutral' = 'gray-200',
  'positive' = 'green-100',
  'negative' = 'red-100',
}

export const Container = styled.TouchableOpacity<{
  color: keyof typeof ContainerColors;
}>`
  background-color: ${({ theme, color }) =>
    theme.colors[ContainerColors[color]]};

  position: relative;
  align-items: center;
  justify-content: center;

  padding: 20px 16px;
  margin-top: 32px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize['2xl'])}
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-800']};
    font-family: ${theme.fontFamily.regular};
    ${cssFontSizeAndLineHeight(theme.fontSize.sm)}
  `}
`;

enum ArrowIconColors {
  'neutral' = 'gray-800',
  'positive' = 'green-700',
  'negative' = 'red-700',
}

type ArrowIconProps = {
  color: keyof typeof ArrowIconColors;
};

export const ArrowIcon = styled(ArrowUpRight).attrs<ArrowIconProps>(
  ({ theme, color }) =>
    ({
      color: theme.colors[ArrowIconColors[color]],
      size: 24,
      weight: 'regular',
    } as IconProps)
)<ArrowIconProps>`
  position: absolute;
  top: 8px;
  right: 8px;
`;
