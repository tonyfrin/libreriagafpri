import { useState } from 'react';
import { SingleValue } from 'react-select';
import { UseGafpriSitesReturn, UseCurrenciesReturn } from '../../../states';
import { SelectDefault } from '../../../helpers';
import {
  generalValidationName,
  generalValidationButtonNext,
  generalValidationSelectSite,
  generalValidationBankName,
  GeneralAttribute,
  generalValidationAccountNumber,
  generalValidationSelectAccountType,
  generalValidationSelectCurrencies,
  generalValidationBankSettings,
} from '../../../Validations';
import {
  generalChangeName,
  generalChangeSite,
  generalChangeBankName,
  generalChangeAccountNumber,
  generalChangeAccountType,
  generalChangeCurrency,
  generalChangeSettings,
} from '../../../Changes';

type State = {
  sitesId: string;
  sitesIdValid: boolean;
  sitesIdDefault: SelectDefault;
  sitesIdOptions: SelectDefault[];
  name: string;
  nameValid: boolean;
  bankName: string;
  bankNameValid: boolean;
  account: string;
  accountValid: boolean;
  accountType: string;
  accountTypeValid: boolean;
  accountTypeDefault: SelectDefault;
  accountTypeOptions: SelectDefault[];
  currency: string;
  currencyValid: boolean;
  currencyDefault: SelectDefault;
  currencyOptions: SelectDefault[];
  settings: GeneralAttribute[];
  settingsValid: boolean;
  valueSettings: string;
  descriptionSettings: string;
  currentId: number;
};

type Actions = {
  infoReset: () => void;
  validationName: (value: string) => boolean;
  validationSite: (value: string) => boolean;
  validationBankName: (value: string) => boolean;
  validationAccount: (value: string) => boolean;
  validationAccountType: (value: string) => boolean;
  validationCurrency: (value: string) => boolean;
  validationSettings: (value: GeneralAttribute[]) => boolean;
  validationButtonNext: () => void;
  changeSitesId: (
    options: SingleValue<{ label: string; value: string }>
  ) => void;
  changeName: (value: string) => void;
  changeBankName: (value: string) => void;
  changeAccount: (value: string) => void;
  changeAccountType: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  changeCurrency: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  changeSettings: (value: GeneralAttribute) => void;
  setCurrentId: (value: number) => void;
  setSettings: (value: GeneralAttribute[]) => void;
  setValueSettings: (value: string) => void;
  setDescriptionSettings: (value: string) => void;
  addSettings: () => void;
  onRemoveSettings: (value: string) => void;
};

export type UseGafpriAttributesBankTypeReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriAttributesBankTypeProps = {
  useSites: UseGafpriSitesReturn;
  useCurrencies: UseCurrenciesReturn;
};

