import React, { useState } from 'react';
import { gafpriFetch, getLastEntryDateAndCount, scrollToTop } from '../helpers';
import { getItem, saveItem } from '../Context';
import type { ErrorResponseProps, CustomErrorResponseProps } from '../helpers';
import type { UseErrorReturn } from './useGafpriError';
import { ROLES_ROUTE, ROLES_STORAGE, AllRoles } from '../constants';
import {
  generalValidationButtonNext,
  generalValidationName,
} from '../Validations';
import { generalChangeName } from '../Changes';

export interface RolesAttributes {
  id: number;
  name: string;
  permissions: string[];
  createdAt: Date;
  modifiedAt: Date;
}

type DeletedRoles = {
  itemId: number;
};

interface RolesData {
  data: {
    items: RolesAttributes[] | [] | null;
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

  permissions: string[];

  roles: RolesData;
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

  changePermissions: (permissionValue: string, checked: boolean) => void;
  setPermissions: (value: string[]) => void;
  selectAllPermissions: () => void;
  deselectAllPermissions: () => void;

  validationButtonNext: () => void;

  setIsReady: (value: boolean) => void;

  onFetching: () => void;

  onInit: () => void;

  returnInit: () => void;

  onAdd: () => void;

  goAdd: () => void;

  update: () => void;

  onUpdate: () => void;

  offRoles: () => void;

  add: () => void;

  getById: (id: number) => RolesAttributes | null;

  goUpdate: (id: number) => void;

  sortByName: (
    items: RolesAttributes[] | null,
    order: 'asc' | 'desc'
  ) => RolesAttributes[] | null;

  setOrderList: (order: 'asc' | 'desc') => void;

  setSearchTerm: (value: string) => void;

  filterByName: (search: string) => RolesAttributes[] | null;

  setCurrentPage: (value: number) => void;

  getPaginated: (
    items: RolesAttributes[] | null,
    page: number,
    itemsPerPage: number
  ) => RolesAttributes[] | null;

  deleteRoles: (id: number) => void;

  handleNewRoles: (newCurrency: RolesAttributes) => void;

  handleUpdatedRoles: (updatedCurrency: RolesAttributes) => void;

  handleDeletedRoles: ({ itemId }: DeletedRoles) => void;
};

export type UseRolesReturn = {
  states: State;
  actions: Actions;
};

export type UseRolesProps = {
  token: string | null;
  useError: UseErrorReturn;
};

export function useGafpriRoles({
  token,
  useError,
}: UseRolesProps): UseRolesReturn {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [permissions, setPermissions] = useState<string[]>([]);

  const [isReady, setIsReady] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [roles, setRoles] = useState<RolesData>({
    data: {
      items: getItem(ROLES_STORAGE, null),
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
    setPermissions([]);
    setNameValid(false);
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

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [nameValid],
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

  const changePermissions = (
    permissionValue: string,
    checked: boolean
  ): void => {
    setPermissions((prevSelectedPermissions) =>
      checked
        ? [...prevSelectedPermissions, permissionValue]
        : prevSelectedPermissions.filter((value) => value !== permissionValue)
    );
  };

  // Manejo de la data de Roles

  const getLastItem: RolesAttributes | null = roles.data?.items
    ? roles.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const selectAllPermissions = (): void => {
    const allPermissions = AllRoles.flatMap((role) =>
      role.permissions.map((permission) => permission.value)
    );
    setPermissions(allPermissions);
  };

  const deselectAllPermissions = (): void => {
    setPermissions([]);
  };

  const setDataStorage = (newData: RolesData): void => {
    saveItem(ROLES_STORAGE, newData.data.items);
  };

  const setData = (newData: RolesData): void => {
    setRoles(newData);
    setDataStorage(newData);
  };

  const onRoles = (newData: RolesData): void => {
    setData(newData);
    onIsReady();
  };

  const offRoles = (): void => {
    setData({
      data: {
        items: null,
      },
    });
    notReady();
  };

  const getRoles = async (): Promise<void> => {
    const lastEntryDateAndCount = await getLastEntryDateAndCount(ROLES_ROUTE);
    const lastDate = getLastItem?.modifiedAt || null;
    const count = roles.data.items?.length || 0;

    if (
      roles.data.items === null ||
      `${lastEntryDateAndCount?.date}` !== `${lastDate}` ||
      `${lastEntryDateAndCount?.count}` !== `${count}`
    ) {
      if (token) {
        gafpriFetch({
          initMethod: 'GET',
          initRoute: ROLES_ROUTE,
          initToken: { token },
          functionFetching: notReady,
          functionSuccess: onRoles,
        });
      } else {
        notReady();
      }
    } else {
      onIsReady();
    }
  };

  const handleNewRoles = (newRoles: RolesAttributes): void => {
    setRoles((prevState) => {
      const newData = {
        data: {
          items: [...(prevState.data.items || []), newRoles],
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleUpdatedRoles = (updatedRoles: RolesAttributes): void => {
    setRoles((prevState) => {
      const updatedItems =
        prevState.data.items?.map((item) =>
          `${item.id}` === `${updatedRoles.id}` ? updatedRoles : item
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

  const handleDeletedRoles = ({ itemId }: DeletedRoles): void => {
    setRoles((prevState) => {
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
    if (nameValid && token) {
      gafpriFetch({
        initMethod: 'POST',
        initRoute: ROLES_ROUTE,
        initCredentials: {
          name,
          permissions,
        },
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError,
      });
    }
  };

  function getById(id: number): RolesAttributes | null {
    return roles.data.items?.find((item) => item.id === id) || null;
  }

  const update = (): void => {
    if (nameValid && token) {
      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${ROLES_ROUTE}/${currentId}`,
        initCredentials: {
          name,
          permissions,
        },
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError,
      });
    }
  };

  const deleteRoles = (id: number): void => {
    if (token) {
      gafpriFetch({
        initMethod: 'DELETE',
        initRoute: `${ROLES_ROUTE}/${id}`,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorDelete,
      });
    }
  };

  function sortByName(
    items: RolesAttributes[] | null,
    order: 'asc' | 'desc'
  ): RolesAttributes[] | null {
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

  const filterByName = (search: string): RolesAttributes[] | null => {
    if (roles.data.items) {
      return roles.data.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: RolesAttributes[] | null,
    page: number,
    itemPerPage: number
  ): RolesAttributes[] | null => {
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
    getRoles();
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

    permissions,

    isReady,
    isFetching,
    isAdd,
    isInit,
    isUpdate,

    roles,

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

    changePermissions,
    setPermissions,
    selectAllPermissions,
    deselectAllPermissions,

    validationButtonNext,

    setIsReady,

    onFetching,
    onInit,
    returnInit,
    onAdd,
    goAdd,
    onUpdate,

    offRoles,
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
    deleteRoles,
    handleNewRoles,
    handleUpdatedRoles,
    handleDeletedRoles,
  };

  return {
    states,
    actions,
  };
}
