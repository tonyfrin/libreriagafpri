import React from 'react';
import { ADDRESS1_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputAddress1Props = {
  changeAddress1: (Address1: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputAddress1 = ({
  changeAddress1,
  props,
  inputId = '',
}: InputAddress1Props) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Dirección',
          type: 'text',
          id: `${ADDRESS1_INPUT}${inputId}`,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeAddress1(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
