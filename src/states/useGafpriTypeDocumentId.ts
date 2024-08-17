import React, { useState } from 'react';
import {
  gafpriFetch,
  getLastEntryDateAndCount,
  changeInputText,
  scrollToTop,
} from '../helpers';
import { getItem, saveItem } from '../Context';
import type { ErrorResponseProps, CustomErrorResponseProps } from '../helpers';
import { UseErrorReturn } from './useGafpriError';
import { TYPE_DOCUMENT_ID_ROUTE, TYPE_DOCUMENT_ID_STORAGE } from '../constants';
import {
  generalValidationButtonNext,
  generalValidationName,
  generalValidationSelectCountry,
} from '../Validations';
import { generalChangeName } from '../Changes';

export interface TypeDocumentIdAttributes {
  id: number;
  name: string;
  country: string;
  createdAt: Date;
  modifiedAt: Date;
}

type DeletedTypeDocumentId = {
  itemId: number;
};

interface TypeDocumentIdData {
  data: {
    items: TypeDocumentIdAttributes[] | [] | null;
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

  country: string;
  countryValid: boolean;

  typeDocumentId: TypeDocumentIdData;
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

  changeCountry: (value: string) => void;
  validationCountry: (value: string) => void;

  validationButtonNext: () => void;

  setIsReady: (value: boolean) => void;

  onFetching: () => void;

  onInit: () => void;

  returnInit: () => void;

  onAdd: () => void;

  goAdd: () => void;

  goAddVzla: () => void;

  goAddUsa: () => void;

  update: () => void;

  onUpdate: () => void;

  offTypeDocumentId: () => void;

  add: () => void;

  getById: (id: number) => TypeDocumentIdAttributes | null;

  goUpdate: (id: number) => void;

  sortByName: (
    items: TypeDocumentIdAttributes[] | null,
    order: 'asc' | 'desc'
  ) => TypeDocumentIdAttributes[] | null;

  setOrderList: (order: 'asc' | 'desc') => void;

  setSearchTerm: (value: string) => void;

  filterByName: (search: string) => TypeDocumentIdAttributes[] | null;

  setCurrentPage: (value: number) => void;

  getPaginated: (
    items: TypeDocumentIdAttributes[] | null,
    page: number,
    itemsPerPage: number
  ) => TypeDocumentIdAttributes[] | null;

  deleteTypeDocumentId: (id: number) => void;

  handleNewTypeDocumentId: (newCurrency: TypeDocumentIdAttributes) => void;

  handleUpdatedTypeDocumentId: (
    updatedCurrency: TypeDocumentIdAttributes
  ) => void;

  handleDeletedTypeDocumentId: ({ itemId }: DeletedTypeDocumentId) => void;
};

export type UseTypeDocumentIdReturn = {
  states: State;
  actions: Actions;
};

export type UseTypeDocumentIdProps = {
  token: string | null;
  useError: UseErrorReturn;
};

export function useGafpriTypeDocumentId({
  token,
  useError,
}: UseTypeDocumentIdProps): UseTypeDocumentIdReturn {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [country, setCountry] = useState('');
  const [countryValid, setCountryValid] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [typeDocumentId, setTypeDocumentId] = useState<TypeDocumentIdData>({
    data: {
      items: getItem(TYPE_DOCUMENT_ID_STORAGE, null),
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
    setCountry('');
    setNameValid(false);
    setCountryValid(false);
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

  const goAddVzla = (): void => {
    infoReset();
    setCountry('VE');
    onAdd();
  };

  const goAddUsa = (): void => {
    infoReset();
    setCountry('US');
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

  const validationCountry = (newValue: string): boolean => {
    return generalValidationSelectCountry({
      value: newValue,
      setValid: setCountryValid,
      currentValid: countryValid,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [nameValid, countryValid],
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

  const changeCountry = (newValue: string): void => {
    changeInputText({
      value: newValue,
      validation: validationCountry,
      setValue: setCountry,
    });
  };

  // Manejo de la data de TypeDocumentId

  const getLastItem: TypeDocumentIdAttributes | null = typeDocumentId.data
    ?.items
    ? typeDocumentId.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: TypeDocumentIdData): void => {
    saveItem(TYPE_DOCUMENT_ID_STORAGE, newData.data.items);
  };

  const setData = (newData: TypeDocumentIdData): void => {
    setTypeDocumentId(newData);
    setDataStorage(newData);
  };

  const onTypeDocumentId = (newData: TypeDocumentIdData): void => {
    setData(newData);
    onIsReady();
  };

  const offTypeDocumentId = (): void => {
    setData({
      data: {
        items: null,
      },
    });
    notReady();
  };

  const getTypeDocumentId = async (): Promise<void> => {
    const lastEntryDateAndCount = await getLastEntryDateAndCount(
      TYPE_DOCUMENT_ID_ROUTE
    );
    const lastDate = getLastItem?.modifiedAt || null;
    const count = typeDocumentId.data.items?.length || 0;

    if (
      typeDocumentId.data.items === null ||
      `${lastEntryDateAndCount?.date}` !== `${lastDate}` ||
      `${lastEntryDateAndCount?.count}` !== `${count}`
    ) {
      if (token) {
        gafpriFetch({
          initMethod: 'GET',
          initRoute: TYPE_DOCUMENT_ID_ROUTE,
          initToken: { token },
          functionFetching: notReady,
          functionSuccess: onTypeDocumentId,
        });
      } else {
        notReady();
      }
    } else {
      onIsReady();
    }
  };

  const handleNewTypeDocumentId = (
    newTypeDocumentId: TypeDocumentIdAttributes
  ): void => {
    setTypeDocumentId((prevState) => {
      const newData = {
        data: {
          items: [...(prevState.data.items || []), newTypeDocumentId],
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleUpdatedTypeDocumentId = (
    updatedTypeDocumentId: TypeDocumentIdAttributes
  ): void => {
    setTypeDocumentId((prevState) => {
      const updatedItems =
        prevState.data.items?.map((item) =>
          `${item.id}` === `${updatedTypeDocumentId.id}`
            ? updatedTypeDocumentId
            : item
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

  const handleDeletedTypeDocumentId = ({
    itemId,
  }: DeletedTypeDocumentId): void => {
    setTypeDocumentId((prevState) => {
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

  const newErrorDelete = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: onInit,
    });
  };

  const add = (): void => {
    if (nameValid && countryValid && token) {
      gafpriFetch({
        initMethod: 'POST',
        initRoute: TYPE_DOCUMENT_ID_ROUTE,
        initToken: { token },
        initCredentials: {
          name,
          country,
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError,
      });
    }
  };

  function getById(id: number): TypeDocumentIdAttributes | null {
    return typeDocumentId.data.items?.find((item) => item.id === id) || null;
  }

  const update = (): void => {
    if (nameValid && countryValid && token) {
      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${TYPE_DOCUMENT_ID_ROUTE}/${currentId}`,
        initToken: { token },
        initCredentials: {
          name,
          country,
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError,
      });
    }
  };

  const deleteTypeDocumentId = (id: number): void => {
    if (token) {
      gafpriFetch({
        initMethod: 'DELETE',
        initRoute: `${TYPE_DOCUMENT_ID_ROUTE}/${id}`,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorDelete,
      });
    }
  };

  function sortByName(
    items: TypeDocumentIdAttributes[] | null,
    order: 'asc' | 'desc'
  ): TypeDocumentIdAttributes[] | null {
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

  const filterByName = (search: string): TypeDocumentIdAttributes[] | null => {
    if (typeDocumentId.data.items) {
      return typeDocumentId.data.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: TypeDocumentIdAttributes[] | null,
    page: number,
    itemPerPage: number
  ): TypeDocumentIdAttributes[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (items) {
      return items.slice(startIndex, endIndex);
    }

    return null;
  };

  /**
   * Effects
   *
   *
   */

  React.useEffect(() => {
    getTypeDocumentId();
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

    country,
    countryValid,

    isReady,
    isFetching,
    isAdd,
    isInit,
    isUpdate,

    typeDocumentId,

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

    changeCountry,
    validationCountry,

    validationButtonNext,

    setIsReady,

    onFetching,
    onInit,
    returnInit,
    onAdd,
    goAdd,
    goAddVzla,
    goAddUsa,
    onUpdate,

    offTypeDocumentId,
    add,
    update,
    getById,
    goUpdate,
    sortByName,
    setOrderList,
    setSearchTerm,
    filterByName,
    setCurrentPage,
    getPaginated,
    deleteTypeDocumentId,
    handleNewTypeDocumentId,
    handleUpdatedTypeDocumentId,
    handleDeletedTypeDocumentId,
  };

  return {
    states,
    actions,
  };
}
