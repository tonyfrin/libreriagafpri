import React, { useState } from 'react';
import { SingleValue } from 'react-select';
import {
  PaymentMethodsAttributes,
  useGafpriAttributesPaymentMethods,
  UseGafpriAttributesPaymentMethodsReturn,
} from './useGafpriAttributesPaymentMethods';
import {
  CashTransactionsAttributes,
  useGafpriAttributesCashTransactions,
  UseGafpriAttributesCashTransactionsReturn,
} from '../cashRegister';
import {
  UseCurrenciesReturn,
  UseErrorReturn,
  UseGafpriBankTypeReturn,
} from '../../../states';
import { SelectDefault } from '../../../helpers';
import { generalValidationSelectCurrencies } from '../../../Validations';
import {
  BankTransactionsAttributes,
  UseGafpriAttributesBankTransactionsReturn,
  useGafpriAttributesBankTransactions,
} from '../bank/bankTransactions/useGafpriAttributesBankTransactions';
import {
  UseGafpriPagesPaymentMethodsReturn,
  useGafpriPagesPaymentMethods,
} from './useGafpriPagesPaymentMethods';
import {
  useGafpriAttributesCreditOpening,
  UseGafpriAttributesCreditOpeningReturn,
  CreditOpeningAttributes,
  CreditPaymentAttributes,
} from '../credits';

export type GeneralPaymentMethodsAttributes = {
  paymentMethods: PaymentMethodsAttributes;
  cashTransactions?: CashTransactionsAttributes;
  bankTransactions?: BankTransactionsAttributes;
  creditOpening?: CreditOpeningAttributes;
  creditPayment?: CreditPaymentAttributes;
};

type State = {
  arrayPaymentMethod: GeneralPaymentMethodsAttributes[];
  totalPaymentMethod: number;
  totalMethods: number;
  currenciesId: number;
  currenciesIdValid: boolean;
  currenciesIdDefault: SelectDefault;
  currenciesIdOptions: SelectDefault[];
  change: number;
  debitAmount: number;
  depositAmount: number;
  type: 'deposit' | 'debit';
};

type Actions = {
  infoReset: () => void;
  addCashTransaction: () => void;
  emptyPaymentMethodArray: () => void;
  deletePaymentMethod: (index: number) => void;
  validationCurrenciesId: (value: string) => boolean;
  changeCashCurrenciesId: (
    value: SingleValue<{ label: string; value: string }>
  ) => void;
  addTransferCashRegister: (
    currentCashRegisterPostsId: number,
    currentCashRegisterTypePostsId: number,
    cashRegisterPostsId: number,
    cashRegisterTypePostsId: number
  ) => void;
  addTransferBankRegister: (
    debitBankTypePostsId: number,
    depositBankTypePostsId: number
  ) => void;
  setChange: (value: number) => void;
  setDebitAmount: (value: number) => void;
  setDepositAmount: (value: number) => void;
  setType: (value: 'deposit' | 'debit') => void;
  partiallyInfoReset: () => void;
  addElectronicPaymentMethod: () => void;
  addCreditPaymentMethod: (entityId: number, currenciesId: number) => void;
  addSinglePaymentMethod: (siteCurrenciesId: number) => void;
  addCreditPaymentPaymentMethod: (
    creditOpeningPostsId: number,
    siteCurrenciesId: number,
    newAmount: number
  ) => void;
};

export type UseGafpriAttributesGeneralPaymentMethodsReturn = {
  states: State;
  actions: Actions;
  pages: UseGafpriPagesPaymentMethodsReturn;
  usePaymentMethods: UseGafpriAttributesPaymentMethodsReturn;
  useCashTransactions: UseGafpriAttributesCashTransactionsReturn;
  useBankTransactions: UseGafpriAttributesBankTransactionsReturn;
  useCreditOpening: UseGafpriAttributesCreditOpeningReturn;
};

export type UseGafpriAttributesGeneralPaymentMethodsProps = {
  currencies?: UseCurrenciesReturn;
  useBankType?: UseGafpriBankTypeReturn;
  useError?: UseErrorReturn;
};

