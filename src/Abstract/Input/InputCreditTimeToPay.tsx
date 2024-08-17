import React from 'react';
import type { ChangeEvent } from 'react';
import { CREDIT_TIME_TO_PAY_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputCreditTimeToPayProps = {
  change: (value: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputCreditTimeToPay = ({
  change,
  props,
  inputId = '',
}: InputCreditTimeToPayProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Días de crédito',
          type: 'number',
          min: '0',
          step: '1',
          id: `${CREDIT_TIME_TO_PAY_INPUT}${inputId}`,
          title: 'Días de crédito',
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
