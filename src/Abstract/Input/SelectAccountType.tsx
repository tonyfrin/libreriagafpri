import React from 'react';
import type { SingleValue } from 'react-select';
import { ACCOUNT_TYPE_INPUT } from '../../constants';
import { GsSelect, GsSelectProps } from './Input';

export type SelectAccountTypeProps = {
  change: (options: SingleValue<{ value: string; label: string }>) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectAccountType = ({
  change,
  props,
  inputId = '',
}: SelectAccountTypeProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${ACCOUNT_TYPE_INPUT}${inputId}`}
        onChange={change}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title || 'Tipo de cuenta'}
      />
    </>
  );
};
