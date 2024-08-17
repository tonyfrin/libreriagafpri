import { useState } from 'react';
import { SingleValue } from 'react-select';
import type { UseErrorReturn } from '../../../states';
import {
  generalValidationName,
  generalValidationParentId,
  generalValidationDescription,
  generalValidationStatus,
  generalValidationButtonNext,
} from '../../../Validations';
import type { SelectDefault } from '../../../helpers';
import {
  generalChangeName,
  generalChangeParentId,
  generalChangeDescription,
  generalChangeStatus,
} from '../../../Changes';

type State = {
  name: string;
  nameValid: boolean;

  parentId: string;
  parentIdValid: boolean;
  parentIdDefault: SelectDefault;
  parentIdOptions: SelectDefault[];

  description: string;
  descriptionValid: boolean;

  status: string;
  statusValid: boolean;
  statusDefault: SelectDefault;
  statusOptions: SelectDefault[];

  currentId: number;
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
  changeStatus: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;

  validationStatus: (value: string) => void;

  validationButtonNext: () => void;

  infoReset: () => void;

  setCurrentId: (id: number) => void;

  setParentIdOptions: (value: SelectDefault[]) => void;
};

export type UseGafpriAttributesExpensesTypeReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriAttributesExpensesTypeProps = {
  useError: UseErrorReturn;
};

export function useGafpriAttributesExpensesType({
  useError,
}: UseGafpriAttributesExpensesTypeProps): UseGafpriAttributesExpensesTypeReturn {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [parentId, setParentId] = useState('');
  const [parentIdValid, setParentIdValid] = useState(false);
  const [parentIdDefault, setParentIdDefault] = useState<SelectDefault>({
    value: '',
    label: 'Sin categoría padre',
  });
  const [parentIdOptions, setParentIdOptions] = useState<SelectDefault[]>([]);

  const [description, setDescription] = useState('');
  const [descriptionValid, setDescriptionValid] = useState(true);

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

  const [currentId, setCurrentId] = useState(0);

  const infoReset = (): void => {
    setName('');
    setNameValid(false);
    setParentId('');
    setParentIdValid(false);
    setDescription('');
    setDescriptionValid(true);
    setStatus('active');
    setStatusValid(false);
    setCurrentId(0);
    useError.actions.resetError();
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

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [nameValid, parentIdValid, descriptionValid, statusValid],
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
    name,
    nameValid,

    parentId,
    parentIdValid,
    parentIdDefault,
    parentIdOptions,

    description,
    descriptionValid,

    status,
    statusValid,
    statusDefault,
    statusOptions,

    currentId,
  };

  const actions = {
    changeName,
    validationName,

    changeDescription,
    validationDescription,

    changeParentId,
    validationParentId,
    changeStatus,

    validationStatus,

    validationButtonNext,

    infoReset,

    setCurrentId,
    setParentIdOptions,
  };

  return {
    states,
    actions,
  };
}
