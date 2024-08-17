import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelect, GsSelectProps } from './Input';
import { CASH_REGISTER_TYPE_INPUT } from '../../constants';

export type SelectCashRegisterTypeProps = {
  change: (options: SingleValue<{ value: string; label: string }>) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectCashRegisterType = ({
  change,
  props,
  inputId = '',
}: SelectCashRegisterTypeProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${CASH_REGISTER_TYPE_INPUT}${inputId}`}
        onChange={change}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title || 'Caja'}
      />
    </>
  );
};
