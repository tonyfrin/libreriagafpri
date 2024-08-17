import React from 'react';
import { css, cx } from '@emotion/css';
import {
  UseGafpriPaymentReturn,
  UseGafpriOrderReturnReturn,
  SiteOptions,
} from '../../states';
import { Loading } from '../../Components';
import { decimalFormatPriceConverter } from '../../helpers';
import { PaymentInfoForm } from '../Form';
import { PaymentHeader, ModuleHeader } from '../Header';
import { ButtonsPaymentMethodsForm } from '../Form';
import { MethodsPaymentTable, MethodsPaymentItems } from '../Table';

export type OrderReturnPaymentFormProps = {
  use: UseGafpriPaymentReturn;
  useOrderReturn: UseGafpriOrderReturnReturn;
  siteOptions: SiteOptions;
};

const orderStylesMainContainer = () => css`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const orderStylesContainer = () => css`
  background-color: #fff;
  padding: 10px 40px;
  width: 90%;
  border-radius: 10px;
  height: auto;
  margin: 0;
`;

const methodsStylesContainer = () => css`
  width: 98%;
`;

export const OrderReturnPaymentForm = ({
  use,
  useOrderReturn,
  siteOptions,
}: OrderReturnPaymentFormProps): JSX.Element => {
  const total = useOrderReturn.useProductItems.states.total;
  use.attributes.actions.setTotal(`${total}`);
  use.attributes.actions.setType('order_return');

  const goCash = (type: 'deposit' | 'debit'): void => {
    use.attributes.useGeneralPaymentMethods.actions.setType(type);
    use.subPagesDeposit.actions.openModalPage();
    use.attributes.useGeneralPaymentMethods.pages.actions.onCash();
  };

  const goElectronic = (
    type: 'deposit' | 'debit',
    paymentType: string
  ): void => {
    use.attributes.useGeneralPaymentMethods.actions.setType(type);
    use.attributes.useGeneralPaymentMethods.usePaymentMethods.actions.setPaymentType(
      paymentType
    );
    use.attributes.useGeneralPaymentMethods.useBankTransactions.actions.setPaymentType(
      paymentType
    );
    use.subPagesDeposit.actions.openModalPage();
    use.attributes.useGeneralPaymentMethods.pages.actions.onTransfer();
  };

  const goSingle = (type: 'deposit' | 'debit', paymentType: string): void => {
    use.attributes.useGeneralPaymentMethods.actions.setType(type);
    use.attributes.useGeneralPaymentMethods.usePaymentMethods.actions.setPaymentType(
      paymentType
    );
    use.subPagesDeposit.actions.openModalPage();
    use.attributes.useGeneralPaymentMethods.pages.actions.onSingle();
  };

  const buttonsDebit = [
    {
      title: 'Efectivo',
      action: () => goCash('deposit'),
    },
    {
      title: 'Zelle',
      action: () => goElectronic('deposit', 'zelle'),
    },
    {
      title: 'Transferencia',
      action: () => goElectronic('deposit', 'transfer'),
    },
    {
      title: 'Pago Movil',
      action: () => goElectronic('deposit', 'pagoMovil'),
    },
    {
      title: 'Punto de Venta',
      action: () => goElectronic('deposit', 'puntoDeVenta'),
    },
    {
      title: 'Descuento',
      action: () => goSingle('deposit', 'discount'),
    },
  ];

  const buttonsDeposit = [
    {
      title: 'Zelle',
      action: () => goElectronic('debit', 'zelle'),
    },
    {
      title: 'Transferencia',
      action: () => goElectronic('debit', 'transfer'),
    },
    {
      title: 'Efectivo',
      action: () => goCash('debit'),
    },
    {
      title: 'Pago Movil',
      action: () => goElectronic('debit', 'pagoMovil'),
    },
    {
      title: 'Sobrante',
      action: () => goSingle('debit', 'surplus'),
    },
  ];

  const methodsDeposit: MethodsPaymentItems[] = [];

  const methodsDebit: MethodsPaymentItems[] = [];

  use.attributes.useGeneralPaymentMethods.states.arrayPaymentMethod.map(
    (item, index) => {
      if (item.paymentMethods.type === 'deposit') {
        methodsDebit.push({
          title:
            item.paymentMethods.methodType === 'cash'
              ? 'Efectivo'
              : item.paymentMethods.methodType === 'bank'
              ? 'Transacción Electrónica'
              : item.paymentMethods.methodType === 'single'
              ? 'Descuento'
              : '',
          amount: item.paymentMethods.change,
          remove: () =>
            use.attributes.useGeneralPaymentMethods.actions.deletePaymentMethod(
              index
            ),
        });
      } else if (item.paymentMethods.type === 'debit') {
        methodsDeposit.push({
          title:
            item.paymentMethods.methodType === 'cash'
              ? 'Efectivo'
              : item.paymentMethods.methodType === 'bank'
              ? 'Transacción Electrónica'
              : item.paymentMethods.methodType === 'single'
              ? 'Sobrante'
              : item.paymentMethods.methodType === 'creditPayment'
              ? 'Credito'
              : '',
          amount: item.paymentMethods.change,
          remove:
            item.paymentMethods.methodType === 'creditPayment'
              ? null
              : () =>
                  use.attributes.useGeneralPaymentMethods.actions.deletePaymentMethod(
                    index
                  ),
        });
      }
      return null;
    }
  );

  const totalDeposit = methodsDeposit.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

  const totalDebit = methodsDebit.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

  const totalMethodsPayment = totalDeposit - totalDebit;

  const difference = parseFloat(`${total}`) - totalMethodsPayment;
  use.attributes.actions.setDifference(difference);

  const returnInit = (): void => {
    use.attributes.actions.infoReset();
    useOrderReturn.pages.actions.returnInit();
  };

  return (
    <>
      <PaymentHeader
        error={use.error.states.error}
        moduleName="Modulo de salidas"
        stepName="Página de pago de devolución pedidos"
        step="2"
        returnFunction={returnInit}
        returnTitle="Volver"
      />
      <div className={cx(orderStylesMainContainer())}>
        <div className={cx(orderStylesContainer())}>
          <ModuleHeader>
            <PaymentInfoForm
              type="Pago de devolución de pedido"
              postsId={`${useOrderReturn.attributes.states.orderPostsId}`}
              total={decimalFormatPriceConverter(
                total,
                siteOptions.DECIMAL_NUMBERS,
                siteOptions.CURRENCY_SYMBOL,
                siteOptions.CURRENCY_LOCATION
              )}
              totalMethodsPayment={decimalFormatPriceConverter(
                totalMethodsPayment,
                siteOptions.DECIMAL_NUMBERS,
                siteOptions.CURRENCY_SYMBOL,
                siteOptions.CURRENCY_LOCATION
              )}
              difference={decimalFormatPriceConverter(
                difference,
                siteOptions.DECIMAL_NUMBERS,
                siteOptions.CURRENCY_SYMBOL,
                siteOptions.CURRENCY_LOCATION
              )}
            />
            <ButtonsPaymentMethodsForm
              buttonsDeposit={buttonsDeposit}
              buttonsDebit={buttonsDebit}
              total={parseFloat(`${total}`)}
              depositTotal={totalDeposit}
              debitTotal={totalDebit}
              setNote={use.attributes.actions.setNote}
              add={use.api.actions.addOrderReturnPayment}
            />
          </ModuleHeader>
        </div>
      </div>
      <div className={cx(orderStylesMainContainer())}>
        <div className={cx(methodsStylesContainer())}>
          <ModuleHeader
            containerStyles={{
              custom: `
                justify-content: space-around;
                border: none;
                align-items: flex-start;
                `,
            }}
          >
            <MethodsPaymentTable
              title="Pagos Seleccionados"
              total={totalDeposit}
              methods={methodsDeposit}
              siteOptions={siteOptions}
            />
            <MethodsPaymentTable
              title="Vueltos Seleccionados"
              total={totalDebit}
              methods={methodsDebit}
              siteOptions={siteOptions}
            />
          </ModuleHeader>
        </div>
      </div>
    </>
  );
};
