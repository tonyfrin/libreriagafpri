import React from 'react';
import { BUTTON_NEXT_INPUT } from '../../constants';
import { Button } from './Button';
import type { ButtonProps } from './Button';

export type ButtonNextProps = {
  title: string;
  props?: ButtonProps;
  inputId?: string;
};

export const ButtonNext = ({ title, props, inputId = '' }: ButtonNextProps) => {
  return (
    <>
      <Button
        title={title}
        buttonProps={{
          id: `${BUTTON_NEXT_INPUT}${inputId}`,
          type: 'submit',
        }}
        {...props}
      />
    </>
  );
};
