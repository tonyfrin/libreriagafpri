import React from 'react';
import { css, cx } from '@emotion/css';
import { Button } from '../Button';
import { List } from '../List';
import { Error } from '../Error';
import { Header } from '../Header';
import type { EntityAttributes } from '../states';
import { ContainerButton } from '../Containers';
import {
  UseGafpriEntityReturn,
  UseGafpriAccountsReceivableReturn,
} from '../../states';
import type { ButtonPropsExtended } from '../Button';
import type { ListProps } from '../List';
import type { ErrorProps } from '../Error';

export type EntityAccountsReceivableSearchProps = {
  use: UseGafpriEntityReturn;
  useAccountsReceivable: UseGafpriAccountsReceivableReturn;
  optionButtonContainerStyle?: string;
  updateButtonProps?: ButtonPropsExtended;
  errorProps?: ErrorProps;
  listProps?: ListProps;
};

export type EntityAccountsReceivableSearchPropsExtended = {
  use: UseGafpriEntityReturn;
  optionButtonContainerStyle?: string;
  updateButtonProps?: ButtonPropsExtended;
  errorProps?: ErrorProps;
  listProps?: ListProps;
};

const defaultOptionButtonContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
`;

const entityAccountsReceivableSearchStylesContainer = () => css`
  max-width: 1150px;
  margin: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

export const EntityAccountsReceivableSearch = ({
  use,
  useAccountsReceivable,
  optionButtonContainerStyle = defaultOptionButtonContainerStyle,
  updateButtonProps,
  errorProps = {
    error: use.error.states.error,
  },
  listProps,
}: EntityAccountsReceivableSearchProps): JSX.Element => {
  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div className={css(optionButtonContainerStyle)}>
        <Button
          title="Seleccionar"
          buttonProps={{
            onClick: () => useAccountsReceivable.pages.actions.selectEntity(id),
          }}
          styles={{
            fontSize: '10px',
          }}
          {...updateButtonProps}
        />
      </div>
    );
  };

  const returnInit = () => {
    useAccountsReceivable.pages.actions.returnInit();
    use.pages.actions.returnInit();
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

  return (
    <>
      <div className={cx(entityAccountsReceivableSearchStylesContainer())}>
        <Header title="Entidades" />
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
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'flex-start',
            custom: `
                    margin-top: 30px;`,
          }}
        >
          <>
            <Button
              title="regresar"
              buttonProps={{
                onClick: () => returnInit(),
              }}
              styles={{
                backgroundColor: '#c12429',
                margin: '0 20px 0 0',
              }}
            />
            <Button
              title="Agregar"
              buttonProps={{
                onClick: () =>
                  useAccountsReceivable.pages.actions.onAddEntity(),
              }}
            />
          </>
        </ContainerButton>
      </div>
    </>
  );
};
