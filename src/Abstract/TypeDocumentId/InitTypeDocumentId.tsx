import React from 'react';
import { FaFlagUsa } from 'react-icons/fa';
import { css } from '@emotion/css';
import { GiEarthAmerica } from 'react-icons/gi';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';
import { Countries } from '../../constants';
import { List } from '../List';
import type { ListPropsExtended } from '../List';
import { Error } from '../Error';
import type { ErrorProps } from '../Error';
import { Header } from '../Header';
import { HeaderPropsExtended } from '../Header';
import type { UseTypeDocumentIdReturn } from 'src/states';

export type InitTypeDocumentIdProps = {
  use: UseTypeDocumentIdReturn;
  optionsButtonMainContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderPropsExtended;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

export type InitTypeDocumentIdPropsExtended = {
  use?: UseTypeDocumentIdReturn;
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

export const InitTypeDocumentId = ({
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
}: InitTypeDocumentIdProps): JSX.Element => {
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
            onClick: () => use.actions.deleteTypeDocumentId(id),
          }}
          {...deleteButtonProps}
        />
      </div>
    );
  };

  const filtered = use.actions.filterByName(use.states.searchTerm);

  const typeDocumentiId =
    use.actions.sortByName(filtered, use.states.orderList) || [];

  const paginated = use.actions.getPaginated(
    typeDocumentiId,
    use.states.currentPage,
    use.states.itemsPerPage
  );

  const items =
    paginated?.map((item) => {
      const country = Countries[0][item?.country] || '';
      return [item.name, country, <ButtonUpdate id={item.id} />];
    }) ?? [];

  const headers = ['Nombre', 'Pais', 'Opciones'];

  const options = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
  ];

  const valueDefaul =
    use.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(
    typeDocumentiId.length / use.states.itemsPerPage
  );

  const itemsButton = [
    {
      id: 'button-tdi-1',
      label: 'Agregar documento para Vzla',
      onClick: use.actions.goAddVzla,
      icon: GiEarthAmerica,
    },
    {
      id: 'button-tdi-2',
      label: 'Agregar documento para Usa',
      onClick: use.actions.goAddUsa,
      icon: FaFlagUsa,
    },
  ];

  return (
    <>
      <Header
        title=""
        menuButtonProps={{
          items: itemsButton,
        }}
        {...headerProps}
      />
      <Error {...errorProps} />
      <List
        title="Tipos"
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
