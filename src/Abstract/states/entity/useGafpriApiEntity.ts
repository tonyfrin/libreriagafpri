import { gafpriFetch } from '../../../helpers';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import { ENTITY_ROUTE } from '../../../constants';
import type { UseErrorReturn } from '../../../states';
import type { UseGafpriPagesEntityReturn } from './useGafpriPagesEntity';
import type {
  UseGafpriAttributesEntityReturn,
  DocumentIdAttributes,
  AddressAttributes,
  EntityAttributes,
} from './useGafpriAttributesEntity';

export type UseGafpriApiEntityReturnDataCreate = {
  item?: EntityAttributes;
  success?: boolean;
  name?: string;
  type?: string;
  status?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  photo?: string;
  documentId?: {
    id?: number;
    typeDocumentIdId?: number | null;
    index?: string | undefined;
    digit?: string;
  };
  address?: {
    id?: number;
    type?: string;
    address1?: string;
    address2?: string | undefined;
    city?: string;
    state?: string;
    country?: string;
    postCode?: string | undefined;
  };
};

export type UseGafpriApiEntityReturnDataUpdate = {
  items?: EntityAttributes;
  success?: boolean;
  documentId?: DocumentIdAttributes[];
  address?: AddressAttributes[];
};

export type UseGafpriApiEntityReturnDataDelete = {
  items?: EntityAttributes;
  success?: boolean;
  documentId?: {
    id?: number;
  }[];
  address?: {
    id?: number;
  }[];
};

export type UseGafpriApiEntityReturn = {
  actions: {
    addAddress: () => void;
    changeAddress: (id: number) => void;

    newError: (
      newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
    ) => void;

    newErrorUpdate: (
      newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
    ) => void;

    add: () => void;
    addDocument: () => void;
    deleteAddress: (id: number) => void;
    deleteDocument: (id: number) => void;
    update: () => void;
  };
};

export type UseGafpriApiEntityProps = {
  usePages: UseGafpriPagesEntityReturn;
  useAttributes: UseGafpriAttributesEntityReturn;
  useError: UseErrorReturn;
  token: string | null;
  getAddData?: (data: UseGafpriApiEntityReturnDataCreate) => void;
  getUpdateData?: (
    data:
      | UseGafpriApiEntityReturnDataCreate
      | UseGafpriApiEntityReturnDataUpdate
      | UseGafpriApiEntityReturnDataDelete
  ) => void;
};

