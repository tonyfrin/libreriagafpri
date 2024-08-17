import { useState } from 'react';
import type { UseGafpriAttributesProjectsReturn } from './useGafpriAttributesProjects';

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

  onUpdate: () => void;

  goUpdate: (id: number) => void;
};

export type UseGafpriPagesProjectsReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPagesProjectsProps = {
  attributes: UseGafpriAttributesProjectsReturn;
};

export function useGafpriPagesProjects({
  attributes,
}: UseGafpriPagesProjectsProps): UseGafpriPagesProjectsReturn {
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

  const states = {
    isFetching,
    isAdd,
    isInit,
    isUpdate,
  };

  const actions = {
    onFetching,
    onInit,
    returnInit,
    onAdd,
    goAdd,
    onUpdate,
    goUpdate,
  };

  return {
    states,
    actions,
  };
}
