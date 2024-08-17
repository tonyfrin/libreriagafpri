import React from 'react';
import { css, cx } from '@emotion/css';
import { UseGafpriOrderReturn, SiteOptions } from '../../states';
import { Title2 } from '../Title';
import { decimalFormatPriceConverter, formatDate } from '../../helpers';
import { Button } from '../Button';
import { SingleList } from '../List';

const orderPendingTdStyle = (width: string, custom?: string) => css`
  width: ${width};
  border: 1px solid #ddd;
  padding: 4px;
  text-align: center;
  ${custom || ''}
`;

export type OrderPendingTableProps = {
  use: UseGafpriOrderReturn;
  siteOptions: SiteOptions;
};

export const OrderPendingTable = ({
  use,
  siteOptions,
}: OrderPendingTableProps): JSX.Element => {
  const ordersPending =
    use.data.states.items.data.items?.filter((item) => {
      return item.posts.status === 'on_hold';
    }) || [];

  const sort =
    use.paginations.actions.sortById(
      ordersPending,
      use.paginations.states.orderList
    ) || [];

  const paginated = use.paginations.actions.getPaginated(
    sort,
    use.paginations.states.currentPage,
    use.paginations.states.itemsPerPage
  );

  const goPayment = (id: number): void => {
    use.attributes.actions.setCurrentId(id);
    use.pages.actions.onOrderPayment();
  };

  const items =
    paginated?.map((item) => {
      return [
        <td className={cx(orderPendingTdStyle('20%'))}>{item.postsId}</td>,
        <td className={cx(orderPendingTdStyle('20%'))}>
          {formatDate(`${item.posts.createdAt}`)}
        </td>,
        <td className={cx(orderPendingTdStyle('20%'))}>
          {item.orderCustomer[0].lastName
            ? `${item.orderCustomer[0].name} ${item.orderCustomer[0].lastName}`
            : `${item.orderCustomer[0].name}`}
        </td>,
        <td className={cx(orderPendingTdStyle('20%'))}>
          {decimalFormatPriceConverter(
            item.total || 0,
            siteOptions.DECIMAL_NUMBERS,
            siteOptions.CURRENCY_SYMBOL,
            siteOptions.CURRENCY_LOCATION
          )}
        </td>,
        <td className={cx(orderPendingTdStyle('20%'))}>
          <Button
            title="Ver"
            styles={{
              fontSize: '8px',
              margin: '0px 20px 0px 0px',
            }}
            buttonProps={{
              onClick: () => use.pages.actions.goOrderView(item.postsId),
            }}
          />
          <Button
            title="Pagar"
            styles={{
              fontSize: '8px',
              margin: '0px 20px 0px 0px',
              backgroundColor: '#439b57',
            }}
            buttonProps={{
              onClick: () => goPayment(item.postsId),
            }}
          />
          <Button
            title="Cancelar"
            styles={{
              fontSize: '8px',
              margin: '0px',
              backgroundColor: '#c12429',
            }}
            buttonProps={{
              onClick: () => use.api.actions.erase(item.postsId),
            }}
          />
        </td>,
      ];
    }) ?? [];

  const header = ['#', 'fecha', 'cliente', 'monto', 'acciones'];

  const totalPages = Math.ceil(
    sort.length / use.paginations.states.itemsPerPage
  );

  return (
    <>
      <div>
        <Title2
          title={'Pedidos en espera'}
          styles={{
            fontSize: '0.9rem',
            margin: '0px 0px 10px 0px',
            fontWeight: '700',
          }}
        />
        <SingleList
          headers={header}
          items={items}
          propsPagination={{
            currentPage: use.paginations.states.currentPage,
            setCurrentPage: use.paginations.actions.setCurrentPage,
            totalPages: totalPages,
          }}
        />
      </div>
    </>
  );
};
