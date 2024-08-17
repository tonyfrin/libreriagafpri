import React from 'react';
import type { ChangeEvent } from 'react';
import { SALES_PRICE_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputSalesPriceProps = {
  change: (cost: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputSalesPrice = ({
  change,
  props,
  inputId = '',
}: InputSalesPriceProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Precio de venta',
          type: 'number',
          min: '0',
          step: '0.1',
          id: `${SALES_PRICE_INPUT}${inputId}`,
          title: 'Precio',
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
