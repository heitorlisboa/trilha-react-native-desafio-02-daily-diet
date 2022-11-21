import styled, { css } from 'styled-components/native';
import { Circle, type IconProps } from 'phosphor-react-native';

import { cssFontSizeAndLineHeight } from '@app/utils/css-font-size-and-line-height';

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(20)}
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-800']};
    font-family: ${theme.fontFamily.regular};
    ${cssFontSizeAndLineHeight(theme.fontSize.md)}
  `}

  margin-top: 8px;
`;

export const DateTimeTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize.sm)}
  `}

  margin-top: 24px;
`;

export const DateTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-800']};
    font-family: ${theme.fontFamily.regular};
    ${cssFontSizeAndLineHeight(theme.fontSize.md)}
  `}

  margin-top: 8px;
`;

export const Tag = styled.View`
  align-self: flex-start;

  background-color: ${({ theme }) => theme.colors['gray-200']};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
  margin-top: 24px;
  border-radius: 9999px;
`;

type TagIconProps = { inDiet: boolean };

export const TagIcon = styled(Circle).attrs<TagIconProps>(
  ({ theme, inDiet }) =>
    ({
      color: inDiet ? theme.colors['green-700'] : theme.colors['red-700'],
      size: 8,
      weight: 'fill',
    } as IconProps)
)<TagIconProps>``;

export const TagText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.regular};
    ${cssFontSizeAndLineHeight(theme.fontSize.sm)}
  `}

  margin-left: 8px;
`;
