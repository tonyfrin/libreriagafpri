import React from 'react';
import type { ChangeEvent } from 'react';
import { WEIGHT_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputWeightProps = {
  change: (value: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputWeight = ({
  change,
  props,
  inputId = '',
}: InputWeightProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Peso',
          title: 'Peso',
          type: 'number',
          min: '0',
          step: '0.1',
          id: `${WEIGHT_INPUT}${inputId}`,
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
