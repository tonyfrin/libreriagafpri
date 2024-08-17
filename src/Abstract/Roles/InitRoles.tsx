import React from 'react';
import { css } from '@emotion/css';
import { FaPlus } from 'react-icons/fa';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';
import { List } from '../List';
import type { ListPropsExtended } from '../List';
import { Error } from '../Error';
import type { ErrorProps } from '../Error';
import { Header } from '../Header';
import type { HeaderProps } from '../Header';
import { UseRolesReturn } from '../../states';

export type InitRolesProps = {
  use: UseRolesReturn;
  optionsButtonMainContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

export type InitRolesPropsExtended = {
  use?: UseRolesReturn;
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

export const InitRoles = ({
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
    title: 'Roles de Usuario',
    buttonLargeProps: {
      label: 'Añadir Rol',
      onClick: use.actions.goAdd,
      Icon: FaPlus,
      titleButton: 'Agregar',
      description: 'Agrega un nuevo tipo de rol.',
    },
  },
  errorProps = {
    error: use.states.error,
  },
  listProps,
}: InitRolesProps): JSX.Element => {
  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div className={css(optionsButtonMainContainerStyle)}>
        <Button
          buttonProps={{
            onClick: () => use.actions.goUpdate(id),
          }}
          {...updateButtonProps}
        />
        <Button
          buttonProps={{
            onClick: () => use.actions.deleteRoles(id),
          }}
          {...deleteButtonProps}
        />
      </div>
    );
  };

  const filtered = use.actions.filterByName(use.states.searchTerm);

  const roles = use.actions.sortByName(filtered, use.states.orderList) || [];

  const paginated = use.actions.getPaginated(
    roles,
    use.states.currentPage,
    use.states.itemsPerPage
  );

  const items =
    paginated?.map((item) => {
      return [item.name, <ButtonUpdate id={item.id} />];
    }) ?? [];
  const headers = ['Nombre', 'Opciones'];

  const options = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
  ];

  const valueDefaul =
    use.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(roles.length / use.states.itemsPerPage);

  return (
    <>
      <Header {...headerProps} />
      <Error {...errorProps} />
      <List
        title="Roles"
        items={items}
        headers={headers}
        columns={2}
        selectProps={{
          options: options,
          onChange: (event) => {
            if (event?.value) {
              use.actions.setOrderList(event.value as 'asc' | 'desc');
            }
          },
          defaultValue: valueDefaul,
          styles: {
            width: '50%',
          },
        }}
        inputProps={{
          value: use.states.searchTerm,
          onChange: (e) => use.actions.setSearchTerm(e.target.value),
          placeholder: 'Buscar por nombre...',
        }}
        propsPagination={{
          currentPage: use.states.currentPage,
          setCurrentPage: use.actions.setCurrentPage,
          totalPages: totalPages,
        }}
        {...listProps}
      />
    </>
  );
};
