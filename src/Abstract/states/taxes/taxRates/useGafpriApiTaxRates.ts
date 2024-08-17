import {
  gafpriFetch,
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../../helpers';
import { UseErrorReturn } from '../../../../states';
import { UseGafpriPagesTaxRatesReturn } from './useGafpriPagesTaxRates';
import { UseGafpriAttributesTaxRatesReturn } from './useGafpriAttributesTaxRates';
import { TAX_RATES_ROUTE } from '../../../../constants';

type Actions = {
  add: () => void;
  update: () => void;
  erase: (id: number) => void;
};

export type UseGafpriApiTaxRatesReturn = {
  actions: Actions;
};

export type UseGafpriApiTaxRatesProps = {
  token: string | null;
  useError: UseErrorReturn;
  pages: UseGafpriPagesTaxRatesReturn;
  attributes: UseGafpriAttributesTaxRatesReturn;
};

export function useGafpriApiTaxRates({
  token,
  useError,
  pages,
  attributes,
}: UseGafpriApiTaxRatesProps): UseGafpriApiTaxRatesReturn {
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
      attributes.states.taxClassesIdValid &&
      attributes.states.rateValid &&
      attributes.states.cityValid &&
      attributes.states.stateCountryValid &&
      attributes.states.countryValid &&
      attributes.states.postCodeValid &&
      token
    ) {
      gafpriFetch({
        initMethod: 'POST',
        initRoute: TAX_RATES_ROUTE,
        initCredentials: {
          taxClassesId: attributes.states.taxClassesId,
          rate: attributes.states.rate,
          city: attributes.states.city,
          state: attributes.states.state,
          country: attributes.states.country,
          postCode: attributes.states.postCode,
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
      attributes.states.rateValid &&
      attributes.states.cityValid &&
      attributes.states.stateCountryValid &&
      attributes.states.countryValid &&
      attributes.states.postCodeValid &&
      token
    ) {
      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${TAX_RATES_ROUTE}/${attributes.states.currentId}`,
        initCredentials: {
          rate: attributes.states.rate,
          city: attributes.states.city,
          state: attributes.states.state,
          country: attributes.states.country,
          postCode: attributes.states.postCode,
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
        initRoute: `${TAX_RATES_ROUTE}/${id}`,
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
