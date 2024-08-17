import React from 'react';
import type { SingleValue } from 'react-select';
import { PARENT_ID_INPUT } from '../../constants';
import { GsSelect, GsSelectProps } from './Input';

export type SelectParentIdProps = {
  changeParentId: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectParentId = ({
  changeParentId,
  props,
  inputId = '',
}: SelectParentIdProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${PARENT_ID_INPUT}${inputId}`}
        onChange={changeParentId}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title}
      />
    </>
  );
};
