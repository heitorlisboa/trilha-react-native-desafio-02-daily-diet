import styled, { css } from 'styled-components/native';
import { Circle, type IconProps } from 'phosphor-react-native';

import { cssFontSizeAndLineHeight } from '@app/utils/css-font-size-and-line-height';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  padding: 14px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors['gray-300']};
  border-radius: 6px;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-800']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize.xs)}
  `}
`;

export const Separator = styled.View`
  background-color: ${({ theme }) => theme.colors['gray-400']};
  width: 1px;
  height: 65%;
  margin: 0 12px;
`;

export const Title = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.colors['gray-800']};
    font-family: ${theme.fontFamily.regular};
    ${cssFontSizeAndLineHeight(theme.fontSize.md)}
  `}

  margin-right: 12px;
`;

type InDietIndicatorProps = { inDiet: boolean };

export const InDietIndicator = styled(Circle).attrs<InDietIndicatorProps>(
  ({ theme, inDiet }) =>
    ({
      color: inDiet ? theme.colors['green-300'] : theme.colors['red-300'],
      size: 14,
      weight: 'fill',
    } as IconProps)
)<InDietIndicatorProps>`
  margin-left: auto;
`;
