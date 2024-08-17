import React, { useState } from 'react';
import { gafpriFetch } from '../helpers';
import { getItem, saveItem } from '../Context';
import {
  TOKEN_STORAGE,
  CURRENT_USER_STORAGE,
  LOGIN_ROUTE,
  LOGIN_TOKEN_ROUTE,
} from '../constants';
import {
  generalValidationUserName,
  generalValidationSinglePassword,
  generalValidationButtonNext,
} from '../Validations';
import { generalChangeUserName, generalChangePassword } from '../Changes';

type CurrentUserAttributes = {
  id: number;
  role: string;
  name: string;
  lastName: string;
  photo: string;
};

interface LoginCredentials {
  userName: string;
  password: string;
}

type State = {
  isLogin: boolean;

  userName: string;
  userNameValid: boolean;

  password: string;
  passwordValid: boolean;

  token: string | null;
  currentUser: CurrentUserAttributes | null;
};

type Actions = {
  validationUserName: (value: string) => boolean;

  validationPassword: (value: string) => boolean;

  validationButtonNext: () => void;

  changeUserName: (value: string) => void;

  changePassword: (value: string) => void;

  login: () => Promise<void>;

  logout: () => void;
};

export type UseLoginReturn = {
  states: State;
  actions: Actions;
};

export type LoginAttributes = {
  onFetching: () => void;
  onInit: () => void;
  globalResetInfo: () => void;
};

export function useGafpriLogin({
  onFetching,
  onInit,
  globalResetInfo,
}: LoginAttributes): UseLoginReturn {
  const [isLogin, setIsLogin] = useState(false);

  const [userName, setUserName] = useState<string>('');
  const [userNameValid, setUserNameValid] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [passwordValid, setPasswordValid] = useState<boolean>(false);

  const [token, setToken] = useState<string | null>(
    getItem(TOKEN_STORAGE, null)
  );
  const [currentUser, setCurrentUser] = useState<CurrentUserAttributes | null>(
    getItem(CURRENT_USER_STORAGE, null)
  );

  // Funciones de Validacion
  const validationUserName = (value: string): boolean => {
    return generalValidationUserName({
      value,
      setValid: setUserNameValid,
      currentValid: userNameValid,
    });
  };

  const validationPassword = (value: string): boolean => {
    return generalValidationSinglePassword({
      value,
      setValid: setPasswordValid,
      currentValid: passwordValid,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [userNameValid, passwordValid],
    });
  };

  // Funciones de cambios
  const changeUserName = (value: string): void => {
    generalChangeUserName({
      value,
      validation: validationUserName,
      setValue: setUserName,
    });
  };

  const changePassword = (value: string): void => {
    generalChangePassword({
      value,
      validation: validationPassword,
      setValue: setPassword,
    });
  };

  const changeToken = (value: string | null): void => {
    setToken(value);
    saveItem(TOKEN_STORAGE, value);
  };

  const changeCurrentUser = (value: CurrentUserAttributes | null): void => {
    setCurrentUser(value);
    saveItem(CURRENT_USER_STORAGE, value);
  };

  const resetInfo = (): void => {
    changeUserName('');
    changePassword('');
  };

  /**
   * Actions
   *
   *
   */

  const onLoginSuccess = (data: {
    user?: CurrentUserAttributes | undefined;
    token?: string | undefined;
  }): void => {
    if (data && data.user && data.token) {
      changeToken(data.token);
      changeCurrentUser(data.user);
      setIsLogin(true);
      onInit();
      resetInfo();
    }
  };

  const logout = (): void => {
    setIsLogin(false);
    changeToken(null);
    changeCurrentUser(null);
    globalResetInfo();
    onInit();
  };

  const login = async (): Promise<void> => {
    if (userNameValid && passwordValid) {
      gafpriFetch({
        initMethod: 'POST',
        initRoute: LOGIN_ROUTE,
        initCredentials: {
          userName,
          password,
        },
        functionFetching: onFetching,
        functionSuccess: onLoginSuccess as (data: LoginCredentials) => void,
        functionError: logout,
      });
    }
  };

  const checkLoginToken = async (): Promise<void> => {
    if (token) {
      gafpriFetch({
        initMethod: 'GET',
        initRoute: LOGIN_TOKEN_ROUTE,
        initToken: {
          token,
        },
        functionFetching: onFetching,
        functionSuccess: onLoginSuccess,
        functionError: logout,
      });
    }
  };

  /**
   * Effects
   *
   *
   */

  React.useEffect(() => {
    if (token && currentUser) {
      checkLoginToken();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  const states = {
    isLogin,

    userName,
    userNameValid,

    password,
    passwordValid,

    token,
    currentUser,
  };

  const actions = {
    validationUserName,

    validationPassword,

    validationButtonNext,

    changeUserName,

    changePassword,

    login,

    logout,
  };

  return {
    states,
    actions,
  };
}
