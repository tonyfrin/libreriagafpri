import { useState } from 'react';
import type { UseGafpriAttributesProductsReturn } from './useGafpriAttributesProducts';
import type { UseGafpriSubPagesProductsReturn } from './useGafpriSubPagesProducts';

type State = {
  isFetching: boolean;
  isInit: boolean;
  isAdd: boolean;
  isUpdate: boolean;
  modalPage: boolean;
};

type Actions = {
  onFetching: () => void;
  onInit: () => void;
  onAdd: () => void;
  onUpdate: () => void;
  goUpdate: (id: number) => void;
  goAdd: () => void;
  returnInit: () => void;
  openModalPage: () => void;
  closeModalPage: () => void;
};

export type UseGafpriPagesProductsProps = {
  attributes: UseGafpriAttributesProductsReturn;
  subPages: UseGafpriSubPagesProductsReturn;
};

export type UseGafpriPagesProductsReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriPagesProducts({
  attributes,
  subPages,
}: UseGafpriPagesProductsProps): UseGafpriPagesProductsReturn {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [modalPage, setModalPage] = useState(false);

  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setModalPage(false);
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    setModalPage(false);
  };

  const onAdd = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    setModalPage(false);
  };

  const onUpdate = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    setModalPage(false);
  };

  const goUpdate = (id: number): void => {
    attributes.actions.infoReset();
    subPages.actions.onGeneral();
    attributes.actions.setCurrentId(id);
    onUpdate();
  };

  const goAdd = (): void => {
    attributes.actions.infoReset();
    subPages.actions.onGeneral();
    onAdd();
  };

  const returnInit = (): void => {
    attributes.actions.infoReset();
    subPages.actions.onGeneral();
    onInit();
  };

  const openModalPage = (): void => {
    setModalPage(true);
  };

  const closeModalPage = (): void => {
    setModalPage(false);
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
    modalPage,
  };

  const actions = {
    onFetching,
    onInit,
    onAdd,
    onUpdate,
    goUpdate,
    goAdd,
    returnInit,
    openModalPage,
    closeModalPage,
  };

  return {
    states,
    actions,
  };
}
