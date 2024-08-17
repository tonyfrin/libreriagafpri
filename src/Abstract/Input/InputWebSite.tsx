import React from 'react';
import { WEB_SITE_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputWebSiteProps = {
  changeWebSite: (email: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputWebSite = ({
  changeWebSite,
  props,
  inputId = '',
}: InputWebSiteProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Web Site',
          type: 'text',
          id: `${WEB_SITE_INPUT}${inputId}`,
          onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
            changeWebSite(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
