import styled, { css } from 'styled-components/native';
import { ArrowUpRight, type IconProps } from 'phosphor-react-native';

import { cssFontSizeAndLineHeight } from '@app/utils/css-font-size-and-line-height';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors['green-100']};

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

export const ArrowIcon = styled(ArrowUpRight).attrs(
  ({ theme }) =>
    ({
      color: theme.colors['green-700'],
      size: 24,
      weight: 'regular',
    } as IconProps)
)`
  position: absolute;
  top: 8px;
  right: 8px;
`;
