import { useState } from 'react';
import { scrollToTop } from '../../../helpers';
import { UseGafpriAttributesSitesReturn } from './useGafpriAttributesSites';

export type UseGafpriPagesSitesReturn = {
  states: {
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;
  };
  actions: {
    onFetching: () => void;
    onInit: () => void;
    returnInit: () => void;
    onAdd: () => void;
    goAdd: () => void;
    onUpdate: () => void;
    goUpdate: (id: number) => void;
  };
};

export type UseGafpriPagesSitesProps = {
  attributes: UseGafpriAttributesSitesReturn;
};

export const useGafpriPagesSites = ({
  attributes,
}: UseGafpriPagesSitesProps): UseGafpriPagesSitesReturn => {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  // Funciones de paginas
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

  const goUpdate = (id: number): void => {
    attributes.actions.infoReset();
    attributes.actions.setSiteId(id);
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

  // Define las acciones necesarias para los atributos de Site
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
};
