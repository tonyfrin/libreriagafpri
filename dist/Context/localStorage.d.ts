declare function getItem<T>(itemName: string, initialValue: T): T;
declare const saveItem: <T>(itemName: string, newItem: T) => void;
export { getItem, saveItem };
