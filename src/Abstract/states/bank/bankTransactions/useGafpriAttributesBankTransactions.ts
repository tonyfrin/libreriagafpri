import { useState } from 'react';

export type BankTransactionsAttributes = {
  id?: number;
  bankTypePostsId: number;
  paymentMethodsPostsId?: number;
  type: string;
  paymentType: string;
  description?: string;
  nameSend?: string;
  status?: string;
  amount: number;
  change: number;
  balance?: number;
  balanceChange?: number;
  dateTransations: string;
  createdAt?: string;
};

type State = {
  bankTypePostsId: number;
  nameSend: string;
  type: string;
  paymentType: string;
  description: string;
  amount: number;
  change: number;
  dateTransations: string;
};

type Actions = {
  infoReset: () => void;
  setBankTypePostsId: (value: number) => void;
  setType: (value: string) => void;
  setPaymentType: (value: string) => void;
  setNameSend: (value: string) => void;
  setAmount: (value: number) => void;
  setChange: (value: number) => void;
  setDescription: (value: string) => void;
  setDateTransations: (value: string) => void;
};

export type UseGafpriAttributesBankTransactionsReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriAttributesBankTransactions(): UseGafpriAttributesBankTransactionsReturn {
  const [bankTypePostsId, setBankTypePostsId] = useState(0);
  const [type, setType] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [amount, setAmount] = useState(0);
  const [change, setChange] = useState(0);
  const [description, setDescription] = useState('');
  const [dateTransations, setDateTransations] = useState('');
  const [nameSend, setNameSend] = useState('');

  const infoReset = (): void => {
    setBankTypePostsId(0);
    setType('');
    setPaymentType('');
    setAmount(0);
    setChange(0);
    setDescription('');
    setDateTransations('');
    setNameSend('');
  };

  /**
   * Export
   *
   *
   */
  const states = {
    bankTypePostsId,
    type,
    paymentType,
    amount,
    change,
    description,
    dateTransations,
    nameSend,
  };

  const actions = {
    infoReset,
    setBankTypePostsId,
    setType,
    setPaymentType,
    setAmount,
    setChange,
    setDescription,
    setDateTransations,
    setNameSend,
  };

  return {
    states,
    actions,
  };
}
