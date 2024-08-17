import React from 'react';
import { EMAIL_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputEmailProps = {
  changeEmail: (email: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputEmail = ({
  changeEmail,
  props,
  inputId = '',
}: InputEmailProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Email',
          type: 'email',
          id: `${EMAIL_INPUT}${inputId}`,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeEmail(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
