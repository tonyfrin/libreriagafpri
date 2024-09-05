import type { UseUserReturn } from '../../states';
import type { InitUserPropsExtended, UserFormPropsExtended, UserFormUpdatePropsExtended, UserViewPropsExtended } from '../../Abstract';
export type MainUserProps = {
    use: UseUserReturn;
    initProps?: InitUserPropsExtended;
    addFormProps?: UserFormPropsExtended;
    updateFormProps?: UserFormUpdatePropsExtended;
    viewFormProps?: UserViewPropsExtended;
};
export type MainUserPropsExtended = {
    use?: UseUserReturn;
    initProps?: InitUserPropsExtended;
    addFormProps?: UserFormPropsExtended;
    updateFormProps?: UserFormUpdatePropsExtended;
    viewFormProps?: UserViewPropsExtended;
};
export declare const MainUser: ({ use, initProps, addFormProps, updateFormProps, viewFormProps, }: MainUserProps) => JSX.Element;
