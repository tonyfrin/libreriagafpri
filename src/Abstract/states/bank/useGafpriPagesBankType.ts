import { useState } from 'react';
import { UseGafpriAttributesBankTypeReturn } from './useGafpriAttributesBankType';
import { UseGafpriSubPagesBankTypeReturn } from './useGafpriSubPagesBankType';

type State = {
  isFetching: boolean;
  isInit: boolean;
  isAdd: boolean;
  isUpdate: boolean;
  modalPage: boolean;
  isPortal: boolean;
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

  onPortal: () => void;

  goPortal: (postsId: number) => void;
};

export type UseGafpriPagesBankTypeReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPagesBankTypeProps = {
  attributes: UseGafpriAttributesBankTypeReturn;
  subPages: UseGafpriSubPagesBankTypeReturn;
};

export function useGafpriPagesBankType({
  attributes,
  subPages,
}: UseGafpriPagesBankTypeProps): UseGafpriPagesBankTypeReturn {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [modalPage, setModalPage] = useState(false);
  const [isPortal, setIsPortal] = useState(false);

  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setModalPage(false);
    setIsPortal(false);
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    setModalPage(false);
    setIsPortal(false);
  };

  const onAdd = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    setModalPage(false);
    setIsPortal(false);
  };

  const onUpdate = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    setModalPage(false);
    setIsPortal(false);
  };

  const onPortal = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setModalPage(false);
    setIsPortal(true);
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

  const goPortal = (postsId: number): void => {
    attributes.actions.setCurrentId(postsId);
    onPortal();
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
    isPortal,
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

    onPortal,

    goPortal,
  };

  return {
    states,
    actions,
  };
}
