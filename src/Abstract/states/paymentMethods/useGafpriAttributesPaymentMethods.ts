import { useState } from 'react';
import { PaymentAttributes } from '../payment';
import { PostsAttributes } from '../../../states';
import { CreditOpeningAttributes } from '../credits';

export type PaymentMethodsAttributes = {
  methodType: string;
  type: 'deposit' | 'debit' | '';
  paymentType?: string;
  currenciesId: number;
  bank?: string;
  number?: string;
  amount: number;
  change: number;
  note?: string;
  payment?: PaymentAttributes;
  creditOpening?: CreditOpeningAttributes[];
  posts?: PostsAttributes;
};

type State = {
  methodType: string;
  type: 'deposit' | 'debit' | '';
  paymentType: string;
  currenciesId: number;
  bank: string;
  number: string;
  amount: number;
  change: number;
  note: string;
};

type Actions = {
  infoReset: () => void;
  setMethodType: (value: string) => void;
  setPaymentType: (value: string) => void;
  setBank: (value: string) => void;
  setNumber: (value: string) => void;
  setCurrenciesId: (value: number) => void;
  setType: (value: 'deposit' | 'debit') => void;
  setAmount: (value: number) => void;
  setChange: (value: number) => void;
  setNote: (value: string) => void;
};

export type UseGafpriAttributesPaymentMethodsReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriAttributesPaymentMethods(): UseGafpriAttributesPaymentMethodsReturn {
  const [methodType, setMethodType] = useState('');
  const [type, setType] = useState<'deposit' | 'debit' | ''>('');
  const [paymentType, setPaymentType] = useState('');
  const [currenciesId, setCurrenciesId] = useState(0);

  const [bank, setBank] = useState('');
  const [number, setNumber] = useState('');
  const [amount, setAmount] = useState(0);
  const [change, setChange] = useState(0);
  const [note, setNote] = useState('');

  const infoReset = (): void => {
    setMethodType('');
    setType('');
    setPaymentType('');
    setBank('');
    setNumber('');
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
    methodType,
    type,
    paymentType,
    currenciesId,
    bank,
    number,
    amount,
    change,
    note,
  };

  const actions = {
    infoReset,
    setMethodType,
    setPaymentType,
    setBank,
    setNumber,
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
