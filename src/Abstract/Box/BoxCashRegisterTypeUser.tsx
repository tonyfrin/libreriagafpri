import React from 'react';
import { cx, css } from '@emotion/css';
import { CashRegisterTypeUserAttributes } from '../states';
import { UseUserReturn } from '../../states';

export type BoxCashRegisterTypeUserConatinerStylesProps = {
  display?: string;
  flexWrap?: string;
  justifyContent?: string;
  margin?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  width?: string;
  custom?: string;
};

const boxCashRegisterTypeUserContainerStyles = (
  styles: BoxCashRegisterTypeUserConatinerStylesProps
) => css`
  display: ${styles.display || 'flex'};
  flex-wrap: ${styles.flexWrap || 'wrap'};
  justify-content: ${styles.justifyContent || 'center'};
  margin: ${styles.margin || '20px 10px'};
  padding: ${styles.padding || '15px 0px'};
  border: ${styles.border || '1px solid #ccc'};
  border-radius: ${styles.borderRadius || '4px'};
  width: ${styles.width || '91%'};
  ${styles.custom || ''}
`;

export type BoxCashRegisterTypeUserContentStylesProps = {
  position?: string;
  display?: string;
  alignItems?: string;
  marginBottom?: string;
  custom?: string;
};

const boxCashRegisterTypeUserContentStyles = (
  styles: BoxCashRegisterTypeUserContentStylesProps
) => css`
  position: ${styles.position || 'relative'};
  display: ${styles.display || 'flex'};
  align-items: ${styles.alignItems || 'center'};
  margin-bottom: ${styles.marginBottom || '8px'};
  ${styles.custom || ''}
`;

export type BoxCashRegisterTypeUserContentItemsStylesProps = {
  position?: string;
  display?: string;
  alignItems?: string;
  marginRight?: string;
  marginBottom?: string;
  custom?: string;
};

const boxCashRegisterTypeUserContentItemsStyles = (
  styles: BoxCashRegisterTypeUserContentItemsStylesProps
) => css`
  position: ${styles.position || 'relative'};
  display: ${styles.display || 'flex'};
  align-items: ${styles.alignItems || 'center'};
  margin-right: ${styles.marginRight || '5px'};
  margin-bottom: ${styles.marginBottom || '5px'};
  ${styles.custom || ''}
`;

export type BoxCashRegisterTypeUserContentButtonProps = {
  position?: string;
  top?: string;
  transform?: string;
  right?: string;
  cursor?: string;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
  custom?: string;
};

const boxCashRegisterTypeUserContentButtonStyles = (
  styles: BoxCashRegisterTypeUserContentButtonProps
) => css`
  position: ${styles.position || 'absolute'};
  top: ${styles.top || '0px'};
  transform: ${styles.transform || 'translateY(-50%)'};
  right: ${styles.right || '0px'};
  cursor: ${styles.cursor || 'pointer'};
  color: ${styles.color || '#fff'};
  background-color: ${styles.backgroundColor || '#f44336'};
  border-radius: ${styles.borderRadius || '100%'};
  padding: ${styles.padding || '2px 5px 4px 5px'};
  font-size: ${styles.fontSize || '8px'};
  ${styles.custom || ''}
`;

export type BoxCashRegisterTypeUserContentTitleStylesProps = {
  marginRight?: string;
  padding?: string;
  color?: string;
  borderRadius?: string;
  border?: string;
  custom?: string;
};

const boxCashRegisterTypeUserContentTitleStyles = (
  styles: BoxCashRegisterTypeUserContentTitleStylesProps
) => css`
  margin-right: ${styles.marginRight || '8px'};
  padding: ${styles.padding || '8px'};
  color: ${styles.color || '#8d8d8d'};
  border-radius: ${styles.borderRadius || '4px'};
  border: ${styles.border || '1px solid #dfdbdb'};
  ${styles.custom || ''}
`;

export type BoxCashRegisterTypeUserProps = {
  containerStyles?: BoxCashRegisterTypeUserConatinerStylesProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  contentStyles?: BoxCashRegisterTypeUserContentStylesProps;
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
  contentItemsStyles?: BoxCashRegisterTypeUserContentItemsStylesProps;
  contentItemsProps?: React.HTMLAttributes<HTMLDivElement>;
  contentButtonStyles?: BoxCashRegisterTypeUserContentButtonProps;
  contentButtonProps?: React.HTMLAttributes<HTMLSpanElement>;
  contentTitleStyles?: BoxCashRegisterTypeUserContentTitleStylesProps;
  contentTitleProps?: React.HTMLAttributes<HTMLSpanElement>;
  items: CashRegisterTypeUserAttributes[];
  removeItem: (id: number) => void;
  useUser: UseUserReturn;
};

export const BoxCashRegisterTypeUser = ({
  containerStyles = {},
  containerProps = {},
  contentStyles = {},
  contentProps = {},
  contentItemsStyles = {},
  contentItemsProps = {},
  contentButtonStyles = {},
  contentButtonProps = {},
  contentTitleStyles = {},
  contentTitleProps = {},
  items,
  removeItem,
  useUser,
}: BoxCashRegisterTypeUserProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentClassName, ...restContentProps } = contentProps;
  const { className: contentItemsClassName, ...restContentItemsProps } =
    contentItemsProps;
  const { className: closeButtonClassName, ...restCloseButtonProps } =
    contentButtonProps;
  const { className: titleClassName, ...restTitleProps } = contentTitleProps;

  return (
    <>
      <div
        className={cx(
          boxCashRegisterTypeUserContainerStyles(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        {items.map((item, index) => {
          const user = useUser.actions.getById(item.userId);

          return (
            <>
              {user && (
                <div
                  key={`${item.userId}-${index}`}
                  className={cx(
                    boxCashRegisterTypeUserContentStyles(contentStyles),
                    contentClassName
                  )}
                  {...restContentProps}
                >
                  <div
                    className={cx(
                      boxCashRegisterTypeUserContentItemsStyles(
                        contentItemsStyles
                      ),
                      contentItemsClassName
                    )}
                    {...restContentItemsProps}
                  >
                    <span
                      className={cx(
                        boxCashRegisterTypeUserContentButtonStyles(
                          contentButtonStyles
                        ),
                        closeButtonClassName
                      )}
                      onClick={() => removeItem(index)}
                      {...restCloseButtonProps}
                    >
                      x
                    </span>
                    <span
                      className={cx(
                        boxCashRegisterTypeUserContentTitleStyles(
                          contentTitleStyles
                        ),
                        titleClassName
                      )}
                      {...restTitleProps}
                    >
                      {user?.lastName
                        ? `${user.name} ${user.lastName}`
                        : user.name}
                    </span>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};
