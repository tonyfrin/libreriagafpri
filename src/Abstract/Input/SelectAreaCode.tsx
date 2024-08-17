import React from 'react';
import type { SingleValue } from 'react-select';
import { AREA_CODE_INPUT } from '../../constants';
import { GsSelect, GsSelectProps } from './Input';

export type SelectAreaCodeProps = {
  changeAreaCode: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectAreaCode = ({
  changeAreaCode,
  props,
  inputId = '',
}: SelectAreaCodeProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${AREA_CODE_INPUT}${inputId}`}
        onChange={changeAreaCode}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title}
      />
    </>
  );
};
