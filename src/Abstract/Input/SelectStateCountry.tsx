import React from 'react';
import type { SingleValue } from 'react-select';
import { STATE_COUNTRY_INPUT } from '../../constants';
import { GsSelect, GsSelectProps } from './Input';

export type SelectStateCountryProps = {
  changeStateCountry: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectStateCountry = ({
  changeStateCountry,
  props,
  inputId = '',
}: SelectStateCountryProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${STATE_COUNTRY_INPUT}${inputId}`}
        onChange={changeStateCountry}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title}
      />
    </>
  );
};
