import React from 'react';
import { css, cx } from '@emotion/css';
import {
  ModelForm,
  EntityOrderViewFormInfoHeader,
  OrderViewFormInfoHeader,
} from '../Form';
import { UseGafpriOrderReturn, SiteOptions } from '../../states';
import { ModuleHeader } from '../Header';
import {
  CartOrderViewSections,
  PaymentOrderSections,
  PaymentMethodsImages,
} from '../Sections';
import { PaymentMethodsAttributes } from '../states';

export type OrderViewProps = {
  useOrder: UseGafpriOrderReturn;
  sitesOptions: SiteOptions;
  logoPdf: string;
  returnFunction: () => void;
  images?: PaymentMethodsImages;
};

const containerPaymentsStyles = () => css`
  display: flex;
  justify-content: center;
  width: 70%;
  margin: 20px auto 0px auto;
  align-items: flex-end;
  flex-direction: column;
`;

export const OrderView = ({
  useOrder,
  sitesOptions,
  logoPdf,
  returnFunction,
  images,
}: OrderViewProps) => {
  const order = useOrder.data.actions.getById(
    useOrder.attributes.states.currentId
  );

  if (!order) return null;

  const deposit: PaymentMethodsAttributes[] =
    order.payment?.paymentMethods.filter((item) => item.type === 'deposit') ||
    [];
  const debit: PaymentMethodsAttributes[] =
    order.payment?.paymentMethods.filter((item) => item.type === 'debit') || [];

  const totalDeposit = deposit.reduce((accumulator, currentItem) => {
    const changeValue = parseFloat(`${currentItem.change}`);

    return accumulator + (isNaN(changeValue) ? 0 : changeValue);
  }, 0);

  const totalDebit = debit.reduce((accumulator, currentItem) => {
    const changeValue = parseFloat(`${currentItem.change}`);

    return accumulator + (isNaN(changeValue) ? 0 : changeValue);
  }, 0);

  return (
    <>
      {order && (
        <>
          <ModelForm
            titles={{
              title1: 'Modulo de Ventas',
              title2: 'Vista de pedido',
            }}
            handleActions={() => console.log('handleActions')}
            buttonTitles={{
              mainButton: '',
              returnButton: '',
            }}
            error={useOrder.error.states.error}
            boxProps={{
              styles: {
                height: '100%',
                padding: '10px',
              },
            }}
          >
            <>
              <ModuleHeader>
                <EntityOrderViewFormInfoHeader
                  order={order}
                  returnFunction={returnFunction}
                />
                <OrderViewFormInfoHeader
                  order={order}
                  siteOptions={sitesOptions}
                  logoPdf={logoPdf}
                />
              </ModuleHeader>
            </>
          </ModelForm>
          <CartOrderViewSections order={order} sitesOptions={sitesOptions} />
          {order.payment && (
            <div className={cx(containerPaymentsStyles())}>
              <PaymentOrderSections
                paymentType="Pagos"
                payments={deposit}
                siteOptions={sitesOptions}
                images={images}
                total={totalDeposit}
              />
              {debit.length > 0 && (
                <PaymentOrderSections
                  paymentType="Vueltos"
                  payments={debit}
                  siteOptions={sitesOptions}
                  images={images}
                  total={totalDebit}
                />
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};
