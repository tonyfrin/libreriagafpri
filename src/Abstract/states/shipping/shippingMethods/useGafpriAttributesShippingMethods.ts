import { useState } from 'react';
import { SingleValue } from 'react-select';
import { SelectDefault } from '../../../../helpers';
import {
  generalValidationCost,
  generalValidationShippingAreasId,
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
  generalChangeDescription,
  generalChangeStatus,
  generalChangeType,
} from '../../../../Changes';
import {
  OPTIONS_SHIPPING_METHODS_TYPE,
  OPTIONS_SHIPPING_METHODS_TYPE_DEFAULT,
  OPTIONS_SHIPPING_METHODS_STATUS,
  OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT,
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

  status: string;
  statusValid: boolean;
  statusDefault: SelectDefault;
  statusOptions: SelectDefault[];

  roles: number[];
  workDaysHours: Record<number, string>;
  preparationTime: string;
  pickupTime: string;
  deliveryTime: string;
  typeStart: string;
  valueStart: string;
  conditional: boolean;

  typeConditional?: string;
  typeConditionalOptions: { label: string; value: string }[];

  valueConditional?: string;

  currentId: number;
};

type Actions = {
  infoReset: () => void;

  validationShippingAreasId: (value: number) => boolean;
  validationName: (value: string) => boolean;
  validationDescription: (value: string) => boolean;
  validationCost: (value: number) => boolean;
  validationType: (value: string) => boolean;
  validationStatus: (value: string) => boolean;
  validationButtonNext: () => void;

  changeShippingAreasId: (value: string) => void;
  changeName: (value: string) => void;
  changeDescription: (value: string) => void;
  changeCost: (value: string) => void;
  changeType: (options: SingleValue<{ value: string; label: string }>) => void;
  changeStatus: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;

  setRoles: (value: number[]) => void;
  setWorkDaysHours: (value: Record<number, string>) => void;
  setPreparationTime: (value: string) => void;
  setPickupTime: (value: string) => void;
  setDeliveryTime: (value: string) => void;
  setTypeStart: (value: string) => void;
  setValueStart: (value: string) => void;
  changeConditional: (value: boolean) => void;
  changeTypeConditional: (
    option: SingleValue<{ value: string; label: string }>
  ) => void;
  changeValueConditional: (
    option: SingleValue<{ value: string; label: string }>
  ) => void;

  setCurrentId: (value: number) => void;
  pushRole: (value: string) => void;
  removeRole: (value: number) => void;

  pushWorkDayHour: (day: number, hours: string) => void;
  removeWorkDayHour: (day: number) => void;
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

  const [status, setStatus] = useState(
    OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT.value
  );
  const [statusValid, setStatusValid] = useState(true);
  const [statusDefault, setStatusDefault] = useState<SelectDefault>(
    OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT
  );
  const statusOptions: SelectDefault[] = OPTIONS_SHIPPING_METHODS_STATUS;

  const [roles, setRoles] = useState<number[]>([]);

  const pushRole = (value: string): void => {
    const role = parseInt(value, 10);
    if (!Number.isNaN(role) && role > 0) {
      setRoles((prevValue) => {
        if (!prevValue.includes(role)) {
          return [...prevValue, role];
        }
        return prevValue;
      });
    }
  };

  const removeRole = (value: number): void => {
    setRoles(roles.filter((item) => item !== value));
  };

  const [workDaysHours, setWorkDaysHours] = useState<Record<number, string>>(
    {}
  );

  const pushWorkDayHour = (day: number, hours: string): void => {
    setWorkDaysHours((prevValue) => ({
      ...prevValue,
      [day]: hours,
    }));
  };

  const removeWorkDayHour = (day: number): void => {
    setWorkDaysHours((prevValue) => {
      const { [day]: _, ...rest } = prevValue; // eslint-disable-line @typescript-eslint/no-unused-vars
      return rest;
    });
  };

  const [preparationTime, setPreparationTime] = useState<string>('');

  const [pickupTime, setPickupTime] = useState<string>('');

  const [deliveryTime, setDeliveryTime] = useState<string>('');

  const [typeStart, setTypeStart] = useState<string>('');

  const [valueStart, setValueStart] = useState<string>('');

  const [conditional, setConditional] = useState(false);

  const [typeConditional, setTypeConditional] = useState<string | undefined>(
    undefined
  );
  const typeConditionalOptions: { label: string; value: string }[] = [
    { label: 'Valor de pedido', value: 'total_order' },
    { label: 'Cantidad de productos', value: 'total_qty' },
  ];

  const [valueConditional, setValueConditional] = useState<string | undefined>(
    undefined
  );

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
    setStatus(OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT.value);
    setStatusValid(true);
    setStatusDefault(OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT);
    setCurrentId(0);

    setRoles([]);
    setWorkDaysHours({});
    setPreparationTime('');
    setPickupTime('');
    setDeliveryTime('');
    setTypeStart('');
    setValueStart('');
    setConditional(false);
    setTypeConditional(undefined);
    setValueConditional(undefined);
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

  const validationStatus = (value: string): boolean => {
    return generalValidationStatus({
      value,
      setValid: setStatusValid,
      currentValid: statusValid,
      inputId: SHIPPING_METHODS_ROUTE,
    });
  };

  const validationWorkDaysHours = (): boolean => {
    return Object.keys(workDaysHours).length > 0;
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [
        nameValid,
        descriptionValid,
        costValid,
        typeValid,
        statusValid,
        roles.length > 0,
        validationWorkDaysHours(),
        parseInt(preparationTime, 10) > 0,
        parseInt(pickupTime, 10) > 0,
        parseInt(deliveryTime, 10) > 0,
        typeStart !== '',
        valueStart !== '',
        !conditional ||
          (typeConditional !== undefined &&
            typeConditional !== '' &&
            valueConditional !== undefined &&
            valueConditional !== ''),
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

  const changeConditional = (value: boolean): void => {
    setConditional(value);
    if (!value) {
      setTypeConditional(undefined);
      setValueConditional(undefined);
    }
  };

  const changeTypeConditional = (
    option: SingleValue<{ value: string; label: string }>
  ): void => {
    if (option) {
      setTypeConditional(option.value);
    }
  };

  const changeValueConditional = (
    option: SingleValue<{ value: string; label: string }>
  ): void => {
    if (option) {
      setValueConditional(option.value);
    }
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

    status,
    statusValid,
    statusDefault,
    statusOptions,

    roles,
    workDaysHours,
    preparationTime,
    pickupTime,
    deliveryTime,
    typeStart,
    valueStart,
    conditional,
    typeConditional,
    typeConditionalOptions,
    valueConditional,

    currentId,
  };

  const actions = {
    infoReset,

    validationShippingAreasId,
    validationName,
    validationDescription,
    validationCost,
    validationType,
    validationStatus,
    validationButtonNext,

    changeShippingAreasId,
    changeName,
    changeDescription,
    changeCost,
    changeType,
    changeStatus,

    setRoles,
    setWorkDaysHours,
    setPreparationTime,
    setPickupTime,
    setDeliveryTime,
    setTypeStart,
    setValueStart,
    changeConditional,
    changeTypeConditional,
    changeValueConditional,

    setCurrentId,
    pushRole,
    removeRole,
    pushWorkDayHour,
    removeWorkDayHour,
  };

  return {
    states,
    actions,
  };
}
