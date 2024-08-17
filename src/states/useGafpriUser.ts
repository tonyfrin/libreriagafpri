import React, { useState, ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import { gafpriFetch, getLastEntryDateAndCount, scrollToTop } from '../helpers';
import type {
  SelectDefault,
  ErrorResponseProps,
  CustomErrorResponseProps,
  RoleArray,
} from '../helpers';
import { getItem, saveItem } from '../Context';
import type { UseRolesReturn, RolesAttributes } from './useGafpriRoles';
import { UseErrorReturn } from './useGafpriError';
import { USERS_STORAGE, USERS_ROUTE } from '../constants';
import {
  generalValidationAreaCode,
  generalValidationButtonNext,
  generalValidationEmail,
  generalValidationLastName,
  generalValidationName,
  generalValidationPhone,
  generalValidationPhotoUsers,
  generalValidationRoles,
  generalValidationStatus,
} from '../Validations';
import {
  generalChangeAreaCode,
  generalChangeEmail,
  generalChangeLastName,
  generalChangeName,
  generalChangePhone,
  generalChangePhoto,
  generalChangeRoles,
  generalChanceIsActive,
} from '../Changes';

export interface UserAttributes {
  id: number;
  login: string;
  email: string;
  phone: string;
  rolesId: string;
  name: string;
  lastName?: string;
  photo?: string;
  isActive: boolean;
  emailConfirmation: boolean;
  phoneConfirmation: boolean;
  createdAt: Date;
  modifiedAt: Date;
  roles: RolesAttributes;
}

interface UserData {
  data: {
    items: UserAttributes[] | [] | null;
  };
}

export type UseUserReturn = {
  states: {
    isReady: boolean;
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isView: boolean;
    isUpdate: boolean;

    name: string;
    nameValid: boolean;

    lastName: string;
    lastNameValid: boolean;

    email: string;
    emailValid: boolean;

    phoneNumber: string;
    phoneNumberValid: boolean;

    rolesId: string;
    roleValid: boolean;
    roleDefault: SelectDefault;
    roleOptions: SelectDefault[];

    photo: string;
    photoValid: boolean;
    submitting: boolean;
    areaCode: string;
    areaCodeValid: boolean;
    areaCodeDefault: SelectDefault;
    areaCodeOptions: SelectDefault[];

    isActive: boolean;
    isActiveValid: boolean;
    isActiveDefault: SelectDefault;
    isActiveOptions: SelectDefault[];

    users: UserData;

    error: string[];
    userId: number;
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;

    searchBy: string;
    searchByDefault: SelectDefault;
    searchByOptions: SelectDefault[];
  };
  actions: {
    onFetching: () => void;
    onInit: () => void;
    onAdd: () => void;
    onUpdate: () => void;
    goView: (id: number) => void;
    onIsReady: () => void;
    notReady: () => void;
    goUpdate: (id: number) => void;
    goAdd: () => void;
    offUsers: () => void;

    validationButtonNext: () => void;
    validationName: (value: string) => boolean;
    validationLastName: (value: string) => boolean;
    validationEmail: (value: string) => boolean;
    validationPhoneNumber: (value: string) => boolean;
    validationAreaCode: (value: string) => boolean;
    validationRole: (value: string) => boolean;
    validationPhoto: (value: string) => boolean;
    validationIsActive: (value: string) => boolean;

    changeName: (value: string) => void;
    changeLastName: (value: string) => void;
    changeEmail: (inputValue: string) => void;
    changePhoneNumber: (newPhone: string) => void;
    changeAreaCode: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeRole: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeError: (value: string[]) => void;
    changePhoto: (e: ChangeEvent<HTMLInputElement>) => void;
    setSubmitting: (value: boolean) => void;
    setPhoto: (value: string) => void;
    changeIsActive: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    infoReset: () => void;

    resetData: () => void;
    handleNewUsers: (newItem: UserAttributes) => void;
    handleUpdatedUsers: (itemUpdate: UserAttributes) => void;
    returnInit: () => void;
    add: () => void;
    getById: (id: number) => UserAttributes | null;
    update: () => void;
    sortByName: (
      items: UserAttributes[] | null,
      order: 'asc' | 'desc'
    ) => UserAttributes[] | null;
    filterByName: (search: string) => UserAttributes[] | null;
    getPaginated: (
      items: UserAttributes[] | null,
      page: number,
      itemsPerPage: number
    ) => UserAttributes[] | null;
    setOrderList: (value: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    setCurrentPage: (value: number) => void;
    changeSearchBy: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    sortByProperty: (
      items: UserAttributes[] | null,
      searchBy: 'name' | 'email' | 'phone' | 'login',
      order: 'asc' | 'desc'
    ) => UserAttributes[] | null;
    filterBySearch: (
      search: string,
      searchBy: 'name' | 'email' | 'phone' | 'login'
    ) => UserAttributes[] | null;
    filterRoleByName: (
      roleArray: RoleArray[],
      search: string
    ) => RoleArray[] | null;
    sortRoleByName: (
      items: RoleArray[] | null,
      order: 'asc' | 'desc'
    ) => RoleArray[] | null;
    getRolePaginated: (
      items: RoleArray[] | null,
      page: number,
      itemsPerPage: number
    ) => RoleArray[] | null;
    getOptionsUsers: () => SelectDefault[];
    findByEmail: (emailToFind: string) => UserAttributes | null;
    findByPhone: (phoneToFind: string) => UserAttributes | null;
    findByUserName: (userNameToFind: string) => UserAttributes | null;
  };
};

export type UseUserProps = {
  useRoles: UseRolesReturn;
  token: string | null;
  useError: UseErrorReturn;
};

export const useGafpriUsers = ({
  useRoles,
  token,
  useError,
}: UseUserProps): UseUserReturn => {
  // Define los estados necesarios para los atributos de Site
  const [isReady, setIsReady] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isView, setIsView] = useState(false);

  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [lastName, setLastName] = useState('');
  const [lastNameValid, setLastNameValid] = useState(true);

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);
  const [areaCode, setAreaCode] = useState('0058');
  const [areaCodeValid, setAreaCodeValid] = useState(false);
  const [areaCodeDefault, setAreaCodeDefault] = useState<SelectDefault>({
    value: '0058',
    label: '(+58) Venezuela',
  });
  const areaCodeOptions = [
    { value: '0058', label: '(+58) Venezuela' },
    { value: '001', label: '(+1) Estados Unidos' },
  ];

  const [rolesId, setRole] = useState('');
  const [roleValid, setRoleValid] = useState(false);
  const [roleDefault, setRoleDefault] = useState<SelectDefault>({
    value: '',
    label: 'Elija el rol del usuario',
  });
  const roleOptions =
    useRoles.states.roles.data?.items?.map((item) => {
      return { value: `${item.id}`, label: item.name };
    }) || [];

  const [photo, setPhoto] = useState(
    'https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'
  );
  const [photoValid, setPhotoValid] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [isActive, setIsActive] = useState(true);
  const [isActiveValid, setIsActiveValid] = useState(false);
  const [isActiveDefault, setIsActiveDefault] = useState<SelectDefault>({
    value: 'true',
    label: 'Activo',
  });
  const isActiveOptions = [
    { label: 'Activo', value: 'true' },
    { label: 'Inactivo', value: 'false' },
  ];

  const [users, setUsers] = useState<UserData>({
    data: {
      items: getItem(USERS_STORAGE, null),
    },
  });
  const { error } = useError.states;
  const { changeError } = useError.actions;
  const [userId, setUserId] = useState(0);
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchBy, setSearchBy] = useState<
    'name' | 'email' | 'phone' | 'login'
  >('name');
  const [searchByDefault, setSearchByDefault] = useState<SelectDefault>({
    value: 'name',
    label: 'Nombre',
  });
  const searchByOptions = [
    { value: 'name', label: 'Nombre' },
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Teléfono' },
    { value: 'login', label: 'Login' },
  ];
  const itemsPerPage = 6;

  const infoReset = (): void => {
    setName('');
    setNameValid(false);

    setLastName('');
    setLastNameValid(true);

    setEmail('');
    setEmailValid(false);

    setPhoneNumber('');
    setPhoneNumberValid(false);

    setAreaCode('0058');
    setAreaCodeValid(false);
    setAreaCodeDefault({ value: '0058', label: '(+58) Venezuela' });

    setRole('');
    setRoleValid(false);
    setRoleDefault({ value: '', label: 'Elija el rol del usuario' });

    setPhoto(
      'https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'
    );
    setPhotoValid(false);
    setSubmitting(false);

    setIsActive(true);
    setIsActiveValid(false);
    setIsActiveDefault({ value: 'true', label: 'Activo' });

    useError.actions.changeError([]);
    setUserId(0);
    setOrderList('asc');
    setSearchTerm('');
    setCurrentPage(1);
  };

  // Funciones de paginas
  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    scrollToTop();
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(false);
    scrollToTop();
  };

  const onAdd = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    setIsView(false);
    scrollToTop();
  };

  const onUpdate = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    setIsView(false);
    scrollToTop();
  };

  const onView = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsView(true);
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
    setUserId(id);
    onUpdate();
  };

  const goView = (id: number): void => {
    setUserId(id);
    onView();
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
        lastNameValid,
        emailValid,
        areaCodeValid,
        phoneNumberValid,
        roleValid,
        photoValid,
        isActiveValid,
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

  const validationLastName = (value: string): boolean => {
    return generalValidationLastName({
      value,
      setValid: setLastNameValid,
      currentValid: lastNameValid,
    });
  };

  const validationEmail = (value: string): boolean => {
    return generalValidationEmail({
      value,
      setValid: setEmailValid,
      currentValid: emailValid,
      required: true,
    });
  };

  const validationPhoneNumber = (value: string): boolean => {
    return generalValidationPhone({
      value,
      setValid: setPhoneNumberValid,
      currentValid: phoneNumberValid,
      required: true,
    });
  };

  const validationAreaCode = (value: string): boolean => {
    return generalValidationAreaCode({
      newValue: value,
      setValid: setAreaCodeValid,
      currentValid: areaCodeValid,
    });
  };

  const validationRole = (value: string): boolean => {
    return generalValidationRoles({
      newValue: value,
      setValid: setRoleValid,
      currentValid: roleValid,
    });
  };

  const validationPhoto = (value: string): boolean => {
    return generalValidationPhotoUsers({
      value,
      setValid: setPhotoValid,
      currentValid: photoValid,
    });
  };

  const validationIsActive = (value: string): boolean => {
    return generalValidationStatus({
      value,
      setValid: setIsActiveValid,
      currentValid: isActiveValid,
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

  const changeLastName = (value: string): void => {
    generalChangeLastName({
      value,
      validation: validationLastName,
      setValue: setLastName,
    });
  };

  const changeEmail = (inputValue: string): void => {
    generalChangeEmail({
      value: inputValue,
      validation: validationEmail,
      setValue: setEmail,
    });
  };

  const changePhoneNumber = (newPhone: string): void => {
    generalChangePhone({
      value: newPhone,
      validation: validationPhoneNumber,
      setValue: setPhoneNumber,
    });
  };

  const changeAreaCode = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeAreaCode({
      options,
      validation: validationAreaCode,
      setDefault: setAreaCodeDefault,
      setValue: setAreaCode,
    });
  };

  const changeRole = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeRoles({
      options,
      validation: validationRole,
      setDefault: setRoleDefault,
      setValue: setRole,
    });
  };

  const changePhoto = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    generalChangePhoto({
      e,
      changeError,
      setSubmitting,
      setPhoto,
      validation: validationPhoto,
    });
  };

  const changeIsActive = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChanceIsActive({
      options,
      validation: validationIsActive,
      setDefault: setIsActiveDefault,
      setValue: setIsActive,
    });
  };

  const changeSearchBy = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    const label = options?.label ? options.label : 'Nombre';
    const value =
      options?.value &&
      (options.value === 'name' ||
        options.value === 'email' ||
        options.value === 'phone' ||
        options.value === 'login')
        ? options.value
        : 'name';
    const newDefaulValue = {
      label,
      value,
    };
    setSearchByDefault(newDefaulValue);
    setSearchBy(value);
  };

  // Manejo de la data en DB
  const getLastItem: UserAttributes | null = users.data?.items
    ? users.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: UserData): void => {
    saveItem(USERS_STORAGE, newData.data.items);
  };

  const setData = (newData: UserData): void => {
    setUsers(newData);
    setDataStorage(newData);
  };

  const onUsers = (newData: UserData): void => {
    setData(newData);
    onIsReady();
  };

  const offUsers = (): void => {
    setData({
      data: {
        items: null,
      },
    });
    notReady();
  };

  const resetData = (): void => {
    const newData = {
      data: {
        items: null,
      },
    };
    setData(newData);
    notReady();
  };

  const getUsers = async (): Promise<void> => {
    const lastEntryDateAndCount = await getLastEntryDateAndCount(USERS_ROUTE);
    const lastDate = getLastItem?.modifiedAt || null;
    const count = users.data.items?.length || 0;

    if (
      users.data.items === null ||
      `${lastEntryDateAndCount?.date}` !== `${lastDate}` ||
      `${lastEntryDateAndCount?.count}` !== `${count}`
    ) {
      if (token) {
        gafpriFetch({
          initMethod: 'GET',
          initRoute: USERS_ROUTE,
          initToken: { token },
          functionFetching: notReady,
          functionSuccess: onUsers,
        });
      } else {
        notReady();
      }
    } else {
      onIsReady();
    }
  };

  const handleNewUsers = (newItem: UserAttributes): void => {
    setUsers((prevState) => {
      const newData = {
        data: {
          items: [...(prevState.data.items || []), newItem],
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleUpdatedUsers = (itemUpdate: UserAttributes): void => {
    setUsers((prevState) => {
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

  const add = (): void => {
    if (
      nameValid &&
      lastNameValid &&
      emailValid &&
      phoneNumberValid &&
      areaCodeValid &&
      roleValid &&
      photoValid &&
      isActiveValid &&
      token
    ) {
      const payload = {
        name,
        email,
        phone: `${areaCode}${phoneNumber}`,
        rolesId,
        isActive,
      };

      const updatedPayload = {
        ...payload,
        ...(lastName ? { lastName } : {}),
        ...(photo ? { photo } : {}),
      };

      gafpriFetch({
        initMethod: 'POST',
        initRoute: USERS_ROUTE,
        initCredentials: updatedPayload,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError,
      });
    }
  };

  function getById(id: number): UserAttributes | null {
    return users.data.items?.find((item) => `${item.id}` === `${id}`) || null;
  }

  function findByEmail(emailToFind: string): UserAttributes | null {
    if (!users.data.items) return null;
    const found = users.data.items.find((item) => item.email === emailToFind);
    return found || null;
  }

  function findByPhone(phoneToFind: string): UserAttributes | null {
    if (!users.data.items) return null;
    const found = users.data.items.find((item) => item.phone === phoneToFind);
    return found || null;
  }

  function findByUserName(userNameToFind: string): UserAttributes | null {
    if (!users.data.items) return null;
    const found = users.data.items.find(
      (item) => item.login === userNameToFind
    );
    return found || null;
  }

  function getOptionsUsers(): SelectDefault[] {
    return (
      users.data.items?.map((item) => {
        return {
          value: `${item.id}`,
          label: `${
            item?.lastName ? `${item.name} ${item.lastName}` : `${item.name}`
          }`,
        };
      }) || []
    );
  }

  const update = (): void => {
    if (
      nameValid &&
      lastNameValid &&
      emailValid &&
      phoneNumberValid &&
      areaCodeValid &&
      roleValid &&
      photoValid &&
      isActiveValid &&
      token
    ) {
      const payload = {
        name,
        email,
        phone: `${areaCode}${phoneNumber}`,
        rolesId,
        isActive,
      };

      const updatedPayload = {
        ...payload,
        ...(lastName ? { lastName } : {}),
        ...(photo ? { photo } : {}),
      };

      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${USERS_ROUTE}/${userId}`,
        initCredentials: updatedPayload,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorUpdate,
      });
    }
  };

  function sortByName(
    items: UserAttributes[] | null,
    order: 'asc' | 'desc'
  ): UserAttributes[] | null {
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

  function sortRoleByName(
    items: RoleArray[] | null,
    order: 'asc' | 'desc'
  ): RoleArray[] | null {
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

  function sortByProperty(
    items: UserAttributes[] | null,
    search: 'name' | 'email' | 'phone' | 'login',
    order: 'asc' | 'desc'
  ): UserAttributes[] | null {
    if (items) {
      return items.slice().sort((a, b) => {
        const comparison = a[search].localeCompare(b[search], undefined, {
          sensitivity: 'base',
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }

  const filterByName = (search: string): UserAttributes[] | null => {
    if (users.data.items) {
      return users.data.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const filterRoleByName = (
    roleArray: RoleArray[],
    search: string
  ): RoleArray[] | null => {
    if (roleArray) {
      return roleArray.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const filterBySearch = (
    search: string,
    searchType: 'name' | 'email' | 'phone' | 'login'
  ): UserAttributes[] | null => {
    if (users.data.items) {
      return users.data.items.filter((item) =>
        item[searchType].toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: UserAttributes[] | null,
    page: number,
    itemPerPage: number
  ): UserAttributes[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (items) {
      return items.slice(startIndex, endIndex);
    }

    return null;
  };

  const getRolePaginated = (
    items: RoleArray[] | null,
    page: number,
    itemPerPage: number
  ): RoleArray[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (items) {
      return items.slice(startIndex, endIndex);
    }

    return null;
  };

  // Efects
  React.useEffect(() => {
    getUsers();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const states = {
    isReady,
    isFetching,
    isInit,
    isAdd,
    isUpdate,
    isView,

    name,
    nameValid,

    lastName,
    lastNameValid,

    email,
    emailValid,

    phoneNumber,
    phoneNumberValid,
    areaCode,
    areaCodeValid,
    areaCodeDefault,
    areaCodeOptions,

    rolesId,
    roleValid,
    roleDefault,
    roleOptions,

    photo,
    photoValid,
    submitting,

    isActive,
    isActiveValid,
    isActiveDefault,
    isActiveOptions,

    users,

    error,
    userId,
    orderList,
    searchTerm,
    currentPage,
    itemsPerPage,
    searchBy,
    searchByDefault,
    searchByOptions,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    onFetching,
    onInit,
    onAdd,
    onUpdate,
    goView,
    onIsReady,
    notReady,
    goUpdate,
    goAdd,
    offUsers,

    validationButtonNext,
    validationName,
    validationLastName,
    validationEmail,
    validationPhoneNumber,
    validationAreaCode,
    validationRole,
    validationPhoto,
    validationIsActive,

    changeName,
    changeLastName,
    changeEmail,
    changePhoneNumber,
    changeAreaCode,
    changeRole,
    changeError,
    changePhoto,
    setSubmitting,
    setPhoto,
    changeIsActive,
    infoReset,

    resetData,
    handleNewUsers,
    handleUpdatedUsers,
    returnInit,
    add,
    getById,
    update,
    sortByName,
    filterByName,
    getPaginated,
    setOrderList,
    setSearchTerm,
    setCurrentPage,
    changeSearchBy,
    sortByProperty,
    filterBySearch,
    filterRoleByName,
    sortRoleByName,
    getRolePaginated,
    getOptionsUsers,
    findByEmail,
    findByPhone,
    findByUserName,
  };

  return {
    states,
    actions,
  };
};
