import React from 'react';
import { ACCOUNT_NUMBER_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputAccountNumberProps = {
  change: (value: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputAccountNumber = ({
  change,
  props,
  inputId = '',
}: InputAccountNumberProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Numero de cuenta',
          type: 'text',
          id: `${ACCOUNT_NUMBER_INPUT}${inputId}`,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            change(event.currentTarget.value),
          title: 'Numero de cuenta',
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
