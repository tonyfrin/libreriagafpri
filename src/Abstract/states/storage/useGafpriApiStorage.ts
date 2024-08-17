import { UseErrorReturn } from '../../../states';
import {
  gafpriFetch,
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import { UseGafpriPagesStorageReturn } from './useGafpriPagesStorage';
import { UseGafpriAttributesStorageReturn } from './useGafpriAttributesStorage';
import { STORAGE_ROUTE } from '../../../constants';

type Actions = {
  update: () => void;

  add: () => void;

  erase: (id: number) => void;
};

export type UseGafpriApiStorageReturn = {
  actions: Actions;
};

export type UseGafpriApiStorageProps = {
  token: string | null;
  useError: UseErrorReturn;
  pages: UseGafpriPagesStorageReturn;
  attributes: UseGafpriAttributesStorageReturn;
};

export function useGafpriApiStorage({
  token,
  useError,
  pages,
  attributes,
}: UseGafpriApiStorageProps): UseGafpriApiStorageReturn {
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
      attributes.states.address1Valid &&
      attributes.states.address2Valid &&
      attributes.states.cityValid &&
      attributes.states.stateCountryValid &&
      attributes.states.countryValid &&
      attributes.states.postCodeValid &&
      attributes.states.siteValid &&
      token
    ) {
      gafpriFetch({
        initMethod: 'POST',
        initRoute: STORAGE_ROUTE,
        initCredentials: {
          name: attributes.states.name,
          address1: attributes.states.address1,
          address2: attributes.states.address2,
          city: attributes.states.city,
          state: attributes.states.state,
          country: attributes.states.country,
          postCode: attributes.states.postCode,
          sitesId: attributes.states.site,
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
      attributes.states.address1Valid &&
      attributes.states.address2Valid &&
      attributes.states.cityValid &&
      attributes.states.stateCountryValid &&
      attributes.states.countryValid &&
      attributes.states.postCodeValid &&
      attributes.states.siteValid &&
      token
    ) {
      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${STORAGE_ROUTE}/${attributes.states.currentId}`,
        initCredentials: {
          name: attributes.states.name,
          address1: attributes.states.address1,
          address2: attributes.states.address2,
          city: attributes.states.city,
          state: attributes.states.state,
          country: attributes.states.country,
          postCode: attributes.states.postCode,
          sitesId: attributes.states.site,
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
        initRoute: `${STORAGE_ROUTE}/${id}`,
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
