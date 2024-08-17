import { useState } from 'react';
import { scrollToTop } from '../../../../helpers';
import { UseGafpriAttributesPaymentTransferCashRegisterReturn } from './useGafpriAttributesPaymentTransferCashRegister';

export type UseGafpriPagesPaymentTransferCashRegisterReturn = {
  states: {
    isFetching: boolean;
    isPaymentCrForm: boolean;
    isFinalPaymentCrForm: boolean;
  };
  actions: {
    onFetching: () => void;
    onPaymentCrForm: () => void;
    onFinalPaymentCrForm: () => void;
    returnInit: () => void;
  };
};

export type UseGafpriPagesPaymentTransferCashRegisterProps = {
  useAttributes: UseGafpriAttributesPaymentTransferCashRegisterReturn;
};

export const useGafpriPagesPaymentTransferCashRegister = ({
  useAttributes,
}: UseGafpriPagesPaymentTransferCashRegisterProps): UseGafpriPagesPaymentTransferCashRegisterReturn => {
  const [isFetching, setIsFetching] = useState(false);
  const [isPaymentCrForm, setIsPaymentCrForm] = useState(true);
  const [isFinalPaymentCrForm, setIsFinalPaymentCrForm] = useState(false);

  // Funciones de paginas
  const onFetching = (): void => {
    setIsFetching(true);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(false);
    scrollToTop();
  };

  const onPaymentCrForm = (): void => {
    setIsFetching(false);
    setIsPaymentCrForm(true);
    setIsFinalPaymentCrForm(false);
    scrollToTop();
  };

  const onFinalPaymentCrForm = (): void => {
    setIsFetching(false);
    setIsPaymentCrForm(false);
    setIsFinalPaymentCrForm(true);
    scrollToTop();
  };

  const returnInit = (): void => {
    useAttributes.actions.infoReset();
    onPaymentCrForm();
  };

  const states = {
    isFetching,
    isPaymentCrForm,
    isFinalPaymentCrForm,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    onFetching,
    onPaymentCrForm,
    onFinalPaymentCrForm,
    returnInit,
  };

  return {
    states,
    actions,
  };
};
