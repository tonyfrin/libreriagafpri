import React from 'react';
import { INVOICE_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputInvoiceProps = {
  change: (value: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputInvoice = ({
  change,
  props,
  inputId = '',
}: InputInvoiceProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: props?.inputProps?.placeholder || 'Numero de factura',
          title: props?.inputProps?.title || 'Numero de factura',
          type: 'text',
          id: `${INVOICE_INPUT}${inputId}`,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
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
