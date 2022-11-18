import styled, { css } from 'styled-components/native';

import { cssFontSizeAndLineHeight } from '@app/utils/css-font-size-and-line-height';

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize['2xl'])}
  `}

  margin-top: 16px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-800']};
    font-family: ${theme.fontFamily.regular};
    ${cssFontSizeAndLineHeight(theme.fontSize.sm)}
  `}
`;
