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
export declare function useGafpriSubPagesProducts(): UseGafpriSubPagesProductsReturn;
export {};
