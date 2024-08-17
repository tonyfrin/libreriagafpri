import type { InitRolesPropsExtended, RolesFormPropsExtended } from '../../Abstract';
import type { UseRolesReturn } from '../../states';
export type MainRolesProps = {
    use: UseRolesReturn;
    initProps?: InitRolesPropsExtended;
    addFormProps?: RolesFormPropsExtended;
    updateFormProps?: RolesFormPropsExtended;
};
export type MainRolesPropsExtended = {
    use?: UseRolesReturn;
    initProps?: InitRolesPropsExtended;
    addFormProps?: RolesFormPropsExtended;
    updateFormProps?: RolesFormPropsExtended;
};
export declare const MainRoles: ({ use, initProps, addFormProps, updateFormProps, }: MainRolesProps) => JSX.Element;
