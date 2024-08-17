import React, { useState } from 'react';
import { getItem, saveItem } from '../../../Context';
import {
  getLastEntryDateAndCount,
  gafpriFetch,
  SelectDefault,
} from '../../../helpers';
import { PROJECTS_STORAGE, PROJECTS_ROUTE } from '../../../constants';
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

export function useGafpriDataProjects({
  token,
}: UseGafpriDataProjectsProps): UseGafpriDataProjectsReturn {
  const [isReady, setIsReady] = useState(false);
  const [items, setItems] = useState<ProjectsData>({
    data: {
      items: getItem(PROJECTS_STORAGE, null),
    },
  });

  const onIsReady = (): void => {
    setIsReady(true);
  };

  const notReady = (): void => {
    setIsReady(false);
  };

  // Manejo de la data de Currencies

  const getLastItem: ProjectsAttributes | null = items.data?.items
    ? items.data.items.sort(
        (a, b) =>
          new Date(b.posts.modifiedAt).getTime() -
          new Date(a.posts.modifiedAt).getTime()
      )[0]
    : null;

  const setDataStorage = (newData: ProjectsData): void => {
    saveItem(PROJECTS_STORAGE, newData.data.items);
  };

  const setData = (newData: ProjectsData): void => {
    setItems(newData);
    setDataStorage(newData);
  };

  const onItems = (newData: ProjectsData): void => {
    setData(newData);
    onIsReady();
  };

  const offItems = (): void => {
    setData({
      data: {
        items: null,
      },
    });
    notReady();
  };

  const getItems = async (): Promise<void> => {
    const lastEntryDateAndCount = await getLastEntryDateAndCount(
      PROJECTS_ROUTE
    );
    const lastDate = getLastItem?.posts.modifiedAt || null;
    const count = items.data.items?.length || 0;

    if (
      items.data.items === null ||
      `${lastEntryDateAndCount?.date}` !== `${lastDate}` ||
      `${lastEntryDateAndCount?.count}` !== `${count}`
    ) {
      if (token) {
        gafpriFetch({
          initMethod: 'GET',
          initRoute: PROJECTS_ROUTE,
          initToken: { token },
          functionFetching: notReady,
          functionSuccess: onItems,
        });
      } else {
        notReady();
      }
    } else {
      onIsReady();
    }
  };

  const handleNewItem = (newProject: ProjectsAttributes): void => {
    setItems((prevState) => {
      const newData = {
        data: {
          items: [...(prevState.data.items || []), newProject],
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleUpdatedItem = (updatedProject: ProjectsAttributes): void => {
    setItems((prevState) => {
      const updatedItems =
        prevState.data.items?.map((project) =>
          project.postsId === updatedProject.postsId ? updatedProject : project
        ) || [];
      const newData = {
        data: {
          items: updatedItems,
        },
      };
      setDataStorage(newData);
      return newData;
    });
  };

  const handleDeletedItem = ({ itemId }: DeletedProject): void => {
    setItems((prevState) => {
      const filteredItems =
        prevState.data.items?.filter(
          (project) => `${project.postsId}` !== `${itemId}`
        ) || [];

      const newData = {
        data: {
          items: filteredItems,
        },
      };

      setDataStorage(newData);
      return newData;
    });
  };

  function getById(id: number): ProjectsAttributes | null {
    return items.data.items?.find((project) => project.postsId === id) || null;
  }

  function getOptionsItems(): SelectDefault[] {
    return (
      items.data.items?.map((item) => {
        return {
          value: `${item.postsId}`,
          label: item.name,
        };
      }) || []
    );
  }

  /**
   * Effects
   *
   *
   */

  React.useEffect(() => {
    getItems();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  const states = {
    isReady,
    items,
  };

  const actions = {
    setIsReady,

    offItems,

    getById,

    handleNewItem,

    handleUpdatedItem,

    handleDeletedItem,

    getOptionsItems,
  };

  return {
    states,
    actions,
  };
}
