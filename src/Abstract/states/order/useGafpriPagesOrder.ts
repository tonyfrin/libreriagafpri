import { useState, KeyboardEvent } from 'react';
import { EntityAttributes } from '../entity';
import {
  UseGafpriEntityReturn,
  UseGafpriProductsReturn,
} from '../../../states';
import { scrollToTop } from '../../../helpers';
import { UseGafpriAttributesOrderReturn } from './useGafpriAttributesOrder';
import { UseGafpriAttributesOrderItemsReturn } from '../productsItems';
import { ProductsAttributes } from '../products';

export type UseGafpriPagesOrderReturn = {
  states: {
    isFetching: boolean;
    isInit: boolean;
    isEntitySearch: boolean;
    isAddEntity: boolean;
    isSales: boolean;
    isProductSearch: boolean;
    isOrderList: boolean;
    isOrderView: boolean;
    isOrderPayment: boolean;
  };
  actions: {
    onFetching: () => void;
    onInit: () => void;
    onEntitySearch: () => void;
    onAddEntity: () => void;
    onSales: () => void;
    onProductSearch: () => void;
    returnInit: () => void;
    processEntityBydocumentId: (event: KeyboardEvent<HTMLInputElement>) => void;
    processEntityByName: (event: KeyboardEvent<HTMLInputElement>) => void;
    selectEntity: (id: number) => void;
    processEntityByPhone: (event: KeyboardEvent<HTMLInputElement>) => void;
    processEntityByEmail: (event: KeyboardEvent<HTMLInputElement>) => void;
    processProductBySku: (event: KeyboardEvent<HTMLInputElement>) => void;
    selectproduct: (id: number) => void;
    processProductByName: (event: KeyboardEvent<HTMLInputElement>) => void;
    goSalesEntity: (entity: EntityAttributes) => void;
    onOrderList: () => void;
    onOrderView: () => void;
    goOrderView: (id: number) => void;
    onOrderPayment: () => void;
  };
};

export type UseGafpriPagesOrderProps = {
  useAttributes: UseGafpriAttributesOrderReturn;
  useEntity: UseGafpriEntityReturn;
  useProducts: UseGafpriProductsReturn;
  useProductItems: UseGafpriAttributesOrderItemsReturn;
};

