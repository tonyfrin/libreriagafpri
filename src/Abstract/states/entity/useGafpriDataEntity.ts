import React, { useState } from 'react';
import { gafpriFetch, getLastEntryDateAndCount } from '../../../helpers';
import { saveItem, getItem } from '../../../Context';
import { ENTITY_STORAGE, ENTITY_ROUTE } from '../../../constants';
import type { EntityAttributes } from './useGafpriAttributesEntity';

interface EntityData {
  data: {
    items: EntityAttributes[] | [] | null;
  };
}

export type UseGafpriDataEntityReturn = {
  states: {
    isReady: boolean;
    items: EntityData;
  };
  actions: {
    onIsReady: () => void;
    notReady: () => void;
    offItems: () => void;
    handleNewItem: (newItem: EntityAttributes) => void;
    handleUpdatedItem: (itemUpdate: EntityAttributes) => void;
    getById: (id: number) => EntityAttributes | null;
    findByDocumentIdDigit: (digit: string) => EntityAttributes | null;
    findByNameAndLastName: (searchTerm: string) => EntityAttributes[];
    findByEmail: (emailToFind: string) => EntityAttributes | null;
    findByPhone: (phoneToFind: string) => EntityAttributes | null;
  };
};

export type UseGafpriDataEntityProps = {
  token: string | null;
};

export const useGafpriDataEntity = ({
  token,
}: UseGafpriDataEntityProps): UseGafpriDataEntityReturn => {
  const [isReady, setIsReady] = useState(false);

  const [items, setItems] = useState<EntityData>({
    data: {
      items: getItem(ENTITY_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data en DB
  const getLastItem: EntityAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: EntityData): void => {
    saveItem(ENTITY_STORAGE, newData.data.items);
  };

  const setData = (newData: EntityData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: EntityData): void => {
    setData(newData);
    onIsReady();
  };

  const offItems = (): void => {
    const newData = {
      data: {
        items: null,
      },
    };
    setData(newData);
    notReady();
  };

  const getItems = async (): Promise<void> => {
    const lastEntryDateAndCount = await getLastEntryDateAndCount(ENTITY_ROUTE);
    const lastDate = getLastItem?.modifiedAt || null;
    const count = items.data.items?.length || 0;

    if (
      items.data.items === null ||
      `${lastEntryDateAndCount?.date}` !== `${lastDate}` ||
      `${lastEntryDateAndCount?.count}` !== `${count}`
    ) {
      if (token) {
        gafpriFetch({
          initMethod: 'GET',
          initRoute: ENTITY_ROUTE,
          initToken: { token },
          functionFetching: notReady,
          functionSuccess: onItems,
        });
      } else {
        notReady();
      }
    } else {
      onIsReady();
    }
  };

  const handleNewItem = (newItem: EntityAttributes): void => {
    setItems((prevState) => {
      const newData = {
        data: {
          items: [...(prevState.data.items || []), newItem],
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleUpdatedItem = (itemUpdate: EntityAttributes): void => {
    setItems((prevState) => {
      const updatedItems =
        prevState.data.items?.map((item) =>
          `${item.id}` === `${itemUpdate.id}` ? itemUpdate : item
        ) || [];
      const newData = {
        data: {
          items: updatedItems,
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  function getById(id: number): EntityAttributes | null {
    return items.data.items?.find((item) => `${item.id}` === `${id}`) || null;
  }

  function findByDocumentIdDigit(digit: string): EntityAttributes | null {
    if (!items.data.items) return null;
    /* eslint-disable no-plusplus */
    for (let i = 0; i < items.data.items.length; i++) {
      const entity = items.data.items[i];
      /* eslint-disable no-plusplus */
      for (let j = 0; j < entity.documentId.length; j++) {
        const documentId = entity.documentId[j];
        if (documentId.digit === digit) {
          return entity;
        }
      }
    }
    return null;
  }

  function findByNameAndLastName(searchTerm: string): EntityAttributes[] {
    if (!items.data.items) return [];
    const search = searchTerm.toLowerCase();

    return items.data.items.filter((entity) => {
      const nameMatch = entity.name.toLowerCase().includes(search);
      const lastNameMatch = entity.lastName
        ? entity.lastName.toLowerCase().includes(search)
        : false;

      return nameMatch || lastNameMatch;
    });
  }

  function findByEmail(emailToFind: string): EntityAttributes | null {
    if (!items.data.items) return null;
    const foundEntity = items.data.items.find(
      (entity) => entity.email === emailToFind
    );
    return foundEntity || null;
  }

  function findByPhone(phoneToFind: string): EntityAttributes | null {
    if (!items.data.items) return null;
    const foundEntity = items.data.items.find(
      (entity) => entity.phone === phoneToFind
    );
    return foundEntity || null;
  }

  // Efects
  React.useEffect(() => {
    getItems();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  const states = {
    isReady,
    items,
  };

  const actions = {
    onIsReady,
    notReady,
    getById,
    handleNewItem,
    handleUpdatedItem,
    offItems,
    findByDocumentIdDigit,
    findByNameAndLastName,
    findByEmail,
    findByPhone,
  };

  return {
    states,
    actions,
  };
};
