import { UseErrorReturn } from '../../../states';
import { UseGafpriPagesProjectsReturn } from './useGafpriPagesProjects';
import { UseGafpriAttributesProjectsReturn } from './useGafpriAttributesProjects';
type Actions = {
    add: () => void;
    erase: (id: number) => void;
    update: () => void;
};
export type UseGafpriApiProjectsReturn = {
    actions: Actions;
};
export type UseGafpriApiProjectsProps = {
    token: string | null;
    useError: UseErrorReturn;
    pages: UseGafpriPagesProjectsReturn;
    attributes: UseGafpriAttributesProjectsReturn;
};
export declare function useGafpriApiProjects({ token, useError, pages, attributes, }: UseGafpriApiProjectsProps): UseGafpriApiProjectsReturn;
export {};
