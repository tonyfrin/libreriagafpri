import React from 'react';
import { ADDRESS2_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputAddress2Props = {
  changeAddress2: (Address2: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputAddress2 = ({
  changeAddress2,
  props,
  inputId = '',
}: InputAddress2Props) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Continuar Dirección',
          type: 'text',
          id: `${ADDRESS2_INPUT}${inputId}`,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeAddress2(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
