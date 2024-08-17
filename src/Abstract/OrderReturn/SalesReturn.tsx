import React from 'react';
import {
  ModelForm,
  EntityFormOrderReturnInfoHeader,
  OrderReturnFormInfoHeader,
} from '../Form';
import {
  UseGafpriOrderReturnReturn,
  SiteOptions,
  UseGafpriPaymentReturn,
} from '../../states';
import { ModuleHeader } from '../Header';
import { CartOrderReturnSections } from '../Sections';

export type SalesReturnProps = {
  use: UseGafpriOrderReturnReturn;
  sitesOptions: SiteOptions;
  usePayment: UseGafpriPaymentReturn;
};

export const SalesReturn = ({
  use,
  sitesOptions,
  usePayment,
}: SalesReturnProps) => {
  const goPayment = () => {
    usePayment.attributes.actions.checkCreditOpeningOrderReturn(
      use.attributes.states.orderPostsId,
      parseFloat(`${use.useProductItems.states.total}`),
      sitesOptions.currencyId
    );
    use.pages.actions.onOrderPayment();
  };

  return (
    <>
      <ModelForm
        titles={{
          title1: 'Modulo de devolución de pedido',
          title2: 'elegir productos',
        }}
        handleActions={() => console.log('handleActions')}
        buttonTitles={{
          mainButton: '',
          returnButton: '',
        }}
        error={use.error.states.error}
        boxProps={{
          styles: {
            height: '100%',
            padding: '10px',
          },
        }}
      >
        <>
          <ModuleHeader>
            <EntityFormOrderReturnInfoHeader useOrderReturn={use} />
            <OrderReturnFormInfoHeader
              useOrderReturn={use}
              siteOptions={sitesOptions}
              goPayment={goPayment}
            />
          </ModuleHeader>
        </>
      </ModelForm>
      <CartOrderReturnSections
        useOrderReturn={use}
        sitesOptions={sitesOptions}
      />
    </>
  );
};
