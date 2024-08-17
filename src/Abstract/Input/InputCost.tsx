import React from 'react';
import type { ChangeEvent } from 'react';
import { COST_INPUT } from '../../constants';
import { Input, InputProps } from './Input';

export type InputCostProps = {
  changeCost: (cost: string) => void;
  props?: InputProps;
  inputId?: string;
};

export const InputCost = ({
  changeCost,
  props,
  inputId = '',
}: InputCostProps) => {
  return (
    <>
      <Input
        styles={props?.styles}
        inputProps={{
          placeholder: 'Costo',
          type: 'number',
          min: '0',
          step: '0.1',
          id: `${COST_INPUT}${inputId}`,
          title: 'Costo',
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            changeCost(event.currentTarget.value),
          ...props?.inputProps,
        }}
        inputClass={props?.inputClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
      />
    </>
  );
};
