import React from 'react';
import type { SiteOptions } from '../../states';
import { ContainerHeaderInfo, ContainerButton } from '../Containers';
import { LineInfoTwo } from '../Li';
import { decimalFormatPriceConverter } from '../../helpers';
import { BudgetAttributes } from '../states';
import { PrintButtonBudget } from '../Pdf';

export type BudgetViewFormInfoHeaderProps = {
  budget: BudgetAttributes;
  siteOptions: SiteOptions;
  logoPdf: string;
};

export const BudgetViewFormInfoHeader = ({
  budget,
  siteOptions,
  logoPdf,
}: BudgetViewFormInfoHeaderProps) => {
  return (
    <>
      <ContainerHeaderInfo
        containerStyles={{
          borderRight: 'none',
        }}
      >
        <LineInfoTwo
          title="PRESUPUESTO: "
          info={`${budget.postsId}`}
          contentInfoStyles={{
            custom: 'text-align: center;',
          }}
        />
        <LineInfoTwo
          title="Sub-Total: "
          info={decimalFormatPriceConverter(
            budget.subTotal || '0',
            siteOptions.DECIMAL_NUMBERS,
            siteOptions.CURRENCY_SYMBOL,
            siteOptions.CURRENCY_LOCATION
          )}
          contentInfoStyles={{
            custom: 'text-align: center;',
          }}
        />
        <LineInfoTwo
          title="Impuestos: "
          info={decimalFormatPriceConverter(
            budget.subTotalTax || '0',
            siteOptions.DECIMAL_NUMBERS,
            siteOptions.CURRENCY_SYMBOL,
            siteOptions.CURRENCY_LOCATION
          )}
          contentInfoStyles={{
            custom: 'text-align: center;',
          }}
        />
        <LineInfoTwo
          title="Total: "
          info={decimalFormatPriceConverter(
            budget.total || '0',
            siteOptions.DECIMAL_NUMBERS,
            siteOptions.CURRENCY_SYMBOL,
            siteOptions.CURRENCY_LOCATION
          )}
          contentInfoStyles={{
            custom: 'text-align: center;',
          }}
        />
        <ContainerButton
          styles={{
            width: '100%',
            custom: 'margin-top: 30px;',
          }}
        >
          <>
            <PrintButtonBudget
              budget={budget}
              siteOptions={siteOptions}
              logoPdf={logoPdf}
            />
          </>
        </ContainerButton>
      </ContainerHeaderInfo>
    </>
  );
};
