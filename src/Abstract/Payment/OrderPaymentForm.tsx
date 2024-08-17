import React from 'react';
import { css, cx } from '@emotion/css';
import {
  UseGafpriPaymentReturn,
  UseGafpriOrderReturn,
  SiteOptions,
} from '../../states';
import { Loading } from '../../Components';
import { decimalFormatPriceConverter } from '../../helpers';
import { PaymentInfoForm } from '../Form';
import { PaymentHeader, ModuleHeader } from '../Header';
import { ButtonsPaymentMethodsForm } from '../Form';
import { MethodsPaymentTable, MethodsPaymentItems } from '../Table';

export type OrderPaymentFormProps = {
  use: UseGafpriPaymentReturn;
  useOrder: UseGafpriOrderReturn;
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

export const OrderPaymentForm = ({
  use,
  useOrder,
  siteOptions,
}: OrderPaymentFormProps): JSX.Element => {
  const order = useOrder.data.actions.getById(
    useOrder.attributes.states.currentId
  );

  if (!order) {
    return <Loading />;
  }

  use.attributes.actions.setTotal(`${order.total}`);
  use.attributes.actions.setType('order');

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

  const goCredit = (): void => {
    useOrder.attributes.actions.changeCustomerId(order.customerId);
    use.subPagesDeposit.actions.openModalPage();
    use.attributes.useGeneralPaymentMethods.pages.actions.onCredit();
  };

  const goSingle = (type: 'deposit' | 'debit', paymentType: string): void => {
    use.attributes.useGeneralPaymentMethods.actions.setType(type);
    use.attributes.useGeneralPaymentMethods.usePaymentMethods.actions.setPaymentType(
      paymentType
    );
    use.subPagesDeposit.actions.openModalPage();
    use.attributes.useGeneralPaymentMethods.pages.actions.onSingle();
  };

  const buttonsDeposit = [
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
      title: 'Credito',
      action: () => goCredit(),
    },
    {
      title: 'Descuento',
      action: () => goSingle('deposit', 'discount'),
    },
  ];

  const buttonsDebit = [
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
        methodsDeposit.push({
          title:
            item.paymentMethods.methodType === 'cash'
              ? 'Efectivo'
              : item.paymentMethods.methodType === 'bank'
              ? 'Transacción Electrónica'
              : item.paymentMethods.methodType === 'credit'
              ? 'Credito'
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
        methodsDebit.push({
          title:
            item.paymentMethods.methodType === 'cash'
              ? 'Efectivo'
              : item.paymentMethods.methodType === 'bank'
              ? 'Transacción Electrónica'
              : item.paymentMethods.methodType === 'single'
              ? 'Sobrante'
              : '',
          amount: item.paymentMethods.change,
          remove: () =>
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

  const difference = parseFloat(`${order.total}`) - totalMethodsPayment;
  use.attributes.actions.setDifference(difference);

  const returnList = () => {
    use.attributes.actions.infoReset();
    useOrder.attributes.actions.infoReset();
    useOrder.pages.actions.onOrderList();
  };

  return (
    <>
      <PaymentHeader
        error={use.error.states.error}
        moduleName="Modulo de entradas"
        stepName="Página de pago de pedidos"
        step="2"
        returnFunction={returnList}
        returnTitle="Volver"
      />
      <div className={cx(orderStylesMainContainer())}>
        <div className={cx(orderStylesContainer())}>
          <ModuleHeader>
            <PaymentInfoForm
              type="Pago de pedido"
              postsId={`${useOrder.attributes.states.currentId}`}
              total={decimalFormatPriceConverter(
                order.total,
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
              total={parseFloat(`${order.total}`)}
              depositTotal={totalDeposit}
              debitTotal={totalDebit}
              setNote={use.attributes.actions.setNote}
              add={use.api.actions.addOrderPayment}
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
