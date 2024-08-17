import React from 'react';
import type { ChangeEvent } from 'react';
import { CATALOG_ORDER_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputCatalogOrderProps = {
  change: (cost: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputCatalogOrder = ({
  change,
  props,
  inputId = '',
}: InputCatalogOrderProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Posición en catálogo',
          type: 'number',
          min: '0',
          step: '0',
          id: `${CATALOG_ORDER_INPUT}${inputId}`,
          title: 'Posición en catálogo',
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            change(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
