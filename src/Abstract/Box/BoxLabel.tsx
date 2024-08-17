import React from 'react';
import { cx, css } from '@emotion/css';

export type BoxLabelConatinerStylesProps = {
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

const boxLabelContainerStyles = (styles: BoxLabelConatinerStylesProps) => css`
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

export type BoxLabelContentStylesProps = {
  position?: string;
  display?: string;
  alignItems?: string;
  marginBottom?: string;
  custom?: string;
};

const boxLabelContentStyles = (styles: BoxLabelContentStylesProps) => css`
  position: ${styles.position || 'relative'};
  display: ${styles.display || 'flex'};
  align-items: ${styles.alignItems || 'center'};
  margin-bottom: ${styles.marginBottom || '8px'};
  ${styles.custom || ''}
`;

export type BoxLabelContentItemsStylesProps = {
  position?: string;
  display?: string;
  alignItems?: string;
  marginRight?: string;
  marginBottom?: string;
  custom?: string;
};

const boxLabelContentItemsStyles = (
  styles: BoxLabelContentItemsStylesProps
) => css`
  position: ${styles.position || 'relative'};
  display: ${styles.display || 'flex'};
  align-items: ${styles.alignItems || 'center'};
  margin-right: ${styles.marginRight || '5px'};
  margin-bottom: ${styles.marginBottom || '5px'};
  ${styles.custom || ''}
`;

export type BoxLabelContentButtonProps = {
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

const boxLabelContentButtonStyles = (styles: BoxLabelContentButtonProps) => css`
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

export type BoxLabelContentTitleStylesProps = {
  marginRight?: string;
  padding?: string;
  color?: string;
  borderRadius?: string;
  border?: string;
  custom?: string;
};

const boxLabelContentTitleStyles = (
  styles: BoxLabelContentTitleStylesProps
) => css`
  margin-right: ${styles.marginRight || '8px'};
  padding: ${styles.padding || '8px'};
  color: ${styles.color || '#8d8d8d'};
  border-radius: ${styles.borderRadius || '4px'};
  border: ${styles.border || '1px solid #dfdbdb'};
  ${styles.custom || ''}
`;

export type BoxLabelProps = {
  containerStyles?: BoxLabelConatinerStylesProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  contentStyles?: BoxLabelContentStylesProps;
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
  contentItemsStyles?: BoxLabelContentItemsStylesProps;
  contentItemsProps?: React.HTMLAttributes<HTMLDivElement>;
  contentButtonStyles?: BoxLabelContentButtonProps;
  contentButtonProps?: React.HTMLAttributes<HTMLSpanElement>;
  contentTitleStyles?: BoxLabelContentTitleStylesProps;
  contentTitleProps?: React.HTMLAttributes<HTMLSpanElement>;
  items: string[];
  removeItem: (index: number) => void;
};

export const BoxLabel = ({
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
}: BoxLabelProps) => {
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
          boxLabelContainerStyles(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        {items.map((item, index) => {
          return (
            <div
              key={`${item}-${index}`}
              className={cx(
                boxLabelContentStyles(contentStyles),
                contentClassName
              )}
              {...restContentProps}
            >
              <div
                className={cx(
                  boxLabelContentItemsStyles(contentItemsStyles),
                  contentItemsClassName
                )}
                {...restContentItemsProps}
              >
                <span
                  className={cx(
                    boxLabelContentButtonStyles(contentButtonStyles),
                    closeButtonClassName
                  )}
                  onClick={() => removeItem(index)}
                  {...restCloseButtonProps}
                >
                  x
                </span>
                <span
                  className={cx(
                    boxLabelContentTitleStyles(contentTitleStyles),
                    titleClassName
                  )}
                  {...restTitleProps}
                >
                  {item}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
