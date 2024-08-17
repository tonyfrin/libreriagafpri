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
import type { UseGafpriExpensesTypeReturn } from 'src/states';

export type InitExpensesTypeProps = {
  use: UseGafpriExpensesTypeReturn;
  optionsButtonMainContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderPropsExtended;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

export type InitExpensesTypePropsExtended = {
  use: UseGafpriExpensesTypeReturn;
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

export const InitExpensesType = ({
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
    error: use.error.states.error,
  },
  listProps,
}: InitExpensesTypeProps): JSX.Element => {
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

  const filtered = use.paginations.actions.filterByName(
    use.data.states.items.data.items,
    use.paginations.states.searchTerm
  );

  const expenses =
    use.paginations.actions.sortByName(
      filtered,
      use.paginations.states.orderList
    ) || [];

  const paginated = use.paginations.actions.getPaginated(
    expenses,
    use.paginations.states.currentPage,
    use.paginations.states.itemsPerPage
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
    use.paginations.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(
    expenses.length / use.paginations.states.itemsPerPage
  );

  return (
    <>
      <Header
        title="Tipos de egresos"
        buttonLargeProps={{
          label: 'Añadir tipo de egreso',
          onClick: use.pages.actions.goAdd,
          Icon: FaPlus,
          titleButton: 'Agregar',
          description: 'Agrega un nuevo tipo de egreso.',
        }}
        {...headerProps}
      />
      <Error {...errorProps} />
      <List
        title="Egresos"
        items={items}
        headers={headers}
        columns={3}
        selectProps={{
          options: options,
          onChange: (event) => {
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
          onChange: (e) =>
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
