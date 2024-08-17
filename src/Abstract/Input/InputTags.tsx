import React from 'react';
import { TAGS_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputTagsProps = {
  change: (tag: string) => void;
  props?: InputProps;
  setSelected: (tag: string) => void;
};

export const InputTags = ({ change, props, setSelected }: InputTagsProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setSelected(event.currentTarget.value);
    if (event.key === 'Enter') {
      // Realiza la acción que desees al presionar Enter
      change(event.currentTarget.value);
      setSelected('');
    }
  };

  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Etiquetas',
          type: 'text',
          id: TAGS_INPUT,
          title: 'Etiquetas',
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            handleKeyDown(event),
          onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
            setSelected(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
