import React from 'react';
import type { SingleValue } from 'react-select';
import { ROLES_INPUT } from '../../constants';
import { GsSelect, GsSelectProps } from './Input';

export type SelectRolesProps = {
  changeRoles: (options: SingleValue<{ value: string; label: string }>) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectRoles = ({
  changeRoles,
  props,
  inputId = '',
}: SelectRolesProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${ROLES_INPUT}${inputId}`}
        onChange={changeRoles}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title}
      />
    </>
  );
};
