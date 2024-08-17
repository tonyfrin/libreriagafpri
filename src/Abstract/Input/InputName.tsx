import React from 'react';
import { NAME_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputNameProps = {
  changeName: (name: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputName = ({
  changeName,
  props,
  inputId = '',
}: InputNameProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Nombre',
          type: 'name',
          id: `${NAME_INPUT}${inputId}`,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeName(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
