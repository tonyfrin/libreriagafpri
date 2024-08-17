import React from 'react';
import type { SingleValue } from 'react-select';
import { CITY_INPUT } from '../../constants';
import { GsSelect, GsSelectProps } from './Input';

export type SelectCityProps = {
  changeCity: (options: SingleValue<{ value: string; label: string }>) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectCity = ({
  changeCity,
  props,
  inputId = '',
}: SelectCityProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${CITY_INPUT}${inputId}`}
        onChange={changeCity}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title}
      />
    </>
  );
};
