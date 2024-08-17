import React from 'react';
import { USER_NAME_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputUserNameProps = {
  changeUserName: (userName: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputUserName = ({
  changeUserName,
  props,
  inputId = '',
}: InputUserNameProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Usuario',
          type: 'name',
          id: `${USER_NAME_INPUT}${inputId}`,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeUserName(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
