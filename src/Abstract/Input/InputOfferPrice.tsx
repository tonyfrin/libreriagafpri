import React from 'react';
import type { ChangeEvent } from 'react';
import { OFFER_PRICE_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputOfferPriceProps = {
  change: (cost: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputOfferPrice = ({
  change,
  props,
  inputId = '',
}: InputOfferPriceProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Precio de oferta',
          type: 'number',
          min: '0',
          step: '0.1',
          id: `${OFFER_PRICE_INPUT}${inputId}`,
          title: 'Oferta',
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
