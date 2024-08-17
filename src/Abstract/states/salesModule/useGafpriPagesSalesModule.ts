import { useState } from 'react';

type State = {
  isFetching: boolean;
  isInit: boolean;
  isSales: boolean;
  isDispatch: boolean;
  isBudget: boolean;
};

type Actions = {
  onFetching: () => void;
  onInit: () => void;
  onSales: () => void;
  onDispatch: () => void;
  onBudget: () => void;
};

export type UseGafpriPagesSalesModuleReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriPagesSalesModule(): UseGafpriPagesSalesModuleReturn {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isSales, setIsSales] = useState(false);
  const [isDispatch, setIsDispatch] = useState(false);
  const [isBudget, setIsBudget] = useState(false);

  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsSales(false);
    setIsDispatch(false);
    setIsBudget(false);
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsSales(false);
    setIsDispatch(false);
    setIsBudget(false);
  };

  const onSales = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsSales(true);
    setIsDispatch(false);
    setIsBudget(false);
  };

  const onDispatch = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsSales(false);
    setIsDispatch(true);
    setIsBudget(false);
  };

  const onBudget = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsSales(false);
    setIsDispatch(false);
    setIsBudget(true);
  };

  /**
   * Export
   *
   *
   */
  const states = {
    isFetching,
    isInit,
    isSales,
    isDispatch,
    isBudget,
  };

  const actions = {
    onFetching,
    onInit,
    onSales,
    onDispatch,
    onBudget,
  };

  return {
    states,
    actions,
  };
}
