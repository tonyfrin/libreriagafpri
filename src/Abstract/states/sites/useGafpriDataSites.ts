import React, { useState } from 'react';
import { gafpriFetch } from '../../../helpers';
import { SITES_ROUTE } from '../../../constants';

type DeletedSite = {
  itemId: number;
};

export interface SitesAttributes {
  id: number;
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
  createdAt: Date;
  modifiedAt: Date;
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
  };
};

export type UseGafpriDataSitesProps = {
  token: string | null;
};

export const useGafpriDataSites = ({
  token,
}: UseGafpriDataSitesProps): UseGafpriDataSitesReturn => {
  // Define los estados necesarios para los atributos de Site
  const [isReady, setIsReady] = useState(false);

  const [sites, setSites] = useState<SitesAttributes[]>([]);

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data en D

  const onSites = (newData: SitesAttributes[]): void => {
    setSites(newData);
    onIsReady();
  };

  const offSites = (): void => {
    setSites([]);
    notReady();
  };

  const getSites = async (): Promise<void> => {
    if (token) {
      await gafpriFetch({
        initMethod: 'GET',
        initRoute: SITES_ROUTE,
        initToken: { token },
        functionFetching: notReady,
        functionSuccess: onSites,
      });
    } else {
      notReady();
    }
  };

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
  // Efects
  React.useEffect(() => {
    getSites();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  const states = {
    isReady,
    sites,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    setIsReady,
    offSites,
    getById,
    getMainSite,
    handleNewSite,
    handleDeletedSite,
    handleUpdatedSite,
  };

  return {
    states,
    actions,
  };
};
