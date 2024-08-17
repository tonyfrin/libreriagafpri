import React, { useState } from 'react';
import { getItem, saveItem } from '../../../Context';
import { getLastEntryDateAndCount, gafpriFetch } from '../../../helpers';
import { GeneralAttribute } from '../../../Validations';
import { PRODUCTS_STORAGE, PRODUCTS_ROUTE } from '../../../constants';
import { PostsAttributes, CategoryAttributes } from '../../../states';

export interface ProductsAttributes {
  postsId: number;
  categoryId?: number | null | undefined;
  tags: string[];
  sku: string;
  name: string;
  publicName: string;
  description: string;
  image: string;
  galleryImage: string[];
  note: string;
  salesPrice: number;
  offerPrice: number;
  cost: number;
  type: string;
  taxStatus: string;
  taxClass: string;
  packageType: string;
  qtyPack: number;
  undCbm: number;
  attributes: GeneralAttribute[];
  statistics: object;
  weight: number;
  height: number;
  width: number;
  length: number;
  catalogOrder: number;
  reviews: boolean;
  posts: PostsAttributes;
  category: CategoryAttributes;
}

interface ProductsData {
  data: {
    items: ProductsAttributes[] | [] | null;
  };
}

type DeletedProducts = {
  itemId: number;
};

type State = {
  items: ProductsData;
  isReady: boolean;
};

type Actions = {
  offItems: () => void;
  handleNewItem: (newItem: ProductsAttributes) => void;
  handleUpdated: (updatedItem: ProductsAttributes) => void;
  handleDeleted: ({ itemId }: DeletedProducts) => void;
  getById: (id: number) => ProductsAttributes | null;
  findBySku: (sku: string) => ProductsAttributes | null;
};

export type UseGafpriDataProductsReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriDataProductsProps = {
  token: string | null;
};

export function useGafpriDataProducts({
  token,
}: UseGafpriDataProductsProps): UseGafpriDataProductsReturn {
  const [isReady, setIsReady] = useState(false);
  const [items, setItems] = useState<ProductsData>({
    data: {
      items: getItem(PRODUCTS_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data

  const getLastItem: ProductsAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.posts.modifiedAt).getTime() -
          new Date(a.posts.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: ProductsData): void => {
    saveItem(PRODUCTS_STORAGE, newData.data.items);
  };

  const setData = (newData: ProductsData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: ProductsData): void => {
    setData(newData);
    onIsReady();
  };

  const offItems = (): void => {
    setData({
      data: {
        items: null,
      },
    });
    notReady();
  };

  const getItems = async (): Promise<void> => {
    const lastEntryDateAndCount = await getLastEntryDateAndCount(
      PRODUCTS_ROUTE
    );
    const lastDate = getLastItem?.posts.modifiedAt || null;
    const count = items.data.items?.length || 0;

    if (
      items.data.items === null ||
      `${lastEntryDateAndCount?.date}` !== `${lastDate}` ||
      `${lastEntryDateAndCount?.count}` !== `${count}`
    ) {
      if (token) {
        gafpriFetch({
          initMethod: 'GET',
          initRoute: PRODUCTS_ROUTE,
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

  const handleNewItem = (newItem: ProductsAttributes): void => {
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

  const handleUpdated = (updatedItem: ProductsAttributes): void => {
    setItems((prevState) => {
      const updatedItems =
        prevState.data.items?.map((item) =>
          `${item.postsId}` === `${updatedItem.postsId}` ? updatedItem : item
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

  const handleDeleted = ({ itemId }: DeletedProducts): void => {
    setItems((prevState) => {
      const filteredItems =
        prevState.data.items?.filter(
          (item) => `${item.postsId}` !== `${itemId}`
        ) || [];

      const newData = {
        data: {
          items: filteredItems,
        },
      };

      setDataStorage(newData);
      return newData;
    });
  };

  function getById(id: number): ProductsAttributes | null {
    return items.data.items?.find((item) => item.postsId === id) || null;
  }

  function findBySku(sku: string): ProductsAttributes | null {
    if (!items.data.items) return null;
    const foundProduct = items.data.items.find(
      (product) => product.sku === sku
    );
    return foundProduct || null;
  }

  /**
   * Effects
   *
   *
   */

  React.useEffect(() => {
    getItems();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  const states = {
    items,
    isReady,
  };

  const actions = {
    offItems,
    handleNewItem,
    handleUpdated,
    handleDeleted,
    getById,
    findBySku,
  };

  return {
    states,
    actions,
  };
}
