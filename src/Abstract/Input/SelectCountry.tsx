import React from 'react';
import type { SingleValue } from 'react-select';
import { COUNTRY_INPUT } from '../../constants';
import { GsSelect, GsSelectProps } from './Input';

export type SelectCountryProps = {
  changeCountry: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectCountry = ({
  changeCountry,
  props,
  inputId = '',
}: SelectCountryProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${COUNTRY_INPUT}${inputId}`}
        onChange={changeCountry}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title}
      />
    </>
  );
};
