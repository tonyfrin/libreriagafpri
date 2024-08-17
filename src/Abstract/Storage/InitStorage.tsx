import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { css } from '@emotion/css';
import { Button, ButtonProps } from '../Button';
import { Header, HeaderProps } from '../Header';
import { Error, ErrorProps } from '../Error';
import { List, ListPropsExtended } from '../List';
import type { UseGafpriStorageReturn } from '../../states';
import { Countries, StatesCountries } from '../../constants';

export type InitStorageProps = {
  use: UseGafpriStorageReturn;
  optionsButtonMainContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

export type InitStoragePropsExtended = {
  use?: UseGafpriStorageReturn;
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

export const InitStorage = ({
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
    title: 'Depositos',
    buttonLargeProps: {
      label: 'Añadir deposito',
      onClick: use.pages.actions.goAdd,
      Icon: FaPlus,
      titleButton: 'Agregar',
      description: 'Agrega un nuevo deposito.',
    },
  },
  errorProps = {
    error: use.error.states.error,
  },
  listProps,
}: InitStorageProps): JSX.Element => {
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

  const paginatedStorages = use.paginations.actions.getPaginated(
    projects,
    use.paginations.states.currentPage,
    use.paginations.states.itemsPerPage
  );

  const items =
    paginatedStorages?.map((item) => {
      const stateCountry =
        StatesCountries[0][item?.country][0][item?.state] || '';
      const country = Countries[0][item?.country] || '';
      return [
        item.name,
        item.address1,
        item.city,
        stateCountry,
        country,
        <ButtonUpdate id={item.postsId} />,
      ];
    }) ?? [];

  const headers = [
    'Nombre',
    'Dirección',
    'Ciudad',
    'Estado',
    'País',
    'Opciones',
  ];

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
        title="Depositos"
        items={items}
        headers={headers}
        columns={6}
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
