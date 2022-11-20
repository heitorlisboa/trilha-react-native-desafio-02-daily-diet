import styled from 'styled-components/native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

import { inputCss, inputTextCss } from '../../styles';

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.colors['gray-50']};

  padding: 16px;
  border-radius: 8px;
  shadow-color: black;
  shadow-opacity: 0.25;
  shadow-radius: 15px;
  elevation: 5;
`;

export const Container = styled.TouchableOpacity`
  ${inputCss}
`;

export const InputValue = styled.Text`
  ${inputTextCss}
`;

export const DateTimePicker = styled(RNDateTimePicker)`
  align-self: flex-start;
`;
