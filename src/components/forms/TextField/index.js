import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  margin-top: 17px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export const TextField = React.forwardRef(
  ({ placeholder, id, type, name, className, label, ...props }, ref) => {
    return (
      <InputWrapper>
        <label htmlFor={name}>{label}</label>
        <Input
          placeholder={placeholder}
          type={type}
          id={id}
          aria-label={placeholder}
          ref={ref}
          name={name}
          className={className}
          {...props}
        />
      </InputWrapper>
    );
  }
);
