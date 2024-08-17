import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelect, GsSelectProps } from './Input';
import { TAX_STATUS_INPUT } from '../../constants';

export type SelectTaxStatusProps = {
  change: (options: SingleValue<{ value: string; label: string }>) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectTaxStatus = ({
  change,
  props,
  inputId = '',
}: SelectTaxStatusProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${TAX_STATUS_INPUT}${inputId}`}
        onChange={change}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title}
      />
    </>
  );
};
