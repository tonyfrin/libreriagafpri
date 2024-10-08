import { useState } from 'react';
import { gafpriFetch } from '../../../helpers';
import { SITES_ROUTE } from '../../../constants';

type DeletedSite = {
  itemId: number;
};

export interface SitesAttributes {
  id: number;
  type: string;
  name: string;
  documentIndex: string;
  documentNumber: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postCode: string;
  country: string;
  email: string;
  phone: string;
  currenciesId: number;
  currencyLocation: string;
  thousandsSeparator: string;
  decimalSeparator: string;
  decimalNumbers: number;
  taxes: boolean;
  host: string;
  status: string;
  createdAt: Date;
  modifiedAt: Date;
  latitude: string;
  longitude: string;
  image: string;
  galleryImage: string[];
}

export type UseGafpriDataSitesReturn = {
  states: {
    isReady: boolean;
    sites: SitesAttributes[];
  };
  actions: {
    setIsReady: (value: boolean) => void;
    handleNewSite: (newItem: SitesAttributes) => void;
    handleDeletedSite: (value: DeletedSite) => void;
    handleUpdatedSite: (itemUpdate: SitesAttributes) => void;
    getById: (id: number) => SitesAttributes | null;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    getSites: () => Promise<any>;
    setSites: (value: SitesAttributes[]) => void;
  };
};

export type UseGafpriDataSitesProps = {
  token: string | null;
};

export const useGafpriDataSites = ({
  token,
}: UseGafpriDataSitesProps): UseGafpriDataSitesReturn => {
  const [isReady, setIsReady] = useState(false);

  const [sites, setSites] = useState<SitesAttributes[]>([]);

  const getSites = async (): Promise<any> => {
    if (token) {
      const data = await gafpriFetch({
        initMethod: 'GET',
        initRoute: SITES_ROUTE,
        initToken: { token },
      });
      return data;
    }
    return null;
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */

  const handleNewSite = (newItem: SitesAttributes): void => {
    setSites((prevState) => {
      const newData = [...(prevState || []), newItem];
      return newData;
    });
  };

  const handleUpdatedSite = (itemUpdate: SitesAttributes): void => {
    setSites((prevState) => {
      const updatedItems =
        prevState?.map((item) =>
          `${item.id}` === `${itemUpdate.id}` ? itemUpdate : item
        ) || [];

      return updatedItems;
    });
  };

  const handleDeletedSite = ({ itemId }: DeletedSite): void => {
    setSites((prevState) => {
      const filteredItems =
        prevState?.filter((item) => `${item.id}` !== `${itemId}`) || [];

      return filteredItems;
    });
  };

  function getById(id: number): SitesAttributes | null {
    return sites?.find((item) => `${item.id}` === `${id}`) || null;
  }

  function getMainSite(): SitesAttributes | null {
    if (sites.length > 0) {
      return sites[0];
    }

    return null;
  }

  const states = {
    isReady,
    sites,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    setIsReady,
    getById,
    getMainSite,
    handleNewSite,
    handleDeletedSite,
    handleUpdatedSite,
    getSites,
    setSites,
  };

  return {
    states,
    actions,
  };
};
