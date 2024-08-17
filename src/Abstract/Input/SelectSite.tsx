import React from 'react';
import type { SingleValue } from 'react-select';
import { SITE_INPUT } from '../../constants';
import { GsSelect, GsSelectProps } from './Input';

export type SelectSiteProps = {
  changeSite: (options: SingleValue<{ value: string; label: string }>) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectSite = ({
  changeSite,
  props,
  inputId = '',
}: SelectSiteProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${SITE_INPUT}${inputId}`}
        onChange={changeSite}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title}
      />
    </>
  );
};
