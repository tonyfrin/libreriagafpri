import React, { useState, ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import {
  generalValidationLastName,
  generalValidationName,
  generalValidationTypeDocumentIdId,
  generalValidationButtonNext,
  generalValidationTypeDocumentIdIndex,
  generalValidationTypeDocumentIdDigit,
  generalValidationAddressType,
  generalValidationAddress1,
  generalValidationAddress2,
  generalValidationSelectCity,
  generalValidationSelectStateCountry,
  generalValidationSelectCountry,
  generalValidationPostCode,
  generalValidationEmail,
  generalValidationPhone,
  generalValidationType,
  generalValidationPhotoEntity,
  generalValidationPhotoDocumentId,
  generalValidationStatus,
} from '../../../Validations';
import {
  generalChangeLastName,
  generalChangeName,
  generalChangeTypeDocumentIdId,
  generalChangeDocumentIdIndex,
  generalChangeDocumentIdDigit,
  generalChangeAddressType,
  generalChangeAddress,
  generalChangeCityStateCountry,
  generalChangeCityOptions,
  generalChangeStateCountryOptions,
  generalChangePostCode,
  generalChangeEmail,
  generalChangePhone,
  generalChangeType,
  generalChangePhoto,
  generalChangeStatus,
} from '../../../Changes';
import {
  Countries,
  COUNTRY_DEFAULT,
  STATE_COUNTRY_DEFAULT,
  CITY_DEFAULT,
  ENTITY_ROUTE,
} from '../../../constants';
import type { SelectDefault } from '../../../helpers';
import type { UseTypeDocumentIdReturn, UseErrorReturn } from '../../../states';

export interface typeDocumentId {
  id: number;
  country: string;
  name: string;
}

export interface DocumentIdAttributes {
  id?: number;
  index?: string;
  digit: string;
  photo?: string;
  entityId?: number;
  typeDocumentIdId: number | null;
  typeDocumentId?: typeDocumentId;
}

export interface AddressAttributes {
  id?: number;
  type: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postCode?: string;
  country: string;
  entityId?: number;
}

export interface EntityAttributes {
  id: number;
  login: string;
  email?: string;
  phone?: string;
  type: string;
  name: string;
  lastName?: string;
  status: string;
  photo?: string;
  createdAt: Date;
  modifiedAt: Date;
  address: AddressAttributes[];
  documentId: DocumentIdAttributes[];
}

export type UseGafpriAttributesEntityReturn = {
  states: {
    name: string;
    nameValid: boolean;

    lastName: string;
    lastNameValid: boolean;

    typeDocumentIdId: number | null;
    typeDocumentIdIdValid: boolean;
    typeDocumentIdIdDefault: SelectDefault;
    typeDocumentIdIdOptions: SelectDefault[];

    index: string;
    indexValid: boolean;
    indexDefault: SelectDefault;
    indexOptions: SelectDefault[];

    digit: string;
    digitValid: boolean;

    addressType: string;
    addressTypeValid: boolean;
    addressTypeDefault: SelectDefault;
    addressTypeOptions: SelectDefault[];

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

    type: string;
    typeValid: boolean;
    typeDefault: SelectDefault;
    typeOptions: SelectDefault[];

    photo: string;
    photoValid: boolean;
    submitting: boolean;

    documentPhoto: string;
    documentPhotoValid: boolean;
    documentSubmitting: boolean;

    status: string;
    statusValid: boolean;
    statusDefault: SelectDefault;
    statusOptions: SelectDefault[];

    documentId: DocumentIdAttributes[];

    address: AddressAttributes[];
    addressValid: boolean;

    currentId: number;
    formType: 'personal' | 'legal';
  };
  actions: {
    validationButtonNext: () => void;
    validationButtonNextAddress: () => void;
    validationButtonNextDocument: () => void;
    validationButtonNextUpdate: () => void;
    validationName: (value: string) => boolean;
    validationLastName: (value: string) => boolean;
    validationTypeDocumentIdId: (value: string) => boolean;
    validationIndex: (value: string) => boolean;
    validationDigit: (value: string) => boolean;
    validationAddressType: (value: string) => boolean;
    validationAddress1: (value: string) => boolean;
    validationAddress2: (value: string) => boolean;
    validationCity: (value: string) => boolean;
    validationStateCountry: (value: string) => boolean;
    validationCountry: (value: string) => boolean;
    validationPostCode: (value: string) => boolean;
    validationEmail: (value: string) => boolean;
    validationPhone: (value: string) => boolean;
    validationType: (value: string) => boolean;
    validationPhoto: (value: string) => boolean;
    validationDocumentPhoto: (value: string) => boolean;
    validationStatus: (value: string) => boolean;

    changeName: (value: string) => void;
    changeLastName: (value: string) => void;
    changeTypeDocumentIdId: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeIndex: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeDigit: (newDigit: string) => void;
    changeAddressType: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeAddress1: (value: string) => void;
    changeAddress2: (value: string) => void;
    changeCity: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeCityOptions: () => void;
    changeStateCountry: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changeStateCountryOptions: () => void;
    changeCountry: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    changePostCode: (newPostCode: string) => void;
    changeEmail: (inputValue: string) => void;
    changePhone: (newPhone: string) => void;
    changeType: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;

    changePhoto: (e: ChangeEvent<HTMLInputElement>) => void;
    changeDocumentPhoto: (e: ChangeEvent<HTMLInputElement>) => void;
    setPhoto: (value: string) => void;
    setDocumentPhoto: (value: string) => void;
    setSubmitting: (value: boolean) => void;
    setDocumentSubmitting: (value: boolean) => void;
    changeStatus: (
      options: SingleValue<{ value: string; label: string }>
    ) => void;
    setAddress: (value: AddressAttributes[]) => void;
    setDocumentId: (value: DocumentIdAttributes[]) => void;
    infoReset: () => void;
    setCurrentId: (value: number) => void;
    setType: (value: string) => void;
    setFormType: (value: 'personal' | 'legal') => void;
    changeTypeInAllAddresses: (
      addresses: AddressAttributes[],
      newType: string
    ) => AddressAttributes[];
    updateAddressTypeById: (
      addresses: AddressAttributes[],
      id: number,
      newType: string
    ) => AddressAttributes[];
  };
};

export type UseGafpriAttributesEntityProps = {
  useTypeDocumentId: UseTypeDocumentIdReturn;
  useError: UseErrorReturn;
};

export const useGafpriAttributesEntity = ({
  useTypeDocumentId,
  useError,
}: UseGafpriAttributesEntityProps): UseGafpriAttributesEntityReturn => {
  const [isReset, setIsReset] = useState(true);

  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [lastName, setLastName] = useState('');
  const [lastNameValid, setLastNameValid] = useState(true);

  const [typeDocumentIdId, setTypeDocumentIdId] = useState<number | null>(null);
  const [typeDocumentIdIdValid, setTypeDocumentIdIdValid] = useState(false);
  const [typeDocumentIdIdDefault, setTypeDocumentIdIdDefault] =
    useState<SelectDefault>({ value: '', label: 'Elija el tipo de Documento' });
  const typeDocumentIdIdOptions =
    useTypeDocumentId.states.typeDocumentId.data?.items?.map((item) => {
      const countryName = Countries[0][item.country];
      const label = `${item.name} (${countryName})`;
      return { value: `${item.id}`, label };
    }) || [];

  const [index, setIndex] = useState('');
  const [indexValid, setIndexValid] = useState(false);
  const [indexDefault, setIndexDefault] = useState<SelectDefault>({
    value: '',
    label: 'Elija el tipo de Documento',
  });
  const indexOptions = [
    { label: 'J', value: 'J' },
    { label: 'V', value: 'V' },
    { label: 'G', value: 'G' },
    { label: 'No Aplica', value: 'null' },
  ];

  const [digit, setDigit] = useState('');
  const [digitValid, setDigitValid] = useState(false);

  const [addressType, setAddressType] = useState('bill');
  const [addressTypeValid, setAddressTypeValid] = useState(true);
  const [addressTypeDefault, setAddressTypeDefault] = useState<SelectDefault>({
    value: 'bill',
    label: 'Facturación',
  });
  const addressTypeOptions = [
    { label: 'Envío', value: 'shipping' },
    { label: 'Facturación', value: 'bill' },
  ];

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

  const [type, setType] = useState('');
  const [typeValid, setTypeValid] = useState(false);
  const [typeDefault, setTypeDefault] = useState<SelectDefault>({
    value: '',
    label: 'Elija el tipo de Entidad',
  });
  const typeOptions = [
    { value: 'personal', label: 'Natural' },
    { value: 'legal', label: 'Jurídica' },
  ];

  const [photo, setPhoto] = useState(
    'https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'
  );
  const [photoValid, setPhotoValid] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [documentPhoto, setDocumentPhoto] = useState(
    'https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'
  );
  const [documentPhotoValid, setDocumentPhotoValid] = useState(false);
  const [documentSubmitting, setDocumentSubmitting] = useState(false);

  const [status, setStatus] = useState('active');
  const [statusValid, setStatusValid] = useState(false);
  const [statusDefault, setStatusDefault] = useState<SelectDefault>({
    value: 'active',
    label: 'Activo',
  });
  const statusOptions = [
    { label: 'Activo', value: 'active' },
    { label: 'Inactivo', value: 'inactive' },
  ];

  const [documentId, setDocumentId] = useState<DocumentIdAttributes[]>([]);

  const [address, setAddress] = useState<AddressAttributes[]>([]);
  const [addressValid, setAddressValid] = useState(false);

  const [currentId, setCurrentId] = useState(0);
  const [formType, setFormType] = useState<'personal' | 'legal'>('personal');

  const infoReset = (): void => {
    setIsReset(true);
    setName('');
    setNameValid(false);

    setLastName('');
    setLastNameValid(true);

    setTypeDocumentIdId(null);
    setTypeDocumentIdIdValid(false);
    setTypeDocumentIdIdDefault({
      value: '',
      label: 'Elija el tipo de Documento',
    });

    setIndex('');
    setIndexValid(false);
    setIndexDefault({ value: '', label: 'Elija el tipo de Documento' });

    setDigit('');
    setDigitValid(false);

    setAddressType('bill');
    setAddressTypeValid(true);
    setAddressTypeDefault({ value: 'bill', label: 'Facturación' });

    setAddress1('');
    setAddress1Valid(false);

    setAddress2('');
    setAddress2Valid(true);

    setCity(CITY_DEFAULT.value);
    setCityValid(true);
    setCityDefault(CITY_DEFAULT);

    setStateCountry(STATE_COUNTRY_DEFAULT.value);
    setStateCountryValid(true);
    setStateCountryDefault(STATE_COUNTRY_DEFAULT);
    setStateCountryOptions([]);

    setCountry(COUNTRY_DEFAULT.value);
    setCountryValid(true);
    setCountryDefault(COUNTRY_DEFAULT);

    setPostCode('');
    setPostCodeValid(true);

    setEmail('');
    setEmailValid(false);

    setPhone('');
    setPhoneValid(false);

    setType('');
    setTypeValid(false);
    setTypeDefault({ value: '', label: 'Elija el tipo de Entidad' });

    setPhoto(
      'https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'
    );
    setPhotoValid(false);
    setSubmitting(false);

    setStatus('active');
    setStatusValid(false);
    setStatusDefault({ value: 'active', label: 'Activo' });

    setAddress([]);
    setAddressValid(true);

    setCurrentId(0);
    setFormType('personal');
  };

  // Funciones de Validacion
  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [
        nameValid,
        lastNameValid,
        typeDocumentIdIdValid,
        indexValid,
        digitValid,
        addressTypeValid,
        address1Valid,
        address2Valid,
        cityValid,
        stateCountryValid,
        countryValid,
        postCodeValid,
        emailValid,
        phoneValid,
        typeValid,
        photoValid,
        statusValid,
      ],
      inputId: ENTITY_ROUTE,
    });
  };

  const validationButtonNextAddress = (): void => {
    generalValidationButtonNext({
      validations: [
        addressTypeValid,
        address1Valid,
        address2Valid,
        cityValid,
        stateCountryValid,
        countryValid,
        postCodeValid,
      ],
    });
  };

  const validationButtonNextDocument = (): void => {
    generalValidationButtonNext({
      validations: [
        typeDocumentIdIdValid,
        indexValid,
        digitValid,
        documentPhotoValid,
      ],
    });
  };

  const validationButtonNextUpdate = (): void => {
    generalValidationButtonNext({
      validations: [
        nameValid,
        lastNameValid,
        emailValid,
        phoneValid,
        typeValid,
        photoValid,
        statusValid,
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
      required: false,
    });
  };

  const validationTypeDocumentIdId = (value: string): boolean => {
    return generalValidationTypeDocumentIdId({
      value,
      setValid: setTypeDocumentIdIdValid,
      currentValid: typeDocumentIdIdValid,
    });
  };

  const validationIndex = (value: string): boolean => {
    return generalValidationTypeDocumentIdIndex({
      value,
      setValid: setIndexValid,
      currentValid: indexValid,
    });
  };

  const validationDigit = (value: string): boolean => {
    return generalValidationTypeDocumentIdDigit({
      value,
      setValid: setDigitValid,
      currentValid: digitValid,
    });
  };

  const validationAddressType = (value: string): boolean => {
    return generalValidationAddressType({
      newValue: value,
      setValid: setAddressTypeValid,
      currentValid: addressTypeValid,
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
      required: false,
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
      required: false,
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

  const validationType = (value: string): boolean => {
    return generalValidationType({
      value,
      setValid: setTypeValid,
      currentValid: typeValid,
    });
  };

  const validationPhoto = (value: string): boolean => {
    return generalValidationPhotoEntity({
      value,
      setValid: setPhotoValid,
      currentValid: photoValid,
    });
  };

  const validationDocumentPhoto = (value: string): boolean => {
    return generalValidationPhotoDocumentId({
      value,
      setValid: setDocumentPhotoValid,
      currentValid: documentPhotoValid,
    });
  };

  const validationStatus = (value: string): boolean => {
    return generalValidationStatus({
      value,
      setValid: setStatusValid,
      currentValid: statusValid,
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

  const changeTypeDocumentIdId = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeTypeDocumentIdId({
      options,
      validation: validationTypeDocumentIdId,
      setDefault: setTypeDocumentIdIdDefault,
      setValue: setTypeDocumentIdId,
    });
  };

  const changeIndex = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeDocumentIdIndex({
      options,
      validation: validationIndex,
      setDefault: setIndexDefault,
      setValue: setIndex,
    });
  };

  const changeDigit = (newDigit: string): void => {
    generalChangeDocumentIdDigit({
      value: newDigit,
      validation: validationDigit,
      setValue: setDigit,
    });
  };

  const changeAddressType = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeAddressType({
      options,
      validation: validationAddressType,
      setDefault: setAddressTypeDefault,
      setValue: setAddressType,
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

  const changeTypeInAllAddresses = (
    addresses: AddressAttributes[],
    newType: string
  ): AddressAttributes[] => {
    return addresses.map((item) => ({
      ...item,
      type: newType,
    }));
  };

  const updateAddressTypeById = (
    addresses: AddressAttributes[],
    id: number,
    newType: string
  ): AddressAttributes[] => {
    return addresses.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          type: newType,
        };
      }
      return item;
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
    generalChangePhone({
      value: newPhone,
      validation: validationPhone,
      setValue: setPhone,
    });
  };

  const changeType = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeType({
      options,
      validation: validationType,
      setDefault: setTypeDefault,
      setValue: setType,
    });
  };

  const changePhoto = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    generalChangePhoto({
      e,
      changeError: useError.actions.changeError,
      setSubmitting,
      setPhoto,
      validation: validationPhoto,
    });
  };

  const changeDocumentPhoto = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    generalChangePhoto({
      e,
      changeError: useError.actions.changeError,
      setSubmitting: setDocumentSubmitting,
      setPhoto: setDocumentPhoto,
      validation: validationDocumentPhoto,
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

  const states = {
    name,
    nameValid,

    lastName,
    lastNameValid,

    typeDocumentIdId,
    typeDocumentIdIdValid,
    typeDocumentIdIdDefault,
    typeDocumentIdIdOptions,

    index,
    indexValid,
    indexDefault,
    indexOptions,

    digit,
    digitValid,

    addressType,
    addressTypeValid,
    addressTypeDefault,
    addressTypeOptions,

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

    type,
    typeValid,
    typeDefault,
    typeOptions,

    photo,
    photoValid,
    submitting,

    documentPhoto,
    documentPhotoValid,
    documentSubmitting,

    status,
    statusValid,
    statusDefault,
    statusOptions,

    documentId,

    address,
    addressValid,

    currentId,
    formType,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    validationButtonNext,
    validationButtonNextAddress,
    validationButtonNextDocument,
    validationButtonNextUpdate,
    validationName,
    validationLastName,
    validationTypeDocumentIdId,
    validationIndex,
    validationDigit,
    validationAddressType,
    validationAddress1,
    validationAddress2,
    validationCity,
    validationStateCountry,
    validationCountry,
    validationPostCode,
    validationEmail,
    validationPhone,
    validationType,
    validationPhoto,
    validationDocumentPhoto,
    validationStatus,

    changeName,
    changeLastName,
    changeTypeDocumentIdId,
    changeIndex,
    changeDigit,
    changeAddressType,
    changeAddress1,
    changeAddress2,
    changeCity,
    changeCityOptions,
    changeStateCountry,
    changeStateCountryOptions,
    changeCountry,
    changePostCode,
    changeEmail,
    changePhone,
    changeType,

    changePhoto,
    changeDocumentPhoto,
    setPhoto,
    setDocumentPhoto,
    setSubmitting,
    setDocumentSubmitting,
    changeStatus,
    setAddress,
    setDocumentId,
    infoReset,
    setCurrentId,
    setType,
    setFormType,
    changeTypeInAllAddresses,
    updateAddressTypeById,
  };

  return {
    states,
    actions,
  };
};
