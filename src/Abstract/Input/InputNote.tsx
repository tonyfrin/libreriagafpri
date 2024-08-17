import React from 'react';
import { NOTE_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputNoteProps = {
  change: (value: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputNote = ({ change, props, inputId = '' }: InputNoteProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: props?.inputProps?.placeholder || 'Nota',
          title: props?.inputProps?.title || 'Nota',
          type: 'text',
          id: `${NOTE_INPUT}${inputId}`,
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
