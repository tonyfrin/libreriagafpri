import React from 'react';
import { css, cx } from '@emotion/css';
import { IconType } from 'react-icons';

type IconContainerStyleProps = {
  boxSizing?: string;
  position?: string;
  transition?: string;
  cursor?: string;
  backgroundColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;
  padding?: string;
  margin?: string;
  flex?: string;
  background?: string;
  fontSize?: string;
  verticalAlign?: string;
  borderSpacing?: string;
  borderCollapse?: string;
  custom?: string;
};

const iconContainerStyle = (styles: IconContainerStyleProps) => css`
  box-sizing: ${styles.boxSizing || 'border-box'};
  position: ${styles.position || 'relative'};
  transition: ${styles.transition || 'all 200ms ease 0s'};
  cursor: ${styles.cursor || 'pointer'};
  background-color: ${styles.backgroundColor || 'rgb(255, 255, 255)'};
  border-radius: ${styles.borderRadius || '0.5rem'};
  border-width: ${styles.borderWidth || '1px'};
  border-color: ${styles.borderColor || 'rgb(227, 223, 218)'};
  border-style: ${styles.borderStyle || 'solid'};
  padding: ${styles.padding || '1rem'};
  margin: ${styles.margin || '0px'};
  flex: ${styles.flex || '1 1 0%'};
  background: ${styles.background || 'transparent'};
  font-size: ${styles.fontSize || '100%'};
  vertical-align: ${styles.verticalAlign || 'top'};
  border-spacing: ${styles.borderSpacing || '0'};
  border-collapse: ${styles.borderCollapse || 'collapse'};
  &:hover {
    background-color: #06b0e433;
    color: #ffff;
  }
  ${styles.custom || ''}
`;

type IconContentStyleProps = {
  fontFamily?: string;
  fontWeight?: string;
  color?: string;
  textTransform?: string;
  backgroundColor?: string;
  overflow?: string;
  textAlign?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  fontSize?: string;
  display?: string;
  verticalAlign?: string;
  margin?: string;
  padding?: string;
  border?: string;
  borderSpacing?: string;
  borderCollapse?: string;
  custom?: string;
};

const iconContentStyle = (styles: IconContentStyleProps) => css`
  font-family: ${styles.fontFamily || '"Poppins", sans-serif'};
  font-weight: ${styles.fontWeight || '100'};
  color: ${styles.color || 'rgb(50, 79, 165)'};
  text-transform: ${styles.textTransform || 'uppercase'};
  background-color: ${styles.backgroundColor || 'rgb(232, 239, 250)'};
  overflow: ${styles.overflow || 'hidden'};
  text-align: ${styles.textAlign || 'center'};
  width: ${styles.width || '3rem'};
  height: ${styles.height || '3rem'};
  border-radius: ${styles.borderRadius || '70% 52% 72%'};
  font-size: ${styles.fontSize || '1.5rem'};
  display: ${styles.display || 'inline-block'};
  vertical-align: ${styles.verticalAlign || 'middle'};
  margin: ${styles.margin || '0.5rem'};
  padding: ${styles.padding || '0'};
  border: ${styles.border || '0'};
  border-spacing: ${styles.borderSpacing || '0'};
  border-collapse: ${styles.borderCollapse || 'collapse'};
  ${styles.custom || ''}
`;

type IconContentContainerStyleProps = {
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  height?: string;
  width?: string;
  background?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  border?: string;
  verticalAlign?: string;
  borderSpacing?: string;
  borderCollapse?: string;
  custom?: string;
};

const iconContentContainerStyle = (
  styles: IconContentContainerStyleProps
) => css`
  display: ${styles.display || 'flex'};
  justify-content: ${styles.justifyContent || 'center'};
  align-items: ${styles.alignItems || 'center'};
  height: ${styles.height || '100%'};
  width: ${styles.width || '100%'};
  background: ${styles.background || 'transparent'};
  font-size: ${styles.fontSize || '100%'};
  margin: ${styles.margin || '0'};
  padding: ${styles.padding || '0'};
  border: ${styles.border || '0'};
  vertical-align: ${styles.verticalAlign || 'top'};
  border-spacing: ${styles.borderSpacing || '0'};
  border-collapse: ${styles.borderCollapse || 'collapse'};
  ${styles.custom || ''}
`;

