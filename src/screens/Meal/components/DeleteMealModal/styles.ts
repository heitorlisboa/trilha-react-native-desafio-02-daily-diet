import styled, { css } from 'styled-components/native';

import { cssFontSizeAndLineHeight } from '@app/utils/css-font-size-and-line-height';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors['gray-50']};

  width: 320px;

  padding: 24px;
  border-radius: 8px;
  shadow-color: black;
  shadow-opacity: 0.25;
  shadow-radius: 15px;
  elevation: 5;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-800']};
    font-family: ${theme.fontFamily.bold};
    ${cssFontSizeAndLineHeight(theme.fontSize.lg)}
  `}
  text-align: center;

  margin-top: 16px;
`;

export const Buttons = styled.View`
  margin-top: 32px;
  flex-direction: row;
`;
