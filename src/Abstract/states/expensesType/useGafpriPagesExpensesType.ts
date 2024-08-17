import { useState } from 'react';
import { scrollToTop } from '../../../helpers';
import { UseGafpriAttributesExpensesTypeReturn } from './useGafpriAttributesExpensesType';

type State = {
  isFetching: boolean;
  isInit: boolean;
  isAdd: boolean;
  isUpdate: boolean;
  childrenFetching: boolean;
};

type Actions = {
  onFetching: () => void;

  onInit: () => void;

  returnInit: () => void;

  onAdd: () => void;

  goAdd: () => void;

  onUpdate: () => void;

  goUpdate: (id: number) => void;

  onChildrenFetching: () => void;

  outChildrenFetching: () => void;
};

export type UseGafpriPagesExpensesTypeReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPagesExpensesTypeProps = {
  attributes: UseGafpriAttributesExpensesTypeReturn;
};

export function useGafpriPagesExpensesType({
  attributes,
}: UseGafpriPagesExpensesTypeProps): UseGafpriPagesExpensesTypeReturn {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [childrenFetching, setChildrenFetching] = useState(false);

  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    scrollToTop();
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    scrollToTop();
  };

  const onAdd = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    scrollToTop();
  };

  const onUpdate = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    scrollToTop();
  };

  const onChildrenFetching = (): void => {
    setChildrenFetching(true);
  };

  const outChildrenFetching = (): void => {
    setChildrenFetching(false);
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
    isAdd,
    isInit,
    isUpdate,
    childrenFetching,
  };

  const actions = {
    onFetching,
    onInit,
    returnInit,
    onAdd,
    goAdd,
    onUpdate,
    goUpdate,
    onChildrenFetching,
    outChildrenFetching,
  };

  return {
    states,
    actions,
  };
}
