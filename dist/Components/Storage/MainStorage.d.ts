import { InitStoragePropsExtended, StorageFormPropsExtended } from '../../Abstract';
import type { UseGafpriStorageReturn, UseGafpriSitesReturn } from '../../states';
export type MainStorageProps = {
    use: UseGafpriStorageReturn;
    useSites: UseGafpriSitesReturn;
    initStorageProps?: InitStoragePropsExtended;
    addFormProps?: StorageFormPropsExtended;
    updateFormProps?: StorageFormPropsExtended;
};
export type MainStoragePropsExtended = {
    use?: UseGafpriStorageReturn;
    useSites?: UseGafpriSitesReturn;
    initStorageProps?: InitStoragePropsExtended;
    addFormProps?: StorageFormPropsExtended;
    updateFormProps?: StorageFormPropsExtended;
};
export declare const MainStorage: ({ use, useSites, initStorageProps, addFormProps, updateFormProps, }: MainStorageProps) => JSX.Element;