export function useGafpriAttributesBankType({
  useCurrencies,
  useSites,
}: UseGafpriAttributesBankTypeProps): UseGafpriAttributesBankTypeReturn {
  const [sitesId, setSitesId] = useState('');
  const [sitesIdValid, setSitesIdValid] = useState(false);
  const [sitesIdDefault, setSitesIdDefault] = useState<SelectDefault>({
    value: '',
    label: 'Elija sucursal',
  });
  const sitesIdOptions =
    useSites.data.states.sites?.map((item) => {
      return { value: `${item.id}`, label: item.name };
    }) || [];

  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [bankName, setBankName] = useState('');
  const [bankNameValid, setBankNameValid] = useState(false);

  const [account, setAccount] = useState('');
  const [accountValid, setAccountValid] = useState(false);

  const [accountType, setAccountType] = useState('');
  const [accountTypeValid, setAccountTypeValid] = useState(false);
  const [accountTypeDefault, setAccountTypeDefault] = useState<SelectDefault>({
    value: '',
    label: 'Elija tipo de cuenta',
  });
  const accountTypeOptions = [
    { value: 'savings', label: 'Ahorro' },
    { value: 'chekings', label: 'Corriente' },
  ];

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

  const [settings, setSettings] = useState<GeneralAttribute[]>([]);
  const [settingsValid, setSettingsValid] = useState(true);
  const [valueSettings, setValueSettings] = useState('');
  const [descriptionSettings, setDescriptionSettings] = useState('');

  const [currentId, setCurrentId] = useState(0);

  const infoReset = (): void => {
    setSitesId('');
    setSitesIdValid(false);
    setSitesIdDefault({ value: '', label: 'Elija sucursal' });
    setName('');
    setNameValid(false);
    setBankName('');
    setBankNameValid(false);
    setAccount('');
    setAccountValid(false);
    setAccountType('');
    setAccountTypeValid(false);
    setAccountTypeDefault({ value: '', label: 'Elija tipo de cuenta' });
    setCurrency('');
    setCurrencyValid(false);
    setCurrencyDefault({ value: '', label: 'Elija moneda' });
    setSettings([]);
    setSettingsValid(true);
    setValueSettings('');
    setDescriptionSettings('');
    setCurrentId(0);
  };

  // Funciones de Validacion
  const validationSite = (value: string): boolean => {
    return generalValidationSelectSite({
      value,
      setValid: setSitesIdValid,
      currentValid: sitesIdValid,
    });
  };

  const validationName = (value: string): boolean => {
    return generalValidationName({
      value,
      setValid: setNameValid,
      currentValid: nameValid,
    });
  };

  const validationBankName = (value: string): boolean => {
    return generalValidationBankName({
      value,
      setValid: setBankNameValid,
      currentValid: bankNameValid,
    });
  };

  const validationAccount = (value: string): boolean => {
    return generalValidationAccountNumber({
      value,
      setValid: setAccountValid,
      currentValid: accountValid,
    });
  };

  const validationAccountType = (value: string): boolean => {
    return generalValidationSelectAccountType({
      value,
      setValid: setAccountTypeValid,
      currentValid: accountTypeValid,
    });
  };

  const validationCurrency = (value: string): boolean => {
    return generalValidationSelectCurrencies({
      value,
      setValid: setCurrencyValid,
      currentValid: currencyValid,
    });
  };

  const validationSettings = (value: GeneralAttribute[]): boolean => {
    return generalValidationBankSettings({
      value,
      setValid: setSettingsValid,
      currentValid: settingsValid,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [
        sitesIdValid,
        nameValid,
        bankNameValid,
        accountValid,
        accountTypeValid,
        currencyValid,
        settingsValid,
      ],
    });
  };

  // Funciones de cambios
  const changeSitesId = (
    options: SingleValue<{ label: string; value: string }>
  ): void => {
    generalChangeSite({
      options,
      validation: validationSite,
      setValue: setSitesId,
      setDefault: setSitesIdDefault,
    });
  };

  const changeName = (value: string): void => {
    generalChangeName({
      value,
      validation: validationName,
      setValue: setName,
    });
  };

  const changeBankName = (value: string): void => {
    generalChangeBankName({
      value,
      validation: validationBankName,
      setValue: setBankName,
    });
  };

  const changeAccount = (value: string): void => {
    generalChangeAccountNumber({
      value,
      validation: validationAccount,
      setValue: setAccount,
    });
  };

  const changeAccountType = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeAccountType({
      options,
      validation: validationAccountType,
      setValue: setAccountType,
      setDefault: setAccountTypeDefault,
    });
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

  const changeSettings = (value: GeneralAttribute): void => {
    generalChangeSettings({
      newValue: value,
      selectedOptions: settings,
      validation: validationSettings,
      setValue: setSettings,
    });
  };

  const addSettings = (): void => {
    if (valueSettings && descriptionSettings) {
      const newAttributes: GeneralAttribute = {
        name: valueSettings,
        value: descriptionSettings,
      };
      setValueSettings('');
      setDescriptionSettings('');
      changeSettings(newAttributes);
    }
  };

  const onRemoveSettings = (value: string): void => {
    const updatedAttributes = settings.filter(
      (attribute) => attribute.name !== value
    );
    setSettings(updatedAttributes);
  };

  /**
   * Export
   *
   *
   */
  const states = {
    sitesId,
    sitesIdValid,
    sitesIdDefault,
    sitesIdOptions,
    name,
    nameValid,
    bankName,
    bankNameValid,
    account,
    accountValid,
    accountType,
    accountTypeValid,
    accountTypeDefault,
    accountTypeOptions,
    currency,
    currencyValid,
    currencyDefault,
    currencyOptions,
    settings,
    settingsValid,
    valueSettings,
    descriptionSettings,
    currentId,
  };

  const actions = {
    infoReset,
    validationName,
    validationSite,
    validationBankName,
    validationAccount,
    validationAccountType,
    validationCurrency,
    validationSettings,
    validationButtonNext,
    changeSitesId,
    changeName,
    changeBankName,
    changeAccount,
    changeAccountType,
    changeCurrency,
    changeSettings,
    setCurrentId,
    setSettings,
    setValueSettings,
    setDescriptionSettings,
    addSettings,
    onRemoveSettings,
  };

  return {
    states,
    actions,
  };
}
