import React from 'react';
import { SingleValue } from 'react-select';
import { FaPlus } from 'react-icons/fa';
import { css } from '@emotion/css';
import { Button, ButtonProps } from '../Button';
import { Header, HeaderProps } from '../Header';
import { Error, ErrorProps } from '../Error';
import { List, ListPropsExtended } from '../List';
import type { UseGafpriProjectsReturn } from '../../states/useGafpriProjects';

export type InitProjectsProps = {
  use: UseGafpriProjectsReturn;
  optionsButtonMainContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

export type InitProjectsPropsExtended = {
  use?: UseGafpriProjectsReturn;
  optionsButtonMainContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

const defaultOptionsButtonMainContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
`;

export const InitProjects = ({
  use,
  optionsButtonMainContainerStyle = defaultOptionsButtonMainContainerStyle,
  updateButtonProps = {
    title: 'Actualizar',
    styles: {
      fontSize: '10px',
    },
  },
  deleteButtonProps = {
    title: 'Eliminar',
    styles: {
      backgroundColor: '#c12429',
      fontSize: '10px',
    },
  },
  headerProps = {
    title: 'Proyectos',
    buttonLargeProps: {
      label: 'Añadir proyectos',
      onClick: use.pages.actions.goAdd,
      Icon: FaPlus,
      titleButton: 'Agregar',
      description: 'Agrega un nuevo proyecto.',
    },
  },
  errorProps = {
    error: use.error.states.error,
  },
  listProps,
}: InitProjectsProps): JSX.Element => {
  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div className={css(optionsButtonMainContainerStyle)}>
        <Button
          buttonProps={{
            onClick: () => use.pages.actions.goUpdate(id),
          }}
          {...updateButtonProps}
        />
        <Button
          buttonProps={{
            onClick: () => use.api.actions.erase(id),
          }}
          {...deleteButtonProps}
        />
      </div>
    );
  };

  const filteredProjects = use.paginations.actions.filterByName(
    use.paginations.states.searchTerm
  );

  const projects =
    use.paginations.actions.sortByName(
      filteredProjects,
      use.paginations.states.orderList
    ) || [];

  const paginatedCurrencies = use.paginations.actions.getPaginated(
    projects,
    use.paginations.states.currentPage,
    use.paginations.states.itemsPerPage
  );

  const items =
    paginatedCurrencies?.map((item) => {
      return [item.name, item.description, <ButtonUpdate id={item.postsId} />];
    }) ?? [];

  const headers = ['Nombre', 'Descripción', 'Opciones'];

  const options = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
  ];

  const valueDefaul =
    use.paginations.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(
    projects.length / use.paginations.states.itemsPerPage
  );

  return (
    <>
      <Header {...headerProps} />
      <Error {...errorProps} />
      <List
        title="Proyectos"
        items={items}
        headers={headers}
        columns={3}
        selectProps={{
          options: options,
          onChange: (event: SingleValue<{ value: string; label: string }>) => {
            if (event?.value) {
              use.paginations.actions.setOrderList(
                event.value as 'asc' | 'desc'
              );
            }
          },
          defaultValue: valueDefaul,
          styles: {
            width: '50%',
          },
        }}
        inputProps={{
          value: use.paginations.states.searchTerm,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            use.paginations.actions.setSearchTerm(e.target.value),
          placeholder: 'Buscar por nombre...',
        }}
        propsPagination={{
          currentPage: use.paginations.states.currentPage,
          setCurrentPage: use.paginations.actions.setCurrentPage,
          totalPages: totalPages,
        }}
        {...listProps}
      />
    </>
  );
};
