import React from 'react';
import type { ChangeEvent } from 'react';
import { UND_CBM_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputUndCbmProps = {
  change: (value: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputUndCbm = ({
  change,
  props,
  inputId = '',
}: InputUndCbmProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Metros cúbicos por unidad',
          title: 'Metros cúbicos por unidad',
          type: 'number',
          min: '0',
          step: '0.1',
          id: `${UND_CBM_INPUT}${inputId}`,
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
