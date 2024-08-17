import { useState } from 'react';
import { UseGafpriAttributesCashRegisterTypeReturn } from './useGafpriAttributesCashRegisterType';
import { UseGafpriSubPagesCashRegisterTypeReturn } from './useGafpriSubPagesCashRegisterType';

type State = {
  isFetching: boolean;
  isInit: boolean;
  isAdd: boolean;
  isUpdate: boolean;
  modalPage: boolean;
  isCashPortal: boolean;
};

type Actions = {
  onFetching: () => void;

  onInit: () => void;

  returnInit: () => void;

  onAdd: () => void;

  goAdd: () => void;

  goUpdate: (id: number) => void;

  onUpdate: () => void;

  openModalPage: () => void;

  closeModalPage: () => void;

  onCashPortal: () => void;

  goCashPortal: (postsId: number) => void;
};

export type UseGafpriPagesCashRegisterTypeReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPagesCashRegisterTypeProps = {
  attributes: UseGafpriAttributesCashRegisterTypeReturn;
  subPages: UseGafpriSubPagesCashRegisterTypeReturn;
};

export function useGafpriPagesCashRegisterType({
  attributes,
  subPages,
}: UseGafpriPagesCashRegisterTypeProps): UseGafpriPagesCashRegisterTypeReturn {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [modalPage, setModalPage] = useState(false);
  const [isCashPortal, setIsCashPortal] = useState(false);

  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setModalPage(false);
    setIsCashPortal(false);
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    setModalPage(false);
    setIsCashPortal(false);
  };

  const onAdd = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    setModalPage(false);
    setIsCashPortal(false);
  };

  const onUpdate = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    setModalPage(false);
    setIsCashPortal(false);
  };

  const onCashPortal = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setModalPage(false);
    setIsCashPortal(true);
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
    subPages.actions.onInit();
    onInit();
  };

  const openModalPage = (): void => {
    setModalPage(true);
  };

  const closeModalPage = (): void => {
    setModalPage(false);
  };

  const goCashPortal = (postsId: number): void => {
    attributes.actions.setCurrentId(postsId);
    onCashPortal();
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
    modalPage,
    isCashPortal,
  };

  const actions = {
    onFetching,

    onInit,

    onAdd,

    goAdd,

    onUpdate,

    goUpdate,

    returnInit,

    openModalPage,

    closeModalPage,

    onCashPortal,

    goCashPortal,
  };

  return {
    states,
    actions,
  };
}
