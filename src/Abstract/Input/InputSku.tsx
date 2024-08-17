import React from 'react';
import { SKU_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputSkuProps = {
  change: (name: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputSku = ({ change, props, inputId = '' }: InputSkuProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Código',
          type: 'text',
          title: 'Código',
          id: `${SKU_INPUT}${inputId}`,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            change(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
