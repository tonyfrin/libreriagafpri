import React from 'react';
import type { SingleValue } from 'react-select';
import { ADDRESS_TYPE_INPUT } from '../../constants';
import { GsSelect, GsSelectProps } from './Input';

export type SelectAddressTypeProps = {
  changeAddressType: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectAddressType = ({
  changeAddressType,
  props,
  inputId = '',
}: SelectAddressTypeProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${ADDRESS_TYPE_INPUT}${inputId}`}
        onChange={changeAddressType}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title}
      />
    </>
  );
};
