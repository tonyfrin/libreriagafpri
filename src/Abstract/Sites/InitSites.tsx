import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { css } from '@emotion/css';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';
import { StatesCountries, Countries } from '../../constants';
import { List } from '../List';
import type { ListPropsExtended } from '../List';
import { Error } from '../Error';
import type { ErrorProps } from '../Error';
import { Header } from '../Header';
import type { HeaderProps } from '../Header';
import type { UseSitesReturn } from '../../states';

export type InitSitesProps = {
  use: UseSitesReturn;
  optionButtonContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

export type InitSitesPropsExtended = {
  use?: UseSitesReturn;
  optionButtonContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

const defaultOptionButtonContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
`;

export const InitSites = ({
  use,
  optionButtonContainerStyle = defaultOptionButtonContainerStyle,
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
    title: 'Sitios',
    buttonLargeProps: {
      label: 'Añadir sitios',
      onClick: use.actions.goAdd,
      Icon: FaPlus,
      titleButton: 'Agregar',
      description: 'Agrega un nuevo Sitio.',
    },
  },
  errorProps = {
    error: use.states.error,
  },
  listProps,
}: InitSitesProps): JSX.Element => {
  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div className={css(optionButtonContainerStyle)}>
        <Button
          buttonProps={{
            onClick: () => use.actions.goUpdate(id),
          }}
          {...updateButtonProps}
        />
        <Button
          buttonProps={{
            onClick: () => use.actions.deleteSites(id),
          }}
          {...deleteButtonProps}
        />
      </div>
    );
  };

  const filteredSites = use.actions.filterByName(use.states.searchTerm);

  const sites =
    use.actions.sortByName(filteredSites, use.states.orderList) || [];

  const paginatedSites = use.actions.getPaginated(
    sites,
    use.states.currentPage,
    use.states.itemsPerPage
  );

  const items =
    paginatedSites?.map((item) => {
      const stateCountry =
        StatesCountries[0][item?.country][0][item?.state] || '';
      const country = Countries[0][item?.country] || '';
      return [
        item.name,
        item.city,
        stateCountry,
        country,
        <ButtonUpdate id={item.id} />,
      ];
    }) ?? [];

  const headers = ['Nombre', 'Ciudad', 'Estado', 'País', 'Opciones'];

  const options = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
  ];

  const valueDefaul =
    use.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(sites.length / use.states.itemsPerPage);

  return (
    <>
      <Header {...headerProps} />
      <Error {...errorProps} />
      <List
        title="Sitios"
        items={items}
        headers={headers}
        columns={5}
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
