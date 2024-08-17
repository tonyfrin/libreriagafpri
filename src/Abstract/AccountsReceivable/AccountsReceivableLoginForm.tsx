import React from 'react';
import { css } from '@emotion/css';
import type { UseGafpriAccountsReceivableReturn } from '../../states';
import {
  Box1,
  Title1,
  Title2,
  InputPassword,
  InputUserName,
  Button,
} from '../../Abstract';
import { ACCOUNTS_RECEIVABLE_ROUTE, BUTTON_NEXT_INPUT } from '../../constants';

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

export type AccountsReceivableLoginFormProps = {
  use: UseGafpriAccountsReceivableReturn;
  titleContainerStyle?: string;
  nameContainerStyle?: string;
  actionButtonContainerStyle?: string;
};

export const AccountsReceivableLoginForm = ({
  use,
  titleContainerStyle = defaultTitleContainerStyle,
  nameContainerStyle = defaultNameContainerStyle,
  actionButtonContainerStyle = defaultActionButtonContainerStyle,
}: AccountsReceivableLoginFormProps): JSX.Element => {
  React.useEffect(() => {
    use.attributes.actions.validationButtonNextLogin();
    use.attributes.actions.validationAuthorizedLogin(
      use.attributes.states.authorizedLogin
    );
    use.attributes.actions.validationAuthorizedPassword(
      use.attributes.states.authorizedPassword
    );
  }, [
    use.attributes.states.authorizedLogin,
    use.attributes.states.authorizedPassword,
  ]);

  return (
    <Box1
      styles={{
        width: 'auto',
        height: 'auto',
      }}
    >
      <>
        <div className={css(titleContainerStyle)}>
          <Title1 title="Autorización" />
          <Title2
            title="Use sus credenciales para autorizar esta operación."
            styles={{
              textTransform: 'none',
            }}
          />
        </div>
        <div>
          <div className={css(nameContainerStyle)}>
            <>
              <InputUserName
                changeUserName={use.attributes.actions.changeAuthorizedLogin}
                props={{
                  styles: {
                    width: '100%',
                  },
                }}
              />
            </>
          </div>
          <div className={css(nameContainerStyle)}>
            <>
              <InputPassword
                changePassword={use.attributes.actions.changeAuthorizedPassword}
                props={{
                  styles: {
                    width: '100%',
                  },
                }}
              />
            </>
          </div>
          <div className={css(actionButtonContainerStyle)}>
            <Button
              title="Autorizar"
              buttonProps={{
                onClick: () => use.api.actions.add(),
                id: `${BUTTON_NEXT_INPUT}${ACCOUNTS_RECEIVABLE_ROUTE}-login`,
              }}
            />
          </div>
        </div>
      </>
    </Box1>
  );
};
