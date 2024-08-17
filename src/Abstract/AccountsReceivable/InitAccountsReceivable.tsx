import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { css } from '@emotion/css';
import { Button, ButtonProps } from '../Button';
import { Header, HeaderProps } from '../Header';
import { Error, ErrorProps } from '../Error';
import { List, ListPropsExtended } from '../List';
import type {
  UseGafpriAccountsReceivableReturn,
  SiteOptions,
} from '../../states';
import { decimalFormatPriceConverter } from '../../helpers';

export type InitAccountsReceivableProps = {
  use: UseGafpriAccountsReceivableReturn;
  siteOptions: SiteOptions;
  optionsButtonMainContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

export type InitAccountsReceivablePropsExtended = {
  use?: UseGafpriAccountsReceivableReturn;
  siteOptions?: SiteOptions;
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

export const InitAccountsReceivable = ({
  use,
  siteOptions,
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
    title: 'Creditos',
    buttonLargeProps: {
      label: 'Añadir una cuenta de credito',
      onClick: use.pages.actions.onInitAdd,
      Icon: FaPlus,
      titleButton: 'Agregar',
      description: 'Agrega un nuevo credito.',
    },
  },
  errorProps = {
    error: use.error.states.error,
  },
  listProps,
}: InitAccountsReceivableProps): JSX.Element => {
  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div className={css(optionsButtonMainContainerStyle)}>
        <Button
          buttonProps={{
            onClick: () => use.pages.actions.goFormUpdate(id),
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

  const sort =
    use.paginations.actions.sortByName(
      filtered,
      use.paginations.states.orderList
    ) || [];

  const paginated = use.paginations.actions.getPaginated(
    sort,
    use.paginations.states.currentPage,
    use.paginations.states.itemsPerPage
  );

  const items =
    paginated?.map((item) => {
      const name = item.entity?.lastName
        ? `${item.entity.name} ${item.entity.lastName}`
        : item.entity.name;
      return [
        name,
        decimalFormatPriceConverter(
          item.limit || 0,
          siteOptions.DECIMAL_NUMBERS,
          siteOptions.CURRENCY_SYMBOL,
          siteOptions.CURRENCY_LOCATION
        ),
        decimalFormatPriceConverter(
          item.balance || 0,
          siteOptions.DECIMAL_NUMBERS,
          siteOptions.CURRENCY_SYMBOL,
          siteOptions.CURRENCY_LOCATION
        ),
        <ButtonUpdate id={item.postsId} />,
      ];
    }) ?? [];

  const headers = ['Cliente', 'Limite', 'Balance', 'Opciones'];

  const options = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
  ];

  const valueDefaul =
    use.paginations.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(
    sort.length / use.paginations.states.itemsPerPage
  );

  return (
    <>
      <Header {...headerProps} />
      <Error {...errorProps} />
      <List
        title="Creditos"
        items={items}
        headers={headers}
        columns={4}
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
