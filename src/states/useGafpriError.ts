import { useState } from 'react';
import {
  ErrorResponseProps,
  CustomErrorResponseProps,
  isErrorResponse,
  isCustomErrorResponse,
} from '../helpers';

export type newErrorProps = {
  newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps;
  functionAction: () => void;
};

type State = {
  error: string[];
};

type Actions = {
  newError: ({ newErrorValue, functionAction }: newErrorProps) => void;
  resetError: () => void;
  changeError: (value: string[]) => void;
};

export type UseErrorReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriError(): UseErrorReturn {
  const [error, setError] = useState<string[]>([]);

  const changeError = (value: string[]): void => {
    setError(value);
    setTimeout(() => {
      setError([]);
    }, 5000);
  };

  const newError = ({ newErrorValue, functionAction }: newErrorProps): void => {
    if (isErrorResponse(newErrorValue)) {
      changeError([newErrorValue.message]);
      functionAction();
    } else if (isCustomErrorResponse(newErrorValue)) {
      const errorMessage = newErrorValue.errors.map((item) => {
        return item.message;
      });
      changeError(errorMessage);
      functionAction();
    } else {
      changeError([`${newErrorValue}`]);
      functionAction();
    }
  };

  const resetError = (): void => {
    setError([]);
  };

  /**
   * Export
   *
   *
   */
  const states = {
    error,
  };

  const actions = {
    newError,
    resetError,
    changeError,
  };

  return {
    states,
    actions,
  };
}
