import React from 'react';
import { Input, InputProps } from '../Input';
import { PUBLIC_NAME_INPUT } from '../../constants';

export type InputPublicNameProps = {
  change: (name: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputPublicName = ({
  change,
  props,
  inputId = '',
}: InputPublicNameProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          title: 'Nombre público',
          placeholder: 'Nombre público',
          type: 'name',
          id: `${PUBLIC_NAME_INPUT}${inputId}`,
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