export const useGafpriPagesOrder = ({
  useAttributes,
  useEntity,
  useProducts,
  useProductItems,
}: UseGafpriPagesOrderProps): UseGafpriPagesOrderReturn => {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true); // busqueda del cliente
  const [isEntitySearch, setIsEntitySearch] = useState(false); // tabla de busqueda del cliente
  const [isAddEntity, setIsAddEntity] = useState(false); // formulario de Add Entity
  const [isSales, setIsSales] = useState(false); // formulario de ventas
  const [isProductSearch, setIsProductSearch] = useState(false); // tabla de busqueda de productos

  const [isOrderList, setIsOrderList] = useState(true);
  const [isOrderView, setIsOrderView] = useState(false);
  const [isOrderPayment, setIsOrderPayment] = useState(false);

  // Funciones de paginas
  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsOrderList(false);
    setIsOrderView(false);
    setIsOrderPayment(false);
    scrollToTop();
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsOrderList(false);
    setIsOrderView(false);
    setIsOrderPayment(false);
    scrollToTop();
  };

  const onEntitySearch = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(true);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsOrderList(false);
    setIsOrderView(false);
    setIsOrderPayment(false);
    scrollToTop();
  };

  const onAddEntity = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(true);
    setIsSales(false);
    setIsProductSearch(false);
    setIsOrderList(false);
    setIsOrderView(false);
    setIsOrderPayment(false);
    scrollToTop();
  };

  const onSales = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(true);
    setIsProductSearch(false);
    setIsOrderList(false);
    setIsOrderView(false);
    setIsOrderPayment(false);
    scrollToTop();
  };

  const onProductSearch = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(true);
    setIsOrderList(false);
    setIsOrderView(false);
    setIsOrderPayment(false);
    scrollToTop();
  };

  const onOrderList = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsOrderList(true);
    setIsOrderView(false);
    setIsOrderPayment(false);
    scrollToTop();
  };

  const onOrderView = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsOrderList(false);
    setIsOrderView(true);
    setIsOrderPayment(false);
    scrollToTop();
  };

  const onOrderPayment = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsOrderList(false);
    setIsOrderView(false);
    setIsOrderPayment(true);
    scrollToTop();
  };

  const goSalesEntity = (entity: EntityAttributes): void => {
    useAttributes.actions.setEntity(entity);
    useAttributes.actions.changeCustomerId(entity.id);
    onSales();
  };

  const goSalesProduct = (product: ProductsAttributes): void => {
    useProductItems.actions.addItemToCart(product);
    onSales();
  };

  const goOrderView = (id: number): void => {
    useAttributes.actions.setCurrentId(id);
    onOrderView();
  };

  const returnInit = (): void => {
    useAttributes.actions.infoReset();
    onInit();
  };

  const processEntityBydocumentId = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      const currentEntity = useEntity.data.actions.findByDocumentIdDigit(
        useEntity.attributes.states.digit
      );
      if (currentEntity) {
        goSalesEntity(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };

  const processEntityByName = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      useEntity.paginations.actions.changeSearchBy({
        value: 'name',
        label: 'Nombre',
      });
      useEntity.paginations.actions.setSearchTerm(
        useEntity.attributes.states.name
      );
      onEntitySearch();
    }
  };

  const selectEntity = (id: number): void => {
    const currentEntity = useEntity.data.actions.getById(id);
    if (currentEntity) {
      goSalesEntity(currentEntity);
    }
  };

  const processEntityByPhone = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      const currentEntity = useEntity.data.actions.findByPhone(
        useEntity.attributes.states.phone
      );
      if (currentEntity) {
        goSalesEntity(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };

  const processEntityByEmail = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      const currentEntity = useEntity.data.actions.findByEmail(
        useEntity.attributes.states.email
      );
      if (currentEntity) {
        goSalesEntity(currentEntity);
      } else {
        onAddEntity();
      }
    }
  };

  const processProductBySku = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      useProducts.attributes.actions.changeSku('');
      const currentProduct = useProducts.data.actions.findBySku(
        useProducts.attributes.states.sku
      );
      if (currentProduct) {
        useProductItems.actions.addItemToCart(currentProduct);
      } else {
        useProducts.paginations.actions.changeSearchBy({
          value: 'sku',
          label: 'Código',
        });
        useProducts.paginations.actions.setSearchTerm(
          useProducts.attributes.states.sku
        );
        onProductSearch();
      }
    }
  };

  const processProductByName = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      useProducts.attributes.actions.changeName('');
      useProducts.paginations.actions.changeSearchBy({
        value: 'name',
        label: 'Nombre',
      });
      useProducts.paginations.actions.setSearchTerm(
        useProducts.attributes.states.name
      );
      onProductSearch();
    }
  };

  const selectproduct = (id: number): void => {
    const currentProduct = useProducts.data.actions.getById(id);
    if (currentProduct) {
      goSalesProduct(currentProduct);
    }
  };

  const states = {
    isFetching,
    isInit,
    isEntitySearch,
    isAddEntity,
    isSales,
    isProductSearch,
    isOrderList,
    isOrderView,
    isOrderPayment,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    onFetching,
    onInit,
    onEntitySearch,
    onAddEntity,
    onSales,
    onProductSearch,
    returnInit,
    processEntityBydocumentId,
    processEntityByName,
    selectEntity,
    processEntityByPhone,
    processEntityByEmail,
    processProductBySku,
    selectproduct,
    processProductByName,
    goSalesEntity,
    onOrderList,
    onOrderView,
    goOrderView,
    onOrderPayment,
  };

  return {
    states,
    actions,
  };
};
