import React from 'react';
import { GeneralAttribute } from '../../Validations';
export interface AttributeTableProps {
    data: GeneralAttribute[];
    onRemove: (name: string) => void;
}
export declare const AttributeTable: React.FC<AttributeTableProps>;
