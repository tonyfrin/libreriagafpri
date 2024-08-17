import { useState } from 'react';

type State = {
  isGeneral: boolean;
  isPrice: boolean;
  isCatalog: boolean;
  isInventory: boolean;
  isShip: boolean;
  isAttributes: boolean;
  isAdvanced: boolean;
};

type Actions = {
  onGeneral: () => void;
  onPrice: () => void;
  onCatalog: () => void;
  onInventory: () => void;
  onShip: () => void;
  onAttributes: () => void;
  onAdvanced: () => void;
};

export type UseGafpriSubPagesProductsReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriSubPagesProducts(): UseGafpriSubPagesProductsReturn {
  const [isGeneral, setIsGeneral] = useState(true);
  const [isPrice, setIsPrice] = useState(false);
  const [isCatalog, setIsCatalog] = useState(false);
  const [isInventory, setIsInventory] = useState(false);
  const [isShip, setIsShip] = useState(false);
  const [isAttributes, setIsAttributes] = useState(false);
  const [isAdvanced, setIsAdvanced] = useState(false);

  const onGeneral = (): void => {
    setIsGeneral(true);
    setIsPrice(false);
    setIsCatalog(false);
    setIsInventory(false);
    setIsShip(false);
    setIsAttributes(false);
    setIsAdvanced(false);
  };

  const onPrice = (): void => {
    setIsGeneral(false);
    setIsPrice(true);
    setIsCatalog(false);
    setIsInventory(false);
    setIsShip(false);
    setIsAttributes(false);
    setIsAdvanced(false);
  };

  const onCatalog = (): void => {
    setIsGeneral(false);
    setIsPrice(false);
    setIsCatalog(true);
    setIsInventory(false);
    setIsShip(false);
    setIsAttributes(false);
    setIsAdvanced(false);
  };

  const onInventory = (): void => {
    setIsGeneral(false);
    setIsPrice(false);
    setIsCatalog(false);
    setIsInventory(true);
    setIsShip(false);
    setIsAttributes(false);
    setIsAdvanced(false);
  };

  const onShip = (): void => {
    setIsGeneral(false);
    setIsPrice(false);
    setIsCatalog(false);
    setIsInventory(false);
    setIsShip(true);
    setIsAttributes(false);
    setIsAdvanced(false);
  };

  const onAttributes = (): void => {
    setIsGeneral(false);
    setIsPrice(false);
    setIsCatalog(false);
    setIsInventory(false);
    setIsShip(false);
    setIsAttributes(true);
    setIsAdvanced(false);
  };

  const onAdvanced = (): void => {
    setIsGeneral(false);
    setIsPrice(false);
    setIsCatalog(false);
    setIsInventory(false);
    setIsShip(false);
    setIsAttributes(false);
    setIsAdvanced(true);
  };

  /**
   * Export
   *
   *
   */
  const states = {
    isGeneral,
    isPrice,
    isCatalog,
    isInventory,
    isShip,
    isAttributes,
    isAdvanced,
  };

  const actions = {
    onGeneral,
    onPrice,
    onCatalog,
    onInventory,
    onShip,
    onAttributes,
    onAdvanced,
  };

  return {
    states,
    actions,
  };
}
