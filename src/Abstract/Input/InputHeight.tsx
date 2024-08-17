import React from 'react';
import type { ChangeEvent } from 'react';
import { HEIGHT_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputHeightProps = {
  change: (value: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputHeight = ({
  change,
  props,
  inputId = '',
}: InputHeightProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Alto',
          title: 'Alto',
          type: 'number',
          min: '0',
          step: '0.1',
          id: `${HEIGHT_INPUT}${inputId}`,
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
