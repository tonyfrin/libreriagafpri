import React from 'react';
import type { SiteOptions, UseGafpriBudgetReturn } from '../../states';
import { Button } from '../Button';
import { decimalFormatPriceConverter, formatDate } from '../../helpers';
import { SpanValue } from '../Span';
import { LineCol4 } from './LineCol4';
import { LineCol2 } from './LineCol2';
import { LineTable } from './LineTable';

export type LineBudgetPrintProps = {
  useBudget: UseGafpriBudgetReturn;
  siteOptions: SiteOptions;
};

export const LineBudgetPrint = ({
  useBudget,
  siteOptions,
}: LineBudgetPrintProps): React.ReactElement => {
  const items =
    useBudget.data.states.items.data.items &&
    useBudget.data.states.items.data.items.map((item, index) => {
      const date = formatDate(`${item.posts.createdAt}`);
      return (
        <LineTable
          containerProps={{
            key: `budget-${index}`,
          }}
        >
          <LineCol2>
            <SpanValue value={`${item.postsId}`} />
          </LineCol2>

          <LineCol2>
            <SpanValue value={date} />
          </LineCol2>

          <LineCol4>
            <SpanValue
              value={`${item.budgetCustomer[0].name} ${item.budgetCustomer[0]?.lastName}`}
            />
          </LineCol4>

          <LineCol2>
            <SpanValue
              value={decimalFormatPriceConverter(
                item.total || '0',
                siteOptions.DECIMAL_NUMBERS,
                siteOptions.CURRENCY_SYMBOL,
                siteOptions.CURRENCY_LOCATION
              )}
            />
          </LineCol2>

          <LineCol2>
            <Button
              title="Ver"
              styles={{
                backgroundColor: '#c12429',
                fontSize: '8px',
                padding: '0.275rem 0.5rem',
              }}
              buttonProps={{
                onClick: () => console.log('delete budget', item.postsId),
              }}
            />
          </LineCol2>
        </LineTable>
      );
    });

  return <>{items}</>;
};
