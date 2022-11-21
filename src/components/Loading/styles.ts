import styled from 'styled-components/native';
import type { ActivityIndicatorProps } from 'react-native';

export const Container = styled.View<{ transparent: boolean }>`
  flex-grow: 1;

  background-color: ${({ theme, transparent }) =>
    transparent ? 'transparent' : theme.colors['gray-50']};

  align-items: center;
  justify-content: center;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(
  ({ theme }) =>
    ({
      color: theme.colors['gray-600'],
    } as ActivityIndicatorProps)
)``;
