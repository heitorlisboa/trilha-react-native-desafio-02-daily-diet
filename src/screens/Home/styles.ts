import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient, type LinearGradientProps } from 'expo-linear-gradient';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors['gray-50']};
  padding: 36px 24px;
  padding-bottom: 0;
`;

export const BottomGradient = styled(LinearGradient).attrs(
  ({ theme }) =>
    ({
      colors: ['rgba(255, 255, 255, 0)', theme.colors['gray-50']],
      pointerEvents: 'none',
    } as LinearGradientProps)
)`
  position: absolute;
  top: 90%;
  right: 0;
  bottom: 0;
  left: 0;
`;
