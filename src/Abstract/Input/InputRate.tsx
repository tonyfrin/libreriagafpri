import React from 'react';
import type { ChangeEvent } from 'react';
import { RATE_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputRateProps = {
  change: (value: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputRate = ({ change, props, inputId = '' }: InputRateProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Porcentaje',
          type: 'number',
          min: '0',
          step: '0.1',
          id: `${RATE_INPUT}${inputId}`,
          title: 'Tasa porcentual',
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
