import React, { useState } from 'react';
import { SingleValue } from 'react-select';
import {
  generalValidationCustomerId,
  generalValidationProjectsId,
  generalValidationButtonNext,
} from '../../../Validations';
import {
  generalChangeCustomerId,
  generalChangeProjectsId,
  generalChangeNote,
} from '../../../Changes';
import { EntityAttributes } from '../entity';
import {
  UseGafpriAttributesPaymentReturn,
  useGafpriAttributesPayment,
} from '../payment';
import { SelectDefault } from '../../../helpers';
import { UseGafpriProjectsReturn, UseCurrenciesReturn } from '../../../states';
import { INCOME_ROUTE } from '../../../constants';

type State = {
  customerId: number;
  customerIdValid: boolean;

  projectsPostsId: string;
  projectsPostsIdValid: boolean;
  projectsPostsIdDefault: SelectDefault;
  projectsPostsIdOptions: SelectDefault[];

  note: string;

  subTotal: string;

  subTotalTax: string;

  total: string;

  entity: EntityAttributes | null;

  cashRegisterTypePostsId: number;
  cashRegisterPostsId: number;
};

type Actions = {
  infoReset: () => void;
  validationCustomerId: (value: number) => boolean;
  validationProjectsPostsId: (value: string) => boolean;
  changeCustomerId: (value: number) => void;
  changeProjectsPostsId: (
    value: SingleValue<{ value: string; label: string }>
  ) => void;
  changeNote: (value: string) => void;
  changeSubTotal: (value: string) => void;
  changeSubTotalTax: (value: string) => void;
  changeTotal: () => void;
  setEntity: (value: EntityAttributes | null) => void;
  validationButtonNext: () => void;
  setCashRegisterTypePostsId: (value: number) => void;
  setCashRegisterPostsId: (value: number) => void;
  validationButtonNextPaymentCr: () => boolean;
  validationButtonNextAdd: () => void;
};

export type UseGafpriAttributesIncomeReturn = {
  states: State;
  actions: Actions;
  usePayment: UseGafpriAttributesPaymentReturn;
};

export type UseGafpriAttributesIncomeProps = {
  projects: UseGafpriProjectsReturn;
  currencies: UseCurrenciesReturn;
};

export function useGafpriAttributesIncome({
  projects,
  currencies,
}: UseGafpriAttributesIncomeProps): UseGafpriAttributesIncomeReturn {
  const [customerId, setCustomerId] = useState(0);
  const [customerIdValid, setCustomerIdValid] = useState(false);

  const [projectsPostsId, setProjectsPostsId] = useState('');
  const [projectsPostsIdValid, setProjectsPostsIdValid] = useState(false);
  const [projectsPostsIdDefault, setProjectsPostsIdDefault] =
    useState<SelectDefault>({
      value: '',
      label: 'Selecciona un proyecto',
    });
  const projectsPostsIdOptions: SelectDefault[] =
    projects.data.actions.getOptionsItems();

  const [note, setNote] = useState('');

  const [subTotal, setSubTotal] = useState('');

  const [subTotalTax, setSubTotalTax] = useState('');

  const [total, setTotal] = useState('');

  const [entity, setEntity] = useState<EntityAttributes | null>(null);
  const [cashRegisterTypePostsId, setCashRegisterTypePostsId] = useState(0);
  const [cashRegisterPostsId, setCashRegisterPostsId] = useState(0);
  const usePayment = useGafpriAttributesPayment({ currencies });

  const infoReset = (): void => {
    setCustomerId(0);
    setCustomerIdValid(false);

    setProjectsPostsId('');
    setProjectsPostsIdValid(false);
    setProjectsPostsIdDefault({
      value: '',
      label: 'Selecciona un proyecto',
    });

    setNote('');

    setSubTotal('');
    setSubTotalTax('');
    setTotal('');

    setEntity(null);
    setCashRegisterPostsId(0);
    setCashRegisterTypePostsId(0);
    usePayment.actions.infoReset();
  };

  // Funciones de Validacion
  const validationCustomerId = (value: number): boolean => {
    return generalValidationCustomerId({
      value,
      setValid: setCustomerIdValid,
      currentValid: customerIdValid,
    });
  };

  const validationProjectsPostsId = (value: string): boolean => {
    return generalValidationProjectsId({
      value,
      setValid: setProjectsPostsIdValid,
      currentValid: projectsPostsIdValid,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [
        customerIdValid,
        projectsPostsIdValid,
        parseFloat(total) > 0,
      ],
      inputId: INCOME_ROUTE,
    });
  };

  const validationButtonNextPaymentCr = (): boolean => {
    return generalValidationButtonNext({
      validations: [
        usePayment.useGeneralPaymentMethods.states.currenciesIdValid,
        parseFloat(usePayment.states.total) > 0,
        usePayment.useGeneralPaymentMethods.useCashTransactions.states.change >
          0,
        usePayment.useGeneralPaymentMethods.usePaymentMethods.states.change > 0,
      ],
      inputId: `${INCOME_ROUTE}-2`,
    });
  };

  const validationButtonNextAdd = (): void => {
    generalValidationButtonNext({
      validations: [
        customerIdValid,
        projectsPostsIdValid,
        usePayment.useGeneralPaymentMethods.states.currenciesIdValid,
        parseFloat(total) === parseFloat(usePayment.states.total),
      ],
      inputId: `${INCOME_ROUTE}-Add`,
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

  const changeProjectsPostsId = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeProjectsId({
      options,
      validation: validationProjectsPostsId,
      setDefault: setProjectsPostsIdDefault,
      setValue: setProjectsPostsId,
    });
  };

  const changeNote = (value: string): void => {
    generalChangeNote({
      value,
      setValue: setNote,
    });
  };

  const changeSubTotal = (value: string): void => {
    setSubTotal(value);
  };

  const changeSubTotalTax = (value: string): void => {
    setSubTotalTax(value);
  };

  const changeTotal = (): void => {
    const newSubTotal = parseFloat(subTotal) || 0;
    const newSubTotalTax = parseFloat(subTotalTax) || 0;
    const newTotal = newSubTotal + newSubTotalTax;
    setTotal(`${newTotal}`);
  };

  /**
   * Effects
   *
   *
   */

  React.useEffect(() => {
    changeTotal();
  }, [subTotal, subTotalTax]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  const states = {
    customerId,
    customerIdValid,

    projectsPostsId,
    projectsPostsIdValid,
    projectsPostsIdDefault,
    projectsPostsIdOptions,

    note,
    subTotal,
    subTotalTax,
    total,
    entity,

    cashRegisterTypePostsId,
    cashRegisterPostsId,
  };

  const actions = {
    infoReset,
    validationCustomerId,
    validationProjectsPostsId,
    changeCustomerId,
    changeProjectsPostsId,
    changeNote,
    changeSubTotal,
    changeSubTotalTax,
    changeTotal,
    setEntity,
    validationButtonNext,
    setCashRegisterTypePostsId,
    setCashRegisterPostsId,
    validationButtonNextPaymentCr,
    validationButtonNextAdd,
  };

  return {
    states,
    actions,
    usePayment,
  };
}
