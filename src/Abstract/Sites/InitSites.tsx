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
import type { UseGafpriSitesReturn } from '../../states';

export type InitSitesProps = {
  use: UseGafpriSitesReturn;
  optionButtonContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

export type InitSitesPropsExtended = {
  use?: UseGafpriSitesReturn;
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
      onClick: use.pages.actions.goAdd,
      Icon: FaPlus,
      titleButton: 'Agregar',
      description: 'Agrega un nuevo Sitio.',
    },
  },
  errorProps = {
    error: use.attributes.states.error,
  },
  listProps,
}: InitSitesProps): JSX.Element => {
  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div className={css(optionButtonContainerStyle)}>
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

  const filteredSites = use.paginations.actions.filterByName(
    use.paginations.states.searchTerm,
    use.data.states.sites
  );

  const sites =
    use.paginations.actions.sortByName(
      filteredSites,
      use.paginations.states.orderList
    ) || [];

  const paginatedSites = use.paginations.actions.getPaginated(
    sites,
    use.paginations.states.currentPage,
    use.paginations.states.itemsPerPage
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
    use.paginations.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(
    sites.length / use.paginations.states.itemsPerPage
  );

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
