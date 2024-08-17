import React from 'react';
import { LAST_NAME_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputLastNameProps = {
  changeLastName: (LastName: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputLastName = ({
  changeLastName,
  props,
  inputId = '',
}: InputLastNameProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Apellido',
          type: 'name',
          id: `${LAST_NAME_INPUT}${inputId}`,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeLastName(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
