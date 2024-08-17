import { useState } from 'react';

export type CreditPaymentAttributes = {
  creditOpeningPostsId: number;
  paymentMethodsPostsId?: number;
  description?: string;
  amount: number;
};

type State = {
  creditOpeningPostsId: number;
  amount: number;
};

type Actions = {
  infoReset: () => void;
  setCreditOpeningPostsId: (value: number) => void;
  setAmount: (value: number) => void;
};

export type UseGafpriAttributesCreditPaymentReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriAttributesCreditPayment(): UseGafpriAttributesCreditPaymentReturn {
  const [creditOpeningPostsId, setCreditOpeningPostsId] = useState(0);
  const [amount, setAmount] = useState(0);

  const infoReset = (): void => {
    setCreditOpeningPostsId(0);
    setAmount(0);
  };

  /**
   * Export
   *
   *
   */
  const states = {
    creditOpeningPostsId,
    amount,
  };

  const actions = {
    infoReset,
    setCreditOpeningPostsId,
    setAmount,
  };

  return {
    states,
    actions,
  };
}
