import { useState, KeyboardEvent } from 'react';
import { EntityAttributes } from '../entity';
import {
  UseGafpriEntityReturn,
  UseGafpriProductsReturn,
} from '../../../states';
import { scrollToTop } from '../../../helpers';
import { UseGafpriAttributesBudgetReturn } from './useGafpriAttributesBudget';
import { UseGafpriAttributesBudgetItemsReturn } from '../productsItems';
import { ProductsAttributes } from '../products';

export type UseGafpriPagesBudgetReturn = {
  states: {
    isFetching: boolean;
    isInit: boolean;
    isEntityForm: boolean;
    isEntitySearch: boolean;
    isAddEntity: boolean;
    isSales: boolean;
    isProductSearch: boolean;
    isPrintTable: boolean;
    isPrint: boolean;
  };
  actions: {
    onFetching: () => void;
    onInit: () => void;
    onEntityForm: () => void;
    onEntitySearch: () => void;
    onAddEntity: () => void;
    onSales: () => void;
    onProductSearch: () => void;
    onPrintTable: () => void;
    goPrint: (id: number) => void;
    onPrint: () => void;
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
  };
};

export type UseGafpriPagesBudgetProps = {
  useAttributes: UseGafpriAttributesBudgetReturn;
  useEntity: UseGafpriEntityReturn;
  useProducts: UseGafpriProductsReturn;
  useProductItems: UseGafpriAttributesBudgetItemsReturn;
};

export const useGafpriPagesBudget = ({
  useAttributes,
  useEntity,
  useProducts,
  useProductItems,
}: UseGafpriPagesBudgetProps): UseGafpriPagesBudgetReturn => {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true); // busqueda del cliente
  const [isEntityForm, setIsEntityForm] = useState(false); // formulario de Add Entity
  const [isEntitySearch, setIsEntitySearch] = useState(false); // tabla de busqueda del cliente
  const [isAddEntity, setIsAddEntity] = useState(false); // formulario de Add Entity
  const [isSales, setIsSales] = useState(false); // formulario de ventas
  const [isProductSearch, setIsProductSearch] = useState(false); // tabla de busqueda de productos
  const [isPrintTable, setIsPrintTable] = useState(false); // tabla de busqueda de productos
  const [isPrint, setIsPrint] = useState(false); // tabla de busqueda de productos

  // Funciones de paginas
  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsEntityForm(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsPrintTable(false);
    setIsPrint(false);
    scrollToTop();
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsEntityForm(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsPrintTable(false);
    setIsPrint(false);
    scrollToTop();
  };

  const onEntityForm = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntityForm(true);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsPrintTable(false);
    setIsPrint(false);
    scrollToTop();
  };

  const onEntitySearch = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntityForm(false);
    setIsEntitySearch(true);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsPrintTable(false);
    setIsPrint(false);
    scrollToTop();
  };

  const onAddEntity = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntityForm(false);
    setIsEntitySearch(false);
    setIsAddEntity(true);
    setIsSales(false);
    setIsProductSearch(false);
    setIsPrintTable(false);
    setIsPrint(false);
    scrollToTop();
  };

  const onSales = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntityForm(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(true);
    setIsProductSearch(false);
    setIsPrintTable(false);
    setIsPrint(false);
    scrollToTop();
  };

  const onProductSearch = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntityForm(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(true);
    setIsPrintTable(false);
    setIsPrint(false);
    scrollToTop();
  };

  const onPrintTable = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntityForm(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsPrintTable(true);
    setIsPrint(false);
    scrollToTop();
  };

  const onPrint = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsEntityForm(false);
    setIsEntitySearch(false);
    setIsAddEntity(false);
    setIsSales(false);
    setIsProductSearch(false);
    setIsPrintTable(false);
    setIsPrint(true);
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

  const goPrint = (id: number): void => {
    useAttributes.actions.setCurrentId(id);
    onPrint();
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
    isEntityForm,
    isEntitySearch,
    isAddEntity,
    isSales,
    isProductSearch,
    isPrintTable,
    isPrint,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    onFetching,
    onInit,
    onEntityForm,
    onEntitySearch,
    onAddEntity,
    onSales,
    onProductSearch,
    onPrintTable,
    goPrint,
    onPrint,
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
  };

  return {
    states,
    actions,
  };
};
