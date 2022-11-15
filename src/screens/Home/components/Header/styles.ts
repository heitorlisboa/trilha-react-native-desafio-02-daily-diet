import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const UserImage = styled.Image`
  width: 40px;
  height: 40px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors['gray-800']};
  border-radius: 9999px;
`;
