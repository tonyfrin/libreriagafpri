import React from 'react';
import type { SiteOptions, UseGafpriOrderReturnReturn } from '../../states';
import { Button } from '../Button';
import { InputCart } from '../Input';
import { decimalFormatPriceConverter } from '../../helpers';
import { LineCol1 } from './LineCol1';
import { SpanValue } from '../Span';
import { LineCol4 } from './LineCol4';
import { LineCol2 } from './LineCol2';
import { LineTable } from './LineTable';

export type LineProductReturnCartProps = {
  useOrderReturn: UseGafpriOrderReturnReturn;
  siteOptions: SiteOptions;
};

export const LineProductReturnCart = ({
  useOrderReturn,
  siteOptions,
}: LineProductReturnCartProps): React.ReactElement => {
  const handleInputQtyChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    max: number,
    index: number
  ) => {
    const newValue = parseFloat(e.target.value);

    if (Number.isNaN(newValue)) {
      return;
    }

    if (newValue > max) {
      useOrderReturn.useProductItems.actions.updateQtyItemCart(index, `${max}`);
      return;
    }

    useOrderReturn.useProductItems.actions.updateQtyItemCart(
      index,
      `${newValue}`
    );
  };

  const items = useOrderReturn.useProductItems.states.shoppingCart.map(
    (product, index) => {
      return (
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
                value: `${product.qty}`,
                onChange: (event) =>
                  handleInputQtyChange(
                    event,
                    parseFloat(`${product.qtyOrderItem}`),
                    index
                  ),
              }}
            />
          </LineCol1>
          <LineCol2>
            <SpanValue
              value={decimalFormatPriceConverter(
                product.price || 0,
                siteOptions.DECIMAL_NUMBERS,
                siteOptions.CURRENCY_SYMBOL,
                siteOptions.CURRENCY_LOCATION
              )}
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
                  useOrderReturn.useProductItems.actions.removeShoppingCartItem(
                    index
                  ),
              }}
            />
          </LineCol1>
        </LineTable>
      );
    }
  );

  return <>{items}</>;
};
