import styled, { css } from 'styled-components/native';
import { ArrowLeft, type IconProps } from 'phosphor-react-native';

import { cssFontSizeAndLineHeight } from '@app/utils/css-font-size-and-line-height';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  padding: 28px 24px 32px;
`;

export const BackButton = styled.TouchableOpacity`
  align-self: flex-start;
`;

export const BackIcon = styled(ArrowLeft).attrs(
  ({ theme }) =>
    ({
      color: theme.colors['green-700'],
      size: 24,
    } as IconProps)
)``;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize['2xl'])}
  `}

  margin-top: -8px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-800']};
    font-family: ${theme.fontFamily.regular};
    ${cssFontSizeAndLineHeight(theme.fontSize.sm)}
  `}
`;
