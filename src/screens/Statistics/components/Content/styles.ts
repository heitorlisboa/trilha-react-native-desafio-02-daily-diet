import styled, { css } from 'styled-components/native';

import { cssFontSizeAndLineHeight } from '@app/utils/css-font-size-and-line-height';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors['gray-50']};

  padding: 32px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  shadow-color: black;
  shadow-opacity: 0.05;
  shadow-radius: 15px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize.sm)}
  `}
  text-align: center;

  margin-bottom: 24px;
`;

enum InfoBoxColors {
  'neutral' = 'gray-200',
  'positive' = 'green-100',
  'negative' = 'red-100',
}

export const InfoBox = styled.View<{
  color: keyof typeof InfoBoxColors;
}>`
  background-color: ${({ theme, color }) => theme.colors[InfoBoxColors[color]]};
  justify-content: center;
  padding: 16px;
  border-radius: 8px;
`;

export const InfoBoxTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize.xl)}
  `}
  text-align: center;
`;

export const InfoBoxSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-800']};
    font-family: ${theme.fontFamily.regular};
    ${cssFontSizeAndLineHeight(theme.fontSize.sm)}
  `}
  text-align: center;
`;

export const InfoBoxRow = styled.View`
  flex-direction: row;
`;
