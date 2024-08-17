import { useState } from 'react';
import {
  generalValidationButtonNext,
  generalValidationCustomerId,
  generalValidationUserName,
  generalValidationSinglePassword,
  generalValidationCreditLimit,
  generalValidationCreditTimeToPay,
} from '../../../Validations';
import { generalChangeUserName, generalChangePassword } from '../../../Changes';
import { EntityAttributes } from '../entity';
import { ACCOUNTS_RECEIVABLE_ROUTE } from '../../../constants';

type State = {
  entityId: number;
  entityIdValid: boolean;
  authorizedLogin: string;
  authorizedLoginValid: boolean;
  authorizedPassword: string;
  authorizedPasswordValid: boolean;
  limit: string;
  limitValid: boolean;
  timeToPay: string;
  timeToPayValid: boolean;
  currentId: number;
  entity: EntityAttributes | null;
};

type Actions = {
  infoReset: () => void;
  validationEntityId: (value: number) => boolean;
  validationAuthorizedLogin: (value: string) => boolean;
  validationAuthorizedPassword: (value: string) => boolean;
  validationLimit: (value: string) => boolean;
  validationTimeToPay: (value: string) => boolean;
  validationButtonNext: () => void;
  validationButtonNextLogin: () => void;
  changeEntityId: (value: number) => void;
  changeAuthorizedLogin: (value: string) => void;
  changeAuthorizedPassword: (value: string) => void;
  changeLimit: (value: string) => void;
  changeTimeToPay: (value: string) => void;
  setCurrentId: (value: number) => void;
  setEntity: (value: EntityAttributes) => void;
};

export type UseGafpriAttributesAccountsReceivableReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriAttributesAccountsReceivable(): UseGafpriAttributesAccountsReceivableReturn {
  const [entityId, setEntityId] = useState(0);
  const [entityIdValid, setEntityIdValid] = useState(false);

  const [authorizedLogin, setAuthorizedLogin] = useState('');
  const [authorizedLoginValid, setAuthorizedLoginValid] = useState(false);

  const [authorizedPassword, setAuthorizedPassword] = useState('');
  const [authorizedPasswordValid, setAuthorizedPasswordValid] = useState(false);

  const [limit, setLimit] = useState('');
  const [limitValid, setLimitValid] = useState(false);

  const [timeToPay, setTimeToPay] = useState('');
  const [timeToPayValid, setTimeToPayValid] = useState(false);

  const [entity, setEntity] = useState<EntityAttributes | null>(null);
  const [currentId, setCurrentId] = useState(0);

  const infoReset = (): void => {
    setEntityId(0);
    setEntityIdValid(false);
    setAuthorizedLogin('');
    setAuthorizedLoginValid(false);
    setAuthorizedPassword('');
    setAuthorizedPasswordValid(false);
    setLimit('');
    setLimitValid(false);
    setTimeToPay('');
    setTimeToPayValid(false);
    setCurrentId(0);
  };

  // Funciones de Validacion
  const validationEntityId = (value: number): boolean => {
    return generalValidationCustomerId({
      value,
      setValid: setEntityIdValid,
      currentValid: entityIdValid,
    });
  };

  const validationAuthorizedLogin = (value: string): boolean => {
    return generalValidationUserName({
      value,
      setValid: setAuthorizedLoginValid,
      currentValid: authorizedLoginValid,
    });
  };

  const validationAuthorizedPassword = (value: string): boolean => {
    return generalValidationSinglePassword({
      value,
      setValid: setAuthorizedPasswordValid,
      currentValid: authorizedPasswordValid,
    });
  };

  const validationLimit = (value: string): boolean => {
    return generalValidationCreditLimit({
      value,
      setValid: setLimitValid,
      currentValid: limitValid,
    });
  };

  const validationTimeToPay = (value: string): boolean => {
    return generalValidationCreditTimeToPay({
      value,
      setValid: setTimeToPayValid,
      currentValid: timeToPayValid,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [entityIdValid, limitValid, timeToPayValid],
      inputId: ACCOUNTS_RECEIVABLE_ROUTE,
    });
  };

  const validationButtonNextLogin = (): void => {
    generalValidationButtonNext({
      validations: [
        entityIdValid,
        authorizedLoginValid,
        authorizedPasswordValid,
        limitValid,
        timeToPayValid,
      ],
      inputId: `${ACCOUNTS_RECEIVABLE_ROUTE}-login`,
    });
  };

  // Funciones de cambios
  const changeEntityId = (value: number): void => {
    const valid = validationEntityId(value);
    if (valid) setEntityId(value);
  };

  const changeAuthorizedLogin = (value: string): void => {
    generalChangeUserName({
      value,
      validation: validationAuthorizedLogin,
      setValue: setAuthorizedLogin,
    });
  };

  const changeAuthorizedPassword = (value: string): void => {
    generalChangePassword({
      value,
      validation: validationAuthorizedPassword,
      setValue: setAuthorizedPassword,
    });
  };

  const changeLimit = (value: string): void => {
    const valid: boolean = validationLimit(value);
    if (valid) {
      setLimit(value);
    }
  };

  const changeTimeToPay = (value: string): void => {
    const valid: boolean = validationTimeToPay(value);
    if (valid) {
      setTimeToPay(value);
    }
  };

  /**
   * Export
   *
   *
   */
  const states = {
    entityId,
    entityIdValid,
    authorizedLogin,
    authorizedLoginValid,
    authorizedPassword,
    authorizedPasswordValid,
    limit,
    limitValid,
    timeToPay,
    timeToPayValid,
    entity,
    currentId,
  };

  const actions = {
    infoReset,
    validationEntityId,
    validationAuthorizedLogin,
    validationAuthorizedPassword,
    validationLimit,
    validationTimeToPay,
    validationButtonNext,
    validationButtonNextLogin,
    changeEntityId,
    changeAuthorizedLogin,
    changeAuthorizedPassword,
    changeLimit,
    changeTimeToPay,
    setCurrentId,
    setEntity,
  };

  return {
    states,
    actions,
  };
}
