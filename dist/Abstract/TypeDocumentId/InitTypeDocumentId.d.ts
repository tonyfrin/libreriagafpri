import type { ButtonProps } from '../Button';
import type { ListPropsExtended } from '../List';
import type { ErrorProps } from '../Error';
import { HeaderPropsExtended } from '../Header';
import type { UseTypeDocumentIdReturn } from 'src/states';
export type InitTypeDocumentIdProps = {
    use: UseTypeDocumentIdReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type InitTypeDocumentIdPropsExtended = {
    use?: UseTypeDocumentIdReturn;
    optionsButtonMainContainerStyle?: string;
    updateButtonProps?: ButtonProps;
    deleteButtonProps?: ButtonProps;
    headerProps?: HeaderPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const InitTypeDocumentId: ({ use, optionsButtonMainContainerStyle, updateButtonProps, deleteButtonProps, headerProps, errorProps, listProps, }: InitTypeDocumentIdProps) => JSX.Element;
