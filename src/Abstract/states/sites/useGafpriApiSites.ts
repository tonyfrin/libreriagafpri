import { gafpriFetch } from '../../../helpers';
import { SITES_ROUTE } from '../../../constants';
import { UseGafpriAttributesSitesReturn } from './useGafpriAttributesSites';

export type UseGafpriApiSitesReturn = {
  actions: {
    update: () => void;

    add: () => void;

    erase: (id: number) => void;
  };
};

export type UseGafpriApiSitesProps = {
  attributes: UseGafpriAttributesSitesReturn;
  token: string | null;
};

export const useGafpriApiSites = ({
  attributes,
  token,
}: UseGafpriApiSitesProps): UseGafpriApiSitesReturn => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const add = async (): Promise<any> => {
    if (token) {
      const payload = {
        name: attributes.states.name,
        documentIndex: attributes.states.documentIndex,
        documentNumber: attributes.states.documentNumber,
        address1: attributes.states.address1,
        city: attributes.states.city,
        state: attributes.states.state,
        country: attributes.states.country,
        email: attributes.states.email,
        phone: attributes.states.phone,
        currenciesId: attributes.states.currenciesId,
        currencyLocation: attributes.states.currencyLocation,
        thousandsSeparator: attributes.states.thousandsSeparator,
        decimalSeparator: attributes.states.decimalSeparator,
        decimalNumbers: attributes.states.decimalNumbers,
        taxes: attributes.states.taxes,
        host: attributes.states.host,
      };

      const updatedPayload = {
        ...payload,
        ...(attributes.states.postCode
          ? { postCode: attributes.states.postCode }
          : {}),
        ...(attributes.states.address2
          ? { address2: attributes.states.address2 }
          : {}),
      };

      const data = await gafpriFetch({
        initMethod: 'POST',
        initRoute: SITES_ROUTE,
        initCredentials: updatedPayload,
        initToken: { token },
      });

      return data;
    }
    return null;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const update = async (): Promise<any> => {
    if (token) {
      const payload = {
        name: attributes.states.name,
        documentIndex: attributes.states.documentIndex,
        documentNumber: attributes.states.documentNumber,
        address1: attributes.states.address1,
        city: attributes.states.city,
        state: attributes.states.state,
        country: attributes.states.country,
        email: attributes.states.email,
        phone: attributes.states.phone,
        currenciesId: attributes.states.currenciesId,
        currencyLocation: attributes.states.currencyLocation,
        thousandsSeparator: attributes.states.thousandsSeparator,
        decimalSeparator: attributes.states.decimalSeparator,
        decimalNumbers: attributes.states.decimalNumbers,
        taxes: attributes.states.taxes,
        host: attributes.states.host,
      };

      const updatedPayload = {
        ...payload,
        ...(attributes.states.postCode
          ? { postCode: attributes.states.postCode }
          : {}),
        ...(attributes.states.address2
          ? { address2: attributes.states.address2 }
          : {}),
      };

      const data = await gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${SITES_ROUTE}/${attributes.states.siteId}`,
        initCredentials: updatedPayload,
        initToken: { token },
      });

      return data;
    }
    return null;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const erase = async (id: number): Promise<any> => {
    if (token) {
      const data = await gafpriFetch({
        initMethod: 'DELETE',
        initRoute: `${SITES_ROUTE}/${id}`,
        initToken: { token },
      });

      return data;
    }
    return null;
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    add,
    update,
    erase,
  };

  return {
    actions,
  };
};
