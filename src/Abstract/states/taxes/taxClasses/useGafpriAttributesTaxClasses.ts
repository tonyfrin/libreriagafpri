import { useState } from 'react';
import {
  generalValidationDescription,
  generalValidationButtonNext,
  generalValidationName,
} from '../../../../Validations';
import {
  generalChangeDescription,
  generalChangeName,
} from '../../../../Changes';

type State = {
  name: string;
  nameValid: boolean;

  description: string;
  descriptionValid: boolean;

  currentId: number;
};

type Actions = {
  infoReset: () => void;

  validationName: (value: string) => boolean;

  validationDescription: (value: string) => boolean;

  validationButtonNext: () => void;

  changeName: (value: string) => void;

  changeDescription: (value: string) => void;

  setCurrentId: (value: number) => void;
};

export type UseGafpriAttributesTaxClassesReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriAttributesTaxClasses(): UseGafpriAttributesTaxClassesReturn {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [description, setDescription] = useState('');
  const [descriptionValid, setDescriptionValid] = useState(true);

  const [currentId, setCurrentId] = useState(0);

  const infoReset = (): void => {
    setName('');
    setNameValid(false);
    setDescription('');
    setDescriptionValid(true);
    setCurrentId(0);
  };

  // Funciones de Validacion
  const validationName = (value: string): boolean => {
    return generalValidationName({
      value,
      setValid: setNameValid,
      currentValid: nameValid,
    });
  };

  const validationDescription = (value: string): boolean => {
    return generalValidationDescription({
      value,
      setValid: setDescriptionValid,
      currentValid: descriptionValid,
      required: false,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [nameValid, descriptionValid],
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

  const changeDescription = (value: string): void => {
    generalChangeDescription({
      value,
      validation: validationDescription,
      setValue: setDescription,
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
    description,
    descriptionValid,
    currentId,
  };

  const actions = {
    infoReset,
    validationName,
    validationDescription,
    validationButtonNext,
    changeName,
    changeDescription,
    setCurrentId,
  };

  return {
    states,
    actions,
  };
}
