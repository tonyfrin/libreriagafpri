import { InitStoragePropsExtended, StorageFormPropsExtended } from '../../Abstract';
import type { UseGafpriStorageReturn, UseSitesReturn } from '../../states';
export type MainStorageProps = {
    use: UseGafpriStorageReturn;
    useSites: UseSitesReturn;
    initStorageProps?: InitStoragePropsExtended;
    addFormProps?: StorageFormPropsExtended;
    updateFormProps?: StorageFormPropsExtended;
};
export type MainStoragePropsExtended = {
    use?: UseGafpriStorageReturn;
    useSites?: UseSitesReturn;
    initStorageProps?: InitStoragePropsExtended;
    addFormProps?: StorageFormPropsExtended;
    updateFormProps?: StorageFormPropsExtended;
};
export declare const MainStorage: ({ use, useSites, initStorageProps, addFormProps, updateFormProps, }: MainStorageProps) => JSX.Element;
