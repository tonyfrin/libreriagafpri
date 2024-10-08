import { UseGafpriAttributesSitesReturn } from './useGafpriAttributesSites';
export type UseGafpriApiSitesReturn = {
    actions: {
        update: () => void;
        add: () => void;
        erase: (id: number) => void;
    };
};
export type UseGafpriApiSitesProps = {
    attributes: UseGafpriAttributesSitesReturn;
    token: string | null;
};
export declare const useGafpriApiSites: ({ attributes, token, }: UseGafpriApiSitesProps) => UseGafpriApiSitesReturn;
