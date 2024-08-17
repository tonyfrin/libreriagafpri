import React from 'react';
import { css, cx } from '@emotion/css';
import { ContainerButton } from '../Containers';
import { Title2 } from '../Title';
import { SiteOptions } from '../../states';
import { CartBudgetViewTable } from '../Table';
import { BudgetAttributes } from '../states';

export type CartBudgetViewSectionsStylesContainerProps = {
  width?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  margin?: string;
  custom?: string;
};

export type CartBudgetViewSectionsStylesContentItemsProps = {
  display?: string;
  flexDirection?: string;
  textAlign?: string;
  custom?: string;
};

export type CartBudgetViewSectionsStylesContentOptionsProps = {
  display?: string;
  flexDirection?: string;
  custom?: string;
};

const cartBudgetViewSectionsStylesContainer = (
  styles: CartBudgetViewSectionsStylesContainerProps
) => css`
  width: ${styles.width || '70%'};
  padding: ${styles.padding || '12px'};
  border-radius: ${styles.borderRadius || '10px'};
  background-color: ${styles.backgroundColor || '#fff'};
  margin: ${styles.margin || 'auto'};
  ${styles.custom || ''}
`;

const cartBudgetViewSectionsStylesContentItems = (
  styles: CartBudgetViewSectionsStylesContentItemsProps
) => css`
  display: ${styles.display || 'flex'};
  flex-direction: ${styles.flexDirection || 'column'};
  text-align: ${styles.textAlign || 'center'};
  ${styles.custom || ''}
`;

export type CartBudgetViewSectionsProps = {
  containerStyles?: CartBudgetViewSectionsStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  contentItemsStyles?: CartBudgetViewSectionsStylesContentItemsProps;
  contentItemsProps?: React.HTMLAttributes<HTMLDivElement>;
  sitesOptions: SiteOptions;
  budget: BudgetAttributes;
};

export const CartBudgetViewSections = ({
  containerStyles = {},
  containerProps = {},
  contentItemsStyles = {},
  contentItemsProps = {},
  sitesOptions,
  budget,
}: CartBudgetViewSectionsProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentItemsClassName, ...restContentItemsProps } =
    contentItemsProps;

  return (
    <div
      className={cx(
        cartBudgetViewSectionsStylesContainer(containerStyles),
        containerClassName
      )}
      {...restContainerProps}
    >
      <div
        className={cx(
          cartBudgetViewSectionsStylesContentItems(contentItemsStyles),
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
        <CartBudgetViewTable budget={budget} siteOptions={sitesOptions} />
      </div>
    </div>
  );
};
