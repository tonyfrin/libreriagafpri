import { useState } from 'react';
import { UseGafpriAttributesStorageReturn } from './useGafpriAttributesStorage';

type State = {
  isFetching: boolean;
  isInit: boolean;
  isAdd: boolean;
  isUpdate: boolean;
};

type Actions = {
  onFetching: () => void;

  onInit: () => void;

  returnInit: () => void;

  onAdd: () => void;

  goAdd: () => void;

  goUpdate: (id: number) => void;

  onUpdate: () => void;
};

export type UseGafpriPagesStorageReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPagesStorageProps = {
  attributes: UseGafpriAttributesStorageReturn;
};

export function useGafpriPagesStorage({
  attributes,
}: UseGafpriPagesStorageProps): UseGafpriPagesStorageReturn {
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
    isInit,
    isAdd,
    isUpdate,
  };

  const actions = {
    onFetching,

    onInit,

    onAdd,

    goAdd,

    onUpdate,

    goUpdate,

    returnInit,
  };

  return {
    states,
    actions,
  };
}
