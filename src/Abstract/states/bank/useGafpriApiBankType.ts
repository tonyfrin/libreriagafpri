import { UseErrorReturn } from '../../../states';
import {
  gafpriFetch,
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import { UseGafpriPagesBankTypeReturn } from './useGafpriPagesBankType';
import { UseGafpriAttributesBankTypeReturn } from './useGafpriAttributesBankType';
import { BANK_TYPE_ROUTE } from '../../../constants';

type Actions = {
  update: () => void;

  add: () => void;

  erase: (id: number) => void;
};

export type UseGafpriApiBankTypeReturn = {
  actions: Actions;
};

export type UseGafpriApiBankTypeProps = {
  token: string | null;
  useError: UseErrorReturn;
  pages: UseGafpriPagesBankTypeReturn;
  attributes: UseGafpriAttributesBankTypeReturn;
};

export function useGafpriApiBankType({
  token,
  useError,
  pages,
  attributes,
}: UseGafpriApiBankTypeProps): UseGafpriApiBankTypeReturn {
  const newErrorAdd = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: pages.actions.onAdd,
    });
  };

  const add = (): void => {
    if (
      attributes.states.nameValid &&
      attributes.states.sitesIdValid &&
      attributes.states.bankNameValid &&
      attributes.states.accountValid &&
      attributes.states.accountTypeValid &&
      attributes.states.currencyValid &&
      attributes.states.settingsValid &&
      token
    ) {
      gafpriFetch({
        initMethod: 'POST',
        initRoute: BANK_TYPE_ROUTE,
        initCredentials: {
          sitesId: attributes.states.sitesId,
          name: attributes.states.name,
          bankName: attributes.states.bankName,
          account: attributes.states.account,
          accountType: attributes.states.accountType,
          currenciesId: attributes.states.currency,
          settings: attributes.states.settings,
          posts: {
            visibility: 'public',
          },
        },
        initToken: { token },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorAdd,
      });
    }
  };

  const newErrorUpdate = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: pages.actions.onUpdate,
    });
  };

  const update = (): void => {
    if (
      attributes.states.nameValid &&
      attributes.states.bankNameValid &&
      attributes.states.accountValid &&
      attributes.states.accountTypeValid &&
      attributes.states.currencyValid &&
      attributes.states.settingsValid &&
      token
    ) {
      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${BANK_TYPE_ROUTE}/${attributes.states.currentId}`,
        initCredentials: {
          name: attributes.states.name,
          bankName: attributes.states.bankName,
          account: attributes.states.account,
          accountType: attributes.states.accountType,
          settings: attributes.states.settings,
          posts: {
            visibility: 'public',
          },
        },
        initToken: { token },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorUpdate,
      });
    }
  };

  const newErrorDelete = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: pages.actions.returnInit,
    });
  };

  const erase = (id: number): void => {
    if (token) {
      gafpriFetch({
        initMethod: 'DELETE',
        initRoute: `${BANK_TYPE_ROUTE}/${id}`,
        initToken: { token },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorDelete,
      });
    }
  };

  /**
   * Export
   *
   *
   */

  const actions = {
    update,
    add,
    erase,
  };

  return {
    actions,
  };
}
