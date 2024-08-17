import React from 'react';
import { FaUser, FaBuilding } from 'react-icons/fa';
import { css } from '@emotion/css';
import { Button } from '../Button';
import type { ButtonPropsExtended } from '../Button';
import { List } from '../List';
import type { ListProps } from '../List';
import { Error } from '../Error';
import type { ErrorProps } from '../Error';
import { Header } from '../Header';
import { HeaderPropsExtended } from '../Header';
import type { UseGafpriEntityReturn } from '../../states';
import type { EntityAttributes } from '../states';

export type InitEntityProps = {
  use: UseGafpriEntityReturn;
  optionButtonContainerStyle?: string;
  updateButtonProps?: ButtonPropsExtended;
  viewButtonProps?: ButtonPropsExtended;
  headerProps?: HeaderPropsExtended;
  errorProps?: ErrorProps;
  listProps?: ListProps;
};

export type InitEntityPropsExtended = {
  use: UseGafpriEntityReturn;
  optionButtonContainerStyle?: string;
  updateButtonProps?: ButtonPropsExtended;
  viewButtonProps?: ButtonPropsExtended;
  headerProps?: HeaderPropsExtended;
  errorProps?: ErrorProps;
  listProps?: ListProps;
};

const defaultOptionButtonContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
`;

export const InitEntity = ({
  use,
  optionButtonContainerStyle = defaultOptionButtonContainerStyle,
  updateButtonProps,
  viewButtonProps,
  headerProps,
  errorProps = {
    error: use.error.states.error,
  },
  listProps,
}: InitEntityProps): JSX.Element => {
  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div className={css(optionButtonContainerStyle)}>
        <Button
          title="Actualizar"
          buttonProps={{
            onClick: () => use.pages.actions.goUpdate(id),
          }}
          styles={{
            fontSize: '10px',
          }}
          {...updateButtonProps}
        />
        <Button
          title="Ver"
          buttonProps={{
            onClick: () => use.pages.actions.goView(id),
          }}
          styles={{
            fontSize: '10px',
          }}
          {...viewButtonProps}
        />
      </div>
    );
  };

  const allowedValues: Array<
    'name' | 'lastName' | 'email' | 'phone' | 'digit'
  > = ['name', 'lastName', 'email', 'phone', 'digit'];

  const searchBy: 'name' | 'lastName' | 'email' | 'phone' | 'digit' =
    allowedValues.includes(
      use.paginations.states.searchBy as
        | 'name'
        | 'lastName'
        | 'email'
        | 'phone'
        | 'digit'
    )
      ? (use.paginations.states.searchBy as
          | 'name'
          | 'lastName'
          | 'email'
          | 'phone'
          | 'digit')
      : 'name';

  const filtered = use.paginations.actions.filterBySearch(
    use.paginations.states.searchTerm,
    searchBy
  );

  const entities =
    use.paginations.actions.sortByProperty(
      filtered,
      searchBy,
      use.paginations.states.orderList
    ) || [];

  const paginated = use.paginations.actions.getPaginated(
    entities,
    use.paginations.states.currentPage,
    use.paginations.states.itemsPerPage
  );

  const items =
    paginated?.map((item) => {
      const entityItem = item as EntityAttributes;
      const lastName = entityItem?.lastName || '';
      const fullName = `${entityItem.name} ${lastName}`;
      const documentId = entityItem.documentId[0].index
        ? `${entityItem.documentId[0].index}-${entityItem.documentId[0].digit}`
        : entityItem.documentId[0].digit;
      const type =
        entityItem.type === 'legal'
          ? 'Jurídica'
          : entityItem.type === 'personal'
          ? 'Natural'
          : '';
      return [
        fullName,
        type,
        documentId,
        entityItem.email,
        entityItem.phone,
        <ButtonUpdate id={entityItem.id} />,
      ];
    }) ?? [];

  const headers = [
    'Nombre',
    'Tipo',
    'Documento Legal',
    'Email',
    'Teléfono',
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
    entities.length / use.paginations.states.itemsPerPage
  );

  const itemsButton = [
    {
      id: 'button-tdi-1',
      label: 'Agregar persona natural',
      onClick: () => use.pages.actions.goAddPersonal(),
      icon: FaUser,
    },
    {
      id: 'button-tdi-2',
      label: 'Agregar persona jurídica',
      onClick: () => use.pages.actions.goAddLegal(),
      icon: FaBuilding,
    },
  ];

  return (
    <>
      <Header
        title="Entidades"
        menuButtonProps={{
          items: itemsButton,
        }}
        {...headerProps}
      />
      <Error {...errorProps} />
      <List
        title="Entidades"
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
        selectByProps={{
          options: use.paginations.states.searchByOptions,
          onChange: (event) => {
            use.paginations.actions.changeSearchBy(event);
          },
          defaultValue: use.paginations.states.searchByDefault,
          styles: {
            width: '100%',
          },
        }}
        inputProps={{
          value: use.paginations.states.searchTerm,
          onChange: (e) =>
            use.paginations.actions.setSearchTerm(e.target.value),
          placeholder: 'Buscar...',
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
