import React from 'react';
import { css, cx } from '@emotion/css';
import { Button } from '../Button';
import { Header } from '../Header';
import { Error } from '../Error';
import { List } from '../List';
import { ContainerButton } from '../Containers';
import type { ListPropsExtended } from '../List';
import type { ErrorProps } from '../Error';
import type { HeaderProps } from '../Header';
import type {
  UseGafpriProductsReturn,
  SiteOptions,
  UseGafpriOrderReturn,
} from '../../states';
import { decimalFormatPriceConverter } from '../../helpers';

export type SearchProductsProps = {
  use: UseGafpriProductsReturn;
  useOrder: UseGafpriOrderReturn;
  sitesOptions: SiteOptions;
  optionsButtonMainContainerStyle?: string;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

export type SearchProductsPropsExtended = {
  use?: UseGafpriProductsReturn;
  sitesOptions?: SiteOptions;
  optionsButtonMainContainerStyle?: string;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

const defaultOptionsButtonMainContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
`;

const searchProductsStylesContainer = () => css`
  max-width: 1150px;
  margin: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

export const SearchProducts = ({
  use,
  useOrder,
  sitesOptions,
  optionsButtonMainContainerStyle = defaultOptionsButtonMainContainerStyle,
  headerProps = {
    title: 'Productos',
  },
  errorProps = {
    error: use.error.states.error,
  },
  listProps,
}: SearchProductsProps): JSX.Element => {
  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div className={css(optionsButtonMainContainerStyle)}>
        <Button
          title="Seleccionar"
          buttonProps={{
            onClick: () => useOrder.pages.actions.selectproduct(id),
          }}
          styles={{
            fontSize: '10px',
          }}
        />
      </div>
    );
  };

  const allowedValues: Array<'name' | 'sku' | 'tags' | 'category'> = [
    'name',
    'sku',
    'tags',
    'category',
  ];

  const searchBy: 'name' | 'sku' | 'tags' | 'category' = allowedValues.includes(
    use.paginations.states.searchBy as 'name' | 'sku' | 'tags' | 'category'
  )
    ? (use.paginations.states.searchBy as 'name' | 'sku' | 'tags' | 'category')
    : 'name';

  const filtered = use.paginations.actions.filterBySearch(
    use.paginations.states.searchTerm,
    searchBy
  );

  const projects =
    use.paginations.actions.sortByProperty(
      filtered,
      searchBy,
      use.paginations.states.orderList
    ) || [];

  const paginated = use.paginations.actions.getPaginated(
    projects,
    use.paginations.states.currentPage,
    use.paginations.states.itemsPerPage
  );

  const items =
    paginated?.map((item) => {
      const price = decimalFormatPriceConverter(
        item.salesPrice || 0,
        sitesOptions.DECIMAL_NUMBERS,
        sitesOptions.CURRENCY_SYMBOL,
        sitesOptions.CURRENCY_LOCATION,
        sitesOptions.CURRENCY_FORMAT
      );
      return [item.sku, item.name, price, <ButtonUpdate id={item.postsId} />];
    }) ?? [];

  const headers = ['Código', 'Nombre', 'Precio', 'Opciones'];

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
      <div className={cx(searchProductsStylesContainer())}>
        <Header {...headerProps} />
        <Error {...errorProps} />
        <List
          title="Productos"
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
                onClick: () => useOrder.pages.actions.onSales(),
              }}
              styles={{
                backgroundColor: '#c12429',
                margin: '0 20px 0 0',
              }}
            />
          </>
        </ContainerButton>
      </div>
    </>
  );
};
