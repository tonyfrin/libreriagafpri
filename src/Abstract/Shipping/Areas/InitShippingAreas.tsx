import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { css } from '@emotion/css';
import { Button, ButtonProps } from '../../Button';
import { Header, HeaderProps } from '../../Header';
import { Error, ErrorProps } from '../../Error';
import { List, ListPropsExtended } from '../../List';
import { Countries, StatesCountries } from '../../../constants';
import type { UseGafpriShippingAreasReturn } from '../../../states';

export type InitShippingAreasProps = {
  use: UseGafpriShippingAreasReturn;
  optionsButtonMainContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

export type InitShippingAreasExtended = {
  use?: UseGafpriShippingAreasReturn;
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

export const InitShippingAreas = ({
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
    title: 'Zonas de envíos',
    buttonLargeProps: {
      label: 'Añadir zona de envío',
      onClick: use.pages.actions.goAdd,
      Icon: FaPlus,
      titleButton: 'Agregar',
      description: 'Agrega una nueva zona.',
    },
  },
  errorProps = {
    error: use.error.states.error,
  },
  listProps,
}: InitShippingAreasProps): JSX.Element => {
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
    use.paginations.states.searchTerm
  );

  const areas =
    use.paginations.actions.sortByName(
      filtered,
      use.paginations.states.orderList
    ) || [];

  const paginated = use.paginations.actions.getPaginated(
    areas,
    use.paginations.states.currentPage,
    use.paginations.states.itemsPerPage
  );

  const items =
    paginated?.map((item) => {
      let areasString = '';

      item?.region?.forEach((area) => {
        const label =
          Countries[0][area] || StatesCountries[0]['VE'][0][area] || area;
        areasString += `${label}, `;
      });

      return [item.name, areasString, <ButtonUpdate id={item.id} />];
    }) ?? [];

  const headers = ['Nombre', 'Zonas', 'Opciones'];

  const options = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
  ];

  const valueDefaul =
    use.paginations.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(
    areas.length / use.paginations.states.itemsPerPage
  );

  return (
    <>
      <Header {...headerProps} />
      <Error {...errorProps} />
      <List
        title="Zonas"
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
