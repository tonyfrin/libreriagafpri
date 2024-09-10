import type { UseErrorReturn } from '../../../../states';
import {
  gafpriFetch,
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../../helpers';
import { UseGafpriPagesShippingAreasReturn } from './useGafpriPagesShippingAreas';
import { UseGafpriAttributesShippingAreasReturn } from './useGafpriAttributesShippingAreas';
import { SHIPPING_AREAS_ROUTE } from '../../../../constants';
import { ShippingAreasAttributes } from './useGafpriDataShippingAreas';

type Items = {
  items?: ShippingAreasAttributes;
};

type Data = {
  data?: Items;
  success?: boolean;
  name: string;
  postalCodes: string[];
  cities: string[];
  states: string[];
  countries: string[];
};

/* eslint-disable @typescript-eslint/no-explicit-any */
type Actions = {
  add: () => Promise<any>;
  update: () => void;
  erase: (id: number) => Promise<any>;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export type UseGafpriApiShippingAreasReturn = {
  actions: Actions;
};

export type UseGafpriApiShippingAreasProps = {
  token: string | null;
  useError: UseErrorReturn;
  pages: UseGafpriPagesShippingAreasReturn;
  attributes: UseGafpriAttributesShippingAreasReturn;
};

export function useGafpriApiShippingAreas({
  token,
  useError,
  pages,
  attributes,
}: UseGafpriApiShippingAreasProps): UseGafpriApiShippingAreasReturn {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const add = async (): Promise<any> => {
    try {
      if (attributes.states.nameValid && token) {
        const data = await gafpriFetch<Data>({
          initMethod: 'POST',
          initRoute: SHIPPING_AREAS_ROUTE,
          initCredentials: {
            name: attributes.states.name,
            postalCodes: attributes.states.postalCodes,
            cities: attributes.states.cities,
            states: attributes.states.statesCountries,
            countries: attributes.states.countries,
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

  const newErrorUpdate = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: pages.actions.onUpdate,
    });
  };

  const update = (): void => {
    if (attributes.states.nameValid && token) {
      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${SHIPPING_AREAS_ROUTE}/${attributes.states.currentId}`,
        initCredentials: {
          name: attributes.states.name,
        },
        initToken: { token },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorUpdate,
      });
    }
  };

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const erase = async (id: number): Promise<any> => {
    try {
      if (token) {
        const data = await gafpriFetch<Data>({
          initMethod: 'DELETE',
          initRoute: `${SHIPPING_AREAS_ROUTE}/${id}`,
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
