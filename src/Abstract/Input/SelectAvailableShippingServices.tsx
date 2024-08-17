import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelect, GsSelectProps } from './Input';
import { AVAILABLE_SHIPPING_SERVICES_INPUT } from '../../constants';

export type SelectAvailableShippingServicesProps = {
  change: (options: SingleValue<{ value: string; label: string }>) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectAvailableShippingServices = ({
  change,
  props,
  inputId = '',
}: SelectAvailableShippingServicesProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${AVAILABLE_SHIPPING_SERVICES_INPUT}${inputId}`}
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
