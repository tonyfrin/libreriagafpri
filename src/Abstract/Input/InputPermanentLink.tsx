import React from 'react';
import { Input, InputProps } from './Input';
import { PERMANENT_LINK_INPUT } from '../../constants';

export type InputPermanentLinkProps = {
  change: (name: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputPermanentLink = ({
  change,
  props,
  inputId = '',
}: InputPermanentLinkProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          title: 'Link permanente',
          placeholder: 'Link permanente',
          type: 'text',
          id: `${PERMANENT_LINK_INPUT}${inputId}`,
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
