import styled, { css } from 'styled-components/native';

import { cssFontSizeAndLineHeight } from '@app/utils/css-font-size-and-line-height';

export type ButtonVariantProp = 'fill' | 'outline';

export const Container = styled.TouchableOpacity<{
  variant: ButtonVariantProp;
}>`
  background-color: ${({ theme, variant }) =>
    variant === 'fill' ? theme.colors['gray-800'] : 'transparent'};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px;
  border-width: 1px;
  border-color: ${({ theme, variant }) =>
    variant === 'fill' ? 'transparent' : theme.colors['gray-900']};
  border-radius: 6px;
`;

export const Title = styled.Text<{
  variant: ButtonVariantProp;
}>`
  ${({ theme, variant }) => css`
    color: ${variant === 'fill'
      ? theme.colors.white
      : theme.colors['gray-900']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize.sm)}
  `}
`;