type IconContentIconStyleProps = {
  verticalAlign?: string;
  display?: string;
  fontStyle?: string;
  fontVariant?: string;
  fontWeight?: string;
  custom?: string;
};

const iconContentIconStyle = (styles: IconContentIconStyleProps) => css`
  vertical-align: ${styles.verticalAlign || 'middle'};
  display: ${styles.display || 'inline-block'};
  font-style: ${styles.fontStyle || 'normal'};
  font-variant: ${styles.fontVariant || 'normal'};
  font-weight: ${styles.fontWeight || 'normal'};
  ${styles.custom || ''}
`;

type IconContentTitleContainerStyleProps = {
  verticalAlign?: string;
  marginLeft?: string;
  marginRight?: string;
  display?: string;
  background?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  border?: string;
  borderSpacing?: string;
  borderCollapse?: string;
  custom?: string;
};

const iconContentTitleContainer = (
  styles: IconContentTitleContainerStyleProps
) => css`
  vertical-align: ${styles.verticalAlign || 'middle'};
  margin-left: ${styles.marginLeft || '0.5rem'};
  margin-right: ${styles.marginRight || '0.5rem'};
  display: ${styles.display || 'block'};
  background: ${styles.background || 'transparent'};
  font-size: ${styles.fontSize || '100%'};
  margin: ${styles.margin || '0'};
  padding: ${styles.padding || '0'};
  border: ${styles.border || '0'};
  border-spacing: ${styles.borderSpacing || '0'};
  border-collapse: ${styles.borderCollapse || 'collapse'};
  ${styles.custom || ''}
`;

type IconContentTitleStyleProps = {
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  margin?: string;
  padding?: string;
  border?: string;
  verticalAlign?: string;
  borderSpacing?: string;
  borderCollapse?: string;
  background?: string;
  custom?: string;
};

const iconContentTitleStyle = (styles: IconContentTitleStyleProps) => css`
  font-family: ${styles.fontFamily || `"Poppins", sans-serif`};
  font-weight: ${styles.fontWeight || '800'};
  font-size: ${styles.fontSize || '1em'};
  color: ${styles.color || 'rgb(38, 35, 33)'};
  margin: ${styles.margin || '0'};
  padding: ${styles.padding || '0'};
  border: ${styles.border || '0'};
  vertical-align: ${styles.verticalAlign || 'top'};
  border-spacing: ${styles.borderSpacing || '0'};
  border-collapse: ${styles.borderCollapse || 'collapse'};
  background: ${styles.background || 'transparent'};
  ${styles.custom || ''}
`;

export interface IconItem {
  id: string;
  label?: string;
  onClick: () => void;
  icon: IconType;
}

export interface IconProps {
  item: IconItem;
  containerStyles?: IconContainerStyleProps;
  contentStyle?: IconContentStyleProps;
  contentContainerStyle?: IconContentContainerStyleProps;
  contentIconStyle?: IconContentIconStyleProps;
  contentTitleContainerStyle?: IconContentTitleContainerStyleProps;
  contentTitleStyle?: IconContentTitleStyleProps;
}

export const Icon: React.FC<IconProps> = ({
  item,
  containerStyles = {},
  contentStyle = {},
  contentContainerStyle = {},
  contentIconStyle = {},
  contentTitleContainerStyle = {},
  contentTitleStyle = {},
}) => {
  return (
    <>
      <div
        key={item.id}
        className={cx(iconContainerStyle(containerStyles))}
        onClick={item.onClick}
      >
        <div className={cx(iconContentStyle(contentStyle))}>
          <div className={cx(iconContentContainerStyle(contentContainerStyle))}>
            <span className={cx(iconContentIconStyle(contentIconStyle))}>
              <item.icon />
            </span>
          </div>
        </div>
        {item.label && (
          <div
            className={cx(
              iconContentTitleContainer(contentTitleContainerStyle)
            )}
          >
            <div className={cx(iconContentTitleStyle(contentTitleStyle))}>
              {item.label}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
