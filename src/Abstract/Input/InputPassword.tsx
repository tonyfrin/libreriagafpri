import React from 'react';
import { PASSWORD_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputPasswordProps = {
  changePassword: (password: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputPassword = ({
  changePassword,
  props,
  inputId = '',
}: InputPasswordProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Contraseña',
          type: 'password',
          id: `${PASSWORD_INPUT}${inputId}`,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changePassword(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
