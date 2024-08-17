import React from 'react';
import { css, cx } from '@emotion/css';
import { SiteOptions } from '../../states';
import {
  CashRegisterTypeCurrenciesAttributes,
  CashRegisterCurrenciesAttributes,
  CashTransactionsAttributes,
} from '../states';
import { Title2 } from '../Title';
import { decimalFormatPriceConverter } from '../../helpers';
import { ContainerButton } from '../Containers';
import { Button } from '../Button';
import { SingleHiddenTablet } from './SingleHiddenTablet';

const expensesHeaderContainerStyle = () => css``;

const expensesTdStyle = (width: string, custom?: string) => css`
  width: ${width};
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  ${custom || ''}
`;

export type ConciliateTableProps = {
  expenses: CashTransactionsAttributes[];
  income: CashTransactionsAttributes[];
  siteOptions: SiteOptions;
  currentBalance: CashRegisterTypeCurrenciesAttributes[];
  initBalance: CashRegisterCurrenciesAttributes[];
  conciliate: () => void;
};

export const ConciliateTable = ({
  expenses,
  income,
  siteOptions,
  currentBalance,
  initBalance,
  conciliate,
}: ConciliateTableProps): JSX.Element => {
  const totalIncome = income.reduce(
    (acc, curr) => parseFloat(`${acc}`) + parseFloat(`${curr.change}`),
    0
  );
  const totalExpenses = expenses.reduce(
    (acc, curr) => parseFloat(`${acc}`) + parseFloat(`${curr.change}`),
    0
  );
  const totalBalance = currentBalance.reduce(
    (acc, curr) => parseFloat(`${acc}`) + parseFloat(`${curr.balanceChange}`),
    0
  );
  const initBalanceTotal = initBalance.reduce(
    (acc, curr) => parseFloat(`${acc}`) + parseFloat(`${curr.initCashChange}`),
    0
  );

  const totalDebe = totalExpenses + totalBalance;
  const totalHaber = totalIncome + initBalanceTotal;

  const verification = totalDebe - totalHaber;
  const items = [
    [
      <td className={cx(expensesTdStyle('50%', `text-align: start;`))}>
        Saldo Salida
      </td>,
      <td className={cx(expensesTdStyle('25%', `text-align: center;`))}>
        {decimalFormatPriceConverter(
          totalExpenses || 0,
          siteOptions.DECIMAL_NUMBERS,
          siteOptions.CURRENCY_SYMBOL,
          siteOptions.CURRENCY_LOCATION
        )}
      </td>,
      <td className={cx(expensesTdStyle('25%', `text-align: center;`))}></td>,
    ],
    [
      <td className={cx(expensesTdStyle('50%', `text-align: start;`))}>
        Saldo Efectivo
      </td>,
      <td className={cx(expensesTdStyle('25%', `text-align: center;`))}>
        {decimalFormatPriceConverter(
          totalBalance || 0,
          siteOptions.DECIMAL_NUMBERS,
          siteOptions.CURRENCY_SYMBOL,
          siteOptions.CURRENCY_LOCATION
        )}
      </td>,
      <td className={cx(expensesTdStyle('25%', `text-align: center;`))}></td>,
    ],
    [
      <td className={cx(expensesTdStyle('50%', `text-align: end;`))}>
        Saldo Entradas
      </td>,
      <td className={cx(expensesTdStyle('25%', `text-align: center;`))}></td>,
      <td className={cx(expensesTdStyle('25%', `text-align: center;`))}>
        {decimalFormatPriceConverter(
          totalIncome || 0,
          siteOptions.DECIMAL_NUMBERS,
          siteOptions.CURRENCY_SYMBOL,
          siteOptions.CURRENCY_LOCATION
        )}
      </td>,
    ],
    [
      <td className={cx(expensesTdStyle('50%', `text-align: end;`))}>
        Saldo efectivo inicial
      </td>,
      <td className={cx(expensesTdStyle('25%', `text-align: center;`))}></td>,
      <td className={cx(expensesTdStyle('25%', `text-align: center;`))}>
        {decimalFormatPriceConverter(
          initBalanceTotal || 0,
          siteOptions.DECIMAL_NUMBERS,
          siteOptions.CURRENCY_SYMBOL,
          siteOptions.CURRENCY_LOCATION
        )}
      </td>,
    ],
    [
      <td
        className={cx(
          expensesTdStyle(
            '50%',
            `
      text-align: center;
      font-weight: 700;
      font-size: 14px;
    `
          )
        )}
      >
        Totales
      </td>,
      <td
        className={cx(
          expensesTdStyle(
            '25%',
            `
      text-align: center;
      font-weight: 700;
      font-size: 14px;
    `
          )
        )}
      >
        {decimalFormatPriceConverter(
          totalDebe || 0,
          siteOptions.DECIMAL_NUMBERS,
          siteOptions.CURRENCY_SYMBOL,
          siteOptions.CURRENCY_LOCATION
        )}
      </td>,
      <td
        className={cx(
          expensesTdStyle(
            '25%',
            `
      text-align: center;
      font-weight: 700;
      font-size: 14px;
    `
          )
        )}
      >
        {decimalFormatPriceConverter(
          totalHaber || 0,
          siteOptions.DECIMAL_NUMBERS,
          siteOptions.CURRENCY_SYMBOL,
          siteOptions.CURRENCY_LOCATION
        )}
      </td>,
    ],
    [
      <td
        className={cx(
          expensesTdStyle(
            '50%',
            `
        text-align: center;
        font-weight: 700;
        font-size: 16px;
      `
          )
        )}
      >
        Comprobación del Ejercicio
      </td>,
      <td
        className={cx(
          expensesTdStyle(
            '25%',
            `
      text-align: center;
      font-weight: 700;
      font-size: 16px;
    `
          )
        )}
      >
        {decimalFormatPriceConverter(
          verification || 0,
          siteOptions.DECIMAL_NUMBERS,
          siteOptions.CURRENCY_SYMBOL,
          siteOptions.CURRENCY_LOCATION
        )}
      </td>,
    ],
  ];

  const header = ['Totales', 'debe', 'haber'];

  return (
    <>
      <div className={cx(expensesHeaderContainerStyle())}>
        <Title2
          title={'Conciliación'}
          styles={{
            fontSize: '0.9rem',
            margin: '0px 0px 10px 0px',
            fontWeight: '700',
            color: '#FFF',
          }}
        />
        <SingleHiddenTablet headers={header} data={items} />
      </div>
      {verification === 0 && (
        <ContainerButton
          styles={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            custom: 'margin: 30px 0px 10px 0px;',
          }}
        >
          <>
            <Button
              title="Conciliar"
              styles={{
                fontSize: '16px',
                padding: '0.3rem',
              }}
              buttonProps={{
                onClick: () => conciliate(),
              }}
            />
          </>
        </ContainerButton>
      )}
    </>
  );
};
