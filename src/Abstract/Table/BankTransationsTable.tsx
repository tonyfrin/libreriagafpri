import React from 'react';
import { css, cx } from '@emotion/css';
import { BiTimeFive } from 'react-icons/bi';
import { Title2 } from '../Title';
import { CurrenciesAttributes, UseGafpriBankTypeReturn } from '../../states';
import { BankTransactionsAttributes } from '../states';
import { truncarTexto, decimalFormatPriceConverter } from '../../helpers';
import { SiteOptions } from '../../states';
import { SingleList } from '../List';
import { formatDate } from '../../helpers';
import { Icon } from '../Icon';

const btContainerStyle = () => css`
  width: 100%;
`;

const btTdStyle = (width: string, custom?: string) => css`
  width: ${width};
  border: 1px solid #ddd;
  padding: 4px;
  text-align: center;
  ${custom || ''}
`;

export type BankTransationsTableProps = {
  use: UseGafpriBankTypeReturn;
  siteOptions: SiteOptions;
  transactions: BankTransactionsAttributes[];
  title: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  bankCurrency: CurrenciesAttributes;
};

export const BankTransationsTable = ({
  use,
  siteOptions,
  transactions,
  title,
  currentPage,
  setCurrentPage,
  bankCurrency,
}: BankTransationsTableProps): JSX.Element => {
  const sort = use.paginations.actions.sortTransactionsById(transactions) || [];

  const paginated = use.paginations.actions.getTransactionsgetPaginated(
    sort,
    currentPage
  );

  const items =
    paginated?.map((item) => {
      const icon = item.status === 'pending' ? BiTimeFive : BiTimeFive;
      return [
        <td className={cx(btTdStyle('0.083333333%', `text-align: start;`))}>
          {item.createdAt ? formatDate(item.createdAt) : ''}
        </td>,
        <td className={cx(btTdStyle('0.083333333%', `text-align: start;`))}>
          {formatDate(item.dateTransations)}
        </td>,
        <td className={cx(btTdStyle('0.49%', `text-align: start;`))}>
          {truncarTexto(item.description || '', 110)}
        </td>,
        <td className={cx(btTdStyle('0.01%', `text-align: start;`))}>
          <Icon
            item={{
              id: `${item.id}`,
              onClick: () => {},
              icon: icon,
            }}
            containerStyles={{
              padding: '0px',
              custom: `
                display: flex;
                justify-content: center;
                align-items: center;
              `,
            }}
            contentStyle={{
              fontSize: '12px',
              width: '1rem',
              height: '1rem',
            }}
          />
        </td>,
        <td className={cx(btTdStyle('0.16666667%', `text-align: end;`))}>
          {decimalFormatPriceConverter(
            item.amount || 0,
            siteOptions.DECIMAL_NUMBERS,
            bankCurrency.symbol,
            siteOptions.CURRENCY_LOCATION
          )}
        </td>,
        <td className={cx(btTdStyle('0.16666667%', `text-align: end;`))}>
          {decimalFormatPriceConverter(
            item.balance || 0,
            siteOptions.DECIMAL_NUMBERS,
            bankCurrency.symbol,
            siteOptions.CURRENCY_LOCATION
          )}
        </td>,
      ];
    }) ?? [];

  const header = [
    'Fecha',
    'Procesado',
    'Descripción',
    'Estado',
    'Monto',
    'Balance',
  ];

  const totalPages = Math.ceil(
    sort.length / use.paginations.states.itemsPerPage
  );

  return (
    <>
      <div className={cx(btContainerStyle())}>
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
