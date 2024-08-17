import React from 'react';
import { css, cx } from '@emotion/css';
import { Title2 } from '../Title';
import { decimalFormatPriceConverter } from '../../helpers';
import { SiteOptions, UseCurrenciesReturn } from '../../states';
import { SingleTable } from './SingleTable';
import { CashRegisterTypeCurrenciesAttributes } from '../states';

const expensesHeaderContainerStyle = () => css``;

const expensesTdStyle = (width: string, custom?: string) => css`
  width: ${width};
  border: 1px solid #ddd;
  padding: 4px;
  text-align: center;
  ${custom || ''}
`;

export type CashBalanceTableProps = {
  siteOptions: SiteOptions;
  currentBalance: CashRegisterTypeCurrenciesAttributes[];
  useCurrencies: UseCurrenciesReturn;
};

export const CashBalanceTable = ({
  siteOptions,
  currentBalance,
  useCurrencies,
}: CashBalanceTableProps): JSX.Element => {
  const totalBalance = currentBalance.reduce(
    (acc, curr) => parseFloat(`${acc}`) + parseFloat(`${curr.balanceChange}`),
    0
  );

  const items = currentBalance.map((item) => {
    const currency = useCurrencies.actions.getById(item.currenciesId);
    return [
      <td className={cx(expensesTdStyle('50%', `text-align: start;`))}>
        {currency?.name || ''}
      </td>,
      <td className={cx(expensesTdStyle('25%', `text-align: end;`))}>
        {decimalFormatPriceConverter(
          item.balance || 0,
          siteOptions.DECIMAL_NUMBERS,
          currency?.symbol || '',
          siteOptions.CURRENCY_LOCATION
        )}
      </td>,
      <td className={cx(expensesTdStyle('25%', `text-align: end;`))}>
        {decimalFormatPriceConverter(
          item.balanceChange || 0,
          siteOptions.DECIMAL_NUMBERS,
          siteOptions.CURRENCY_SYMBOL,
          siteOptions.CURRENCY_LOCATION
        )}
      </td>,
    ];
  });

  items.push([
    <td
      className={cx(
        expensesTdStyle(
          '50%',
          `
      text-align: end;
      font-weight: 700;
    `
        )
      )}
    >
      Total
    </td>,
    <td className={cx(expensesTdStyle('25%', `text-align: end;`))}></td>,
    <td
      className={cx(
        expensesTdStyle(
          '25%',
          `
      text-align: end;
      font-weight: 700;
    `
        )
      )}
    >
      {decimalFormatPriceConverter(
        totalBalance || 0,
        siteOptions.DECIMAL_NUMBERS,
        siteOptions.CURRENCY_SYMBOL || '',
        siteOptions.CURRENCY_LOCATION
      )}
    </td>,
  ]);

  const header = ['Moneda', 'Saldo', 'Cambio'];

  return (
    <>
      <div className={cx(expensesHeaderContainerStyle())}>
        <Title2
          title={'Efectivo'}
          styles={{
            fontSize: '0.9rem',
            margin: '0px',
            fontWeight: '700',
          }}
        />
        <SingleTable
          headers={header}
          data={items}
          containerStyles={{
            minHeight: 'none',
            custom: `
                    padding: 10px;
                  `,
          }}
        />
      </div>
    </>
  );
};
