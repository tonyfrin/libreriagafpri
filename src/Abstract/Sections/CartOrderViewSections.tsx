import React from 'react';
import { css, cx } from '@emotion/css';
import { ContainerButton } from '../Containers';
import { Title2 } from '../Title';
import { SiteOptions } from '../../states';
import { CartOrderViewTable } from '../Table';
import { OrderAttributes } from '../states';

export type CartOrderViewSectionsStylesContainerProps = {
  width?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  margin?: string;
  custom?: string;
};

export type CartOrderViewSectionsStylesContentItemsProps = {
  display?: string;
  flexDirection?: string;
  textAlign?: string;
  custom?: string;
};

export type CartOrderViewSectionsStylesContentOptionsProps = {
  display?: string;
  flexDirection?: string;
  custom?: string;
};

const cartOrderViewSectionsStylesContainer = (
  styles: CartOrderViewSectionsStylesContainerProps
) => css`
  width: ${styles.width || '70%'};
  padding: ${styles.padding || '12px'};
  border-radius: ${styles.borderRadius || '10px'};
  background-color: ${styles.backgroundColor || '#fff'};
  margin: ${styles.margin || 'auto'};
  ${styles.custom || ''}
`;

const cartOrderViewSectionsStylesContentItems = (
  styles: CartOrderViewSectionsStylesContentItemsProps
) => css`
  display: ${styles.display || 'flex'};
  flex-direction: ${styles.flexDirection || 'column'};
  text-align: ${styles.textAlign || 'center'};
  ${styles.custom || ''}
`;

export type CartOrderViewSectionsProps = {
  containerStyles?: CartOrderViewSectionsStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  contentItemsStyles?: CartOrderViewSectionsStylesContentItemsProps;
  contentItemsProps?: React.HTMLAttributes<HTMLDivElement>;
  sitesOptions: SiteOptions;
  order: OrderAttributes;
};

export const CartOrderViewSections = ({
  containerStyles = {},
  containerProps = {},
  contentItemsStyles = {},
  contentItemsProps = {},
  sitesOptions,
  order,
}: CartOrderViewSectionsProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentItemsClassName, ...restContentItemsProps } =
    contentItemsProps;

  return (
    <div
      className={cx(
        cartOrderViewSectionsStylesContainer(containerStyles),
        containerClassName
      )}
      {...restContainerProps}
    >
      <div
        className={cx(
          cartOrderViewSectionsStylesContentItems(contentItemsStyles),
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
        <CartOrderViewTable order={order} siteOptions={sitesOptions} />
      </div>
    </div>
  );
};
