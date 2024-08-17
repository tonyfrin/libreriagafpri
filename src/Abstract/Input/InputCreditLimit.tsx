import React from 'react';
import type { ChangeEvent } from 'react';
import { CREDIT_LIMIT_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputCreditLimitProps = {
  change: (value: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputCreditLimit = ({
  change,
  props,
  inputId = '',
}: InputCreditLimitProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Limite de crédito',
          type: 'number',
          min: '0',
          step: '0.1',
          id: `${CREDIT_LIMIT_INPUT}${inputId}`,
          title: 'Limite de crédito',
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
