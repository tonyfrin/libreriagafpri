import React from 'react';
import { css, cx } from '@emotion/css';
import {
  Loading,
  ExpensesCashRegister,
  PaymentTransferCashRegister,
  IncomeCashRegister,
} from '../../Components';
import {
  UseGafpriBankTypeReturn,
  SiteOptions,
  UseCurrenciesReturn,
} from '../../states';
import { MainMenuItems } from '../Menu';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { BankHeader } from '../Header';
import {
  CashTransationsTable,
  ConciliateTable,
  CashBalanceTable,
  BankTransationsTable,
} from '../Table';
import { decimalFormatPriceConverter } from '../../helpers';

const bodyMainContainerStyle = () => css`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const bodyContainerStyle = () => css`
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 10px 40px;
  width: 90%;
  border-radius: 10px;
  height: auto;
  margin: 0;
`;

export type BankFormProps = {
  use: UseGafpriBankTypeReturn;
  siteOptions: SiteOptions;
  useCurrencies: UseCurrenciesReturn;
};

export const BankForm = ({
  use,
  siteOptions,
  useCurrencies,
}: BankFormProps): JSX.Element => {
  const current = use.data.actions.getById(use.attributes.states.currentId);

  if (!current) return <Loading />;

  const transactions = current.bankTransactions;
  const currency = useCurrencies.actions.getById(current.currenciesId);

  if (!currency) return <Loading />;

  return (
    <>
      <BankHeader
        error={use.error.states.error}
        name={current.name}
        bankName={current.bankName}
        account={current.account}
        balance={decimalFormatPriceConverter(
          current.balanceChange || 0,
          siteOptions.DECIMAL_NUMBERS,
          siteOptions.CURRENCY_SYMBOL,
          siteOptions.CURRENCY_LOCATION
        )}
      />
      <div className={cx(bodyMainContainerStyle())}>
        <div className={cx(bodyContainerStyle())}>
          <BankTransationsTable
            use={use}
            siteOptions={siteOptions}
            transactions={transactions}
            title="Transacciones"
            currentPage={use.paginations.states.currentPage}
            setCurrentPage={use.paginations.actions.setCurrentPage}
            bankCurrency={currency}
          />
        </div>
      </div>
    </>
  );
};
