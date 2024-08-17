import { useState, KeyboardEvent } from 'react';
import { EntityAttributes } from '../entity';
import { UseGafpriEntityReturn } from '../../../states';
import { scrollToTop } from '../../../helpers';
import { UseGafpriAttributesAccountsReceivableReturn } from './useGafpriAttributesAccountsReceivable';

export type UseGafpriPagesAccountsReceivableReturn = {
  states: {
    isFetching: boolean;
    isInit: boolean;
    isInitAdd: boolean;
    isEntitySearch: boolean;
    isAddEntity: boolean;
    isForm: boolean;
    isFormUpdate: boolean;
    isLoginForm: boolean;
    isLoginUpdateForm: boolean;
    isCreditList: boolean;
    isCreditView: boolean;
    isOrderView: boolean;
    isCreditPayment: boolean;
  };
  actions: {
    onFetching: () => void;
    onInit: () => void;
    onInitAdd: () => void;
    onEntitySearch: () => void;
    onAddEntity: () => void;
    onForm: () => void;
    onFormUpdate: () => void;
    onLoginForm: () => void;
    onLoginUpdateForm: () => void;
    onCreditList: () => void;
    onCreditView: () => void;
    onCreditPayment: () => void;
    returnInit: () => void;
    processEntityBydocumentId: (event: KeyboardEvent<HTMLInputElement>) => void;
    processEntityByName: (event: KeyboardEvent<HTMLInputElement>) => void;
    selectEntity: (id: number) => void;
    processEntityByPhone: (event: KeyboardEvent<HTMLInputElement>) => void;
    processEntityByEmail: (event: KeyboardEvent<HTMLInputElement>) => void;
    goForm: (entity: EntityAttributes) => void;
    goFormUpdate: (id: number) => void;
    onOrderView: () => void;
  };
};

export type UseGafpriPagesAccountsReceivableProps = {
  useAttributes: UseGafpriAttributesAccountsReceivableReturn;
  useEntity: UseGafpriEntityReturn;
};

export const useGafpriPagesAccountsReceivable = ({
  useAttributes,
  useEntity,
}: UseGafpriPagesAccountsReceivableProps): UseGafpriPagesAccountsReceivableReturn => {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isInitAdd, setIsInitAdd] = useState(false);
  const [isEntitySearch, setIsEntitySearch] = useState(false);
  const [isAddEntity, setIsAddEntity] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [isFormUpdate, setIsFormUpdate] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [isLoginUpdateForm, setIsLoginUpdateForm] = useState(false);

  const [isCreditList, setIsCreditList] = useState(true);
  const [isCreditView, setIsCreditView] = useState(false);
  const [isOrderView, setIsOrderView] = useState(false);
  const [isCreditPayment, setIsCreditPayment] = useState(false);

  // Funciones de paginas
  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    scrollToTop();
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    scrollToTop();
  };

  const onInitAdd = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(true);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    scrollToTop();
  };

  const onEntitySearch = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(true);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    scrollToTop();
  };

  const onAddEntity = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(true);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    scrollToTop();
  };

  const onForm = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(true);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    scrollToTop();
  };

  const onLoginForm = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(true);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    scrollToTop();
  };

  const onFormUpdate = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(true);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    scrollToTop();
  };

  const onLoginUpdateForm = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(true);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    scrollToTop();
  };

  const onCreditList = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(true);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(false);
    scrollToTop();
  };

  const onCreditView = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(true);
    setIsOrderView(false);
    setIsCreditPayment(false);
    scrollToTop();
  };

  const onOrderView = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(true);
    setIsCreditPayment(false);
    scrollToTop();
  };

  const onCreditPayment = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsInitAdd(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsForm(false);
    setIsLoginForm(false);
    setIsFormUpdate(false);
    setIsLoginUpdateForm(false);
    setIsCreditList(false);
    setIsCreditView(false);
    setIsOrderView(false);
    setIsCreditPayment(true);
    scrollToTop();
  };

  const goForm = (entity: EntityAttributes): void => {
    useAttributes.actions.setEntity(entity);
    useAttributes.actions.changeEntityId(entity.id);
    onForm();
  };

  const goFormUpdate = (id: number): void => {
    useAttributes.actions.setCurrentId(id);
    onFormUpdate();
  };

  const returnInit = (): void => {
    useAttributes.actions.infoReset();
    onInit();
  };

  const processEntityBydocumentId = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      const currentEntity = useEntity.data.actions.findByDocumentIdDigit(
        useEntity.attributes.states.digit
      );
      if (currentEntity) {
        goForm(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };

  const processEntityByName = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      useEntity.paginations.actions.changeSearchBy({
        value: 'name',
        label: 'Nombre',
      });
      useEntity.paginations.actions.setSearchTerm(
        useEntity.attributes.states.name
      );
      onEntitySearch();
    }
  };

  const selectEntity = (id: number): void => {
    const currentEntity = useEntity.data.actions.getById(id);
    if (currentEntity) {
      goForm(currentEntity);
    }
  };

  const processEntityByPhone = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      const currentEntity = useEntity.data.actions.findByPhone(
        useEntity.attributes.states.phone
      );
      if (currentEntity) {
        goForm(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };

  const processEntityByEmail = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      const currentEntity = useEntity.data.actions.findByEmail(
        useEntity.attributes.states.email
      );
      if (currentEntity) {
        goForm(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };

  const states = {
    isFetching,
    isInit,
    isInitAdd,
    isEntitySearch,
    isAddEntity,
    isForm,
    isFormUpdate,
    isLoginUpdateForm,
    isLoginForm,
    isCreditList,
    isCreditView,
    isOrderView,
    isCreditPayment,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    onFetching,
    onInit,
    onInitAdd,
    onEntitySearch,
    onAddEntity,
    onForm,
    onFormUpdate,
    onLoginForm,
    returnInit,
    processEntityBydocumentId,
    processEntityByName,
    selectEntity,
    processEntityByPhone,
    processEntityByEmail,
    goForm,
    goFormUpdate,
    onLoginUpdateForm,
    onCreditList,
    onCreditView,
    onCreditPayment,
    onOrderView,
  };

  return {
    states,
    actions,
  };
};
