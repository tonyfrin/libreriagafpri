import { useState } from 'react';
import {
  generalValidationUserName,
  generalValidationSinglePassword,
} from '../../../../Validations';
import { PaymentMethodsAttributes } from '../../paymentMethods';
import { PostsAttributes } from '../../../../states';

export type CreditOpeningAttributes = {
  postsId?: number;
  accountsReceivablePostsId?: number;
  paymentMethodsPostsId?: number;
  entityId?: number;
  authorizedLogin?: string;
  authorizedPassword?: string;
  description?: string;
  amount: number;
  balance?: number;
  payDayLimit?: string;
  defaulted?: boolean;
  paymentMethods?: PaymentMethodsAttributes;
  posts?: PostsAttributes;
};

type State = {
  entityId: number;
  authorizedLogin: string;
  authorizedLoginValid: boolean;
  authorizedPassword: string;
  authorizedPasswordValid: boolean;
  amount: number;
};

type Actions = {
  infoReset: () => void;
  setEntityId: (value: number) => void;
  setAuthorizedLogin: (value: string) => void;
  setAuthorizedPassword: (value: string) => void;
  setAmount: (value: number) => void;
  validationAuthorizedLogin: (value: string) => boolean;
  validationAuthorizedPassword: (value: string) => boolean;
};

export type UseGafpriAttributesCreditOpeningReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriAttributesCreditOpening(): UseGafpriAttributesCreditOpeningReturn {
  const [entityId, setEntityId] = useState(0);
  const [authorizedLogin, setAuthorizedLogin] = useState('');
  const [authorizedLoginValid, setAuthorizedLoginValid] = useState(false);
  const [authorizedPassword, setAuthorizedPassword] = useState('');
  const [authorizedPasswordValid, setAuthorizedPasswordValid] = useState(false);
  const [amount, setAmount] = useState(0);

  const infoReset = (): void => {
    setEntityId(0);
    setAuthorizedLogin('');
    setAuthorizedLoginValid(false);
    setAuthorizedPassword('');
    setAuthorizedPasswordValid(false);
    setAmount(0);
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

  /**
   * Export
   *
   *
   */
  const states = {
    entityId,
    authorizedLogin,
    authorizedLoginValid,
    authorizedPassword,
    authorizedPasswordValid,
    amount,
  };

  const actions = {
    infoReset,
    setEntityId,
    setAuthorizedLogin,
    setAuthorizedPassword,
    setAmount,
    validationAuthorizedLogin,
    validationAuthorizedPassword,
  };

  return {
    states,
    actions,
  };
}
