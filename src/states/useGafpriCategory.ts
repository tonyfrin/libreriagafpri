import React, { useState, ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import type { UseErrorReturn } from './useGafpriError';
import { getLastEntryDateAndCount, gafpriFetch, scrollToTop } from '../helpers';
import {
  generalValidationName,
  generalValidationParentId,
  generalValidationDescription,
  generalValidationStatus,
  generalValidationPhotoCategory,
  generalValidationButtonNext,
} from '../Validations';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
  SelectDefault,
} from '../helpers';
import { getItem, saveItem } from '../Context';
import {
  generalChangeName,
  generalChangeParentId,
  generalChangeDescription,
  generalChangePhoto,
  generalChangeStatus,
} from '../Changes';
import { CATEGORY_STORAGE, CATEGORY_ROUTE } from '../constants';

export interface CategoryAttributes {
  id: number;
  slug: string;
  parentId: number | null;
  name: string;
  description: string | null;
  photo: string | null;
  status: string;
  createdAt: Date;
  modifiedAt: Date;
}

type DeletedCategory = {
  itemId: number;
};

interface CategoryData {
  data: {
    items: CategoryAttributes[] | [] | null;
  };
}

export interface Category {
  id: number;
  name: string;
  children?: Category[];
}

type State = {
  isReady: boolean;
  isFetching: boolean;
  isInit: boolean;
  isAdd: boolean;
  isUpdate: boolean;

  name: string;
  nameValid: boolean;

  parentId: string;
  parentIdValid: boolean;
  parentIdDefault: SelectDefault;
  parentIdOptions: SelectDefault[];
  childrenFetching: boolean;

  description: string;
  descriptionValid: boolean;

  photo: string;
  photoValid: boolean;
  submitting: boolean;

  status: string;
  statusValid: boolean;
  statusDefault: SelectDefault;
  statusOptions: SelectDefault[];

  category: CategoryData;
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

  changeDescription: (value: string) => void;
  validationDescription: (value: string) => void;

  changeParentId: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  validationParentId: (value: string) => void;
  deleteParentId: (id: number) => void;

  changePhoto: (e: ChangeEvent<HTMLInputElement>) => void;
  validationPhoto: (value: string) => void;
  setPhoto: (value: string) => void;
  setSubmitting: (value: boolean) => void;

  changeStatus: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;

  changeError: (value: string[]) => void;

  validationStatus: (value: string) => void;

  validationButtonNext: () => void;

  setIsReady: (value: boolean) => void;

  onFetching: () => void;

  onInit: () => void;

  returnInit: () => void;

  onAdd: () => void;

  goAdd: () => void;

  update: () => void;

  onUpdate: () => void;

  offCategory: () => void;

  add: () => void;

  getById: (id: number) => CategoryAttributes | null;

  getChildren: (id: number) => CategoryAttributes[];

  goUpdate: (id: number) => void;

  sortByName: (
    items: CategoryAttributes[] | null,
    order: 'asc' | 'desc'
  ) => CategoryAttributes[] | null;

  setOrderList: (order: 'asc' | 'desc') => void;

  setSearchTerm: (value: string) => void;

  filterByName: (
    items: CategoryAttributes[] | null,
    search: string
  ) => CategoryAttributes[] | null;

  setCurrentPage: (value: number) => void;

  getPaginated: (
    items: CategoryAttributes[] | null,
    page: number,
    itemsPerPage: number
  ) => CategoryAttributes[] | null;

  deleteCategory: (id: number) => void;

  handleNewCategory: (newCurrency: CategoryAttributes) => void;

  handleUpdatedCategory: (updatedCurrency: CategoryAttributes) => void;

  handleDeletedCategory: ({ itemId }: DeletedCategory) => void;

  convertResponseToCategories: () => Category[];
};

export type UseCategoryReturn = {
  states: State;
  actions: Actions;
};

export type UseCategoryProps = {
  token: string | null;
  useError: UseErrorReturn;
};

