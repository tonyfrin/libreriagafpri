import React from 'react';
import { css, cx } from '@emotion/css';
import {
  Loading,
  ExpensesCashRegister,
  PaymentTransferCashRegister,
  IncomeCashRegister,
} from '../../Components';
import {
  UseGafpriCashRegisterTypeReturn,
  SiteOptions,
  UseLoginReturn,
  UseGafpriExpensesReturn,
  UseCurrenciesReturn,
  UseGafpriEntityReturn,
  UseGafpriPaymentTransferCashRegisterReturn,
  UseGafpriIncomeReturn,
} from '../../states';
import { MainMenuItems } from '../Menu';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { CashRegisterHeader } from '../Header';
import {
  CashTransationsTable,
  ConciliateTable,
  CashBalanceTable,
} from '../Table';

const bodyMainContainerStyle = () => css`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const bodyContainerStyle = () => css`
  display: flex;
  justify-content: center;
  width: 95%;
`;

const leftMainBodyContainerStyle = () => css`
  width: 60%;
  display: block;
`;

const rigthMainBodyContainerStyle = () => css`
  width: 40%;
  display: block;
`;

const leftBodyContainerStyle = () => css`
  display: flex;
`;

const rightBodyContainerStyle = () => css``;

const expensesContainerStyle = () => css`
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  margin: 1em 0.5em;
  width: 95%;
  height: auto;
`;

const conciliatedContainerStyle = () => css`
  background: linear-gradient(
    to bottom,
    rgb(77, 174, 205, 0.75),
    rgb(96, 100, 124, 0.55)
  );
  border-radius: 10px;
  margin: 1em 0.5em;
  color: #fff;
  height: auto;
  padding: 20px;
`;

const expensesBodyContainerStyle = () => css`
  width: 90%;
  margin: auto;
  padding: 10px 0px;
