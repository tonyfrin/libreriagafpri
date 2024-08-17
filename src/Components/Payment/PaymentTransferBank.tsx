import React from 'react';
import { Loading } from '../Loading';
import {
  UseGafpriPaymentTransferBankReturn,
  SiteOptions,
  UseCurrenciesReturn,
  UseGafpriBankTypeReturn,
} from '../../states';
import {
  FadeIn,
  TransferBankForm,
  FinalPaymentTransferBank,
} from '../../Abstract';
import { PAYMENT_TRANSFER_BANK_ROUTE } from '../../constants';

export type PaymentTransferBankProps = {
  use: UseGafpriPaymentTransferBankReturn;
  useCurrencies: UseCurrenciesReturn;
  useBankType: UseGafpriBankTypeReturn;
  sitesOptions: SiteOptions;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  returnInitModule: () => void;
};

export const PaymentTransferBank = ({
  use,
  useCurrencies,
  useBankType,
  containerProps = {},
  sitesOptions,
  returnInitModule,
}: PaymentTransferBankProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      {use.pages.states.isFetching && (
        <Loading
          mainStyles={{
            custom: 'height: 100vh;',
          }}
        />
      )}

      {use.pages.states.isPaymentForm && (
        <FadeIn
          keyName="PaymentForm"
          isVisible={use.pages.states.isPaymentForm}
        >
          <TransferBankForm
            useError={use.error}
            siteOptions={sitesOptions}
            useCurrencies={useCurrencies}
            usePayment={use.attributes}
            useBankType={useBankType}
            currentPaymentInfo={{
              returnInit: returnInitModule,
              buttonNextId: PAYMENT_TRANSFER_BANK_ROUTE,
              next: use.pages.actions.onFinalPaymentForm,
              debitBankTypePostsId: use.attributes.states.debitBankTypePostsId,
            }}
          />
        </FadeIn>
      )}

      {use.pages.states.isFinalPaymentForm && (
        <FadeIn
          keyName="FinalPaymentForm"
          isVisible={use.pages.states.isFinalPaymentForm}
        >
          <FinalPaymentTransferBank use={use} />
        </FadeIn>
      )}
    </>
  );
};
