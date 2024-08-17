import { ModelFormPropsExtended } from '../Form';
import { ContainerButtonPropsExtended } from '../Containers';
import type { UseGafpriProjectsReturn } from '../../states';
import { InputProps } from '../Input';
export type ProjectsFormProps = {
    use: UseGafpriProjectsReturn;
    formType: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
    descriptionInputProps?: InputProps;
};
export type ProjectsFormPropsExtended = {
    use?: UseGafpriProjectsReturn;
    formType?: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
    descriptionInputProps?: InputProps;
};
export declare const ProjectsForm: ({ use, formType, modelFormProps, infoContainerProps, nameInputProps, descriptionInputProps, }: ProjectsFormProps) => JSX.Element;
