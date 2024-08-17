import { useState } from 'react';
import { scrollToTop } from '../../../../helpers';
import { UseGafpriAttributesPaymentTransferBankReturn } from './useGafpriAttributesPaymentTransferBank';

export type UseGafpriPagesPaymentTransferBankReturn = {
  states: {
    isFetching: boolean;
    isPaymentForm: boolean;
    isFinalPaymentForm: boolean;
  };
  actions: {
    onFetching: () => void;
    onPaymentForm: () => void;
    onFinalPaymentForm: () => void;
    returnInit: () => void;
  };
};

export type UseGafpriPagesPaymentTransferBankProps = {
  useAttributes: UseGafpriAttributesPaymentTransferBankReturn;
};

export const useGafpriPagesPaymentTransferBank = ({
  useAttributes,
}: UseGafpriPagesPaymentTransferBankProps): UseGafpriPagesPaymentTransferBankReturn => {
  const [isFetching, setIsFetching] = useState(false);
  const [isPaymentForm, setIsPaymentForm] = useState(true);
  const [isFinalPaymentForm, setIsFinalPaymentForm] = useState(false);

  // Funciones de paginas
  const onFetching = (): void => {
    setIsFetching(true);
    setIsPaymentForm(false);
    setIsFinalPaymentForm(false);
    scrollToTop();
  };

  const onPaymentForm = (): void => {
    setIsFetching(false);
    setIsPaymentForm(true);
    setIsFinalPaymentForm(false);
    scrollToTop();
  };

  const onFinalPaymentForm = (): void => {
    setIsFetching(false);
    setIsPaymentForm(false);
    setIsFinalPaymentForm(true);
    scrollToTop();
  };

  const returnInit = (): void => {
    useAttributes.actions.infoReset();
    onPaymentForm();
  };

  const states = {
    isFetching,
    isPaymentForm,
    isFinalPaymentForm,
  };

  const actions = {
    onFetching,
    onPaymentForm,
    onFinalPaymentForm,
    returnInit,
  };

  return {
    states,
    actions,
  };
};
