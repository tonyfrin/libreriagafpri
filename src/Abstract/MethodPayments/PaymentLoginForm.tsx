import React from 'react';
import { css } from '@emotion/css';
import {
  Box1,
  Title1,
  Title2,
  InputPassword,
  InputUserName,
  Button,
} from '../../Abstract';
import { BUTTON_NEXT_INPUT } from '../../constants';

const defaultTitleContainerStyle = css`
  margin-top: 22px;
  margin-bottom: 30px;
`;

const defaultNameContainerStyle = css`
  width: 95%;
  margin: 0 auto;
`;

const defaultActionButtonContainerStyle = css`
  display: flex;
  flex-direction: row;
  width: 95%;
  margin-bottom: 0px;
  justify-content: flex-end;
  margin-top: 22px;
  width: 85%;
`;

export type PaymentLoginFormProps = {
  validationButtonNext: () => boolean;
  validationAuthorizedLogin: (authorizedLogin: string) => boolean;
  validationAuthorizedPassword: (authorizedPassword: string) => boolean;
  authorizedLogin: string;
  authorizedPassword: string;
  changeAuthorizedLogin: (authorizedLogin: string) => void;
  changeAuthorizedPassword: (authorizedPassword: string) => void;
  inputId: string;
  add: () => void;
};

export const PaymentLoginForm = ({
  validationButtonNext,
  validationAuthorizedLogin,
  validationAuthorizedPassword,
  authorizedLogin,
  authorizedPassword,
  changeAuthorizedLogin,
  changeAuthorizedPassword,
  inputId,
  add,
}: PaymentLoginFormProps): JSX.Element => {
  React.useEffect(() => {
    validationButtonNext();
    validationAuthorizedLogin(authorizedLogin);
    validationAuthorizedPassword(authorizedPassword);
  }, [authorizedLogin, authorizedPassword]);

  const next = () => {
    if (validationButtonNext()) {
      add();
    }
  };

  return (
    <Box1
      styles={{
        width: 'auto',
        height: 'auto',
      }}
    >
      <>
        <div className={css(defaultTitleContainerStyle)}>
          <Title1 title="Autorización" />
          <Title2
            title="Use sus credenciales para autorizar esta operación."
            styles={{
              textTransform: 'none',
            }}
          />
        </div>
        <div>
          <div className={css(defaultNameContainerStyle)}>
            <>
              <InputUserName
                changeUserName={changeAuthorizedLogin}
                props={{
                  styles: {
                    width: '100%',
                  },
                }}
              />
            </>
          </div>
          <div className={css(defaultNameContainerStyle)}>
            <>
              <InputPassword
                changePassword={changeAuthorizedPassword}
                props={{
                  styles: {
                    width: '100%',
                  },
                }}
              />
            </>
          </div>
          <div className={css(defaultActionButtonContainerStyle)}>
            <Button
              title="Autorizar"
              buttonProps={{
                onClick: () => next(),
                id: `${BUTTON_NEXT_INPUT}${inputId}`,
              }}
            />
          </div>
        </div>
      </>
    </Box1>
  );
};
