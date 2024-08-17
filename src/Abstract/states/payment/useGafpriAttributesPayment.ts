import { useState } from 'react';
import {
  GeneralPaymentMethodsAttributes,
  PaymentMethodsAttributes,
  useGafpriAttributesGeneralPaymentMethods,
  UseGafpriAttributesGeneralPaymentMethodsReturn,
} from '../paymentMethods';
import {
  UseCurrenciesReturn,
  UseGafpriBankTypeReturn,
  UseGafpriOrderReturn,
} from '../../../states';
import { generalValidationButtonNext } from '../../../Validations';
import { OrderAttributes } from '../order';

export type PaymentAttributes = {
  total: string;
  note?: string;
  type: string;
  paymentMethod: GeneralPaymentMethodsAttributes[];
  order?: OrderAttributes[];
};

export type PaymentAttributesReturn = {
  total: string;
  note?: string;
  type: string;
  paymentMethods: PaymentMethodsAttributes[];
  order?: OrderAttributes[];
};

type State = {
  total: string;
  type: string;
  note: string;
  difference: number;
};

type Actions = {
  infoReset: () => void;
  setType: (value: string) => void;
  setTotal: (value: string) => void;
  setNote: (value: string) => void;
  validationButtonNextPaymentCash: () => boolean;
  setDifference: (value: number) => void;
  validationButtonNextPaymentCredit: () => boolean;
  validationButtonNextPaymentCreditAdd: () => boolean;
  validationButtonNextPaymentSingle: () => boolean;
  checkCreditOpeningOrderReturn: (
    orderPostId: number,
    total: number,
    currenciesId: number
  ) => void;
};

export type UseGafpriAttributesPaymentReturn = {
  states: State;
  actions: Actions;
  useGeneralPaymentMethods: UseGafpriAttributesGeneralPaymentMethodsReturn;
};

export type UseGafpriAttributesPaymentProps = {
  currencies?: UseCurrenciesReturn;
  useBankType?: UseGafpriBankTypeReturn;
  useOrder?: UseGafpriOrderReturn;
};

export function useGafpriAttributesPayment({
  currencies,
  useBankType,
  useOrder,
}: UseGafpriAttributesPaymentProps): UseGafpriAttributesPaymentReturn {
  const [type, setType] = useState('');
  const [total, setTotal] = useState('');
  const [note, setNote] = useState('');
  const [difference, setDifference] = useState(0);
  const useGeneralPaymentMethods = useGafpriAttributesGeneralPaymentMethods({
    currencies,
    useBankType,
  });

  const infoReset = (): void => {
    setType('');
    setTotal('');
    setNote('');
    setDifference(0);
    useGeneralPaymentMethods.actions.infoReset();
  };

  const validationButtonNextPaymentCash = (): boolean => {
    return generalValidationButtonNext({
      validations: [
        useGeneralPaymentMethods.states.currenciesIdValid,
        useGeneralPaymentMethods.useCashTransactions.states.change > 0,
        useGeneralPaymentMethods.useCashTransactions.states.amount > 0,
        useGeneralPaymentMethods.usePaymentMethods.states.change > 0,
        useGeneralPaymentMethods.usePaymentMethods.states.amount > 0,
      ],
      inputId: 'cash',
    });
  };

  const validationButtonNextPaymentCredit = (): boolean => {
    return generalValidationButtonNext({
      validations: [
        useGeneralPaymentMethods.useCreditOpening.states.amount > 0,
        useGeneralPaymentMethods.usePaymentMethods.states.change > 0,
        useGeneralPaymentMethods.usePaymentMethods.states.amount > 0,
      ],
      inputId: 'credit-next',
    });
  };

  const validationButtonNextPaymentCreditAdd = (): boolean => {
    return generalValidationButtonNext({
      validations: [
        useGeneralPaymentMethods.useCreditOpening.states.amount > 0,
        useGeneralPaymentMethods.usePaymentMethods.states.change > 0,
        useGeneralPaymentMethods.usePaymentMethods.states.amount > 0,
        useGeneralPaymentMethods.useCreditOpening.states.authorizedLoginValid,
        useGeneralPaymentMethods.useCreditOpening.states
          .authorizedPasswordValid,
      ],
      inputId: 'credit-add',
    });
  };

  const validationButtonNextPaymentSingle = (): boolean => {
    return generalValidationButtonNext({
      validations: [
        useGeneralPaymentMethods.usePaymentMethods.states.change > 0,
        useGeneralPaymentMethods.usePaymentMethods.states.amount > 0,
      ],
      inputId: 'single-add',
    });
  };

  const checkCreditOpeningOrderReturn = (
    orderPostId: number,
    totalOrderReturn: number,
    currenciesId: number
  ): void => {
    if (useOrder) {
      const currentOrder = useOrder.data.actions.getById(orderPostId);
      if (currentOrder) {
        currentOrder.payment?.paymentMethods.forEach((paymentMethod) => {
          if (paymentMethod.creditOpening) {
            const creditOpening = paymentMethod.creditOpening[0];
            if (
              creditOpening &&
              creditOpening.balance &&
              creditOpening.postsId
            ) {
              let amount = 0;
              if (parseFloat(`${creditOpening.balance}`) > totalOrderReturn) {
                amount = totalOrderReturn;
              } else {
                amount = parseFloat(`${creditOpening.balance}`);
              }
              useGeneralPaymentMethods.actions.addCreditPaymentPaymentMethod(
                creditOpening.postsId,
                currenciesId,
                amount
              );
            }
          }

          return null;
        });
      }
    }
  };

  /**
   * Export
   *
   *
   */
  const states = {
    type,
    total,
    note,
    difference,
  };

  const actions = {
    infoReset,
    setType,
    setTotal,
    setNote,
    validationButtonNextPaymentCash,
    setDifference,
    validationButtonNextPaymentCredit,
    validationButtonNextPaymentCreditAdd,
    validationButtonNextPaymentSingle,
    checkCreditOpeningOrderReturn,
  };

  return {
    states,
    actions,
    useGeneralPaymentMethods,
  };
}
