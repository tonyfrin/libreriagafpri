import { useState } from 'react';

type State = {
  isFetching: boolean;
  isInit: boolean;
  isExpenses: boolean;
  isIncome: boolean;
  isTransfer: boolean;
};

type Actions = {
  onFetching: () => void;

  onInit: () => void;

  onExpenses: () => void;

  onIncome: () => void;

  onTransfer: () => void;
};

export type UseGafpriSubPagesCashRegisterTypeReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriSubPagesCashRegisterType(): UseGafpriSubPagesCashRegisterTypeReturn {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isExpenses, setIsExpenses] = useState(false);
  const [isIncome, setIsIncome] = useState(false);
  const [isTransfer, setIsTransfer] = useState(false);

  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsExpenses(false);
    setIsIncome(false);
    setIsTransfer(false);
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsExpenses(false);
    setIsIncome(false);
    setIsTransfer(false);
  };

  const onExpenses = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsExpenses(true);
    setIsIncome(false);
    setIsTransfer(false);
  };

  const onIncome = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsExpenses(false);
    setIsIncome(true);
    setIsTransfer(false);
  };

  const onTransfer = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsExpenses(false);
    setIsIncome(false);
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
    isExpenses,
    isIncome,
    isTransfer,
  };

  const actions = {
    onFetching,

    onInit,

    onExpenses,

    onIncome,

    onTransfer,
  };

  return {
    states,
    actions,
  };
}
