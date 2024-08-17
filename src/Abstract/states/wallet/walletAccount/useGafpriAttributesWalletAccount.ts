import { useState } from 'react';
import { SingleValue } from 'react-select';
import { UseCurrenciesReturn, UserAttributes } from '../../../../states';
import { SelectDefault } from '../../../../helpers';
import {
  generalValidationName,
  generalValidationButtonNext,
  generalValidationSelectCurrencies,
  generalValidationStatus,
} from '../../../../Validations';
import {
  generalChangeName,
  generalChangeCurrency,
  generalChangeStatus,
} from '../../../../Changes';

type State = {
  userId: number;
  userIdValid: boolean;
  user: UserAttributes | null;
  name: string;
  nameValid: boolean;
  currency: string;
  currencyValid: boolean;
  currencyDefault: SelectDefault;
  currencyOptions: { value: string; label: string }[];
  status: string;
  statusValid: boolean;
  statusDefault: SelectDefault;
  statusOptions: { value: string; label: string }[];
  currentId: number;
};

type Actions = {
  infoReset: () => void;
  validationName: (value: string) => boolean;
  validationUserId: (value: number) => boolean;
  validationCurrency: (value: string) => boolean;
  validationStatus: (value: string) => boolean;
  validationButtonNext: () => void;
  setUser: (value: UserAttributes | null) => void;
  changeCurrency: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  changeName: (value: string) => void;
  changeStatus: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  setCurrentId: (value: number) => void;
  changeUserId: (value: number) => void;
};

export type UseGafpriAttributesWalletAccountReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriAttributesWalletAccountProps = {
  useCurrencies: UseCurrenciesReturn;
};

export function useGafpriAttributesWalletAccount({
  useCurrencies,
}: UseGafpriAttributesWalletAccountProps): UseGafpriAttributesWalletAccountReturn {
  const [userId, setUserId] = useState(0);
  const [userIdValid, setUserIdValid] = useState(false);
  const [user, setUser] = useState<UserAttributes | null>(null);

  const [currency, setCurrency] = useState('');
  const [currencyValid, setCurrencyValid] = useState(false);
  const [currencyDefault, setCurrencyDefault] = useState<SelectDefault>({
    value: '',
    label: 'Elija moneda',
  });
  const currencyOptions =
    useCurrencies.states.currencies.data?.items?.map((item) => {
      return { value: `${item.id}`, label: item.name };
    }) || [];

  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [status, setStatus] = useState('');
  const [statusValid, setStatusValid] = useState(false);
  const [statusDefault, setStatusDefault] = useState<SelectDefault>({
    value: '',
    label: 'Elija el status',
  });
  const statusOptions = [
    { value: 'active', label: 'Activa' },
    { value: 'inactive', label: 'Inactiva' },
  ];

  const [currentId, setCurrentId] = useState(0);

  const infoReset = (): void => {
    setUserId(0);
    setUserIdValid(false);
    setUser(null);
    setName('');
    setNameValid(false);
    setCurrency('');
    setCurrencyValid(false);
    setCurrencyDefault({ value: '', label: 'Elija moneda' });
    setStatus('');
    setStatusValid(false);
    setStatusDefault({ value: '', label: 'Elija el status' });
    setCurrentId(0);
  };

  // Funciones de Validacion
  const validationUserId = (value: number): boolean => {
    const valid = value > 0;
    if (valid !== userIdValid) {
      setUserIdValid(valid);
    }
    return valid;
  };

  const validationCurrency = (value: string): boolean => {
    return generalValidationSelectCurrencies({
      value,
      setValid: setCurrencyValid,
      currentValid: currencyValid,
    });
  };

  const validationName = (value: string): boolean => {
    return generalValidationName({
      value,
      setValid: setNameValid,
      currentValid: nameValid,
    });
  };

  const validationStatus = (value: string): boolean => {
    return generalValidationStatus({
      value,
      setValid: setStatusValid,
      currentValid: statusValid,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [userIdValid, nameValid, currencyValid, statusValid],
    });
  };

  // Funciones de cambios
  const changeUserId = (value: number): void => {
    const valid = validationUserId(value);
    if (valid) {
      setUserId(value);
    }
  };

  const changeCurrency = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeCurrency({
      options,
      validation: validationCurrency,
      setDefault: setCurrencyDefault,
      setValue: setCurrency,
    });
  };

  const changeName = (value: string): void => {
    generalChangeName({
      value,
      validation: validationName,
      setValue: setName,
    });
  };

  const changeStatus = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeStatus({
      options,
      validation: validationStatus,
      setDefault: setStatusDefault,
      setValue: setStatus,
    });
  };

  /**
   * Export
   *
   *
   */
  const states = {
    userId,
    userIdValid,
    user,
    name,
    nameValid,
    currency,
    currencyValid,
    currencyDefault,
    currencyOptions,
    status,
    statusValid,
    statusDefault,
    statusOptions,
    currentId,
  };

  const actions = {
    infoReset,
    validationName,
    validationUserId,
    validationCurrency,
    validationStatus,
    validationButtonNext,
    changeUserId,
    setUser,
    changeCurrency,
    changeName,
    changeStatus,
    setCurrentId,
  };

  return {
    states,
    actions,
  };
}
