import React, { useState } from 'react';
import { SingleValue } from 'react-select';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
  SelectDefault,
} from '../helpers';
import {
  getLastEntryDateAndCount,
  changeSelect,
  gafpriFetch,
  scrollToTop,
} from '../helpers';
import {
  Countries,
  SITES_ROUTE,
  SITES_STORAGE,
  CITY_DEFAULT,
  STATE_COUNTRY_DEFAULT,
  COUNTRY_DEFAULT,
} from '../constants';
import { getItem, saveItem } from '../Context';
import type { UseCurrenciesReturn } from './useGafpriCurrencies';
import type { UseErrorReturn } from './useGafpriError';
import {
  generalValidationAddress1,
  generalValidationAddress2,
  generalValidationButtonNext,
  generalValidationEmail,
  generalValidationName,
  generalValidationPhone,
  generalValidationPostCode,
  generalValidationSelectCity,
  generalValidationSelectCountry,
  generalValidationSelectCurrencies,
  generalValidationSelectCurrenciesDecimalNumbers,
  generalValidationSelectCurrenciesLocations,
  generalValidationSelectCurrenciesSeparator,
  generalValidationSelectStateCountry,
  generalValidationSelectTaxes,
  generalValidationTypeDocumentIdDigit,
  generalValidationTypeDocumentIdIndex,
  generalValidationWebSite,
} from '../Validations';
import {
  generalChangeAddress,
  generalChangeCityOptions,
  generalChangeCityStateCountry,
  generalChangeDocumentIdDigit,
  generalChangeDocumentIdIndex,
  generalChangeEmail,
  generalChangeName,
  generalChangePostCode,
  generalChangeStateCountryOptions,
  generalChangePhone,
  generalChangeCurrenciesId,
  generalChangeType,
  generalChangeCurrenciesDecimalNumbers,
  generalChangeTaxes,
  generalChangeWebSite,
} from '../Changes';

type DeletedSite = {
  itemId: number;
};

export interface SitesAttributes {
  id: number;
  name: string;
  documentIndex: string;
  documentNumber: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postCode: string;
  country: string;
  email: string;
  phone: string;
  currenciesId: number;
  currencyLocation: string;
  thousandsSeparator: string;
  decimalSeparator: string;
  decimalNumbers: number;
  taxes: boolean;
  host: string;
  createdAt: Date;
  modifiedAt: Date;
}

interface SitesData {
  data: {
    items: SitesAttributes[] | [] | null;
  };
}

