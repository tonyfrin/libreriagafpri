import type { UseErrorReturn } from './useGafpriError';
import { UseGafpriApiProjectsReturn, UseGafpriPagesProjectsReturn, UseGafpriAttributesProjectsReturn, UseGafpriDataProjectsReturn, UseGafpriPaginationsProjectsReturn } from '../Abstract';
export interface UseGafpriProjectsReturn {
    attributes: UseGafpriAttributesProjectsReturn;
    pages: UseGafpriPagesProjectsReturn;
    paginations: UseGafpriPaginationsProjectsReturn;
    api: UseGafpriApiProjectsReturn;
    data: UseGafpriDataProjectsReturn;
    error: UseErrorReturn;
}
export type UseGafpriProjectsProps = {
    token: string | null;
};
export declare function useGafpriProjects({ token, }: UseGafpriProjectsProps): UseGafpriProjectsReturn;
