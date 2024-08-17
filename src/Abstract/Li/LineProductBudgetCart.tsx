import React from 'react';
import type { SiteOptions, UseGafpriBudgetReturn } from '../../states';
import { Button } from '../Button';
import { InputCart } from '../Input';
import { decimalFormatPriceConverter } from '../../helpers';
import { LineCol1 } from './LineCol1';
import { SpanValue } from '../Span';
import { LineCol4 } from './LineCol4';
import { LineCol2 } from './LineCol2';
import { LineTable } from './LineTable';

export type LineProductBudgetCartProps = {
  useBudget: UseGafpriBudgetReturn;
  siteOptions: SiteOptions;
};

export const LineProductBudgetCart = ({
  useBudget,
  siteOptions,
}: LineProductBudgetCartProps): React.ReactElement => {
  const items = useBudget.useProductItems.states.shoppingCart.map(
    (product, index) => (
      <LineTable
        containerProps={{
          key: `product-${index}`,
        }}
      >
        <LineCol1>
          <SpanValue value={product.sku} />
        </LineCol1>

        <LineCol4>
          <SpanValue value={product.name} />
        </LineCol4>

        <LineCol1>
          <SpanValue
            value={decimalFormatPriceConverter(
              product.cost || 0,
              siteOptions.DECIMAL_NUMBERS,
              siteOptions.CURRENCY_SYMBOL,
              siteOptions.CURRENCY_LOCATION
            )}
          />
        </LineCol1>

        <LineCol1>
          <InputCart
            contentProps={{
              defaultValue: parseFloat(`${product.qty}`).toFixed(2),
              onChange: (event) =>
                useBudget.useProductItems.actions.updateQtyItemCart(
                  index,
                  event.target.value
                ),
            }}
          />
        </LineCol1>
        <LineCol2>
          <InputCart
            contentProps={{
              defaultValue: parseFloat(`${product.price}`).toFixed(2),
              onChange: (event) =>
                useBudget.useProductItems.actions.updatePriceItemCart(
                  index,
                  event.target.value
                ),
            }}
          />
        </LineCol2>

        <LineCol2>
          <SpanValue
            value={decimalFormatPriceConverter(
              (
                parseFloat(`${product.qty}`) * parseFloat(`${product.price}`)
              ).toFixed(2) || '0',
              siteOptions.DECIMAL_NUMBERS,
              siteOptions.CURRENCY_SYMBOL,
              siteOptions.CURRENCY_LOCATION
            )}
          />
        </LineCol2>
        <LineCol1>
          <Button
            title="X"
            styles={{
              backgroundColor: '#c12429',
              fontSize: '8px',
              padding: '0.275rem 0.5rem',
            }}
            buttonProps={{
              onClick: () =>
                useBudget.useProductItems.actions.removeShoppingCartItem(index),
            }}
          />
        </LineCol1>
      </LineTable>
    )
  );

  return <>{items}</>;
};
