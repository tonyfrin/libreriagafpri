import { useState } from 'react';
import type { UseGafpriAttributesTaxClassesReturn } from './useGafpriAttributesTaxClasses';
import type { TaxClassesAttributes } from './useGafpriDataTaxClasses';

type Data = {
  item?: TaxClassesAttributes;
  success?: boolean;
  name: string;
  description: string;
};

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
  goUpdateFromAdd: (data: Data) => void;
  openModalPage: () => void;
  closeModalPage: () => void;
};

export type UseGafpriPagesTaxClassesProps = {
  attributes: UseGafpriAttributesTaxClassesReturn;
};

export type UseGafpriPagesTaxClassesReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriPagesTaxClasses({
  attributes,
}: UseGafpriPagesTaxClassesProps): UseGafpriPagesTaxClassesReturn {
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
    attributes.actions.setCurrentId(id);
    onUpdate();
  };

  const goUpdateFromAdd = (data: Data): void => {
    if (data && data.item && data.item.id) goUpdate(data.item.id);
  };

  const goAdd = (): void => {
    attributes.actions.infoReset();
    onAdd();
  };

  const returnInit = (): void => {
    attributes.actions.infoReset();
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
    goUpdateFromAdd,
    openModalPage,
    closeModalPage,
  };

  return {
    states,
    actions,
  };
}
