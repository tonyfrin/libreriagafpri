import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { css } from '@emotion/css';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';
import { List } from '../List';
import { ListPropsExtended } from '../List';
import { Error } from '../Error';
import type { ErrorProps } from '../Error';
import { Header } from '../Header';
import type { HeaderPropsExtended } from '../Header';
import type { UseCategoryReturn } from 'src/states';

export type InitCategoryProps = {
  use: UseCategoryReturn;
  optionsButtonMainContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderPropsExtended;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

export type InitCategoryPropsExtended = {
  use: UseCategoryReturn;
  optionsButtonMainContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderPropsExtended;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

const defaultOptionsButtonMainContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
`;

export const InitCategory = ({
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
  headerProps,
  errorProps = {
    error: use.states.error,
  },
  listProps,
}: InitCategoryProps): JSX.Element => {
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
            onClick: () => use.actions.deleteCategory(id),
          }}
          {...deleteButtonProps}
        />
      </div>
    );
  };

  const filtered = use.actions.filterByName(
    use.states.category.data.items,
    use.states.searchTerm
  );

  const category = use.actions.sortByName(filtered, use.states.orderList) || [];

  const paginated = use.actions.getPaginated(
    category,
    use.states.currentPage,
    use.states.itemsPerPage
  );

  const items =
    paginated?.map((item) => {
      return [item.name, item.description, <ButtonUpdate id={item.id} />];
    }) ?? [];
  const headers = ['Nombre', 'Descripción', 'Opciones'];

  const options = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
  ];

  const valueDefaul =
    use.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(category.length / use.states.itemsPerPage);

  return (
    <>
      <Header
        title="Categorías de Productos"
        buttonLargeProps={{
          label: 'Añadir Categoría',
          onClick: use.actions.goAdd,
          Icon: FaPlus,
          titleButton: 'Agregar',
          description: 'Agrega una nueva categoría de productos.',
        }}
        {...headerProps}
      />
      <Error {...errorProps} />
      <List
        title="Categorías"
        items={items}
        headers={headers}
        columns={3}
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