export function useGafpriCategory({
  token,
  useError,
}: UseCategoryProps): UseCategoryReturn {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [category, setCategory] = useState<CategoryData>({
    data: {
      items: getItem(CATEGORY_STORAGE, null),
    },
  });

  const [parentId, setParentId] = useState('');
  const [parentIdValid, setParentIdValid] = useState(false);
  const [parentIdDefault, setParentIdDefault] = useState<SelectDefault>({
    value: 'null',
    label: 'Sin categoría padre',
  });
  const [parentIdOptions, setParentIdOptions] = useState<SelectDefault[]>([]);

  const [childrenFetching, setChildrenFetching] = useState(false);

  const [description, setDescription] = useState('');
  const [descriptionValid, setDescriptionValid] = useState(true);
  const [photo, setPhoto] = useState(
    'https://categorygafpri.s3.us-east-2.amazonaws.com/gafpri-placeholder.png'
  );
  const [photoValid, setPhotoValid] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [status, setStatus] = useState('active');
  const [statusValid, setStatusValid] = useState(false);
  const [statusDefault, setStatusDefault] = useState<SelectDefault>({
    value: 'active',
    label: 'Activo',
  });
  const statusOptions: SelectDefault[] = [
    { value: 'active', label: 'Activo' },
    { value: 'disabled', label: 'Desactivo' },
  ];

  const [isReady, setIsReady] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const { error } = useError.states;
  const { changeError } = useError.actions;

  const [currentId, setCurrentId] = useState(0);
  const [orderList, setOrderList] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const infoReset = (): void => {
    setName('');
    setNameValid(false);
    setParentId('');
    setParentIdValid(false);
    setDescription('');
    setDescriptionValid(true);
    setPhoto(
      'https://categorygafpri.s3.us-east-2.amazonaws.com/gafpri-placeholder.png'
    );
    setPhotoValid(false);
    setStatus('active');
    setStatusValid(false);
    setCurrentId(0);
    useError.actions.resetError();
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

  const onChildrenFetching = (): void => {
    setChildrenFetching(true);
  };

  const outChildrenFetching = (): void => {
    setChildrenFetching(false);
  };

  // Funciones de Validacion
  const validationName = (value: string): boolean => {
    return generalValidationName({
      value,
      setValid: setNameValid,
      currentValid: nameValid,
    });
  };

  const validationParentId = (newValue: string): boolean => {
    return generalValidationParentId({
      value: newValue,
      setValid: setParentIdValid,
      currentValid: parentIdValid,
    });
  };

  const validationDescription = (newValue: string): boolean => {
    return generalValidationDescription({
      value: newValue,
      setValid: setDescriptionValid,
      currentValid: descriptionValid,
    });
  };

  const validationStatus = (newValue: string): boolean => {
    return generalValidationStatus({
      value: newValue,
      setValid: setStatusValid,
      currentValid: statusValid,
    });
  };

  const validationPhoto = (value: string): boolean => {
    return generalValidationPhotoCategory({
      value,
      setValid: setPhotoValid,
      currentValid: photoValid,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [
        nameValid,
        parentIdValid,
        descriptionValid,
        photoValid,
        statusValid,
      ],
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

  const changeParentId = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeParentId({
      options,
      validation: validationParentId,
      setDefault: setParentIdDefault,
      setValue: setParentId,
    });
  };

  const changeDescription = (value: string): void => {
    generalChangeDescription({
      value,
      validation: validationDescription,
      setValue: setDescription,
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

  // Manejo de la data de Category

  const getLastItem: CategoryAttributes | null = category.data?.items
    ? category.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: CategoryData): void => {
    saveItem(CATEGORY_STORAGE, newData.data.items);
  };

  const setData = (newData: CategoryData): void => {
    setCategory(newData);
    setDataStorage(newData);
  };

  const onCategory = (newData: CategoryData): void => {
    setData(newData);
    onIsReady();
  };

  const offCategory = (): void => {
    setData({
      data: {
        items: null,
      },
    });
    notReady();
  };

  const getCategory = async (): Promise<void> => {
    const lastEntryDateAndCount = await getLastEntryDateAndCount(
      CATEGORY_ROUTE
    );
    const lastDate = getLastItem?.modifiedAt || null;
    const count = category.data.items?.length || 0;

    if (
      category.data.items === null ||
      `${lastEntryDateAndCount?.date}` !== `${lastDate}` ||
      `${lastEntryDateAndCount?.count}` !== `${count}`
    ) {
      if (token) {
        gafpriFetch({
          initMethod: 'GET',
          initRoute: CATEGORY_ROUTE,
          initToken: { token },
          functionFetching: notReady,
          functionSuccess: onCategory,
        });
      } else {
        notReady();
      }
    } else {
      onIsReady();
    }
  };

  const handleNewCategory = (newCategory: CategoryAttributes): void => {
    setCategory((prevState) => {
      const newData = {
        data: {
          items: [...(prevState.data.items || []), newCategory],
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleUpdatedCategory = (updatedCategory: CategoryAttributes): void => {
    setCategory((prevState) => {
      const updatedItems =
        prevState.data.items?.map((item) =>
          `${item.id}` === `${updatedCategory.id}` ? updatedCategory : item
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

  const handleDeletedCategory = ({ itemId }: DeletedCategory): void => {
    setCategory((prevState) => {
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
    if (
      nameValid &&
      parentIdValid &&
      descriptionValid &&
      photoValid &&
      statusValid &&
      token
    ) {
      const payload = {
        name,
        parentId: parentId === '' ? null : parseInt(parentId, 10),
        status,
      };

      const updatedPayload = {
        ...payload,
        ...(description ? { description } : {}),
        ...(photo ? { photo } : {}),
      };

      gafpriFetch({
        initMethod: 'POST',
        initRoute: CATEGORY_ROUTE,
        initCredentials: updatedPayload,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError,
      });
    }
  };

  function getById(id: number): CategoryAttributes | null {
    return category.data.items?.find((item) => item.id === id) || null;
  }

  function getChildren(id: number): CategoryAttributes[] {
    const children = category.data.items?.filter(
      (item) => item.parentId === id && item.id !== id
    );
    if (!children) {
      return [];
    }
    return children;
  }

  function deleteParentId(id: number): void {
    if (token) {
      const currentCategory = getById(id);
      const data = {
        ...(currentCategory?.name ? { name: currentCategory.name } : {}),
        ...(currentCategory?.status ? { status: currentCategory.status } : {}),
        ...(currentCategory?.description
          ? { description: currentCategory.description }
          : {}),
        ...(currentCategory?.photo ? { photo: currentCategory.photo } : {}),
        parentId: null,
      };
      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${CATEGORY_ROUTE}/${id}`,
        initCredentials: data,
        initToken: { token },
        functionFetching: onChildrenFetching,
        functionSuccess: outChildrenFetching,
        functionError: outChildrenFetching,
      });
    }
  }

  const update = (): void => {
    if (
      nameValid &&
      parentIdValid &&
      descriptionValid &&
      photoValid &&
      statusValid &&
      token
    ) {
      const payload = {
        name,
        parentId: parentId === '' ? null : parseInt(parentId, 10),
        status,
      };

      const updatedPayload = {
        ...payload,
        ...(description ? { description } : {}),
        ...(photo ? { photo } : {}),
      };

      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${CATEGORY_ROUTE}/${currentId}`,
        initCredentials: updatedPayload,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError,
      });
    }
  };

  const deleteCategory = (id: number): void => {
    if (token) {
      gafpriFetch({
        initMethod: 'DELETE',
        initRoute: `${CATEGORY_ROUTE}/${id}`,
        initToken: { token },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorDelete,
      });
    }
  };

  function sortByName(
    items: CategoryAttributes[] | null,
    order: 'asc' | 'desc'
  ): CategoryAttributes[] | null {
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

  const filterByName = (
    items: CategoryAttributes[] | null,
    search: string
  ): CategoryAttributes[] | null => {
    if (items) {
      return items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return null;
  };

  const getPaginated = (
    items: CategoryAttributes[] | null,
    page: number,
    itemPerPage: number
  ): CategoryAttributes[] | null => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    if (items) {
      return items.slice(startIndex, endIndex);
    }

    return null;
  };

  const convertResponseToCategories = (): Category[] => {
    const rootCategories: Category[] = [];

    if (!category.data.items) return [];

    category.data.items.forEach((response) => {
      const categoryList: Category = {
        id: response.id,
        name: response.name,
        children: [],
      };

      if (!response.parentId) {
        rootCategories.push(categoryList);
      }
    });

    // Segundo paso: Mapear hijos y agregar a las categorías principales
    category.data.items.forEach((response) => {
      const categoryList: Category = {
        id: response.id,
        name: response.name,
        children: [],
      };

      if (response.parentId) {
        const parentCategory = rootCategories.find(
          (rootCategory) => rootCategory.id === response.parentId
        );

        if (parentCategory && parentCategory.children) {
          parentCategory.children.push(categoryList);
          // Actualizar la referencia de parentCategory en rootCategories
          const rootIndex = rootCategories.findIndex(
            (rootCategory) => rootCategory.id === parentCategory.id
          );
          if (rootIndex !== -1) {
            rootCategories[rootIndex] = parentCategory;
          }
        }
      }
    });

    return rootCategories;
  };

  /**
   * Effects
   *
   *
   */

  React.useEffect(() => {
    getCategory();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  React.useEffect(() => {
    const children = getChildren(currentId);
    setParentIdOptions([
      { value: 'null', label: 'Sin categoría padre' },
      ...(category.data.items
        ? category.data.items
            .filter((item) => {
              // Condición para filtrar items
              if (currentId === item.id) {
                return false;
              }
              if (children && children.some((child) => child.id === item.id)) {
                return false;
              }
              return true;
            })
            .map((item) => ({ value: `${item.id}`, label: `${item.name}` }))
        : []),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId, category]);

  /**
   * Export
   *
   *
   */
  const states = {
    name,
    nameValid,

    parentId,
    parentIdValid,
    parentIdDefault,
    parentIdOptions,
    childrenFetching,

    description,
    descriptionValid,

    photo,
    photoValid,
    submitting,

    status,
    statusValid,
    statusDefault,
    statusOptions,

    isReady,
    isFetching,
    isAdd,
    isInit,
    isUpdate,

    category,

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

    changeDescription,
    validationDescription,

    changeParentId,
    validationParentId,
    deleteParentId,

    changePhoto,
    validationPhoto,
    setPhoto,
    setSubmitting,

    changeStatus,
    validationStatus,

    changeError,

    validationButtonNext,

    setIsReady,

    onFetching,
    onInit,
    returnInit,
    onAdd,
    goAdd,
    onUpdate,

    offCategory,
    add,
    update,
    getById,
    getChildren,
    goUpdate,
    sortByName,
    setOrderList,
    setSearchTerm,
    filterByName,
    setCurrentPage,
    getPaginated,
    deleteCategory,
    handleNewCategory,
    handleUpdatedCategory,
    handleDeletedCategory,
    convertResponseToCategories,
  };

  return {
    states,
    actions,
  };
}
