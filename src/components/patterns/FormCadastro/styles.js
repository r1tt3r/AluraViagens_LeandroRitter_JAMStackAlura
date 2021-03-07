import styled from 'styled-components';

export const ErrorAlert = styled.span`
  color: red;
  font-size: 10px;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Label = styled.label`
  margin-top: 17px;
`;
