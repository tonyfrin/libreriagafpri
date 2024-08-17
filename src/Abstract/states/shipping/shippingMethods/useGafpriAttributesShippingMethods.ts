import { useState } from 'react';
import { SingleValue } from 'react-select';
import { SelectDefault } from '../../../../helpers';
import {
  generalValidationCost,
  generalValidationShippingAreasId,
  generalValidationShippingTimeDays,
  generalValidationAvailableShippingServices,
  generalValidationTaxStatus,
  generalValidationTaxClass,
  generalValidationStatus,
  generalValidationType,
  generalValidationButtonNext,
  generalValidationName,
  generalValidationDescription,
} from '../../../../Validations';
import {
  generalChangeName,
  generalChangeShippingAreas,
  generalChangeCost,
  generalChangeShippingTimeDays,
  generalChangeAvailableShippingServices,
  generalChangeTaxStatus,
  generalChangeTaxClass,
  generalChangeDescription,
  generalChangeStatus,
  generalChangeType,
} from '../../../../Changes';
import {
  OPTIONS_SHIPPING_METHODS_TYPE,
  OPTIONS_SHIPPING_METHODS_TYPE_DEFAULT,
  OPTIONS_SHIPPING_SERVICES,
  OPTIONS_SHIPPING_SERVICES_DEFAULT,
  OPTIONS_SHIPPING_METHODS_STATUS,
  OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT,
  TAX_STATUS,
  TAX_STATUS_DEFAULT,
  SHIPPING_METHODS_ROUTE,
} from '../../../../constants';

type State = {
  shippingAreasId: string;
  shippingAreasIdValid: boolean;

  name: string;
  nameValid: boolean;

  description: string;
  descriptionValid: boolean;

  cost: string;
  costValid: boolean;

  type: string;
  typeValid: boolean;
  typeDefault: SelectDefault;
  typeOptions: SelectDefault[];

  shippingTimeDays: string;
  shippingTimeDaysValid: boolean;

  availableShippingServices: string;
  availableShippingServicesValid: boolean;
  availableShippingServicesDefault: SelectDefault;
  availableShippingServicesOptions: SelectDefault[];

  taxStatus: string;
  taxStatusValid: boolean;
  taxStatusDefault: SelectDefault;
  taxStatusOptions: SelectDefault[];

  taxClass: string;
  taxClassValid: boolean;
  taxClassDefault: SelectDefault;
  taxClassOptions: SelectDefault[];

  status: string;
  statusValid: boolean;
  statusDefault: SelectDefault;
  statusOptions: SelectDefault[];

  currentId: number;
};

type Actions = {
  infoReset: () => void;

  validationShippingAreasId: (value: number) => boolean;
  validationName: (value: string) => boolean;
  validationDescription: (value: string) => boolean;
  validationCost: (value: number) => boolean;
  validationType: (value: string) => boolean;
  validationShippingTimeDays: (value: number) => boolean;
  validationAvailableShippingServices: (value: string) => boolean;
  validationTaxStatus: (value: string) => boolean;
  validationTaxClass: (value: string) => boolean;
  validationStatus: (value: string) => boolean;
  validationButtonNext: () => void;

  changeShippingAreasId: (value: string) => void;
  changeName: (value: string) => void;
  changeDescription: (value: string) => void;
  changeCost: (value: string) => void;
  changeType: (options: SingleValue<{ value: string; label: string }>) => void;
  changeShippingTimeDays: (value: string) => void;
  changeAvailableShippingServices: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  changeTaxStatus: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  changeTaxClass: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  changeStatus: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;

  setCurrentId: (value: number) => void;
};

export type UseGafpriAttributesShippingMethodsReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriAttributesShippingMethods(): UseGafpriAttributesShippingMethodsReturn {
  const [shippingAreasId, setShippingAreasId] = useState('');
  const [shippingAreasIdValid, setShippingAreasIdValid] = useState(false);

  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [description, setDescription] = useState('');
  const [descriptionValid, setDescriptionValid] = useState(false);

  const [cost, setCost] = useState('');
  const [costValid, setCostValid] = useState(false);

  const [type, setType] = useState('');
  const [typeValid, setTypeValid] = useState(false);
  const [typeDefault, setTypeDefault] = useState<SelectDefault>(
    OPTIONS_SHIPPING_METHODS_TYPE_DEFAULT
  );
  const typeOptions: SelectDefault[] = OPTIONS_SHIPPING_METHODS_TYPE;

  const [shippingTimeDays, setShippingTimeDays] = useState('');
  const [shippingTimeDaysValid, setShippingTimeDaysValid] = useState(false);

  const [availableShippingServices, setAvailableShippingServices] =
    useState('');
  const [availableShippingServicesValid, setAvailableShippingServicesValid] =
    useState(false);
  const [
    availableShippingServicesDefault,
    setAvailableShippingServicesDefault,
  ] = useState<SelectDefault>(OPTIONS_SHIPPING_SERVICES_DEFAULT);
  const availableShippingServicesOptions: SelectDefault[] =
    OPTIONS_SHIPPING_SERVICES;

  const [taxStatus, setTaxStatus] = useState('');
  const [taxStatusValid, setTaxStatusValid] = useState(false);
  const [taxStatusDefault, setTaxStatusDefault] =
    useState<SelectDefault>(TAX_STATUS_DEFAULT);
  const [taxStatusOptions, setTaxStatusOptions] =
    useState<SelectDefault[]>(TAX_STATUS);

  const [taxClass, setTaxClass] = useState('');
  const [taxClassValid, setTaxClassValid] = useState(false);
  const [taxClassDefault, setTaxClassDefault] = useState<SelectDefault>({
    label: '',
    value: '',
  });
  const taxClassOptions: SelectDefault[] = [
    { label: 'prueba', value: 'Prueba' },
  ];

  const [status, setStatus] = useState(
    OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT.value
  );
  const [statusValid, setStatusValid] = useState(true);
  const [statusDefault, setStatusDefault] = useState<SelectDefault>(
    OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT
  );
  const statusOptions: SelectDefault[] = OPTIONS_SHIPPING_METHODS_STATUS;

  const [currentId, setCurrentId] = useState(0);

  const infoReset = (): void => {
    setShippingAreasId('');
    setShippingAreasIdValid(false);
    setName('');
    setNameValid(false);
    setDescription('');
    setDescriptionValid(false);
    setCost('');
    setCostValid(false);
    setType('');
    setTypeValid(false);
    setTypeDefault(OPTIONS_SHIPPING_METHODS_TYPE_DEFAULT);
    setShippingTimeDays('');
    setShippingTimeDaysValid(false);
    setAvailableShippingServices('');
    setAvailableShippingServicesValid(false);
    setAvailableShippingServicesDefault(OPTIONS_SHIPPING_SERVICES_DEFAULT);
    setTaxStatus('');
    setTaxStatusValid(false);
    setTaxStatusDefault(TAX_STATUS_DEFAULT);
    setTaxStatusOptions(TAX_STATUS);
    setTaxClass('');
    setTaxClassValid(false);
    setStatus(OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT.value);
    setStatusValid(true);
    setStatusDefault(OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT);
    setCurrentId(0);
  };

  // Funciones de Validacion
  const validationShippingAreasId = (value: number): boolean => {
    return generalValidationShippingAreasId({
      value,
      setValid: setShippingAreasIdValid,
      currentValid: shippingAreasIdValid,
      required: true,
      inputId: SHIPPING_METHODS_ROUTE,
    });
  };

  const validationName = (value: string): boolean => {
    return generalValidationName({
      value,
      setValid: setNameValid,
      currentValid: nameValid,
      required: true,
      inputId: SHIPPING_METHODS_ROUTE,
    });
  };

  const validationDescription = (value: string): boolean => {
    return generalValidationDescription({
      value,
      setValid: setDescriptionValid,
      currentValid: descriptionValid,
      required: true,
      inputId: SHIPPING_METHODS_ROUTE,
    });
  };

  const validationCost = (value: number): boolean => {
    return generalValidationCost({
      value,
      setValid: setCostValid,
      currentValid: costValid,
      required: true,
      inputId: SHIPPING_METHODS_ROUTE,
    });
  };

  const validationType = (value: string): boolean => {
    return generalValidationType({
      value,
      setValid: setTypeValid,
      currentValid: typeValid,
      inputId: SHIPPING_METHODS_ROUTE,
    });
  };

  const validationShippingTimeDays = (value: number): boolean => {
    return generalValidationShippingTimeDays({
      value,
      setValid: setShippingTimeDaysValid,
      currentValid: shippingTimeDaysValid,
      required: true,
      inputId: SHIPPING_METHODS_ROUTE,
    });
  };

  const validationAvailableShippingServices = (value: string): boolean => {
    return generalValidationAvailableShippingServices({
      newValue: value,
      setValid: setAvailableShippingServicesValid,
      currentValid: availableShippingServicesValid,
      inputId: SHIPPING_METHODS_ROUTE,
    });
  };

  const validationTaxStatus = (value: string): boolean => {
    return generalValidationTaxStatus({
      newValue: value,
      setValid: setTaxStatusValid,
      currentValid: taxStatusValid,
      inputId: SHIPPING_METHODS_ROUTE,
    });
  };

  const validationTaxClass = (value: string): boolean => {
    return generalValidationTaxClass({
      newValue: value,
      setValid: setTaxClassValid,
      currentValid: taxClassValid,
      inputId: SHIPPING_METHODS_ROUTE,
    });
  };

  const validationStatus = (value: string): boolean => {
    return generalValidationStatus({
      value,
      setValid: setStatusValid,
      currentValid: statusValid,
      inputId: SHIPPING_METHODS_ROUTE,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [
        nameValid,
        descriptionValid,
        costValid,
        typeValid,
        shippingTimeDaysValid,
        availableShippingServicesValid,
        taxStatusValid,
        taxClassValid,
        statusValid,
      ],
      inputId: SHIPPING_METHODS_ROUTE,
    });
  };

  // Funciones de cambios

  const changeShippingAreasId = (value: string): void => {
    generalChangeShippingAreas({
      value,
      validation: validationShippingAreasId,
      setValue: setShippingAreasId,
    });
  };

  const changeName = (value: string): void => {
    generalChangeName({
      value,
      validation: validationName,
      setValue: setName,
    });
  };

  const changeDescription = (value: string): void => {
    generalChangeDescription({
      value,
      validation: validationDescription,
      setValue: setDescription,
    });
  };

  const changeCost = (value: string): void => {
    generalChangeCost({
      value,
      validation: validationCost,
      setValue: setCost,
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

  const changeShippingTimeDays = (value: string): void => {
    generalChangeShippingTimeDays({
      value,
      validation: validationShippingTimeDays,
      setValue: setShippingTimeDays,
    });
  };

  const changeAvailableShippingServices = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeAvailableShippingServices({
      newValue: options,
      validation: validationAvailableShippingServices,
      setDefault: setAvailableShippingServicesDefault,
      setValue: setAvailableShippingServices,
    });
  };

  const changeTaxStatus = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeTaxStatus({
      options,
      validation: validationTaxStatus,
      setDefault: setTaxStatusDefault,
      setValue: setTaxStatus,
    });
  };

  const changeTaxClass = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeTaxClass({
      options,
      validation: validationTaxClass,
      setDefault: setTaxClassDefault,
      setValue: setTaxClass,
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
    shippingAreasId,
    shippingAreasIdValid,

    name,
    nameValid,

    description,
    descriptionValid,

    cost,
    costValid,

    type,
    typeValid,
    typeDefault,
    typeOptions,

    shippingTimeDays,
    shippingTimeDaysValid,

    availableShippingServices,
    availableShippingServicesValid,
    availableShippingServicesDefault,
    availableShippingServicesOptions,

    taxStatus,
    taxStatusValid,
    taxStatusDefault,
    taxStatusOptions,

    taxClass,
    taxClassValid,
    taxClassDefault,
    taxClassOptions,

    status,
    statusValid,
    statusDefault,
    statusOptions,

    currentId,
  };

  const actions = {
    infoReset,

    validationShippingAreasId,
    validationName,
    validationDescription,
    validationCost,
    validationType,
    validationShippingTimeDays,
    validationAvailableShippingServices,
    validationTaxStatus,
    validationTaxClass,
    validationStatus,
    validationButtonNext,

    changeShippingAreasId,
    changeName,
    changeDescription,
    changeCost,
    changeType,
    changeShippingTimeDays,
    changeAvailableShippingServices,
    changeTaxStatus,
    changeTaxClass,
    changeStatus,

    setCurrentId,
  };

  return {
    states,
    actions,
  };
}
