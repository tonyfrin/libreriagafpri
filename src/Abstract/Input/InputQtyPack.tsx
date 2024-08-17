import React from 'react';
import type { ChangeEvent } from 'react';
import { QTY_PACK_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputQtyPackProps = {
  change: (value: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputQtyPack = ({
  change,
  props,
  inputId = '',
}: InputQtyPackProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Cantidad por paquete',
          title: 'Cantidad por paquete',
          type: 'number',
          min: '0',
          step: '0.1',
          id: `${QTY_PACK_INPUT}${inputId}`,
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
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
