import React from 'react';
import { BANK_NAME_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputBankNameProps = {
  change: (name: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputBankName = ({
  change,
  props,
  inputId = '',
}: InputBankNameProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Nombre del banco',
          type: 'name',
          id: `${BANK_NAME_INPUT}${inputId}`,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            change(event.currentTarget.value),
          title: 'Nombre del banco',
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