export type UseSitesReturn = {
  states: {
    isReady: boolean;
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;

    name: string;
    nameValid: boolean;

    documentIndex: string;
    documentIndexValid: boolean;
    documentIndexDefault: SelectDefault;
    documentIndexOptions: SelectDefault[];

    documentNumber: string;
    documentNumberValid: boolean;

    address1: string;
    address1Valid: boolean;

    address2: string;
    address2Valid: boolean;

    city: string;
    cityValid: boolean;
    cityDefault: SelectDefault;
    cityOptions: SelectDefault[];

    state: string;
    stateCountryValid: boolean;
    stateCountryDefault: SelectDefault;
    stateCountryOptions: SelectDefault[];

    country: string;
    countryValid: boolean;
    countryDefault: SelectDefault;
    countryOptions: SelectDefault[];

    postCode: string;
    postCodeValid: boolean;

    email: string;
    emailValid: boolean;

    phone: string;
    phoneValid: boolean;

    currenciesId: number;
    currenciesIdValid: boolean;
    currenciesIdDefault: SelectDefault;
    currenciesIdOptions: SelectDefault[];

    currencyLocation: string;
    currencyLocationValid: boolean;
    currencyLocationDefault: SelectDefault;
    currencyLocationOptions: SelectDefault[];

    thousandsSeparator: string;
    decimalSeparator: string;
    separatorValid: boolean;
    separatorDefault: SelectDefault;
    separatorOptions: SelectDefault[];

    decimalNumbers: number;
    decimalNumbersValid: boolean;
    decimalNumbersDefault: SelectDefault;
    decimalNumbersOptions: SelectDefault[];

    taxes: boolean;
    taxesValid: boolean;
    taxesDefault: SelectDefault;
    taxesOptions: SelectDefault[];

    host: string;
    hostValid: boolean;

    sites: SitesData;
    error: string[];
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;
    siteId: number;
  };
  actions: {
    onFetching: () => void;
    onInit: () => void;
    returnInit: () => void;
    onAdd: () => void;
    goAdd: () => void;
    onUpdate: () => void;
    changeName: (name: string) => void;
    changeDocumentIndex: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeDocumentNumber: (documentNumber: string) => void;
    changeAddress1: (address1: string) => void;
    changeAddress2: (address2: string) => void;
    changeCity: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeCityOptions: () => void;
    changeStateCountry: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    setStateCountryDefault: (options: SelectDefault) => void;
    setStateCountry: (value: string) => void;
    changeStateCountryOptions: () => void;
    changeCountry: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    setCountryDefault: (options: SelectDefault) => void;
    setCountry: (value: string) => void;
    changePostCode: (postCode: string) => void;
    changeEmail: (email: string) => void;
    changePhone: (phone: string) => void;
    changeCurrenciesId: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeCurrencyLocation: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeSeparator: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeDecimalNumbers: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeTaxes: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeHost: (host: string) => void;
    validationButtonNext: () => void;
    setIsReady: (value: boolean) => void;
    update: () => void;

    offSites: () => void;
    add: () => void;
    getById: (id: number) => SitesAttributes | null;
    getMainSite: () => SitesAttributes | null;
    goUpdate: (id: number) => void;
    sortByName: (
      items: SitesAttributes[] | null,
      order: 'asc' | 'desc'
    ) => SitesAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterByName: (search: string) => SitesAttributes[] | null;
    setCurrentPage: (value: number) => void;
    getPaginated: (
      items: SitesAttributes[] | null,
      page: number,
      itemsPerPage: number
    ) => SitesAttributes[] | null;
    deleteSites: (id: number) => void;
    handleNewSite: (newItem: SitesAttributes) => void;
    handleDeletedSite: (value: DeletedSite) => void;
    handleUpdatedSite: (itemUpdate: SitesAttributes) => void;

    validationName: (value: string) => boolean;
    validationDocumentIndex: (value: string) => boolean;
    validationDocumentNumber: (value: string) => boolean;
    validationAddress1: (value: string) => boolean;
    validationAddress2: (value: string) => boolean;
    validationCity: (value: string) => boolean;
    validationStateCountry: (value: string) => boolean;
    validationCountry: (value: string) => boolean;

    validationPostCode: (value: string) => boolean;
    validationEmail: (value: string) => boolean;
    validationPhone: (value: string) => boolean;
    validationCurrenciesId: (value: string) => boolean;
    validationCurrencyLocation: (value: string) => boolean;
    validationSeparator: (value: string) => boolean;
    validationDecimalNumbers: (value: string) => boolean;
    validationTaxes: (value: string) => boolean;
    validationHost: (value: string) => boolean;
  };
};

export type UseSitesProps = {
  useCurrencies: UseCurrenciesReturn;
  token: string | null;
  useError: UseErrorReturn;
};

