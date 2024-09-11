import { gafpriFetch } from '../../../../helpers';
import { UseGafpriAttributesShippingMethodsReturn } from './useGafpriAttributesShippingMethods';
import { SHIPPING_METHODS_ROUTE } from '../../../../constants';

/* eslint-disable @typescript-eslint/no-explicit-any */
type Actions = {
  add: () => Promise<any>;
  update: () => Promise<any>;
  erase: (id: number) => Promise<any>;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export type UseGafpriApiShippingMethodsReturn = {
  actions: Actions;
};

export type UseGafpriApiShippingMethodsProps = {
  token: string | null;
  attributes: UseGafpriAttributesShippingMethodsReturn;
};

export function useGafpriApiShippingMethods({
  token,
  attributes,
}: UseGafpriApiShippingMethodsProps): UseGafpriApiShippingMethodsReturn {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const add = async (): Promise<any> => {
    try {
      if (token) {
        const data = await gafpriFetch({
          initMethod: 'POST',
          initRoute: SHIPPING_METHODS_ROUTE,
          initCredentials: {
            shippingAreasId: attributes.states.shippingAreasId,
            name: attributes.states.name,
            description: attributes.states.description,
            cost: attributes.states.cost,
            type: attributes.states.type,
            roles: attributes.states.roles,
            workDaysHours: attributes.states.workDaysHours,
            preparationTime: attributes.states.preparationTime,
            pickupTime: attributes.states.pickupTime,
            deliveryTime: attributes.states.deliveryTime,
            typeStart: attributes.states.typeStart,
            valueStart: attributes.states.valueStart,
            conditional: attributes.states.conditional,
            typeConditional: attributes.states.typeConditional,
            valueConditional: attributes.states.valueConditional,
            status: attributes.states.status,
          },
          initToken: { token },
        });
        return data;
      }
      return null;
    } catch (error) {
      return error;
    }
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const update = async (): Promise<any> => {
    try {
      if (token) {
        const data = await gafpriFetch({
          initMethod: 'PATCH',
          initRoute: `${SHIPPING_METHODS_ROUTE}/${attributes.states.currentId}`,
          initCredentials: {
            shippingAreasId: attributes.states.shippingAreasId,
            name: attributes.states.name,
            description: attributes.states.description,
            cost: attributes.states.cost,
            type: attributes.states.type,
            roles: attributes.states.roles,
            workDaysHours: attributes.states.workDaysHours,
            preparationTime: attributes.states.preparationTime,
            pickupTime: attributes.states.pickupTime,
            deliveryTime: attributes.states.deliveryTime,
            typeStart: attributes.states.typeStart,
            valueStart: attributes.states.valueStart,
            conditional: attributes.states.conditional,
            typeConditional: attributes.states.typeConditional,
            valueConditional: attributes.states.valueConditional,
            status: attributes.states.status,
          },
          initToken: { token },
        });
        return data;
      }
      return null;
    } catch (error) {
      return error;
    }
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const erase = async (id: number): Promise<any> => {
    try {
      if (token) {
        const data = await gafpriFetch({
          initMethod: 'DELETE',
          initRoute: `${SHIPPING_METHODS_ROUTE}/${id}`,
          initToken: { token },
        });
        return data;
      }
      return null;
    } catch (error) {
      return error;
    }
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */

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
