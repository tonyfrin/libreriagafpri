import { useState } from 'react';
import {
  UseGafpriEntityReturn,
  UseGafpriOrderReturn,
  UseErrorReturn,
} from '../../../states';
import { scrollToTop } from '../../../helpers';
import { UseGafpriAttributesOrderReturnReturn } from './useGafpriAttributesOrderReturn';
import { UseGafpriAttributesOrderReturnItemsReturn } from '../productsItems';

export type UseGafpriPagesOrderReturnReturn = {
  states: {
    isFetching: boolean;
    isInit: boolean;
    isSales: boolean;
    isOrderPayment: boolean;
  };
  actions: {
    onFetching: () => void;
    onInit: () => void;
    onSales: () => void;
    returnInit: () => void;
    goSales: () => void;
    onOrderPayment: () => void;
  };
};

export type UseGafpriPagesOrderReturnProps = {
  useAttributes: UseGafpriAttributesOrderReturnReturn;
  useOrder: UseGafpriOrderReturn;
  useEntity: UseGafpriEntityReturn;
  useError: UseErrorReturn;
  useProductItems: UseGafpriAttributesOrderReturnItemsReturn;
};

export const useGafpriPagesOrderReturn = ({
  useAttributes,
  useOrder,
  useEntity,
  useError,
  useProductItems,
}: UseGafpriPagesOrderReturnProps): UseGafpriPagesOrderReturnReturn => {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isSales, setIsSales] = useState(false);
  const [isOrderPayment, setIsOrderPayment] = useState(false);

  // Funciones de paginas
  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsSales(false);
    setIsOrderPayment(false);
    scrollToTop();
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsSales(false);
    setIsOrderPayment(false);
    scrollToTop();
  };

  const onSales = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsSales(true);
    setIsOrderPayment(false);
    scrollToTop();
  };

  const onOrderPayment = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsSales(false);
    setIsOrderPayment(true);
    scrollToTop();
  };

  const goSales = (): void => {
    const { orderPostsId } = useAttributes.states;
    const currentOrder = useOrder.data.actions.getById(orderPostsId);
    if (
      currentOrder &&
      (currentOrder.posts.status === 'prepare' ||
        currentOrder.posts.status === 'dispatching' ||
        currentOrder.posts.status === 'completed')
    ) {
      const currentEntity = useEntity.data.actions.getById(
        currentOrder.customerId
      );
      useAttributes.actions.setEntity(currentEntity);
      useProductItems.actions.uploadOrderItems(currentOrder.orderItems);
      onSales();
    } else {
      useError.actions.changeError(['No se encontro el pedido']);
    }
  };

  const returnInit = (): void => {
    useAttributes.actions.infoReset();
    onInit();
  };

  const states = {
    isFetching,
    isInit,
    isSales,
    isOrderPayment,
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    onFetching,
    onInit,
    onSales,
    returnInit,
    goSales,
    onOrderPayment,
  };

  return {
    states,
    actions,
  };
};
