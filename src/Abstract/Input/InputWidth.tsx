import React from 'react';
import type { ChangeEvent } from 'react';
import { WIDTH_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputWidthProps = {
  change: (value: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputWidth = ({
  change,
  props,
  inputId = '',
}: InputWidthProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Ancho',
          title: 'Ancho',
          type: 'number',
          min: '0',
          step: '0.1',
          id: `${WIDTH_INPUT}${inputId}`,
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
