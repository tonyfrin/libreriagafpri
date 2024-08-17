import React from 'react';
import type { SingleValue } from 'react-select';
import { TYPE_DOCUMENT_ID_ID_INPUT } from '../../constants';
import { GsSelect, GsSelectProps } from './Input';

export type SelectTypeDocumentIdIdProps = {
  changeTypeDocumentIdId: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  props: GsSelectProps;
  inputId?: string;
};

export const SelectTypeDocumentIdId = ({
  changeTypeDocumentIdId,
  props,
  inputId = '',
}: SelectTypeDocumentIdIdProps) => {
  return (
    <>
      <GsSelect
        styles={props?.styles}
        Class={props?.Class}
        options={props.options}
        id={`${TYPE_DOCUMENT_ID_ID_INPUT}${inputId}`}
        onChange={changeTypeDocumentIdId}
        placeholder={props?.placeholder}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        defaultValue={props?.defaultValue}
        title={props?.title}
      />
    </>
  );
};
