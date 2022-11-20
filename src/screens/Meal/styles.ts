import styled, { css } from 'styled-components/native';
import { Circle, IconProps } from 'phosphor-react-native';

import { cssFontSizeAndLineHeight } from '@app/utils/css-font-size-and-line-height';

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize.lg)}
  `}
`;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.colors['gray-50']};

  width: 320px;

  padding: 24px;
  border-radius: 8px;
  shadow-color: black;
  shadow-opacity: 0.25;
  shadow-radius: 15px;
  elevation: 5;
`;

export const ModalTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-800']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize.lg)}
  `}
  text-align: center;

  margin-top: 16px;
`;

export const ModalButtons = styled.View`
  margin-top: 32px;
  flex-direction: row;
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(20)}
  `}
`;

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-800']};
    font-family: ${theme.fontFamily.regular};
    ${cssFontSizeAndLineHeight(theme.fontSize.md)}
  `}

  margin-top: 8px;
`;

export const MealDateTimeTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize.sm)}
  `}

  margin-top: 24px;
`;

export const MealDateTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-800']};
    font-family: ${theme.fontFamily.regular};
    ${cssFontSizeAndLineHeight(theme.fontSize.md)}
  `}

  margin-top: 8px;
`;

export const MealTag = styled.View`
  align-self: flex-start;

  background-color: ${({ theme }) => theme.colors['gray-200']};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
  margin-top: 24px;
  border-radius: 9999px;
`;

type MealTagIconProps = { inDiet: boolean };

export const MealTagIcon = styled(Circle).attrs<MealTagIconProps>(
  ({ theme, inDiet }) =>
    ({
      color: inDiet ? theme.colors['green-700'] : theme.colors['red-700'],
      size: 8,
      weight: 'fill',
    } as IconProps)
)<MealTagIconProps>``;

export const MealTagText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-900']};
    font-family: ${theme.fontFamily.regular};
    ${cssFontSizeAndLineHeight(theme.fontSize.sm)}
  `}

  margin-left: 8px;
`;
