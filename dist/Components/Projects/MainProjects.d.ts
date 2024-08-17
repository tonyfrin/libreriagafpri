import { InitProjectsPropsExtended, ProjectsFormPropsExtended } from '../../Abstract';
import type { UseGafpriProjectsReturn } from '../../states';
export type MainProjectsProps = {
    use: UseGafpriProjectsReturn;
    initProjectsProps?: InitProjectsPropsExtended;
    addFormProps?: ProjectsFormPropsExtended;
    updateFormProps?: ProjectsFormPropsExtended;
};
export type MainCurrenciesPropsExtended = {
    use?: UseGafpriProjectsReturn;
    initProjectsProps?: InitProjectsPropsExtended;
    addFormProps?: ProjectsFormPropsExtended;
    updateFormProps?: ProjectsFormPropsExtended;
};
export declare const MainProjects: ({ use, initProjectsProps, addFormProps, updateFormProps, }: MainProjectsProps) => JSX.Element;
