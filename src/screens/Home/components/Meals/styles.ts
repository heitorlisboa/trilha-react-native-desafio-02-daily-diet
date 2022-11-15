import styled, { css } from 'styled-components/native';

import { cssFontSizeAndLineHeight } from '@app/utils/css-font-size-and-line-height';

export const Container = styled.View`
  flex: 1;
  margin-top: 40px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.regular};
    ${cssFontSizeAndLineHeight(theme.fontSize.md)}
  `}
`;

export const MealSectionHeader = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize.lg)}
  `}

  margin-bottom: 8px;
`;

export const MealSectionFooter = styled.View`
  margin-bottom: 32px;
`;
