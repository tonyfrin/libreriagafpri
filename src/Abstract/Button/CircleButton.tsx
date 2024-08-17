import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { css, cx } from '@emotion/css';

export type CircleButtonStylesContainerProps = {
  custom?: string;
};

export type CircleButtonStylesContentProps = {
  cursor?: string;
  custom?: string;
};

export type CircleButtonStylesImageProps = {
  width?: string;
  padding?: string;
  display?: string;
  alignContent?: string;
  flexWrap?: string;
  justifyContent?: string;
  backgroundColor?: string;
  borderRadius?: string;
  fontSize?: string;
  color?: string;
  custom?: string;
};

export type CircleButtonStylesTitleProps = {
  textTransform?: string;
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  custom?: string;
};

const circleButtonStylesContainer = (
  styles: CircleButtonStylesContainerProps
) => css`
  ${styles.custom ? styles.custom : ''}
`;

const circleButtonStylesContent = (
  styles: CircleButtonStylesContentProps
) => css`
  cursor: ${styles.cursor || 'pointer'};
  ${styles.custom ? styles.custom : ''}
`;

const circleButtonStylesImage = (styles: CircleButtonStylesImageProps) => css`
  width: ${styles.width || '100px'};
  padding: ${styles.padding || '5px'};
  display: ${styles.display || 'flex'};
  align-content: ${styles.alignContent || 'center'};
  flex-wrap: ${styles.flexWrap || 'wrap'};
  justify-content: ${styles.justifyContent || 'center'};
  background-color: ${styles.backgroundColor || '#324375'};
  border-radius: ${styles.borderRadius || '100%'};
  font-size: ${styles.fontSize || '30px'};
  color: ${styles.color || '#ffffff'};
  ${styles.custom ? styles.custom : ''}
`;

const circleButtonStylesTitle = (styles: CircleButtonStylesTitleProps) => css`
  text-transform: ${styles.textTransform || 'uppercase'};
  font-size: ${styles.fontSize || '18px'};
  color: ${styles.color || '#666666'};
  font-weight: ${styles.fontWeight || '700'};
  ${styles.custom ? styles.custom : ''}
`;

export type CircleButtonProps = {
  containerStyles?: CircleButtonStylesContainerProps;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  contentStyles?: CircleButtonStylesContentProps;
  contentProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  image: string;
  imageStyles?: CircleButtonStylesImageProps;
  imageProps?: HTMLAttributes<HTMLImageElement>;
  title?: string;
  titleStyles?: CircleButtonStylesTitleProps;
  titleProps?: HTMLAttributes<HTMLSpanElement>;
};

export type CircleButtonPropsExtended = {
  containerStyles?: CircleButtonStylesContainerProps;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  contentStyles?: CircleButtonStylesContentProps;
  contentProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  imageStyles?: CircleButtonStylesImageProps;
  imageProps?: HTMLAttributes<HTMLImageElement>;
  titleStyles?: CircleButtonStylesTitleProps;
  titleProps?: HTMLAttributes<HTMLSpanElement>;
};

export const CircleButton = ({
  containerStyles = {},
  containerProps = {},
  contentStyles = {},
  contentProps = {},
  imageProps = {},
  imageStyles = {},
  image,
  title,
  titleStyles = {},
  titleProps = {},
}: CircleButtonProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentClassName, ...restContentProps } = contentProps;
  const { className: imageClassName, ...restImageProps } = imageProps;
  const { className: titleClassName, ...restTitleProps } = titleProps;

  return (
    <>
      <div
        className={cx(
          circleButtonStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <button
          className={cx(
            circleButtonStylesContent(contentStyles),
            contentClassName
          )}
          {...restContentProps}
        >
          <img
            src={image}
            className={cx(circleButtonStylesImage(imageStyles), imageClassName)}
            alt={title}
            {...restImageProps}
          />
          {title && (
            <span
              className={cx(
                circleButtonStylesTitle(titleStyles),
                titleClassName
              )}
              {...restTitleProps}
            >
              {title}
            </span>
          )}
        </button>
      </div>
    </>
  );
};
