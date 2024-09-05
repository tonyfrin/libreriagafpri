import { UseGafpriEntityReturn, UseGafpriAccountsReceivableReturn } from '../../states';
import type { ButtonPropsExtended } from '../Button';
import type { ListProps } from '../List';
import type { ErrorProps } from '../Error';
export type EntityAccountsReceivableSearchProps = {
    use: UseGafpriEntityReturn;
    useAccountsReceivable: UseGafpriAccountsReceivableReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export type EntityAccountsReceivableSearchPropsExtended = {
    use: UseGafpriEntityReturn;
    optionButtonContainerStyle?: string;
    updateButtonProps?: ButtonPropsExtended;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export declare const EntityAccountsReceivableSearch: ({ use, useAccountsReceivable, optionButtonContainerStyle, updateButtonProps, errorProps, listProps, }: EntityAccountsReceivableSearchProps) => JSX.Element;
