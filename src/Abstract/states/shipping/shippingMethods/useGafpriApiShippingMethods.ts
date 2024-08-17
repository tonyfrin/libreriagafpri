import {
  gafpriFetch,
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../../helpers';
import { UseErrorReturn } from '../../../../states';
import { UseGafpriPagesShippingMethodsReturn } from './useGafpriPagesShippingMethods';
import { UseGafpriAttributesShippingMethodsReturn } from './useGafpriAttributesShippingMethods';
import { SHIPPING_METHODS_ROUTE } from '../../../../constants';

type Actions = {
  add: () => void;
  update: () => void;
  erase: (id: number) => void;
};

export type UseGafpriApiShippingMethodsReturn = {
  actions: Actions;
};

export type UseGafpriApiShippingMethodsProps = {
  token: string | null;
  useError: UseErrorReturn;
  pages: UseGafpriPagesShippingMethodsReturn;
  attributes: UseGafpriAttributesShippingMethodsReturn;
};

export function useGafpriApiShippingMethods({
  token,
  useError,
  pages,
  attributes,
}: UseGafpriApiShippingMethodsProps): UseGafpriApiShippingMethodsReturn {
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
      attributes.states.shippingAreasIdValid &&
      attributes.states.nameValid &&
      attributes.states.descriptionValid &&
      attributes.states.costValid &&
      attributes.states.typeValid &&
      attributes.states.shippingTimeDaysValid &&
      attributes.states.availableShippingServicesValid &&
      attributes.states.taxStatusValid &&
      attributes.states.taxClassValid &&
      attributes.states.statusValid &&
      token
    ) {
      gafpriFetch({
        initMethod: 'POST',
        initRoute: SHIPPING_METHODS_ROUTE,
        initCredentials: {
          shippingAreasId: attributes.states.shippingAreasId,
          name: attributes.states.name,
          description: attributes.states.description,
          cost: attributes.states.cost,
          type: attributes.states.type,
          shippingTimeDays: attributes.states.shippingTimeDays,
          availableShippingServices:
            attributes.states.availableShippingServices,
          taxStatus: attributes.states.taxStatus,
          taxClass: attributes.states.taxClass,
          status: attributes.states.status,
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
      attributes.states.descriptionValid &&
      attributes.states.costValid &&
      attributes.states.typeValid &&
      attributes.states.shippingTimeDaysValid &&
      attributes.states.availableShippingServicesValid &&
      attributes.states.taxStatusValid &&
      attributes.states.taxClassValid &&
      attributes.states.statusValid &&
      token
    ) {
      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${SHIPPING_METHODS_ROUTE}/${attributes.states.currentId}`,
        initCredentials: {
          name: attributes.states.name,
          description: attributes.states.description,
          cost: attributes.states.cost,
          type: attributes.states.type,
          shippingTimeDays: attributes.states.shippingTimeDays,
          availableShippingServices:
            attributes.states.availableShippingServices,
          taxStatus: attributes.states.taxStatus,
          taxClass: attributes.states.taxClass,
          status: attributes.states.status,
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
        initRoute: `${SHIPPING_METHODS_ROUTE}/${id}`,
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
    add,
    update,
    erase,
  };

  return {
    actions,
  };
}