export const useGafpriSites = ({
  useCurrencies,
  token,
  useError,
}: UseSitesProps): UseSitesReturn => {
  // Define los estados necesarios para los atributos de Site
  const [isReady, setIsReady] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isReset, setIsReset] = useState(true);

  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [documentIndex, setDocumentIndex] = useState('');
  const [documentIndexValid, setDocumentIndexValid] = useState(false);
  const [documentIndexDefault, setDocumentIndexDefault] =
    useState<SelectDefault>({ value: '', label: 'Elija el tipo de Documento' });
  const documentIndexOptions = [
    { label: 'J', value: 'J' },
    { label: 'V', value: 'V' },
    { label: 'G', value: 'G' },
    { label: 'No Aplica', value: 'null' },
  ];

  const [documentNumber, setDocumentNumber] = useState('');
  const [documentNumberValid, setDocumentNumberValid] = useState(false);

  const [address1, setAddress1] = useState('');
  const [address1Valid, setAddress1Valid] = useState(false);

  const [address2, setAddress2] = useState('');
  const [address2Valid, setAddress2Valid] = useState(true);

  const [city, setCity] = useState(CITY_DEFAULT.value);
  const [cityValid, setCityValid] = useState(true);
  const [cityDefault, setCityDefault] = useState<SelectDefault>(CITY_DEFAULT);
  const [cityOptions, setCityOptions] = useState<SelectDefault[]>([]);

  const [state, setStateCountry] = useState(STATE_COUNTRY_DEFAULT.value);
  const [stateCountryValid, setStateCountryValid] = useState(true);
  const [stateCountryDefault, setStateCountryDefault] = useState<SelectDefault>(
    STATE_COUNTRY_DEFAULT
  );
  const [stateCountryOptions, setStateCountryOptions] = useState<
    SelectDefault[]
  >([]);

  const [country, setCountry] = useState(COUNTRY_DEFAULT.value);
  const [countryValid, setCountryValid] = useState(true);
  const [countryDefault, setCountryDefault] =
    useState<SelectDefault>(COUNTRY_DEFAULT);
  const countryOptions: SelectDefault[] = [];

  Countries.forEach((item) => {
    Object.keys(item).forEach((key) => {
      countryOptions.push({ value: key, label: item[key] });
    });
  });

  const [postCode, setPostCode] = useState('');
  const [postCodeValid, setPostCodeValid] = useState(true);

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const [phone, setPhone] = useState('');
  const [phoneValid, setPhoneValid] = useState(false);

  const [currenciesId, setCurrenciesId] = useState(0);
  const [currenciesIdValid, setCurrenciesIdValid] = useState(false);
  const [currenciesIdDefault, setCurrenciesIdDefault] = useState<SelectDefault>(
    { value: '', label: 'Elija la moneda del Sitio' }
  );

  const currenciesIdOptions: SelectDefault[] =
    useCurrencies.states.currencies.data.items?.map((item) => {
      return { label: `${item.name} ${item.symbol}`, value: `${item.id}` };
    }) || [];

  const [currencyLocation, setCurrencyLocation] = useState('');
  const [currencyLocationValid, setCurrencyLocationValid] = useState(false);
  const [currencyLocationDefault, setCurrencyLocationDefault] =
    useState<SelectDefault>({
      value: '',
      label: 'Elija la ubicación del símbolo de la moneda',
    });
  const currencyLocationOptions: SelectDefault[] = [
    { label: 'Izquierda', value: 'left' },
    { label: 'Derecha', value: 'right' },
  ];

  const [thousandsSeparator, setThousandsSeparator] = useState('');
  const [decimalSeparator, setDecimalSeparator] = useState('');
  const [separatorValid, setSeparatorValid] = useState(false);
  const [separatorDefault, setSeparatorDefault] = useState<SelectDefault>({
    value: '',
    label: 'Selecciona los separadores de la moneda',
  });
  const separatorOptions = [
    { label: 'Miles: " . "    Decimal: " , "', value: '.' },
    { label: 'Miles: " , "    Decimal: " . "', value: ',' },
  ];

  const setSeparator = (value: string): void => {
    if (value === '.') {
      setThousandsSeparator('.');
      setDecimalSeparator(',');
    } else if (value === ',') {
      setThousandsSeparator(',');
      setDecimalSeparator('.');
    }
  };

  const [decimalNumbers, setDecimalNumbers] = useState(0);
  const [decimalNumbersValid, setDecimalNumbersValid] = useState(false);
  const [decimalNumbersDefault, setDecimalNumbersDefault] =
    useState<SelectDefault>({
      value: '',
      label: 'Selecciona el número de decimales',
    });
  const decimalNumbersOptions: SelectDefault[] = [
    { label: '0', value: '0' },
    { label: '2', value: '2' },
  ];

  const [taxes, setTaxes] = useState(false);
  const [taxesValid, setTaxesValid] = useState(false);
  const [taxesDefault, setTaxesDefault] = useState<SelectDefault>({
    value: '',
    label: 'Selecciona la opción para los impuestos',
  });
  const taxesOptions: SelectDefault[] = [
    { label: 'Si trabaja con impuestos', value: 'true' },
    { label: 'No trabaja con impuestos', value: 'false' },
  ];

  const [host, setHost] = useState('');
  const [hostValid, setHostValid] = useState(false);

  const [sites, setSites] = useState<SitesData>({
    data: {
      items: getItem(SITES_STORAGE, null),
    },
  });
  const { error } = useError.states;

  const [siteId, setSiteId] = useState(0);
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const infoReset = (): void => {
    setIsReset(true);
    setName('');
    setNameValid(false);

    setDocumentIndex('');
    setDocumentIndexValid(false);
    setDocumentIndexDefault({ value: '', label: 'Elija el tipo de Documento' });

    setDocumentNumber('');
    setDocumentNumberValid(false);

    setAddress1('');
    setAddress1Valid(false);

    setAddress2('');
    setAddress2Valid(true);

    setCity(CITY_DEFAULT.value);
    setCityValid(true);
    setCityDefault(CITY_DEFAULT);

    setStateCountry(STATE_COUNTRY_DEFAULT.value);
    setStateCountryValid(false);
    setStateCountryDefault(STATE_COUNTRY_DEFAULT);

    setCountry(COUNTRY_DEFAULT.value);
    setCountryValid(true);
    setCountryDefault(COUNTRY_DEFAULT);

    setPostCode('');
    setPostCodeValid(true);

    setEmail('');
    setEmailValid(false);

    setPhone('');
    setPhoneValid(false);

    setCurrenciesId(0);
    setCurrenciesIdValid(false);
    setCurrenciesIdDefault({ value: '', label: 'Elija la moneda del Sitio' });

    setCurrencyLocation('');
    setCurrencyLocationValid(false);
    setCurrencyLocationDefault({
      value: '',
      label: 'Elija la ubicación del símbolo de la moneda',
    });

    setThousandsSeparator('');
    setDecimalSeparator('');
    setSeparatorValid(false);
    setSeparatorDefault({
      value: '',
      label: 'Selecciona los separadores de la moneda',
    });

    setDecimalNumbers(0);
    setDecimalNumbersValid(false);
    setDecimalNumbersDefault({
      value: '',
      label: 'Selecciona el número de decimales',
    });

    setTaxes(false);
    setTaxesValid(false);
    setTaxesDefault({
      value: '',
      label: 'Selecciona la opción para los impuestos',
    });

    setHost('');
    setHostValid(false);

    useError.actions.changeError([]);
  };

  // Funciones de paginas
  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    scrollToTop();
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    scrollToTop();
  };

  const onAdd = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    scrollToTop();
  };

  const onUpdate = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    scrollToTop();
  };

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  const goUpdate = (id: number): void => {
    infoReset();
    setSiteId(id);
    onUpdate();
  };

  const goAdd = (): void => {
    infoReset();
    onAdd();
  };

  // Funciones de Validacion
  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [
        nameValid,
        documentIndexValid,
        documentNumberValid,
        address1Valid,
        address2Valid,
        cityValid,
        stateCountryValid,
        postCodeValid,
        countryValid,
        emailValid,
        phoneValid,
        currenciesIdValid,
        currencyLocationValid,
        separatorValid,
        decimalNumbersValid,
        taxesValid,
        hostValid,
      ],
    });
  };

  const validationName = (value: string): boolean => {
    return generalValidationName({
      value,
      setValid: setNameValid,
      currentValid: nameValid,
    });
  };

  const validationDocumentIndex = (value: string): boolean => {
    return generalValidationTypeDocumentIdIndex({
      value,
      setValid: setDocumentIndexValid,
      currentValid: documentIndexValid,
    });
  };

  const validationDocumentNumber = (value: string): boolean => {
    return generalValidationTypeDocumentIdDigit({
      value,
      setValid: setDocumentNumberValid,
      currentValid: documentNumberValid,
    });
  };

  const validationAddress1 = (value: string): boolean => {
    return generalValidationAddress1({
      value,
      setValid: setAddress1Valid,
      currentValid: address1Valid,
    });
  };

  const validationAddress2 = (value: string): boolean => {
    return generalValidationAddress2({
      value,
      setValid: setAddress2Valid,
      currentValid: address2Valid,
    });
  };

  const validationCity = (value: string): boolean => {
    return generalValidationSelectCity({
      value,
      setValid: setCityValid,
      currentValid: cityValid,
    });
  };

  const validationStateCountry = (value: string): boolean => {
    return generalValidationSelectStateCountry({
      value,
      setValid: setStateCountryValid,
      currentValid: stateCountryValid,
    });
  };

  const validationCountry = (value: string): boolean => {
    return generalValidationSelectCountry({
      value,
      setValid: setCountryValid,
      currentValid: countryValid,
    });
  };

  const validationPostCode = (value: string): boolean => {
    return generalValidationPostCode({
      value,
      setValid: setPostCodeValid,
      currentValid: postCodeValid,
    });
  };

  const validationEmail = (value: string): boolean => {
    return generalValidationEmail({
      value,
      setValid: setEmailValid,
      currentValid: emailValid,
    });
  };

  const validationPhone = (value: string): boolean => {
    return generalValidationPhone({
      value,
      setValid: setPhoneValid,
      currentValid: phoneValid,
    });
  };

  const validationCurrenciesId = (value: string): boolean => {
    return generalValidationSelectCurrencies({
      value,
      setValid: setCurrenciesIdValid,
      currentValid: currenciesIdValid,
    });
  };

  const validationCurrencyLocation = (value: string): boolean => {
    return generalValidationSelectCurrenciesLocations({
      value,
      setValid: setCurrencyLocationValid,
      currentValid: currencyLocationValid,
    });
  };

  const validationSeparator = (value: string): boolean => {
    return generalValidationSelectCurrenciesSeparator({
      value,
      setValid: setSeparatorValid,
      currentValid: separatorValid,
    });
  };

  const validationDecimalNumbers = (value: string): boolean => {
    return generalValidationSelectCurrenciesDecimalNumbers({
      value,
      setValid: setDecimalNumbersValid,
      currentValid: decimalNumbersValid,
    });
  };

  const validationTaxes = (value: string): boolean => {
    return generalValidationSelectTaxes({
      value,
      setValid: setTaxesValid,
      currentValid: taxesValid,
    });
  };

  const validationHost = (value: string): boolean => {
    return generalValidationWebSite({
      newValue: value,
      setValid: setHostValid,
      currentValid: hostValid,
    });
  };

  // Funciones de cambios
  const changeName = (value: string): void => {
    generalChangeName({
      value,
      validation: validationName,
      setValue: setName,
    });
  };

  const changeDocumentIndex = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeDocumentIdIndex({
      options,
      validation: validationDocumentIndex,
      setDefault: setDocumentIndexDefault,
      setValue: setDocumentIndex,
    });
  };

  const changeDocumentNumber = (newDocument: string): void => {
    generalChangeDocumentIdDigit({
      value: newDocument,
      validation: validationDocumentNumber,
      setValue: setDocumentNumber,
    });
  };

  const changeAddress1 = (value: string): void => {
    generalChangeAddress({
      value,
      validation: validationAddress1,
      setValue: setAddress1,
    });
  };

  const changeAddress2 = (value: string): void => {
    generalChangeAddress({
      value,
      validation: validationAddress2,
      setValue: setAddress2,
    });
  };

  const changeCity = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeCityStateCountry({
      options,
      validation: validationCity,
      setDefault: setCityDefault,
      setValue: setCity,
      setIsReset,
    });
  };

  const changeCityOptions = React.useCallback((): void => {
    generalChangeCityOptions({
      country,
      state,
      setCityDefault,
      setCity,
      setCityOptions,
      isReset,
    });
  }, [country, state]); // eslint-disable-line react-hooks/exhaustive-deps

  const changeStateCountry = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeCityStateCountry({
      options,
      validation: validationStateCountry,
      setDefault: setStateCountryDefault,
      setValue: setStateCountry,
      setIsReset,
    });
  };

  const changeStateCountryOptions = React.useCallback((): void => {
    generalChangeStateCountryOptions({
      country,
      setStateCountryDefault,
      setStateCountry,
      setStateCountryOptions,
      isReset,
    });
  }, [country]); // eslint-disable-line react-hooks/exhaustive-deps

  const changeCountry = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeCityStateCountry({
      options,
      validation: validationCountry,
      setDefault: setCountryDefault,
      setValue: setCountry,
      setIsReset,
    });
  };

  const changePostCode = (newPostCode: string): void => {
    generalChangePostCode({
      value: newPostCode,
      validation: validationPostCode,
      setValue: setPostCode,
    });
  };

  const changeEmail = (inputValue: string): void => {
    generalChangeEmail({
      value: inputValue,
      validation: validationEmail,
      setValue: setEmail,
    });
  };

  const changePhone = (newPhone: string): void => {
    return generalChangePhone({
      value: newPhone,
      validation: validationPhone,
      setValue: setPhone,
    });
  };

  const changeCurrenciesId = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeCurrenciesId({
      options,
      validation: validationCurrenciesId,
      setDefault: setCurrenciesIdDefault,
      setValue: setCurrenciesId,
    });
    const value = options ? parseInt(options.value, 10) : 0;
    const label = options?.label || '';
    const newOptions = { value, label };
    changeSelect({
      newValue: newOptions,
      validation: validationCurrenciesId,
      setDefault: setCurrenciesIdDefault,
      setValue: setCurrenciesId,
    });
  };

  const changeCurrencyLocation = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeType({
      options,
      validation: validationCurrencyLocation,
      setDefault: setCurrencyLocationDefault,
      setValue: setCurrencyLocation,
    });
  };

  const changeSeparator = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeType({
      options,
      validation: validationSeparator,
      setDefault: setSeparatorDefault,
      setValue: setSeparator,
    });
  };

  const changeDecimalNumbers = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeCurrenciesDecimalNumbers({
      options,
      validation: validationDecimalNumbers,
      setDefault: setDecimalNumbersDefault,
      setValue: setDecimalNumbers,
    });
  };

  const changeTaxes = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeTaxes({
      options,
      validation: validationTaxes,
      setDefault: setTaxesDefault,
      setValue: setTaxes,
    });
  };

  const changeHost = (value: string): void => {
    generalChangeWebSite({
      value,
      validation: validationHost,
      setValue: setHost,
    });
  };

  // Manejo de la data en DB
  const getLastItem: SitesAttributes | null = sites.data?.items
    ? sites.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: SitesData): void => {
    saveItem(SITES_STORAGE, newData.data.items);
  };

  const setData = (newData: SitesData): void => {
    setSites(newData);
    setDataStorage(newData);
  };

  const onSites = (newData: SitesData): void => {
    setData(newData);
    onIsReady();
  };

  const offSites = (): void => {
    setData({
      data: {
        items: null,
      },
    });
    notReady();
  };

  const getSites = async (): Promise<void> => {
    const lastEntryDateAndCount = await getLastEntryDateAndCount(SITES_ROUTE);
    const lastDate = getLastItem?.modifiedAt || null;
    const count = sites.data.items?.length || 0;

    if (
      sites.data.items === null ||
      `${lastEntryDateAndCount?.date}` !== `${lastDate}` ||
      `${lastEntryDateAndCount?.count}` !== `${count}`
    ) {
      if (token) {
        gafpriFetch({
          initMethod: 'GET',
          initRoute: SITES_ROUTE,
          initToken: { token },
          functionFetching: notReady,
          functionSuccess: onSites,
        });
      } else {
        notReady();
      }
    } else {
      onIsReady();
    }
  };

  const handleNewSite = (newItem: SitesAttributes): void => {
    setSites((prevState) => {
      const newData = {
        data: {
          items: [...(prevState.data.items || []), newItem],
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleUpdatedSite = (itemUpdate: SitesAttributes): void => {
    setSites((prevState) => {
      const updatedItems =
        prevState.data.items?.map((item) =>
          item.id === itemUpdate.id ? itemUpdate : item
        ) || [];
      const newData = {
        data: {
          items: updatedItems,
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleDeletedSite = ({ itemId }: DeletedSite): void => {
    setSites((prevState) => {
      const filteredItems =
        prevState.data.items?.filter((item) => `${item.id}` !== `${itemId}`) ||
        [];

      const newData = {
        data: {
          items: filteredItems,
        },
      };

      setDataStorage(newData);
      return newData;
    });
  };

  const returnInit = (): void => {
    infoReset();
    onInit();
  };

  const newError = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: onAdd,
    });
  };

  const newErrorUpdate = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: onUpdate,
    });
  };

  const newErrorDelete = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: onInit,
    });
  };

  const add = (): void => {
    if (
      nameValid &&
      documentIndexValid &&
      documentNumberValid &&
      address1Valid &&
      address2Valid &&
      cityValid &&
      stateCountryValid &&
      postCodeValid &&
      countryValid &&
      emailValid &&
      phoneValid &&
      currenciesIdValid &&
      currencyLocationValid &&
      separatorValid &&
      decimalNumbersValid &&
      taxesValid &&
      hostValid &&
      token
    ) {
      const payload = {
        name,
        documentIndex,
        documentNumber,
        address1,
        city,
        state,
        country,
        email,
        phone,
        currenciesId,
        currencyLocation,
        thousandsSeparator,
        decimalSeparator,
        decimalNumbers,
        taxes,
        host,
      };

      const updatedPayload = {
        ...payload,
        ...(postCode ? { postCode } : {}),
        ...(address2 ? { address2 } : {}),
      };

      gafpriFetch({
        initMethod: 'POST',
        initRoute: SITES_ROUTE,
        initCredentials: updatedPayload,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError,
      });
    }
  };

  function getById(id: number): SitesAttributes | null {
    return sites.data.items?.find((item) => `${item.id}` === `${id}`) || null;
  }

  function getMainSite(): SitesAttributes | null {
    if (sites.data.items) {
      return sites.data.items[0];
    }

    return null;
  }

  const update = (): void => {
    if (
      nameValid &&
      documentIndexValid &&
      documentNumberValid &&
      address1Valid &&
      address2Valid &&
      cityValid &&
      stateCountryValid &&
      postCodeValid &&
      countryValid &&
      emailValid &&
      phoneValid &&
      currenciesIdValid &&
      currencyLocationValid &&
      separatorValid &&
      decimalNumbersValid &&
      taxesValid &&
      hostValid &&
      token
    ) {
      const payload = {
        name,
        documentIndex,
        documentNumber,
        address1,
        city,
        state,
        country,
        email,
        phone,
        currenciesId,
        currencyLocation,
        thousandsSeparator,
        decimalSeparator,
        decimalNumbers,
        taxes,
        host,
      };

      const updatedPayload = {
        ...payload,
        ...(postCode ? { postCode } : {}),
        ...(address2 ? { address2 } : {}),
      };

      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${SITES_ROUTE}/${siteId}`,
        initCredentials: updatedPayload,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorUpdate,
      });
    }
  };

  const deleteSites = (id: number): void => {
    if (token) {
      gafpriFetch({
        initMethod: 'DELETE',
        initRoute: `${SITES_ROUTE}/${id}`,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorDelete,
      });
    }
  };

  function sortByName(
    items: SitesAttributes[] | null,
    order: 'asc' | 'desc'
  ): SitesAttributes[] | null {
    if (items) {
      return items.slice().sort((a, b) => {
        const comparison = a.name.localeCompare(b.name, undefined, {
          sensitivity: 'base',
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }

  const filterByName = (search: string): SitesAttributes[] | null => {
    if (sites.data.items) {
      return sites.data.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: SitesAttributes[] | null,
    page: number,
    itemPerPage: number
  ): SitesAttributes[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (items) {
      return items.slice(startIndex, endIndex);
    }

    return null;
  };

  // Efects
  React.useEffect(() => {
    getSites();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const states = {
    isReady,
    isFetching,
    isAdd,
    isInit,
    isUpdate,

    name,
    nameValid,

    documentIndex,
    documentIndexValid,
    documentIndexDefault,
    documentIndexOptions,

    documentNumber,
    documentNumberValid,

    address1,
    address1Valid,

    address2,
    address2Valid,

    city,
    cityValid,
    cityDefault,
    cityOptions,

    state,
    stateCountryValid,
    stateCountryDefault,
    stateCountryOptions,

    country,
    countryValid,
    countryDefault,
    countryOptions,

    postCode,
    postCodeValid,

    email,
    emailValid,

    phone,
    phoneValid,

    currenciesId,
    currenciesIdValid,
    currenciesIdDefault,
    currenciesIdOptions,

    currencyLocation,
    currencyLocationValid,
    currencyLocationDefault,
    currencyLocationOptions,

    thousandsSeparator,
    decimalSeparator,
    separatorValid,
    separatorDefault,
    separatorOptions,

    decimalNumbers,
    decimalNumbersValid,
    decimalNumbersDefault,
    decimalNumbersOptions,

    taxes,
    taxesValid,
    taxesDefault,
    taxesOptions,

    host,
    hostValid,

    sites,
    error,
    orderList,
    searchTerm,
    currentPage,
    itemsPerPage,
    siteId,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    onFetching,
    onInit,
    returnInit,
    onAdd,
    goAdd,
    onUpdate,
    changeName,
    changeDocumentIndex,
    changeDocumentNumber,
    changeAddress1,
    changeAddress2,
    changeCity,
    changeCityOptions,
    changeStateCountry,
    setStateCountryDefault,
    setStateCountry,
    changeCountry,
    setCountryDefault,
    changeStateCountryOptions,
    setCountry,
    changePostCode,
    changeEmail,
    changePhone,
    changeCurrenciesId,
    changeCurrencyLocation,
    changeSeparator,
    changeDecimalNumbers,
    changeTaxes,
    changeHost,
    validationButtonNext,
    setIsReady,
    offSites,
    add,
    update,
    getById,
    getMainSite,
    goUpdate,
    sortByName,
    setOrderList,
    setSearchTerm,
    filterByName,
    setCurrentPage,
    getPaginated,
    deleteSites,
    handleNewSite,
    handleDeletedSite,
    handleUpdatedSite,
    validationName,
    validationDocumentIndex,
    validationDocumentNumber,
    validationAddress1,
    validationAddress2,
    validationCity,
    validationStateCountry,
    validationCountry,
    validationPostCode,
    validationEmail,
    validationPhone,
    validationCurrenciesId,
    validationCurrencyLocation,
    validationSeparator,
    validationDecimalNumbers,
    validationTaxes,
    validationHost,
  };

  return {
    states,
    actions,
  };
};
