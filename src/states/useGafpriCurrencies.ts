import React, { useState } from 'react';
import {
  getLastEntryDateAndCount,
  ErrorResponseProps,
  CustomErrorResponseProps,
  gafpriFetch,
  scrollToTop,
  SelectDefault,
} from '../helpers';
import { getItem, saveItem } from '../Context';
import type { UseErrorReturn } from './useGafpriError';
import { CURRENCIES_STORAGE, CURRENCIES_ROUTE } from '../constants';
import {
  generalValidationName,
  generalValidationCurrenciesSymbol,
  generalValidationButtonNext,
} from '../Validations';
import { generalChangeName, generalChangeCurrenciesSymbol } from '../Changes';

export interface CurrenciesAttributes {
  id: number;
  name: string;
  symbol: string;
  createdAt: Date;
  modifiedAt: Date;
}

type DeletedCurrency = {
  itemId: number;
};

interface CurrenciesData {
  data: {
    items: CurrenciesAttributes[] | [] | null;
  };
}

type State = {
  isReady: boolean;
  isFetching: boolean;
  isInit: boolean;
  isAdd: boolean;
  isUpdate: boolean;

  name: string;
  nameValid: boolean;

  symbol: string;
  symbolValid: boolean;

  currencies: CurrenciesData;
  currentId: number;

  error: string[];

  orderList: 'asc' | 'desc';

  searchTerm: string;

  currentPage: number;

  itemsPerPage: number;
};

type Actions = {
  changeName: (value: string) => void;
  validationName: (value: string) => void;

  changeSymbol: (value: string) => void;
  validationSymbol: (value: string) => void;

  validationButtonNext: () => void;

  setIsReady: (value: boolean) => void;

  onFetching: () => void;

  onInit: () => void;

  returnInit: () => void;

  offCurrencies: () => void;

  onAdd: () => void;

  goAdd: () => void;

  updateCurrency: () => void;

  onUpdate: () => void;

  addCurrencies: () => void;

  getById: (id: number) => CurrenciesAttributes | null;

  goUpdate: (id: number) => void;

  sortCurrenciesByName: (
    currencies: CurrenciesAttributes[] | null,
    order: 'asc' | 'desc'
  ) => CurrenciesAttributes[] | null;

  setOrderList: (order: 'asc' | 'desc') => void;

  setSearchTerm: (value: string) => void;

  filterCurrenciesByName: (search: string) => CurrenciesAttributes[] | null;

  setCurrentPage: (value: number) => void;

  getPaginatedCurrencies: (
    currencies: CurrenciesAttributes[] | null,
    page: number,
    itemsPerPage: number
  ) => CurrenciesAttributes[] | null;

  deleteCurrency: (id: number) => void;

  handleNewCurrency: (newCurrency: CurrenciesAttributes) => void;

  handleUpdatedCurrency: (updatedCurrency: CurrenciesAttributes) => void;

  handleDeletedCurrency: ({ itemId }: DeletedCurrency) => void;

  getOptionsItems: () => SelectDefault[];
};

export type UseCurrenciesReturn = {
  states: State;
  actions: Actions;
};

export type UseCurrenciesProps = {
  token: string | null;
  useError: UseErrorReturn;
};

