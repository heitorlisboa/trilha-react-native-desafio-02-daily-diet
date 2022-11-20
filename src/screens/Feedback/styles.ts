import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { cssFontSizeAndLineHeight } from '@app/utils/css-font-size-and-line-height';

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.colors['gray-50']};

  align-items: center;
  justify-content: center;

  padding: 32px;
`;

enum TitleColors {
  'positive' = 'green-700',
  'negative' = 'red-700',
}

export const Title = styled.Text<{
  color: keyof typeof TitleColors;
}>`
  ${({ theme, color }) => css`
    color: ${theme.colors[TitleColors[color]]};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize.xl)}
  `}
  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.regular};
    ${cssFontSizeAndLineHeight(theme.fontSize.md)}
  `}
  text-align: center;

  margin-top: 8px;
`;

export const SubtitleBold = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize.md)}
  `}
`;

export const FeedbackIllustration = styled.Image`
  margin-top: 40px;
`;