export const useGafpriApiEntity = ({
  usePages,
  useAttributes,
  useError,
  token,
  getAddData,
  getUpdateData,
}: UseGafpriApiEntityProps): UseGafpriApiEntityReturn => {
  const newError = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: usePages.actions.onAdd,
    });
  };

  const newErrorUpdate = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: usePages.actions.onUpdate,
    });
  };

  const successAdd = (data: UseGafpriApiEntityReturnDataCreate): void => {
    usePages.actions.returnInit();
    if (getAddData) {
      getAddData(data);
    }
  };

  const add = (): void => {
    if (
      useAttributes.states.nameValid &&
      useAttributes.states.lastNameValid &&
      useAttributes.states.typeDocumentIdIdValid &&
      useAttributes.states.indexValid &&
      useAttributes.states.digitValid &&
      useAttributes.states.addressTypeValid &&
      useAttributes.states.address1Valid &&
      useAttributes.states.address2Valid &&
      useAttributes.states.cityValid &&
      useAttributes.states.stateCountryValid &&
      useAttributes.states.countryValid &&
      useAttributes.states.postCodeValid &&
      useAttributes.states.emailValid &&
      useAttributes.states.phoneValid &&
      useAttributes.states.typeValid &&
      useAttributes.states.photoValid &&
      useAttributes.states.statusValid &&
      token
    ) {
      const payload = {
        name: useAttributes.states.name,
        type: useAttributes.states.type,
        status: useAttributes.states.status,
        ...(useAttributes.states.lastName
          ? { lastName: useAttributes.states.lastName }
          : {}),
        ...(useAttributes.states.email
          ? { email: useAttributes.states.email }
          : {}),
        ...(useAttributes.states.phone
          ? { phone: useAttributes.states.phone }
          : {}),
        ...(useAttributes.states.photo
          ? { photo: useAttributes.states.photo }
          : {}),
        documentId: {
          typeDocumentIdId: useAttributes.states.typeDocumentIdId,
          ...(useAttributes.states.index !== 'null'
            ? { index: useAttributes.states.index }
            : {}),
          digit: useAttributes.states.digit,
        },
        address: {
          type: useAttributes.states.addressType,
          address1: useAttributes.states.address1,
          ...(useAttributes.states.address2
            ? { address2: useAttributes.states.address2 }
            : {}),
          city: useAttributes.states.city,
          state: useAttributes.states.state,
          country: useAttributes.states.country,
          ...(useAttributes.states.postCode
            ? { postCode: useAttributes.states.postCode }
            : {}),
        },
      };

      gafpriFetch<UseGafpriApiEntityReturnDataCreate>({
        initMethod: 'POST',
        initRoute: ENTITY_ROUTE,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: successAdd,
        functionError: newError,
      });
    }
  };

  const successUpdate = (data: UseGafpriApiEntityReturnDataCreate): void => {
    usePages.actions.returnInit();
    if (getUpdateData) {
      getUpdateData(data);
    }
  };

  const update = (): void => {
    if (
      useAttributes.states.nameValid &&
      useAttributes.states.lastNameValid &&
      useAttributes.states.typeValid &&
      useAttributes.states.photoValid &&
      useAttributes.states.statusValid &&
      useAttributes.states.phoneValid &&
      useAttributes.states.emailValid &&
      token
    ) {
      const payload = {
        ...(useAttributes.states.name
          ? { name: useAttributes.states.name }
          : {}),
        ...(useAttributes.states.type
          ? { type: useAttributes.states.type }
          : {}),
        ...(useAttributes.states.status
          ? { status: useAttributes.states.status }
          : {}),
        ...(useAttributes.states.lastName
          ? { lastName: useAttributes.states.lastName }
          : {}),
        ...(useAttributes.states.email
          ? { email: useAttributes.states.email }
          : {}),
        ...(useAttributes.states.phone
          ? { phone: useAttributes.states.phone }
          : {}),
        ...(useAttributes.states.photo
          ? { photo: useAttributes.states.photo }
          : {}),
      };

      gafpriFetch<UseGafpriApiEntityReturnDataCreate>({
        initMethod: 'PATCH',
        initRoute: `${ENTITY_ROUTE}/${useAttributes.states.currentId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: successUpdate,
        functionError: newErrorUpdate,
      });
    }
  };

  const successUpdateAddressDocumentId = (
    data:
      | UseGafpriApiEntityReturnDataUpdate
      | UseGafpriApiEntityReturnDataDelete
  ): void => {
    usePages.actions.goUpdate(useAttributes.states.currentId);
    usePages.actions.returnInit();
    if (getUpdateData) {
      getUpdateData(data);
    }
  };

  const updateAddress = (newAddress: AddressAttributes[]): void => {
    if (token) {
      const payload = {
        address: newAddress,
      };

      gafpriFetch<UseGafpriApiEntityReturnDataUpdate>({
        initMethod: 'PATCH',
        initRoute: `${ENTITY_ROUTE}/${useAttributes.states.currentId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: successUpdateAddressDocumentId,
        functionError: newErrorUpdate,
      });
    }
  };

  const updateDocument = (newDocument: DocumentIdAttributes[]): void => {
    if (token) {
      const payload = {
        documentId: newDocument,
      };

      gafpriFetch<UseGafpriApiEntityReturnDataUpdate>({
        initMethod: 'PATCH',
        initRoute: `${ENTITY_ROUTE}/${useAttributes.states.currentId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: () =>
          usePages.actions.goUpdate(useAttributes.states.currentId),
        functionError: newErrorUpdate,
      });
    }
  };

  const addAddress = (): void => {
    if (
      useAttributes.states.addressTypeValid &&
      useAttributes.states.address1Valid &&
      useAttributes.states.address2Valid &&
      useAttributes.states.cityValid &&
      useAttributes.states.stateCountryValid &&
      useAttributes.states.countryValid &&
      useAttributes.states.postCodeValid
    ) {
      let updateNewAddress = useAttributes.states.address;
      if (useAttributes.states.addressType === 'bill') {
        updateNewAddress = useAttributes.actions.changeTypeInAllAddresses(
          useAttributes.states.address,
          'shipping'
        );
      }
      const newAddress = {
        type: useAttributes.states.addressType,
        address1: useAttributes.states.address1,
        ...(useAttributes.states.address2
          ? { address2: useAttributes.states.address2 }
          : {}),
        city: useAttributes.states.city,
        state: useAttributes.states.state,
        country: useAttributes.states.country,
        ...(useAttributes.states.postCode
          ? { postCode: useAttributes.states.postCode }
          : {}),
        entityId: useAttributes.states.currentId,
      };
      updateNewAddress.push(newAddress);

      updateAddress(updateNewAddress);
    }
  };

  const addDocument = (): void => {
    if (
      useAttributes.states.typeDocumentIdIdValid &&
      useAttributes.states.indexValid &&
      useAttributes.states.digitValid &&
      useAttributes.states.documentPhotoValid
    ) {
      const newDocument = [
        {
          typeDocumentIdId: useAttributes.states.typeDocumentIdId,
          ...(useAttributes.states.index !== 'null'
            ? { index: useAttributes.states.index }
            : {}),
          digit: useAttributes.states.digit,
          photo: useAttributes.states.documentPhoto,
        },
      ];
      updateDocument(newDocument);
    }
  };

  const changeAddress = (id: number): void => {
    const newAddress = useAttributes.actions.changeTypeInAllAddresses(
      useAttributes.states.address,
      'shipping'
    );
    const updateNewAddress = useAttributes.actions.updateAddressTypeById(
      newAddress,
      id,
      'bill'
    );
    useAttributes.actions.setAddress(updateNewAddress);
    updateAddress(updateNewAddress);
  };

  const deleteAddress = (id: number): void => {
    if (token) {
      const payload = {
        address: [
          {
            id,
          },
        ],
      };

      gafpriFetch<UseGafpriApiEntityReturnDataDelete>({
        initMethod: 'DELETE',
        initRoute: `${ENTITY_ROUTE}/${useAttributes.states.currentId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: () =>
          usePages.actions.goUpdate(useAttributes.states.currentId),
        functionError: newErrorUpdate,
      });
    }
  };

  const deleteDocument = (id: number): void => {
    if (useAttributes.states.documentId.length > 1 && token) {
      const payload = {
        documentId: [
          {
            id,
          },
        ],
      };

      gafpriFetch<UseGafpriApiEntityReturnDataDelete>({
        initMethod: 'DELETE',
        initRoute: `${ENTITY_ROUTE}/${useAttributes.states.currentId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: () =>
          usePages.actions.goUpdate(useAttributes.states.currentId),
        functionError: newErrorUpdate,
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('No se puede borrar el documento principal');
    }
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    addAddress,
    changeAddress,

    newError,
    newErrorUpdate,
    add,
    addDocument,
    deleteAddress,
    deleteDocument,
    update,
  };

  return {
    actions,
  };
};
