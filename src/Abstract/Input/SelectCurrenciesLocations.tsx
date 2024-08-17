import React from 'react';
import type { SingleValue } from 'react-select';
import { CURRENCIES_LOCATIONS_INPUT } from '../../constants';
import { GsSelect, GsSelectProps } from './Input';

export type SelectCurrenciesLocationsProps = {
  changeCurrenciesLocations: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectCurrenciesLocations = ({
  changeCurrenciesLocations,
  props,
  inputId = '',
}: SelectCurrenciesLocationsProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${CURRENCIES_LOCATIONS_INPUT}${inputId}`}
        onChange={changeCurrenciesLocations}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title}
      />
    </>
  );
};
