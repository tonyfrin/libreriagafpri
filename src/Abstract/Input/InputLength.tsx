import React from 'react';
import type { ChangeEvent } from 'react';
import { LENGTH_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputLengthProps = {
  change: (value: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputLength = ({
  change,
  props,
  inputId = '',
}: InputLengthProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Largo',
          title: 'Largo',
          type: 'number',
          min: '0',
          step: '0.1',
          id: `${LENGTH_INPUT}${inputId}`,
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
