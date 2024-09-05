import type { UseErrorReturn } from './useGafpriError';
import type { UseTypeDocumentIdReturn } from './useGafpriTypeDocumentId';
import type { UseGafpriDataEntityReturn, UseGafpriAttributesEntityReturn, UseGafpriPagesEntityReturn, UseGafpriPaginationsEntityReturn, UseGafpriApiEntityReturn, UseGafpriApiEntityReturnDataCreate, UseGafpriApiEntityReturnDataUpdate, UseGafpriApiEntityReturnDataDelete } from '../Abstract';
export interface UseGafpriEntityReturn {
    attributes: UseGafpriAttributesEntityReturn;
    pages: UseGafpriPagesEntityReturn;
    paginations: UseGafpriPaginationsEntityReturn;
    api: UseGafpriApiEntityReturn;
    data: UseGafpriDataEntityReturn;
    error: UseErrorReturn;
}
export type UseGafpriEntityProps = {
    token: string | null;
    useTypeDocumentId: UseTypeDocumentIdReturn;
    getAddData?: (data: UseGafpriApiEntityReturnDataCreate) => void;
    getUpdateData?: (data: UseGafpriApiEntityReturnDataCreate | UseGafpriApiEntityReturnDataUpdate | UseGafpriApiEntityReturnDataDelete) => void;
};
export declare function useGafpriEntity({ token, useTypeDocumentId, getAddData, getUpdateData, }: UseGafpriEntityProps): UseGafpriEntityReturn;
