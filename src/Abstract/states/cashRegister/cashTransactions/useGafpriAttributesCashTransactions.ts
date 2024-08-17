import { useState } from 'react';

export type CashTransactionsAttributes = {
  id?: number;
  cashRegisterTypePostsId: number;
  cashRegisterPostsId: number;
  type: string;
  amount: number;
  change: number;
  currenciesId: number;
  note?: string;
};

type State = {
  cashRegisterTypePostsId: number;
  cashRegisterPostsId: number;
  type: string;
  amount: number;
  change: number;
  currenciesId: number;
  note: string;
};

type Actions = {
  infoReset: () => void;
  setCashRegisterTypePostsId: (value: number) => void;
  setCashRegisterPostsId: (value: number) => void;
  setType: (value: string) => void;
  setAmount: (value: number) => void;
  setChange: (value: number) => void;
  setCurrenciesId: (value: number) => void;
  setNote: (value: string) => void;
};

export type UseGafpriAttributesCashTransactionsReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriAttributesCashTransactions(): UseGafpriAttributesCashTransactionsReturn {
  const [cashRegisterTypePostsId, setCashRegisterTypePostsId] = useState(0);
  const [cashRegisterPostsId, setCashRegisterPostsId] = useState(0);
  const [type, setType] = useState('');
  const [amount, setAmount] = useState(0);
  const [change, setChange] = useState(0);
  const [currenciesId, setCurrenciesId] = useState(0);
  const [note, setNote] = useState('');

  const infoReset = (): void => {
    setCashRegisterTypePostsId(0);
    setCashRegisterPostsId(0);
    setType('');
    setAmount(0);
    setChange(0);
    setCurrenciesId(0);
    setNote('');
  };

  /**
   * Export
   *
   *
   */
  const states = {
    cashRegisterTypePostsId,
    cashRegisterPostsId,
    type,
    amount,
    change,
    currenciesId,
    note,
  };

  const actions = {
    infoReset,
    setCashRegisterTypePostsId,
    setCashRegisterPostsId,
    setType,
    setAmount,
    setChange,
    setCurrenciesId,
    setNote,
  };

  return {
    states,
    actions,
  };
}
