import React from 'react';
import { OrderAttributes } from '../states';
export type EntityOrderViewFormInfoHeaderProps = {
    order: OrderAttributes;
    returnFunction: () => void;
};
export declare const EntityOrderViewFormInfoHeader: ({ order, returnFunction, }: EntityOrderViewFormInfoHeaderProps) => React.JSX.Element;
