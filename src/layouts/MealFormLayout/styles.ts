import styled, { css } from 'styled-components/native';
import { Circle, type IconProps } from 'phosphor-react-native';
import type { TextInputProps } from 'react-native';

import { cssFontSizeAndLineHeight } from '@app/utils/css-font-size-and-line-height';

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize.lg)}
  `}
`;

export const InputContainer = styled.View`
  margin-bottom: 24px;
`;

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-800']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize.sm)}
  `}

  margin-bottom: 4px;
`;

export const inputTextCss = css`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
  `}
`;

export const inputCss = css`
  padding: 14px;
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  border-radius: 6px;
`;

export const TextInput = styled.TextInput.attrs(
  ({ theme }) =>
    ({
      selectionColor: theme.colors['gray-800'],
    } as TextInputProps)
)`
  ${inputTextCss}
  ${inputCss}
`;

export const InputRow = styled.View`
  flex-direction: row;
`;

const radioButtonColors = {
  positive: {
    background: 'green-100',
    border: 'green-700',
  },
  negative: {
    background: 'red-100',
    border: 'red-700',
  },
} as const;

export const RadioButton = styled.TouchableOpacity<{
  color: keyof typeof radioButtonColors;
  selected: boolean;
}>`
  flex: 1;

  background-color: ${({ theme, color, selected }) =>
    selected
      ? theme.colors[radioButtonColors[color].background]
      : theme.colors['gray-200']};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme, color, selected }) =>
    selected ? theme.colors[radioButtonColors[color].border] : 'transparent'};
`;

export const RadioButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize.sm)}
  `}
`;

enum RadioButtonIconColors {
  'positive' = 'green-700',
  'negative' = 'red-700',
}

type RadioButtonIconProps = {
  color: keyof typeof RadioButtonIconColors;
};

export const RadioButtonIcon = styled(Circle).attrs<RadioButtonIconProps>(
  ({ theme, color }) =>
    ({
      color: theme.colors[RadioButtonIconColors[color]],
      size: 8,
      weight: 'fill',
    } as IconProps)
)<RadioButtonIconProps>`
  margin-right: 8px;
`;
