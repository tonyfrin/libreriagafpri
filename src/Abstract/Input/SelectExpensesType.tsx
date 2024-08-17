import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelect, GsSelectProps } from './Input';
import { EXPENSES_TYPE_INPUT } from '../../constants';

export type SelectExpensesTypeProps = {
  change: (options: SingleValue<{ value: string; label: string }>) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectExpensesType = ({
  change,
  props,
  inputId = '',
}: SelectExpensesTypeProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${EXPENSES_TYPE_INPUT}${inputId}`}
        onChange={change}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title || 'Tipo de egreso'}
      />
    </>
  );
};
