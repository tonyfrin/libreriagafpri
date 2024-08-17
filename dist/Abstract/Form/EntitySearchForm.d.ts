import React, { KeyboardEvent } from 'react';
import type { UseGafpriEntityReturn, UseGafpriOrderReturn } from '../../states';
import type { UseGafpriPagesSalesModuleReturn } from '../states';
export type EntitySearchFormStaylesContainerProps = {
    color?: string;
    fontSize?: string;
    paddingBottom?: string;
    custom?: string;
};
export type EntitySearchFormProps = {
    containerStyles?: EntitySearchFormStaylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    useOrder: UseGafpriOrderReturn;
    useEntity: UseGafpriEntityReturn;
    usePagesSalesModule: UseGafpriPagesSalesModuleReturn;
    uploadOrder: (event: KeyboardEvent<HTMLInputElement>) => void;
};
export declare const EntitySearchForm: ({ containerStyles, containerProps, useOrder, useEntity, usePagesSalesModule, uploadOrder, }: EntitySearchFormProps) => React.JSX.Element;
