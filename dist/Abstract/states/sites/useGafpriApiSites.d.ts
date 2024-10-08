import { UseGafpriAttributesSitesReturn } from './useGafpriAttributesSites';
export type UseGafpriApiSitesReturn = {
    actions: {
        update: () => Promise<any>;
        add: () => Promise<any>;
        erase: (id: number) => Promise<any>;
    };
};
export type UseGafpriApiSitesProps = {
    attributes: UseGafpriAttributesSitesReturn;
    token: string | null;
};
export declare const useGafpriApiSites: ({ attributes, token, }: UseGafpriApiSitesProps) => UseGafpriApiSitesReturn;
