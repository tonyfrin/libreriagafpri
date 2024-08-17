import React from 'react';
import { css, cx } from '@emotion/css';
import { Title2 } from '../Title';
import { UseGafpriCashRegisterTypeReturn } from '../../states';
import { CashTransactionsAttributes } from '../states';
import { truncarTexto, decimalFormatPriceConverter } from '../../helpers';
import { SiteOptions } from '../../states';
import { SingleList } from '../List';

const expensesHeaderContainerStyle = () => css``;

const expensesTdStyle = (width: string, custom?: string) => css`
  width: ${width};
  border: 1px solid #ddd;
  padding: 4px;
  text-align: center;
  ${custom || ''}
`;

export type CashTransationsTableProps = {
  use: UseGafpriCashRegisterTypeReturn;
  siteOptions: SiteOptions;
  cashTransactions: CashTransactionsAttributes[];
  title: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export const CashTransationsTable = ({
  use,
  siteOptions,
  cashTransactions,
  title,
  currentPage,
  setCurrentPage,
}: CashTransationsTableProps): JSX.Element => {
  const sort =
    use.paginations.actions.sortCashTransactionsById(
      cashTransactions,
      use.paginations.states.orderList
    ) || [];

  const paginated = use.paginations.actions.getCashTransactionsgetPaginated(
    sort,
    currentPage,
    use.paginations.states.itemsPerPage
  );

  const items =
    paginated?.map((item) => {
      return [
        <td className={cx(expensesTdStyle('20%', `text-align: start;`))}>
          {item.id}
        </td>,
        <td className={cx(expensesTdStyle('60%'))}>
          {truncarTexto(item.note || '', 40)}
        </td>,
        <td className={cx(expensesTdStyle('20%', `text-align: end;`))}>
          {decimalFormatPriceConverter(
            item.change || 0,
            siteOptions.DECIMAL_NUMBERS,
            siteOptions.CURRENCY_SYMBOL,
            siteOptions.CURRENCY_LOCATION
          )}
        </td>,
      ];
    }) ?? [];

  const header = ['numero', 'concepto', 'monto'];

  const totalPages = Math.ceil(
    sort.length / use.paginations.states.itemsPerPage
  );

  return (
    <>
      <div className={cx(expensesHeaderContainerStyle())}>
        <Title2
          title={title}
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
            currentPage: currentPage,
            setCurrentPage: setCurrentPage,
            totalPages: totalPages,
          }}
        />
      </div>
    </>
  );
};
