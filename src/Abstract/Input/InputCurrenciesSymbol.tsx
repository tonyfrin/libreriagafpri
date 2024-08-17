import React from 'react';
import { CURRENCIES_SYMBOL_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputCurrenciesSymbolProps = {
  changeSymbol: (symbol: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputCurrenciesSymbol = ({
  changeSymbol,
  props,
  inputId = '',
}: InputCurrenciesSymbolProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Simbolo de la moneda',
          type: 'text',
          id: `${CURRENCIES_SYMBOL_INPUT}${inputId}`,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeSymbol(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
