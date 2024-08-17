import { useState } from 'react';
import { UseGafpriAttributesPaymentReturn } from './useGafpriAttributesPayment';
import { UseGafpriSubPagesDepositPaymentReturn } from './useGafpriSubPagesDepositPayment';

type State = {
  isFetching: boolean;
  isInit: boolean;
  isDeposit: boolean;
  isOrderReturn: boolean;
};

type Actions = {
  onFetching: () => void;

  onInit: () => void;

  returnInit: () => void;

  onDeposit: () => void;

  onOrderReturn: () => void;
};

export type UseGafpriPagesPaymentReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPagesPaymentProps = {
  attributes: UseGafpriAttributesPaymentReturn;
  subPagesDeposit: UseGafpriSubPagesDepositPaymentReturn;
};

export function useGafpriPagesPayment({
  attributes,
  subPagesDeposit,
}: UseGafpriPagesPaymentProps): UseGafpriPagesPaymentReturn {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isDeposit, setIsDeposit] = useState(false);
  const [isOrderReturn, setIsOrderReturn] = useState(false);

  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsDeposit(false);
    setIsOrderReturn(false);
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsDeposit(false);
    setIsOrderReturn(false);
  };

  const onDeposit = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsDeposit(true);
    setIsOrderReturn(false);
  };

  const onOrderReturn = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsDeposit(false);
    setIsOrderReturn(true);
  };

  const returnInit = (): void => {
    attributes.actions.infoReset();
    subPagesDeposit.actions.onOrder();
    onInit();
  };

  /**
   * Export
   *
   *
   */
  const states = {
    isFetching,
    isInit,
    isDeposit,
    isOrderReturn,
  };

  const actions = {
    onFetching,

    onInit,

    onDeposit,

    onOrderReturn,

    returnInit,
  };

  return {
    states,
    actions,
  };
}
