import {
  gafpriFetch,
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import { PRODUCTS_ROUTE } from '../../../constants';
import { SiteOptions, UseErrorReturn } from '../../../states';
import { UseGafpriPagesProductsReturn } from './useGafpriPagesProducts';
import { UseGafpriAttributesProductsReturn } from './useGafpriAttributesProducts';
import { ProductsAttributes } from './useGafpriDataProducts';

type Items = {
  items?: ProductsAttributes;
};

type Data = {
  data?: Items;
  success?: boolean;
  categoryId?: number | null;
  tags?: string[];
  sku?: string;
  name?: string;
  publicName?: string;
  description?: string;
  image?: string;
  galleryImage?: string[];
  note?: string;
  salesPrice?: number;
  price1?: number;
  price2?: number;
  price3?: number;
  price4?: number;
  price5?: number;
  cost?: number;
  type?: string;
  taxStatus?: string;
  taxClass?: string;
  packageType?: string;
  qtyPack?: number;
  undCbm?: number;
  attributes?: object[];
  statistics?: object;
  posts?: object;
  permanentLink?: string;
  visibility?: string;
  weight?: number;
  height?: number;
  width?: number;
  length?: number;
  catalogOrder?: number;
  reviews?: boolean;
  discount?: boolean;
  sitesProducts?: object;
};

type Actions = {
  add: () => void;
  update: () => void;
  erase: (id: number) => void;
};

export type UseGafpriApiProductsReturn = {
  actions: Actions;
};

export type UseGafpriApiProductsProps = {
  token: string | null;
  useError: UseErrorReturn;
  pages: UseGafpriPagesProductsReturn;
  attributes: UseGafpriAttributesProductsReturn;
  siteOptions: SiteOptions;
};

export function useGafpriApiProducts({
  token,
  useError,
  pages,
  attributes,
  siteOptions,
}: UseGafpriApiProductsProps): UseGafpriApiProductsReturn {
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
      attributes.states.skuValid &&
      attributes.states.nameValid &&
      attributes.states.salesPriceValid &&
      attributes.states.typeValid &&
      attributes.states.statusValid &&
      attributes.states.visibilityValid &&
      token
    ) {
      gafpriFetch<Data>({
        initMethod: 'POST',
        initRoute: PRODUCTS_ROUTE,
        initCredentials: {
          categoryId: attributes.states.category,
          tags: attributes.states.tags,
          sku: attributes.states.sku,
          name: attributes.states.name,
          publicName: attributes.states.publicName,
          description: attributes.states.description,
          image: attributes.states.photo,
          galleryImage: attributes.states.galleryImage,
          note: attributes.states.note,
          salesPrice: parseFloat(attributes.states.salesPrice),
          price1: parseFloat(attributes.states.price1),
          price2: parseFloat(attributes.states.price2),
          price3: parseFloat(attributes.states.price3),
          price4: parseFloat(attributes.states.price4),
          price5: parseFloat(attributes.states.price5),
          type: attributes.states.type,
          taxStatus: attributes.states.taxStatus,
          taxClass: attributes.states.taxClasses,
          packageType: attributes.states.packageType,
          qtyPack: parseFloat(attributes.states.qtyPack),
          undCbm: parseFloat(attributes.states.undCbm),
          attributes: attributes.states.attributes,
          weight: parseFloat(attributes.states.weight),
          height: parseFloat(attributes.states.height),
          width: parseFloat(attributes.states.width),
          length: parseFloat(attributes.states.length),
          catalogOrder: parseFloat(attributes.states.catalogOrder),
          reviews: attributes.states.reviews,
          discount: attributes.states.discount,
          posts: {
            status: attributes.states.status,
            visibility: attributes.states.visibility,
            permanentLink: attributes.states.permanentLink,
          },
          sitesProducts: {
            sitesId: parseInt(`${siteOptions.id}`, 10),
            manageStock: true,
            thereIsStock: false,
            isAvailable: true,
            cost: parseFloat(attributes.states.cost) || 0,
          },
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
      attributes.states.skuValid &&
      attributes.states.nameValid &&
      attributes.states.salesPriceValid &&
      attributes.states.typeValid &&
      attributes.states.statusValid &&
      attributes.states.visibilityValid &&
      token
    ) {
      gafpriFetch<Data>({
        initMethod: 'PATCH',
        initRoute: `${PRODUCTS_ROUTE}/${attributes.states.currentId}`,
        initCredentials: {
          categoryId: attributes.states.category,
          tags: attributes.states.tags,
          sku: attributes.states.sku,
          name: attributes.states.name,
          publicName: attributes.states.publicName,
          description: attributes.states.description,
          image: attributes.states.photo,
          galleryImage: attributes.states.galleryImage,
          note: attributes.states.note,
          salesPrice: parseFloat(attributes.states.salesPrice),
          price1: parseFloat(attributes.states.price1),
          price2: parseFloat(attributes.states.price2),
          price3: parseFloat(attributes.states.price3),
          price4: parseFloat(attributes.states.price4),
          price5: parseFloat(attributes.states.price5),
          type: attributes.states.type,
          taxStatus: attributes.states.taxStatus,
          taxClass: attributes.states.taxClasses,
          packageType: attributes.states.packageType,
          qtyPack: parseFloat(attributes.states.qtyPack),
          undCbm: parseFloat(attributes.states.undCbm),
          attributes: attributes.states.attributes,
          weight: parseFloat(attributes.states.weight),
          height: parseFloat(attributes.states.height),
          width: parseFloat(attributes.states.width),
          length: parseFloat(attributes.states.length),
          catalogOrder: parseFloat(attributes.states.catalogOrder),
          reviews: attributes.states.reviews,
          discount: attributes.states.discount,
          posts: {
            status: attributes.states.status,
            visibility: attributes.states.visibility,
            permanentLink: attributes.states.permanentLink,
          },
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
        initRoute: `${PRODUCTS_ROUTE}/${id}`,
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
