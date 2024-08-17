import React from 'react';
import type { SingleValue } from 'react-select';
import { CURRENCIES_SEPARATOR_INPUT } from '../../constants';
import { GsSelect, GsSelectProps } from './Input';

export type SelectCurrenciesSeparatorProps = {
  changeCurrenciesSeparator: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectCurrenciesSeparator = ({
  changeCurrenciesSeparator,
  props,
  inputId = '',
}: SelectCurrenciesSeparatorProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${CURRENCIES_SEPARATOR_INPUT}${inputId}`}
        onChange={changeCurrenciesSeparator}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title}
      />
    </>
  );
};