`;

export type CashRegisterFormProps = {
  use: UseGafpriCashRegisterTypeReturn;
  siteOptions: SiteOptions;
  useExpenses: UseGafpriExpensesReturn;
  useCurrencies: UseCurrenciesReturn;
  useEntity: UseGafpriEntityReturn;
  entityMenu: MainMenuItems[];
  usePaymentTransferCashRegister: UseGafpriPaymentTransferCashRegisterReturn;
  useIncome: UseGafpriIncomeReturn;
  useLogin: UseLoginReturn;
};

export const CashRegisterForm = ({
  use,
  siteOptions,
  useExpenses,
  useCurrencies,
  useEntity,
  entityMenu,
  usePaymentTransferCashRegister,
  useIncome,
  useLogin,
}: CashRegisterFormProps): JSX.Element => {
  const current = use.data.actions.getById(use.attributes.states.currentId);
  const currentCashRegisterPostId =
    use.data.actions.getCurrentCashRegisterPostsId(
      use.attributes.states.currentId
    );

  if (!current) return <Loading />;

  const cashTransactions = current.cashRegister[0].cashTransactions;
  const expenses = cashTransactions.filter((item) => item.type === 'debit');
  const income = cashTransactions.filter((item) => item.type === 'deposit');
  const currentBalance = current.cashRegisterTypeCurrencies;
  const initBalance = current.cashRegister[0].cashRegisterCurrencies;

  const conciliate = () => {
    use.api.actions.conciliate(currentCashRegisterPostId);
  };

  const returnModal = () => {
    use.subPages.actions.onFetching();
    use.pages.actions.closeModalPage();
    useExpenses.pages.actions.returnInit();
    usePaymentTransferCashRegister.pages.actions.returnInit();
    useIncome.pages.actions.returnInit();
    use.subPages.actions.onInit();
  };

  const goExpenses = () => {
    useExpenses.attributes.actions.setCashRegisterPostsId(
      currentCashRegisterPostId
    );
    useExpenses.attributes.actions.setCashRegisterTypePostsId(current.postsId);
    use.subPages.actions.onExpenses();
    use.pages.actions.openModalPage();
  };

  const goTransfer = () => {
    usePaymentTransferCashRegister.attributes.actions.setCurrentCashRegisterPostsId(
      currentCashRegisterPostId
    );
    usePaymentTransferCashRegister.attributes.actions.setCurrentCashRegisterTypePostsId(
      current.postsId
    );
    use.subPages.actions.onTransfer();
    use.pages.actions.openModalPage();
  };

  const goIncome = () => {
    useIncome.attributes.actions.setCashRegisterPostsId(
      currentCashRegisterPostId
    );
    useIncome.attributes.actions.setCashRegisterTypePostsId(current.postsId);
    use.subPages.actions.onIncome();
    use.pages.actions.openModalPage();
  };

  return (
    <>
      <CashRegisterHeader
        error={use.error.states.error}
        crName={current.name}
        cashRegisterPostId={currentCashRegisterPostId}
        dateOpen={`${current.posts.createdAt}`}
        author={useLogin.states.currentUser?.name || ''}
      />
      <div className={cx(bodyMainContainerStyle())}>
        <div className={cx(bodyContainerStyle())}>
          <div className={cx(leftMainBodyContainerStyle())}>
            <div className={cx(leftBodyContainerStyle())}>
              <div className={cx(expensesContainerStyle())}>
                <div className={cx(expensesBodyContainerStyle())}>
                  <CashTransationsTable
                    title="egresos"
                    use={use}
                    siteOptions={siteOptions}
                    cashTransactions={expenses}
                    currentPage={use.paginations.states.debitCurrentPage}
                    setCurrentPage={use.paginations.actions.setDebitCurrentPage}
                  />
                  <Button
                    title="Egreso"
                    styles={{
                      fontSize: '10px',
                      padding: '0.3rem',
                      margin: '0px 15px 0px 0px',
                    }}
                    buttonProps={{
                      onClick: () => goExpenses(),
                    }}
                  />
                  <Button
                    title="Traspaso"
                    styles={{
                      fontSize: '10px',
                      padding: '0.3rem',
                    }}
                    buttonProps={{
                      onClick: () => goTransfer(),
                    }}
                  />
                </div>
              </div>
              <div className={cx(expensesContainerStyle())}>
                <div className={cx(expensesBodyContainerStyle())}>
                  <CashTransationsTable
                    title="ingresos"
                    use={use}
                    siteOptions={siteOptions}
                    cashTransactions={income}
                    currentPage={use.paginations.states.creditCurrentPage}
                    setCurrentPage={
                      use.paginations.actions.setCreditCurrentPage
                    }
                  />
                  <Button
                    title="Ingreso"
                    styles={{
                      fontSize: '10px',
                      padding: '0.3rem',
                    }}
                    buttonProps={{
                      onClick: () => goIncome(),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={cx(rigthMainBodyContainerStyle())}>
            <div className={cx(leftBodyContainerStyle())}>
              <div className={cx(expensesContainerStyle())}>
                <div className={cx(expensesBodyContainerStyle())}>
                  <CashBalanceTable
                    siteOptions={siteOptions}
                    currentBalance={currentBalance}
                    useCurrencies={useCurrencies}
                  />
                </div>
              </div>
            </div>
            <div className={cx(rightBodyContainerStyle())}>
              <div className={cx(conciliatedContainerStyle())}>
                <ConciliateTable
                  expenses={expenses}
                  income={income}
                  siteOptions={siteOptions}
                  currentBalance={currentBalance}
                  initBalance={initBalance}
                  conciliate={conciliate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={use.pages.states.modalPage}>
        <>
          {use.subPages.states.isFetching && <Loading />}

          {use.subPages.states.isExpenses && (
            <ExpensesCashRegister
              use={useExpenses}
              useCurrencies={useCurrencies}
              useEntity={useEntity}
              returnInitModule={returnModal}
              sitesOptions={siteOptions}
              menuEntity={entityMenu}
            />
          )}

          {use.subPages.states.isTransfer && (
            <PaymentTransferCashRegister
              use={usePaymentTransferCashRegister}
              useCurrencies={useCurrencies}
              sitesOptions={siteOptions}
              returnInitModule={returnModal}
            />
          )}

          {use.subPages.states.isIncome && (
            <IncomeCashRegister
              use={useIncome}
              useEntity={useEntity}
              useCurrencies={useCurrencies}
              returnInitModule={returnModal}
              sitesOptions={siteOptions}
              menuEntity={entityMenu}
            />
          )}
        </>
      </Modal>
    </>
  );
};