export function useGafpriAttributesGeneralPaymentMethods({
  currencies,
  useBankType,
  useError,
}: UseGafpriAttributesGeneralPaymentMethodsProps): UseGafpriAttributesGeneralPaymentMethodsReturn {
  const [arrayPaymentMethod, setArrayPaymentMethod] = useState<
    GeneralPaymentMethodsAttributes[]
  >([]);
  const usePaymentMethods = useGafpriAttributesPaymentMethods();
  const useCashTransactions = useGafpriAttributesCashTransactions();
  const useBankTransactions = useGafpriAttributesBankTransactions();
  const useCreditOpening = useGafpriAttributesCreditOpening();
  const pages = useGafpriPagesPaymentMethods();
  const [totalPaymentMethod, setTotalPaymentMethod] = useState(0);
  const [totalMethods, setTotalMethods] = useState(0);
  const [currenciesId, setCurrenciesId] = useState(0);
  const [currenciesIdValid, setCurrenciesIdValid] = useState(false);
  const [currenciesIdDefault, setCurrenciesIdDefault] = useState<SelectDefault>(
    {
      value: '',
      label: 'Selecciona la Moneda',
    }
  );
  const currenciesIdOptions: SelectDefault[] = currencies
    ? currencies.actions.getOptionsItems()
    : [];
  const [change, setChange] = useState(0);
  const [debitAmount, setDebitAmount] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);
  const [type, setType] = useState<'deposit' | 'debit'>('deposit');

  const infoReset = (): void => {
    usePaymentMethods.actions.infoReset();
    useCashTransactions.actions.infoReset();
    useBankTransactions.actions.infoReset();
    useCreditOpening.actions.infoReset();
    setArrayPaymentMethod([]);
    setCurrenciesId(0);
    setCurrenciesIdValid(false);
    setCurrenciesIdDefault({
      value: '',
      label: 'Selecciona la Moneda',
    });
    setChange(0);
    setDebitAmount(0);
    setDepositAmount(0);
    setType('deposit');
  };

  const partiallyInfoReset = (): void => {
    usePaymentMethods.actions.infoReset();
    useCashTransactions.actions.infoReset();
    useBankTransactions.actions.infoReset();
    useCreditOpening.actions.infoReset();
    setCurrenciesId(0);
    setCurrenciesIdValid(false);
    setCurrenciesIdDefault({
      value: '',
      label: 'Selecciona la Moneda',
    });
    setChange(0);
    setDebitAmount(0);
    setDepositAmount(0);
    setType('deposit');
  };

  const validationCurrenciesId = (value: string): boolean => {
    let newValue;
    if (value) {
      newValue = value === '' || value === '0' ? '' : value;
    } else {
      newValue = '';
    }
    return generalValidationSelectCurrencies({
      value: newValue,
      setValid: setCurrenciesIdValid,
      currentValid: currenciesIdValid,
    });
  };

  const validationArrayPaymentMethod = (
    value: GeneralPaymentMethodsAttributes[]
  ): boolean => {
    return value.length <= 100;
  };

  const changeArrayPaymentMethod = (
    value: GeneralPaymentMethodsAttributes
  ): void => {
    const valid = validationArrayPaymentMethod([...arrayPaymentMethod, value]);

    if (valid) {
      setArrayPaymentMethod((prevCart) => [...prevCart, value]);
      return;
    }

    if (useError) {
      useError.actions.changeError([
        'No se pueden agregar más de 100 metodos de pagos',
      ]);
    }
  };

  const addCashTransaction = (): void => {
    changeArrayPaymentMethod({
      paymentMethods: usePaymentMethods.states,
      cashTransactions: useCashTransactions.states,
    });
    usePaymentMethods.actions.infoReset();
    useCashTransactions.actions.infoReset();
  };

  const addTransferCashRegister = (
    currentCashRegisterPostsId: number,
    currentCashRegisterTypePostsId: number,
    cashRegisterPostsId: number,
    cashRegisterTypePostsId: number
  ): void => {
    const debitCashTransactions = {
      cashRegisterPostsId: currentCashRegisterPostsId,
      cashRegisterTypePostsId: currentCashRegisterTypePostsId,
      type: 'debit',
      amount: usePaymentMethods.states.amount,
      change: usePaymentMethods.states.change,
      currenciesId,
      note: '',
    };

    const depositCashTransactions = {
      cashRegisterTypePostsId,
      cashRegisterPostsId,
      type: 'deposit',
      amount: usePaymentMethods.states.amount,
      change: usePaymentMethods.states.change,
      currenciesId,
      note: '',
    };

    const debitPaymentMethods: GeneralPaymentMethodsAttributes['paymentMethods'] =
      {
        methodType: 'cash',
        type: 'debit',
        paymentType: '',
        currenciesId,
        bank: '',
        number: '',
        amount: usePaymentMethods.states.amount,
        change: usePaymentMethods.states.change,
        note: '',
      };

    const depositPaymentMethods: GeneralPaymentMethodsAttributes['paymentMethods'] =
      {
        methodType: 'cash',
        type: 'deposit',
        paymentType: '',
        currenciesId,
        bank: '',
        number: '',
        amount: usePaymentMethods.states.amount,
        change: usePaymentMethods.states.change,
        note: '',
      };

    const debitTransfer: GeneralPaymentMethodsAttributes = {
      paymentMethods: debitPaymentMethods,
      cashTransactions: debitCashTransactions,
    };

    const depositTransfer: GeneralPaymentMethodsAttributes = {
      paymentMethods: depositPaymentMethods,
      cashTransactions: depositCashTransactions,
    };

    changeArrayPaymentMethod(debitTransfer);
    changeArrayPaymentMethod(depositTransfer);
  };

  const addTransferBankRegister = (
    debitBankTypePostsId: number,
    depositBankTypePostsId: number
  ): void => {
    if (useBankType) {
      const debitBankType =
        useBankType.data.actions.getById(debitBankTypePostsId);
      const depositBankType = useBankType.data.actions.getById(
        depositBankTypePostsId
      );

      if (!debitBankType || !depositBankType) return;
      const currentDate = new Date();
      const formatDate = currentDate.toISOString().split('T')[0];

      const debitBankTransactions = {
        bankTypePostsId: debitBankTypePostsId,
        type: 'debit',
        paymentType: 'transfers',
        description: `Transferecia de ${debitBankType.name} a ${depositBankType.name}`,
        amount: debitAmount,
        change,
        dateTransations: `${formatDate}`,
      };

      const depositBankTransactions = {
        bankTypePostsId: depositBankTypePostsId,
        type: 'deposit',
        paymentType: 'transfers',
        description: `Transferecia de ${debitBankType.name} a ${depositBankType.name}`,
        amount: depositAmount,
        change,
        dateTransations: `${formatDate}`,
      };

      const debitPaymentMethods: GeneralPaymentMethodsAttributes['paymentMethods'] =
        {
          methodType: 'bank',
          type: 'debit',
          paymentType: 'transfers',
          currenciesId: debitBankType.currenciesId,
          bank: debitBankType.bankName,
          number: usePaymentMethods.states.number,
          amount: debitAmount,
          change,
          note: '',
        };

      const depositPaymentMethods: GeneralPaymentMethodsAttributes['paymentMethods'] =
        {
          methodType: 'bank',
          type: 'deposit',
          paymentType: 'transfers',
          currenciesId: depositBankType.currenciesId,
          bank: debitBankType.bankName,
          number: usePaymentMethods.states.number,
          amount: depositAmount,
          change,
          note: '',
        };

      const debitTransfer: GeneralPaymentMethodsAttributes = {
        paymentMethods: debitPaymentMethods,
        bankTransactions: debitBankTransactions,
      };

      const depositTransfer: GeneralPaymentMethodsAttributes = {
        paymentMethods: depositPaymentMethods,
        bankTransactions: depositBankTransactions,
      };

      changeArrayPaymentMethod(debitTransfer);
      changeArrayPaymentMethod(depositTransfer);
    }
  };

  const addElectronicPaymentMethod = (): void => {
    if (useBankType) {
      const bankType = useBankType.data.actions.getById(
        useBankTransactions.states.bankTypePostsId
      );
      if (!bankType) return;
      const currentDate = new Date();
      const formatDate = currentDate.toISOString().split('T')[0];
      const newBankTransactions = {
        bankTypePostsId: useBankTransactions.states.bankTypePostsId,
        type,
        paymentType: useBankTransactions.states.paymentType,
        description: useBankTransactions.states.description,
        amount: useBankTransactions.states.amount,
        change: useBankTransactions.states.change,
        dateTransations: `${formatDate}`,
        nameSend: useBankTransactions.states.nameSend,
      };

      const newPaymentMethods = {
        methodType: 'bank',
        type,
        paymentType: usePaymentMethods.states.paymentType,
        currenciesId: bankType.currenciesId,
        bank: bankType.bankName,
        number: usePaymentMethods.states.number,
        amount: usePaymentMethods.states.amount,
        change: usePaymentMethods.states.change,
        note: usePaymentMethods.states.note,
      };

      const newPayment: GeneralPaymentMethodsAttributes = {
        paymentMethods: newPaymentMethods,
        bankTransactions: newBankTransactions,
      };

      changeArrayPaymentMethod(newPayment);
    }
  };

  const addCreditPaymentMethod = (
    entityId: number,
    siteCurrenciesId: number
  ): void => {
    const newCreditOpening = {
      entityId,
      authorizedLogin: useCreditOpening.states.authorizedLogin,
      authorizedPassword: useCreditOpening.states.authorizedPassword,
      amount: useCreditOpening.states.amount,
    };

    const newType: 'deposit' | 'debit' = 'deposit';

    const newPaymentMethods = {
      methodType: 'credit',
      type: newType,
      paymentType: '',
      currenciesId: siteCurrenciesId,
      bank: '',
      number: '',
      amount: usePaymentMethods.states.amount,
      change: usePaymentMethods.states.change,
      note: '',
    };

    const newPayment: GeneralPaymentMethodsAttributes = {
      paymentMethods: newPaymentMethods,
      creditOpening: newCreditOpening,
    };

    changeArrayPaymentMethod(newPayment);
  };

  const addCreditPaymentPaymentMethod = (
    creditOpeningPostsId: number,
    siteCurrenciesId: number,
    newAmount: number
  ): void => {
    const newCreditPayment = {
      creditOpeningPostsId,
      amount: newAmount,
    };

    const newType: 'deposit' | 'debit' = 'debit';

    const newPaymentMethods = {
      methodType: 'creditPayment',
      type: newType,
      paymentType: 'creditPayment',
      currenciesId: siteCurrenciesId,
      bank: '',
      number: '',
      amount: newAmount,
      change: newAmount,
      note: '',
    };

    const newPayment: GeneralPaymentMethodsAttributes = {
      paymentMethods: newPaymentMethods,
      creditPayment: newCreditPayment,
    };

    changeArrayPaymentMethod(newPayment);
  };

  const addSinglePaymentMethod = (siteCurrenciesId: number): void => {
    const newPaymentMethods = {
      methodType: 'single',
      type,
      paymentType: usePaymentMethods.states.paymentType,
      currenciesId: siteCurrenciesId,
      bank: '',
      number: '',
      amount: usePaymentMethods.states.amount,
      change: usePaymentMethods.states.change,
      note: '',
    };

    const newPayment: GeneralPaymentMethodsAttributes = {
      paymentMethods: newPaymentMethods,
    };

    changeArrayPaymentMethod(newPayment);
  };

  const deletePaymentMethod = (index: number): void => {
    const newArray = [...arrayPaymentMethod];

    if (index >= 0 && index < newArray.length) {
      const updatedArray = [
        ...newArray.slice(0, index),
        ...newArray.slice(index + 1),
      ];

      setArrayPaymentMethod(updatedArray);
    } else {
      console.error('Índice fuera de los límites del array'); // eslint-disable-line no-console
    }
  };

  const emptyPaymentMethodArray = (): void => {
    setArrayPaymentMethod([]);
  };

  const calculateTotalPaymentMethod = (): number => {
    return arrayPaymentMethod.reduce((acc, item) => {
      const newSubTotal = parseFloat(`${item.paymentMethods.change}`);
      return acc + newSubTotal;
    }, 0);
  };

  const calculateTotalCashTransactions = (): number => {
    return arrayPaymentMethod.reduce((acc, item) => {
      if (!item.cashTransactions) return acc;
      const newSubTotal = parseFloat(`${item.cashTransactions.change}`);
      return acc + newSubTotal;
    }, 0);
  };

  const calculateTotalMethods = (): number => {
    const totalCashTransactions = calculateTotalCashTransactions();
    const total = totalCashTransactions;
    return total;
  };

  const calculateTotal = (): void => {
    const newTotalPaymentMethod = calculateTotalPaymentMethod();
    const newTotalMethods = calculateTotalMethods();
    setTotalPaymentMethod(newTotalPaymentMethod);
    setTotalMethods(newTotalMethods);
  };

  const changeCashCurrenciesId = (
    value: SingleValue<{ label: string; value: string }>
  ): void => {
    let newValue;

    if (value?.value) {
      newValue = value.value === '' || value.value === '0' ? '' : value.value;
    } else {
      newValue = '';
    }
    const valid = validationCurrenciesId(newValue);
    if (valid) {
      setCurrenciesId(newValue === '' ? 0 : parseInt(newValue, 10));
      setCurrenciesIdDefault({
        value: newValue,
        label: value?.label ? value.label : 'Selecciona la Moneda',
      });
      useCashTransactions.actions.setCurrenciesId(
        newValue === '' ? 0 : parseInt(newValue, 10)
      );
      usePaymentMethods.actions.setCurrenciesId(
        newValue === '' ? 0 : parseInt(newValue, 10)
      );
    }
  };

  React.useEffect(() => {
    calculateTotal();
  }, [arrayPaymentMethod]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  const states = {
    arrayPaymentMethod,
    totalPaymentMethod,
    totalMethods,
    currenciesId,
    currenciesIdValid,
    currenciesIdDefault,
    currenciesIdOptions,
    change,
    debitAmount,
    depositAmount,
    type,
  };

  const actions = {
    infoReset,
    addCashTransaction,
    emptyPaymentMethodArray,
    deletePaymentMethod,
    validationCurrenciesId,
    changeCashCurrenciesId,
    addTransferCashRegister,
    addTransferBankRegister,
    setChange,
    setDebitAmount,
    setDepositAmount,
    setType,
    partiallyInfoReset,
    addElectronicPaymentMethod,
    addCreditPaymentMethod,
    addSinglePaymentMethod,
    addCreditPaymentPaymentMethod,
  };

  return {
    states,
    actions,
    usePaymentMethods,
    useCashTransactions,
    useBankTransactions,
    useCreditOpening,
    pages,
  };
}
