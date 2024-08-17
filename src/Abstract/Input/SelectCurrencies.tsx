import React from 'react';
import type { SingleValue } from 'react-select';
import { CURRENCIES_INPUT } from '../../constants';
import { GsSelect, GsSelectProps } from './Input';

export type SelectCurrenciesProps = {
  changeCurrencies: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectCurrencies = ({
  changeCurrencies,
  props,
  inputId = '',
}: SelectCurrenciesProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${CURRENCIES_INPUT}${inputId}`}
        onChange={changeCurrencies}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title}
      />
    </>
  );
};
