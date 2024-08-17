import { useState } from 'react';
import type { UseGafpriAttributesTaxRatesReturn } from './useGafpriAttributesTaxRates';

type State = {
  isFetching: boolean;
  isInit: boolean;
  isAdd: boolean;
  isUpdate: boolean;
};

type Actions = {
  onFetching: () => void;
  onInit: () => void;
  onAdd: () => void;
  onUpdate: () => void;
  goUpdate: (id: number) => void;
  goAdd: () => void;
  returnInit: () => void;
};

export type UseGafpriPagesTaxRatesProps = {
  attributes: UseGafpriAttributesTaxRatesReturn;
  closeModalPage: () => void;
};

export type UseGafpriPagesTaxRatesReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriPagesTaxRates({
  attributes,
  closeModalPage,
}: UseGafpriPagesTaxRatesProps): UseGafpriPagesTaxRatesReturn {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
  };

  const onAdd = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
  };

  const onUpdate = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
  };

  const goUpdate = (id: number): void => {
    attributes.actions.infoReset();
    attributes.actions.setCurrentId(id);
    onUpdate();
  };

  const goAdd = (): void => {
    attributes.actions.infoReset();
    onAdd();
  };

  const returnInit = (): void => {
    closeModalPage();
    attributes.actions.infoReset();
    onInit();
  };

  /**
   * Export
   *
   *
   */
  const states = {
    isFetching,
    isAdd,
    isInit,
    isUpdate,
  };

  const actions = {
    onFetching,
    onInit,
    onAdd,
    onUpdate,
    goUpdate,
    goAdd,
    returnInit,
  };

  return {
    states,
    actions,
  };
}