export function useGafpriCurrencies({
  token,
  useError,
}: UseCurrenciesProps): UseCurrenciesReturn {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [symbol, setSymbol] = useState('');
  const [symbolValid, setSymbolValid] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currencies, setCurrencies] = useState<CurrenciesData>({
    data: {
      items: getItem(CURRENCIES_STORAGE, null),
    },
  });
  const { error } = useError.states;

  const [currentId, setCurrentId] = useState(0);
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const infoReset = (): void => {
    setName('');
    setSymbol('');
    setNameValid(false);
    setSymbolValid(false);
    useError.actions.changeError([]);
  };

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
    setCurrentId(id);
    onUpdate();
  };

  const goAdd = (): void => {
    infoReset();
    onAdd();
  };

  // Funciones de Validacion
  const validationName = (value: string): boolean => {
    return generalValidationName({
      value,
      setValid: setNameValid,
      currentValid: nameValid,
    });
  };

  const validationSymbol = (newValue: string): boolean => {
    return generalValidationCurrenciesSymbol({
      value: newValue,
      setValid: setSymbolValid,
      currentValid: symbolValid,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [nameValid, symbolValid],
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

  const changeSymbol = (value: string): void => {
    generalChangeCurrenciesSymbol({
      value,
      validation: validationSymbol,
      setValue: setSymbol,
    });
  };

  // Manejo de la data de Currencies

  const getLastItem: CurrenciesAttributes | null = currencies.data?.items
    ? currencies.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setCurrenciesDataStorage = (newData: CurrenciesData): void => {
    saveItem(CURRENCIES_STORAGE, newData.data.items);
  };

  const setCurrenciesData = (newData: CurrenciesData): void => {
    setCurrencies(newData);
    setCurrenciesDataStorage(newData);
  };

  const onCurrencies = (newData: CurrenciesData): void => {
    setCurrenciesData(newData);
    onIsReady();
  };

  const offCurrencies = (): void => {
    setCurrenciesData({
      data: {
        items: null,
      },
    });
    notReady();
  };

  const getCurrencies = async (): Promise<void> => {
    const lastEntryDateAndCount = await getLastEntryDateAndCount(
      CURRENCIES_ROUTE
    );
    const lastDate = getLastItem?.modifiedAt || null;
    const count = currencies.data.items?.length || 0;

    if (
      currencies.data.items === null ||
      `${lastEntryDateAndCount?.date}` !== `${lastDate}` ||
      `${lastEntryDateAndCount?.count}` !== `${count}`
    ) {
      if (token) {
        gafpriFetch({
          initMethod: 'GET',
          initRoute: CURRENCIES_ROUTE,
          initToken: { token },
          functionFetching: notReady,
          functionSuccess: onCurrencies,
        });
      } else {
        notReady();
      }
    } else {
      onIsReady();
    }
  };

  const handleNewCurrency = (newCurrency: CurrenciesAttributes): void => {
    setCurrencies((prevState) => {
      const newData = {
        data: {
          items: [...(prevState.data.items || []), newCurrency],
        },
      };
      setCurrenciesDataStorage(newData);
      return newData;
    });
  };

  const handleUpdatedCurrency = (
    updatedCurrency: CurrenciesAttributes
  ): void => {
    setCurrencies((prevState) => {
      const updatedItems =
        prevState.data.items?.map((currency) =>
          currency.id === updatedCurrency.id ? updatedCurrency : currency
        ) || [];
      const newData = {
        data: {
          items: updatedItems,
        },
      };
      setCurrenciesDataStorage(newData);
      return newData;
    });
  };

  const handleDeletedCurrency = ({ itemId }: DeletedCurrency): void => {
    setCurrencies((prevState) => {
      const filteredItems =
        prevState.data.items?.filter(
          (currency) => `${currency.id}` !== `${itemId}`
        ) || [];

      const newData = {
        data: {
          items: filteredItems,
        },
      };

      setCurrenciesDataStorage(newData);
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

  const newErrorDelete = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: onInit,
    });
  };

  const addCurrencies = (): void => {
    if (nameValid && symbolValid && token) {
      gafpriFetch({
        initMethod: 'POST',
        initRoute: CURRENCIES_ROUTE,
        initCredentials: {
          name,
          symbol,
        },
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError,
      });
    }
  };

  function getById(id: number): CurrenciesAttributes | null {
    return (
      currencies.data.items?.find((currency) => currency.id === id) || null
    );
  }

  function getOptionsItems(): SelectDefault[] {
    return (
      currencies.data.items?.map((item) => {
        return {
          value: `${item.id}`,
          label: item.name,
        };
      }) || []
    );
  }

  const updateCurrency = (): void => {
    if (nameValid && symbolValid && token) {
      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${CURRENCIES_ROUTE}/${currentId}`,
        initCredentials: {
          name,
          symbol,
        },
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError,
      });
    }
  };

  const deleteCurrency = (id: number): void => {
    if (token) {
      gafpriFetch({
        initMethod: 'DELETE',
        initRoute: `${CURRENCIES_ROUTE}/${id}`,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorDelete,
      });
    }
  };

  function sortCurrenciesByName(
    itemCurrencies: CurrenciesAttributes[] | null,
    order: 'asc' | 'desc'
  ): CurrenciesAttributes[] | null {
    if (itemCurrencies) {
      return itemCurrencies.slice().sort((a, b) => {
        const comparison = a.name.localeCompare(b.name, undefined, {
          sensitivity: 'base',
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }

  const filterCurrenciesByName = (
    search: string
  ): CurrenciesAttributes[] | null => {
    if (currencies.data.items) {
      return currencies.data.items.filter((currency) =>
        currency.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginatedCurrencies = (
    itemCurrencies: CurrenciesAttributes[] | null,
    page: number,
    itemPerPage: number
  ): CurrenciesAttributes[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (itemCurrencies) {
      return itemCurrencies.slice(startIndex, endIndex);
    }

    return null;
  };

  /**
   * Effects
   *
   *
   */

  React.useEffect(() => {
    getCurrencies();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  /**
   * Export
   *
   *
   */
  const states = {
    name,
    nameValid,

    symbol,
    symbolValid,

    isReady,
    isFetching,
    isAdd,
    isInit,
    isUpdate,

    currencies,

    currentId,

    error,
    orderList,
    searchTerm,
    currentPage,
    itemsPerPage,
  };

  const actions = {
    changeName,
    validationName,

    changeSymbol,
    validationSymbol,

    validationButtonNext,

    setIsReady,

    onFetching,
    onInit,
    returnInit,
    onAdd,
    goAdd,
    onUpdate,

    addCurrencies,
    updateCurrency,
    getById,
    goUpdate,
    offCurrencies,
    sortCurrenciesByName,
    setOrderList,
    setSearchTerm,
    filterCurrenciesByName,
    setCurrentPage,
    getPaginatedCurrencies,
    deleteCurrency,
    handleNewCurrency,
    handleUpdatedCurrency,
    handleDeletedCurrency,
    getOptionsItems,
  };

  return {
    states,
    actions,
  };
}
