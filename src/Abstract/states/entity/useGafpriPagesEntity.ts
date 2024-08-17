import { useState } from 'react';
import { UseGafpriAttributesEntityReturn } from './useGafpriAttributesEntity';
import { scrollToTop } from '../../../helpers';

export type UseGafpriPagesEntityReturn = {
  states: {
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;
    isView: boolean;
    isAddAddress: boolean;
    isAddDocument: boolean;
  };
  actions: {
    onFetching: () => void;
    onInit: () => void;
    onAdd: () => void;
    onUpdate: () => void;
    goUpdate: (id: number) => void;
    goAddPersonal: () => void;
    goAddLegal: () => void;
    goView: (id: number) => void;
    returnInit: () => void;
    onAddAddress: () => void;
    onAddDocument: () => void;
  };
};

export type UseGafpriPagesEntityProps = {
  useAttributes: UseGafpriAttributesEntityReturn;
};

export const useGafpriPagesEntity = ({
  useAttributes,
}: UseGafpriPagesEntityProps): UseGafpriPagesEntityReturn => {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isAddAddress, setIsAddAddress] = useState(false);
  const [isAddDocument, setIsAddDocument] = useState(false);

  // Funciones de paginas
  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
    scrollToTop();
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
    scrollToTop();
  };

  const onAdd = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
    scrollToTop();
  };

  const onUpdate = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(false);
    scrollToTop();
  };

  const onView = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(true);
    setIsAddAddress(false);
    setIsAddDocument(false);
    scrollToTop();
  };

  const onAddAddress = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(true);
    setIsAddDocument(false);
    scrollToTop();
  };

  const onAddDocument = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    setIsAddAddress(false);
    setIsAddDocument(true);
    scrollToTop();
  };

  const goUpdate = (id: number): void => {
    useAttributes.actions.infoReset();
    useAttributes.actions.setCurrentId(id);
    onUpdate();
  };

  const goAddPersonal = (): void => {
    useAttributes.actions.infoReset();
    useAttributes.actions.setType('personal');
    useAttributes.actions.setFormType('personal');
    onAdd();
  };

  const goAddLegal = (): void => {
    useAttributes.actions.infoReset();
    useAttributes.actions.setType('legal');
    useAttributes.actions.setFormType('legal');
    onAdd();
  };

  const goView = (id: number): void => {
    useAttributes.actions.infoReset();
    useAttributes.actions.setCurrentId(id);
    onView();
  };

  const returnInit = (): void => {
    useAttributes.actions.infoReset();
    onInit();
  };

  const states = {
    isFetching,
    isInit,
    isAdd,
    isUpdate,
    isView,
    isAddAddress,
    isAddDocument,
  };

  const actions = {
    onFetching,
    onInit,
    onAdd,
    onUpdate,
    goUpdate,
    goAddPersonal,
    goAddLegal,
    goView,
    returnInit,
    onAddAddress,
    onAddDocument,
  };

  return {
    states,
    actions,
  };
};
