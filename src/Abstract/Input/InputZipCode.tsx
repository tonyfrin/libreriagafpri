import React from 'react';
import { ZIP_CODE_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputZipCodeProps = {
  changeZipCode: (zipCode: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputZipCode = ({
  changeZipCode,
  props,
  inputId,
}: InputZipCodeProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Código Postal',
          type: 'text',
          id: `${ZIP_CODE_INPUT}${inputId}`,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeZipCode(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
