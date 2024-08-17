import React from 'react';
import { css, cx } from '@emotion/css';

const paginaOpcionesStyles = (open: boolean) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${open ? 1 : 0};
  visibility: ${open ? 'visible' : 'hidden'};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out,
    transform 0.5s ease-in-out;
  transform: translateX(${open ? 0 : '-100%'});
`;

const contentStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 60%;
  max-height: 80vh;
  overflow-y: auto;
`;

const buttonStyles = css`
  position: absolute;
  top: 87px;
  transform: translateY(-50%);
  right: -49%;
  cursor: pointer;
  color: #fff;
  background-color: #c12429;
  border-radius: 100%;
  padding: 6px 7px 6px 8px;
  font-size: 13px;
`;

export type ModalProps = {
  children: JSX.Element;
  open: boolean;
  onClose?: () => void;
};

export const Modal = ({ children, open, onClose }: ModalProps) => {
  return (
    <>
      <div className={cx(paginaOpcionesStyles(open))}>
        <div className={cx(contentStyles)}>
          {children}
          {onClose ? (
            <button className={cx(buttonStyles)} onClick={onClose}>
              X
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};
