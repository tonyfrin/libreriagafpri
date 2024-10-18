import React from 'react';
import { css, cx } from '@emotion/css';

const ContainerInputStyles = (styles: ContainerStyles) => css`
  width: ${styles?.width || '91.66667%'};
  margin: ${styles?.margin || '10px 0px'};
  display: ${styles?.display || 'flex'};
  flex-direction: ${styles?.flexDirection || 'column'};
}
  ${styles?.custom || ''}
`;

export type ContainerStyles = {
  width?: string;
  margin?: string | number;
  display?: string;
  flexDirection?: string;
  custom?: string;
};

type ConainerInput = {
  styles?: ContainerStyles | undefined;
  containerClass?: string;
  children: JSX.Element;
};

export const ContainerInput = ({
  styles = {},
  containerClass = '',
  children,
}: ConainerInput) => {
  return (
    <div className={cx(ContainerInputStyles(styles), containerClass)}>
      {children}
    </div>
  );
};

const ContainerFormStyles = (styles: ContainerStyles) => css`
  width: ${styles.width || '90%'};
  margin: ${styles.margin || 'auto'};
`;

export type ContainerFormProps = {
  styles?: ContainerStyles | undefined;
  containerClass?: string;
  children: JSX.Element;
};

export type ContainerFormPropsExtended = {
  styles?: ContainerStyles | undefined;
  containerClass?: string;
};

export const ContainerForm = ({
  styles = {},
  containerClass = '',
  children,
}: ContainerFormProps) => {
  return (
    <div className={cx(ContainerFormStyles(styles), containerClass)}>
      {children}
    </div>
  );
};

const ContainerGloboStyles = (styles: ContainerGloboStyle) => css`
  width: ${styles.width || '50%'};
`;

export type ContainerGloboStyle = {
  width?: string;
};

type ContainerGlobo = {
  styles?: ContainerGloboStyle | undefined;
  containerClass?: string;
  children: JSX.Element;
};

export const ContainerGlobo = ({
  styles = {},
  containerClass = '',
  children,
}: ContainerGlobo) => {
  return (
    <div className={cx(ContainerGloboStyles(styles), containerClass)}>
      {children}
    </div>
  );
};

const ContainerButtonStyles = (styles: ContainerButtonStyle) => css`
  transition: ${styles.transition || 'all 1s ease 0s'};
  width: ${styles.width || '50%'};
  display: ${styles.display || 'flex'};
  justify-content: ${styles.justifyContent || 'space-around'};
  ${styles.flexDirection ? `flex-direction: ${styles.flexDirection};` : ''}
  ${styles.custom || ''}
`;

export type ContainerButtonStyle = {
  width?: string;
  display?: string;
  justifyContent?: string;
  transition?: string;
  flexDirection?: string;
  custom?: string;
};

export type ContainerButtonProps = {
  styles?: ContainerButtonStyle | undefined;
  Class?: string;
  children: JSX.Element;
};

export type ContainerButtonPropsExtended = {
  styles?: ContainerButtonStyle | undefined;
  Class?: string;
};

export const ContainerButton = ({
  styles = {},
  Class = '',
  children,
}: ContainerButtonProps) => {
  return (
    <div className={cx(ContainerButtonStyles(styles), Class)}>{children}</div>
  );
};
