import React, { KeyboardEvent } from 'react';
import { css, cx } from '@emotion/css';
import { Button } from '../Button';
import { ContainerButton } from '../Containers';
import { Title2 } from '../Title';
import { InputName, InputSku, Input } from '../Input';
import {
  SiteOptions,
  UseGafpriOrderReturnReturn,
  UseGafpriProductsReturn,
} from '../../states';
import { CartOrderReturnTable } from '../Table';

export type CartOrderReturnSectionsStylesContainerProps = {
  width?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  margin?: string;
  custom?: string;
};

export type CartOrderReturnSectionsStylesContentItemsProps = {
  display?: string;
  flexDirection?: string;
  textAlign?: string;
  custom?: string;
};

export type CartOrderReturnSectionsStylesContentOptionsProps = {
  display?: string;
  flexDirection?: string;
  custom?: string;
};

const cartOrderReturnSectionsStylesContainer = (
  styles: CartOrderReturnSectionsStylesContainerProps
) => css`
  width: ${styles.width || '70%'};
  padding: ${styles.padding || '12px'};
  border-radius: ${styles.borderRadius || '10px'};
  background-color: ${styles.backgroundColor || '#fff'};
  margin: ${styles.margin || 'auto'};
  ${styles.custom || ''}
`;

const cartOrderReturnSectionsStylesContentItems = (
  styles: CartOrderReturnSectionsStylesContentItemsProps
) => css`
  display: ${styles.display || 'flex'};
  flex-direction: ${styles.flexDirection || 'column'};
  text-align: ${styles.textAlign || 'center'};
  ${styles.custom || ''}
`;

export type CartOrderReturnSectionsProps = {
  containerStyles?: CartOrderReturnSectionsStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  contentItemsStyles?: CartOrderReturnSectionsStylesContentItemsProps;
  contentItemsProps?: React.HTMLAttributes<HTMLDivElement>;
  sitesOptions: SiteOptions;
  useOrderReturn: UseGafpriOrderReturnReturn;
  contentOptionsProps?: React.HTMLAttributes<HTMLDivElement>;
};

export const CartOrderReturnSections = ({
  containerStyles = {},
  containerProps = {},
  contentItemsStyles = {},
  contentItemsProps = {},
  contentOptionsProps = {},
  sitesOptions,
  useOrderReturn,
}: CartOrderReturnSectionsProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentItemsClassName, ...restContentItemsProps } =
    contentItemsProps;
  const { className: contentOptionsClassName, ...restContentOptionsProps } =
    contentOptionsProps;

  return (
    <div
      className={cx(
        cartOrderReturnSectionsStylesContainer(containerStyles),
        containerClassName
      )}
      {...restContainerProps}
    >
      <div
        className={cx(
          cartOrderReturnSectionsStylesContentItems(contentItemsStyles),
          contentItemsClassName
        )}
        {...restContentItemsProps}
      >
        <ContainerButton
          styles={{
            width: '100%',
            custom: 'margin: 20px 0px 0px 0px;',
          }}
        >
          <Title2 title="Carrito" />
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'flex-end',
            custom: 'margin: 10px 0px;',
          }}
        >
          <Button
            title="Vaciar carrito"
            styles={{
              fontSize: '8px',
              backgroundColor: '#c12429',
            }}
            buttonProps={{
              onClick: () =>
                useOrderReturn.useProductItems.actions.voidShoppingCart(),
            }}
          />
        </ContainerButton>
        <CartOrderReturnTable
          useOrderReturn={useOrderReturn}
          siteOptions={sitesOptions}
        />
      </div>
    </div>
  );
};
