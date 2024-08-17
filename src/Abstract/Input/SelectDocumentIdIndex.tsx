import React from 'react';
import type { SingleValue } from 'react-select';
import { TYPE_DOCUMENT_ID_INDEX_INPUT } from '../../constants';
import { GsSelect, GsSelectProps } from './Input';

export type SelectDocumentIdIndexProps = {
  changeIndex: (options: SingleValue<{ value: string; label: string }>) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectDocumentIdIndex = ({
  changeIndex,
  props,
  inputId = '',
}: SelectDocumentIdIndexProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${TYPE_DOCUMENT_ID_INDEX_INPUT}${inputId}`}
        onChange={changeIndex}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title}
      />
    </>
  );
};
