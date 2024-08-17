import { useState } from 'react';

type State = {
  isFetching: boolean;
  isInit: boolean;
  isTransfer: boolean;
};

type Actions = {
  onFetching: () => void;

  onInit: () => void;

  onTransfer: () => void;
};

export type UseGafpriSubPagesBankTypeReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriSubPagesBankType(): UseGafpriSubPagesBankTypeReturn {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isTransfer, setIsTransfer] = useState(false);

  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsTransfer(false);
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsTransfer(false);
  };

  const onTransfer = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsTransfer(true);
  };

  /**
   * Export
   *
   *
   */
  const states = {
    isFetching,
    isInit,
    isTransfer,
  };

  const actions = {
    onFetching,

    onInit,

    onTransfer,
  };

  return {
    states,
    actions,
  };
}
