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
import type { HeaderProps } from '../Header';
import type { UseCurrenciesReturn } from 'src/states';

export type InitCurrenciesProps = {
  use: UseCurrenciesReturn;
  optionsButtonMainContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

export type InitCurrenciesPropsExtended = {
  use?: UseCurrenciesReturn;
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

export const InitCurrencies = ({
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
    title: 'Monedas',
    buttonLargeProps: {
      label: 'Añadir monedas',
      onClick: use.actions.goAdd,
      Icon: FaPlus,
      titleButton: 'Agregar',
      description: 'Agrega un nuevo tipo de moneda.',
    },
  },
  errorProps = {
    error: use.states.error,
  },
  listProps,
}: InitCurrenciesProps): JSX.Element => {
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
            onClick: () => use.actions.deleteCurrency(id),
          }}
          {...deleteButtonProps}
        />
      </div>
    );
  };

  const filteredCurrencies = use.actions.filterCurrenciesByName(
    use.states.searchTerm
  );

  const currencies =
    use.actions.sortCurrenciesByName(
      filteredCurrencies,
      use.states.orderList
    ) || [];

  const paginatedCurrencies = use.actions.getPaginatedCurrencies(
    currencies,
    use.states.currentPage,
    use.states.itemsPerPage
  );

  const items =
    paginatedCurrencies?.map((item) => {
      return [item.name, item.symbol, <ButtonUpdate id={item.id} />];
    }) ?? [];

  const headers = ['Nombre', 'Simbolo', 'Opciones'];

  const options = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
  ];

  const valueDefaul =
    use.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(currencies.length / use.states.itemsPerPage);

  return (
    <>
      <Header {...headerProps} />
      <Error {...errorProps} />
      <List
        title="Monedas"
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
