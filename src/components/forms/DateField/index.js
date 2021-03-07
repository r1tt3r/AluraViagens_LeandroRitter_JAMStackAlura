import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ptBR from 'date-fns/locale/pt-BR';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled(DatePicker)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const DateField = React.forwardRef(
  ({ label, name, onChange, value, ...props }, ref) => {
    useEffect(() => {
      registerLocale('pt-BR', ptBR);
    }, []);

    return (
      <InputWrapper>
        <label htmlFor={name}>{label}</label>
        <Input
          name={name}
          onChange={onChange}
          value={value}
          locale={'pt-BR'}
          ref={ref}
          dateFormat="dd/MM/yyyy"
          {...props}
        />
      </InputWrapper>
    );
  }
);
