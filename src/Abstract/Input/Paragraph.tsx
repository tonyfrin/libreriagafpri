import React from 'react';
import { css, cx } from '@emotion/css';
import { ContainerInput, ContainerStyles } from '../Containers';

export type SpanStyle = {
  fontSize?: string;
  color?: string;
  paddingLeft?: string;
  props?: string;
};

const ParagraphStyles = (styles: ParagraphStyle) => css`
  width: ${styles.width || '100%'};
  ${styles.height ? `height: ${styles.height};` : ''};
  border: ${styles.border || '2px solid #eaeaea'};
  padding: ${styles.padding || '8px 19px'};
  text-align: ${styles.textAlign || 'left'};
  outline: ${styles.outline || 0};
  border-radius: ${styles.borderRadius || '6px'};
  background-color: ${styles.backgroundColor || '#fff'};
  font-size: ${styles.fontSize || '15px'};
  font-weight: ${styles.fontWeight || 300};
  color: ${styles.color || '#8D8D8D'};
  box-sizing: border-box;
  display: inline-block; /* Alinea el párrafo en línea con el span */

  ::before {
    content: '\00a0'; /* Añade un espacio no rompible antes del contenido */
  }

  ::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }

  @media (max-width: 750px) {
    font-size: ${styles.media750Style?.fontSize || '12px'};
  }

  @media (max-width: 400px) {
    font-size: ${styles.media400Style?.fontSize || '10px'};
  }

  @media (max-width: 300px) {
    font-size: ${styles.media300Style?.fontSize || '8px'};
  }
`;

const SpanStyles = (styles: SpanStyle) => css`
  font-size: ${styles?.fontSize || 'x-small'};
  color: ${styles?.color || '#8d8d8d'};
  padding-left: ${styles?.paddingLeft || '5px'};
  ${styles.props || ''}
`;

type Media = {
  fontSize?: string | number;
};

export type ParagraphStyle = {
  width?: string | number;
  height?: string;
  border?: string;
  padding?: string | number;
  textAlign?: string;
  outline?: string | number;
  borderRadius?: string;
  backgroundColor?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  color?: string;
  media750Style?: Media | undefined;
  media400Style?: Media | undefined;
  media300Style?: Media | undefined;
};

export type ParagraphProps = {
  styles?: ParagraphStyle | undefined;
  stylesSpan?: SpanStyle | undefined;
  inputProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  paragraphClass?: string | undefined;
  containerStyles?: ContainerStyles | undefined;
  containerClass?: string | undefined;
  onChange?: (value: string) => void;
};

export const Paragraph = ({
  styles = {},
  stylesSpan = {},
  paragraphClass = '',
  containerStyles = {},
  containerClass = '',
  inputProps = {},
  onChange,
}: ParagraphProps) => {
  const handleClick = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <ContainerInput styles={containerStyles} containerClass={containerClass}>
      <>
        <>
          <span className={cx(SpanStyles(stylesSpan))}>
            {inputProps?.title}
          </span>

          <textarea
            className={cx(ParagraphStyles(styles), paragraphClass)}
            onChange={handleClick}
            placeholder="Escribe tu post aquí..."
            rows={10}
            {...inputProps}
          />
        </>
      </>
    </ContainerInput>
  );
};
