import { useState } from 'react';
import {
  generalValidationCustomerId,
  generalValidationReferredId,
} from '../../../Validations';
import {
  generalChangeCustomerId,
  generalChangeReferredId,
  generalChangeNote,
} from '../../../Changes';
import { EntityAttributes } from '../entity';
import { UseGafpriAttributesBudgetItemsReturn } from '../productsItems';

type State = {
  customerId: number;
  customerIdValid: boolean;
  referredId: number;
  referredIdValid: boolean;
  note: string;
  currentId: number;
  entity: EntityAttributes | null;
};

type Actions = {
  infoReset: () => void;
  validationCustomerId: (value: number) => boolean;
  validationReferredId: (value: number) => boolean;
  changeCustomerId: (value: number) => void;
  changeReferredId: (value: number) => void;
  changeNote: (value: string) => void;
  setCurrentId: (value: number) => void;
  setEntity: (value: EntityAttributes | null) => void;
};

export type UseGafpriAttributesBudgetReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriAttributesBudgetProps = {
  useProductItems: UseGafpriAttributesBudgetItemsReturn;
};

export function useGafpriAttributesBudget({
  useProductItems,
}: UseGafpriAttributesBudgetProps): UseGafpriAttributesBudgetReturn {
  const [customerId, setCustomerId] = useState(0);
  const [customerIdValid, setCustomerIdValid] = useState(false);

  const [referredId, setReferredId] = useState(0);
  const [referredIdValid, setReferredIdValid] = useState(true);

  const [note, setNote] = useState('');

  const [currentId, setCurrentId] = useState(0);
  const [entity, setEntity] = useState<EntityAttributes | null>(null);

  const infoReset = (): void => {
    setCustomerId(0);
    setCustomerIdValid(false);
    setReferredId(0);
    setReferredIdValid(true);
    setNote('');
    setCurrentId(0);
    setEntity(null);
    useProductItems.actions.infoReset();
  };

  // Funciones de Validacion
  const validationCustomerId = (value: number): boolean => {
    generalValidationCustomerId({
      value,
      setValid: setCustomerIdValid,
      currentValid: customerIdValid,
    });
    return true;
  };

  const validationReferredId = (value: number): boolean => {
    return generalValidationReferredId({
      value,
      setValid: setReferredIdValid,
      currentValid: referredIdValid,
    });
  };

  // Funciones de Change
  const changeCustomerId = (value: number): void => {
    generalChangeCustomerId({
      value,
      validation: validationCustomerId,
      setValue: setCustomerId,
    });
  };

  const changeReferredId = (value: number): void => {
    generalChangeReferredId({
      value,
      validation: validationReferredId,
      setValue: setReferredId,
    });
  };

  const changeNote = (value: string): void => {
    generalChangeNote({
      value,
      setValue: setNote,
    });
  };

  /**
   * Export
   *
   *
   */
  const states = {
    customerId,
    customerIdValid,
    referredId,
    referredIdValid,
    note,
    currentId,
    entity,
  };

  const actions = {
    infoReset,
    validationCustomerId,
    validationReferredId,
    changeCustomerId,
    changeReferredId,
    changeNote,
    setCurrentId,
    setEntity,
  };

  return {
    states,
    actions,
  };
}
