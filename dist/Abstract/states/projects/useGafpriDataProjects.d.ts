import { SelectDefault } from '../../../helpers';
import type { PostsAttributes } from '../../../states';
export interface ProjectsAttributes {
    postsId: number;
    name: string;
    description: string;
    posts: PostsAttributes;
}
interface ProjectsData {
    data: {
        items: ProjectsAttributes[] | [] | null;
    };
}
type DeletedProject = {
    itemId: number;
};
type State = {
    isReady: boolean;
    items: ProjectsData;
};
type Actions = {
    setIsReady: (value: boolean) => void;
    offItems: () => void;
    getById: (id: number) => ProjectsAttributes | null;
    handleNewItem: (newProject: ProjectsAttributes) => void;
    handleUpdatedItem: (updatedProject: ProjectsAttributes) => void;
    handleDeletedItem: ({ itemId }: DeletedProject) => void;
    getOptionsItems: () => SelectDefault[];
};
export type UseGafpriDataProjectsReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriDataProjectsProps = {
    token: string | null;
};
export declare function useGafpriDataProjects({ token, }: UseGafpriDataProjectsProps): UseGafpriDataProjectsReturn;
export {};
