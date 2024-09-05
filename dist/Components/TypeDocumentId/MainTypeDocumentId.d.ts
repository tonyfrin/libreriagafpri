import type { UseTypeDocumentIdReturn } from '../../states';
import type { InitTypeDocumentIdPropsExtended, TypeDocumentIdFormPropsExtended } from '../../Abstract';
export type MainTypeDocumentIdProps = {
    use: UseTypeDocumentIdReturn;
    initProps?: InitTypeDocumentIdPropsExtended;
    addFormProps?: TypeDocumentIdFormPropsExtended;
    updateFormProps?: TypeDocumentIdFormPropsExtended;
};
export type MainTypeDocumentIdPropsExtend = {
    use: UseTypeDocumentIdReturn;
    initProps?: InitTypeDocumentIdPropsExtended;
    addFormProps?: TypeDocumentIdFormPropsExtended;
    updateFormProps?: TypeDocumentIdFormPropsExtended;
};
export declare const MainTypeDocumentId: ({ use, initProps, addFormProps, updateFormProps, }: MainTypeDocumentIdProps) => JSX.Element;
