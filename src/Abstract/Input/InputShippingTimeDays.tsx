import React from 'react';
import type { ChangeEvent } from 'react';
import { SHIPPING_TIME_DAYS_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputShippingTimeDaysProps = {
  change: (cost: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputShippingTimeDays = ({
  change,
  props,
  inputId = '',
}: InputShippingTimeDaysProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Días de envío',
          type: 'number',
          min: '0',
          step: '1',
          id: `${SHIPPING_TIME_DAYS_INPUT}${inputId}`,
          title: 'Días de envío',
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
