import React from 'react';
import type { SingleValue } from 'react-select';
import { GsSelect, GsSelectProps } from './Input';
import { TYPE_INPUT } from '../../constants';

export type SelectTypeProps = {
  changeType: (options: SingleValue<{ value: string; label: string }>) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectType = ({
  changeType,
  props,
  inputId = '',
}: SelectTypeProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${TYPE_INPUT}${inputId}`}
        onChange={changeType}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title}
      />
    </>
  );
};
