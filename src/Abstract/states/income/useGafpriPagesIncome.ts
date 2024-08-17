import { useState, KeyboardEvent } from 'react';
import { EntityAttributes } from '../entity';
import { UseGafpriEntityReturn } from '../../../states';
import { scrollToTop } from '../../../helpers';
import { UseGafpriAttributesIncomeReturn } from './useGafpriAttributesIncome';

export type UseGafpriPagesIncomeReturn = {
  states: {
    isFetching: boolean;
    isInit: boolean;
    isEntitySearch: boolean;
    isAddEntity: boolean;
    isIncomeForm: boolean;
    isPaymentCrForm: boolean;
    isFinalPaymentCrForm: boolean;
  };
  actions: {
    onFetching: () => void;
    onInit: () => void;
    onEntitySearch: () => void;
    onAddEntity: () => void;
    onIncomeForm: () => void;
    onPaymentCrForm: () => void;
    onFinalPaymentCrForm: () => void;
    returnInit: () => void;
    processEntityBydocumentId: (event: KeyboardEvent<HTMLInputElement>) => void;
    processEntityByName: (event: KeyboardEvent<HTMLInputElement>) => void;
    selectEntity: (id: number) => void;
    processEntityByPhone: (event: KeyboardEvent<HTMLInputElement>) => void;
    processEntityByEmail: (event: KeyboardEvent<HTMLInputElement>) => void;
    goIncomeEntity: (entity: EntityAttributes) => void;
  };
};

export type UseGafpriPagesIncomeProps = {
  useAttributes: UseGafpriAttributesIncomeReturn;
  useEntity: UseGafpriEntityReturn;
};

export const useGafpriPagesIncome = ({
  useAttributes,
  useEntity,
}: UseGafpriPagesIncomeProps): UseGafpriPagesIncomeReturn => {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isEntitySearch, setIsEntitySearch] = useState(false);
  const [isAddEntity, setIsAddEntity] = useState(false);
  const [isIncomeForm, setIsIncomeForm] = useState(false);
  const [isPaymentCrForm, setIsPaymentCrForm] = useState(false);
  const [isFinalPaymentCrForm, setIsFinalPaymentCrForm] = useState(false);

  // Funciones de paginas
  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsIncomeForm(false);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(false);
    scrollToTop();
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsIncomeForm(false);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(false);
    scrollToTop();
  };

  const onEntitySearch = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(true);
    setIsAddEntity(false);
    setIsIncomeForm(false);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(false);
    scrollToTop();
  };

  const onAddEntity = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(true);
    setIsIncomeForm(false);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(false);
    scrollToTop();
  };

  const onIncomeForm = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsIncomeForm(true);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(false);
    scrollToTop();
  };

  const onPaymentCrForm = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsIncomeForm(false);
    setIsPaymentCrForm(true);
    setIsFinalPaymentCrForm(false);
    scrollToTop();
  };

  const onFinalPaymentCrForm = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsIncomeForm(false);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(true);
    scrollToTop();
  };

  const goIncomeEntity = (entity: EntityAttributes): void => {
    useAttributes.actions.setEntity(entity);
    useAttributes.actions.changeCustomerId(entity.id);
    onIncomeForm();
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
        goIncomeEntity(currentEntity);
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
      goIncomeEntity(currentEntity);
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
        goIncomeEntity(currentEntity);
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
        goIncomeEntity(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };

  const states = {
    isFetching,
    isInit,
    isEntitySearch,
    isAddEntity,
    isIncomeForm,
    isPaymentCrForm,
    isFinalPaymentCrForm,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    onFetching,
    onInit,
    onEntitySearch,
    onAddEntity,
    onIncomeForm,
    onPaymentCrForm,
    onFinalPaymentCrForm,
    returnInit,
    processEntityBydocumentId,
    processEntityByName,
    selectEntity,
    processEntityByPhone,
    processEntityByEmail,
    goIncomeEntity,
  };

  return {
    states,
    actions,
  };
};
