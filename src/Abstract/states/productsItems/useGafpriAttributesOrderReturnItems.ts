import React, { useState } from 'react';
import { UseErrorReturn } from '../../../states';
import { OrderItemsAttributes } from './useGafpriAttributesOrderItems';

export type OrderReturnItemsAttributes = {
  id?: number;
  orderReturnPostsId?: number;
  orderItemsId: number;
  movementStorageId?: number;
  sku: string;
  name: string;
  cost: number;
  totalCost?: number;
  qty: number;
  qtyOrderItem: number;
  price: number;
  subTotal?: number;
  subTotalTax?: number;
  total?: number;
  taxClass?: string;
};

type State = {
  subTotal: string;
  subTotalTax: string;
  total: string;
  shoppingCart: OrderReturnItemsAttributes[];
};

type Actions = {
  changeShoppingCart: (value: OrderReturnItemsAttributes) => void;
  voidShoppingCart: () => void;
  updateShoppingCartItem: (
    index: number,
    updatedItem: OrderReturnItemsAttributes
  ) => void;
  removeShoppingCartItem: (index: number) => void;
  infoReset: () => void;
  calculateSubTotal: () => number;
  calculateSubTotalTax: () => number;
  calculateTotal: () => number;
  updateQtyItemCart: (index: number, value: string) => void;
  uploadOrderItems: (orderItems: OrderItemsAttributes[]) => void;
};

export type UseGafpriAttributesOrderReturnItemsReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriAttributesOrderReturnItemsProps = {
  useError: UseErrorReturn;
};

export function useGafpriAttributesOrderReturnItems({
  useError,
}: UseGafpriAttributesOrderReturnItemsProps): UseGafpriAttributesOrderReturnItemsReturn {
  const [subTotal, setSubTotal] = useState('');
  const [subTotalTax, setSubTotalTax] = useState('');
  const [total, setTotal] = useState('');
  const [type, setType] = useState('');
  const [taxClass, setTaxClass] = useState('');

  const [shoppingCart, setShoppingCart] = useState<
    OrderReturnItemsAttributes[]
  >([]);

  const infoReset = (): void => {
    setSubTotal('');
    setSubTotalTax('');
    setTotal('');
    setType('');
    setTaxClass('');
    setShoppingCart([]);
  };

  // Validation Functions
  const validationShoppingCart = (
    value: OrderReturnItemsAttributes[]
  ): boolean => {
    return value.length <= 20;
  };

  // Funciones de Change

  const changeShoppingCart = (value: OrderReturnItemsAttributes): void => {
    const valid = validationShoppingCart([...shoppingCart, value]);
    if (valid) {
      setShoppingCart((prevCart) => [...prevCart, value]);
    } else {
      useError.actions.changeError([
        'No se pueden agregar más de 20 productos al carrito',
      ]);
    }
  };

  const voidShoppingCart = (): void => {
    setShoppingCart([]);
  };

  const updateShoppingCartItem = (
    index: number,
    updatedItem: OrderReturnItemsAttributes
  ): void => {
    setShoppingCart((prevCart) => {
      const updatedCart = [...prevCart];
      if (index >= 0 && index < updatedCart.length) {
        updatedCart[index] = updatedItem;
      }
      return updatedCart;
    });
  };

  const removeShoppingCartItem = (index: number): void => {
    setShoppingCart((prevCart) => {
      const updatedCart = [...prevCart];
      if (index >= 0 && index < updatedCart.length) {
        updatedCart.splice(index, 1);
      }
      return updatedCart;
    });
  };

  const calculateSubTotal = (): number => {
    return shoppingCart.reduce((acc, item) => {
      const newSubTotal = item.qty * item.price;
      return acc + newSubTotal;
    }, 0);
  };

  const calculateSubTotalTax = (): number => {
    return shoppingCart.reduce((acc, item) => {
      const newSubTotalTax = item.qty * item.price * 0;
      return acc + newSubTotalTax;
    }, 0);
  };

  const calculateTotal = (): number => {
    const newSubTotal = calculateSubTotal();
    setSubTotal(`${newSubTotal}`);
    const newSubTotalTax = calculateSubTotalTax();
    setSubTotalTax(`${newSubTotalTax}`);
    const newTotal = newSubTotal + newSubTotalTax;
    setTotal(`${newTotal}`);
    return newTotal;
  };

  const updateQtyItemCart = (index: number, value: string): void => {
    setShoppingCart((prevCartItems) => {
      return prevCartItems.map((product, i) => {
        if (index === i) {
          const newValue = value === '' ? 0 : parseFloat(value);
          if (newValue >= 0) {
            return {
              ...product,
              qty: newValue,
            };
          }
          return product;
        }
        return product;
      });
    });
  };

  const addOrderItemToCart = (orderItem: OrderItemsAttributes): void => {
    if (orderItem.id === undefined) return;
    const item: OrderReturnItemsAttributes = {
      orderItemsId: orderItem.id,
      sku: orderItem.sku,
      name: orderItem.name,
      cost: parseFloat(`${orderItem.cost}`) ?? 0,
      qty: orderItem.qty,
      qtyOrderItem: orderItem.qty,
      price: parseFloat(`${orderItem.price}`),
      taxClass: orderItem.taxClass || '',
    };
    const valid = validationShoppingCart([...shoppingCart, item]);
    if (valid) {
      setShoppingCart((prevCart) => [...prevCart, item]);
    } else {
      useError.actions.changeError([
        'No se pueden agregar más de 20 productos al carrito',
      ]);
    }
  };

  const sumQtyItemsReturn = (orderItem: OrderItemsAttributes): number => {
    let totalQty = 0;
    if (orderItem.orderReturnItems === undefined) return totalQty;
    orderItem.orderReturnItems.forEach((returnItem) => {
      totalQty += parseFloat(`${returnItem.qty}`);
    });

    return totalQty;
  };

  const uploadOrderItems = (orderItems: OrderItemsAttributes[]): void => {
    orderItems.forEach((orderItem) => {
      const qtyItemsReturn = sumQtyItemsReturn(orderItem);
      const currentQty = parseFloat(`${orderItem.qty}`) - qtyItemsReturn;
      if (currentQty > 0) {
        const dataOrderItem = {
          ...orderItem,
          qty: currentQty,
        };
        addOrderItemToCart(dataOrderItem);
      }
      return null;
    });
  };

  React.useEffect(() => {
    calculateTotal();
  }, [shoppingCart]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  const states = {
    subTotal,
    subTotalTax,
    total,
    type,
    taxClass,
    shoppingCart,
  };

  const actions = {
    validationShoppingCart,
    changeShoppingCart,
    voidShoppingCart,
    updateShoppingCartItem,
    removeShoppingCartItem,
    infoReset,
    calculateSubTotal,
    calculateSubTotalTax,
    calculateTotal,
    updateQtyItemCart,
    uploadOrderItems,
  };

  return {
    states,
    actions,
  };
}
