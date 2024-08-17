import React from 'react';
import { css } from '@emotion/css';
import type { UseLoginReturn } from '../../states';
import {
  Box1,
  Background1,
  Title1,
  Title2,
  InputPassword,
  InputUserName,
  ButtonNext,
} from '../../Abstract';

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

export type LoginFormProps = {
  use: UseLoginReturn;
  titleContainerStyle?: string;
  nameContainerStyle?: string;
  actionButtonContainerStyle?: string;
  imageLogin: string;
};

export const LoginForm = ({
  use,
  titleContainerStyle = defaultTitleContainerStyle,
  nameContainerStyle = defaultNameContainerStyle,
  actionButtonContainerStyle = defaultActionButtonContainerStyle,
  imageLogin,
}: LoginFormProps): JSX.Element => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Evitar que el formulario se ejecute
    use.actions.login();
  };

  React.useEffect(() => {
    use.actions.validationButtonNext();
    use.actions.validationUserName(use.states.userName);
    use.actions.validationPassword(use.states.password);
  }, [
    use.states.userName,
    use.states.password,
    use.states.passwordValid,
    use.states.userNameValid,
  ]);

  return (
    <Background1
      image={imageLogin}
      customStyles="
      display: flex;
      justify-content: center;
      align-items: center;
    "
    >
      <Box1
        styles={{
          width: 'auto',
          height: 'auto',
        }}
      >
        <>
          <div className={css(titleContainerStyle)}>
            <Title1 title="Login" />
            <Title2
              title="Use sus credenciales para acceder a su cuenta."
              styles={{
                textTransform: 'none',
              }}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className={css(nameContainerStyle)}>
              <>
                <InputUserName
                  changeUserName={use.actions.changeUserName}
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
                  changePassword={use.actions.changePassword}
                  props={{
                    styles: {
                      width: '100%',
                    },
                  }}
                />
              </>
            </div>
            <div className={css(actionButtonContainerStyle)}>
              <ButtonNext title="Ingresar" />
            </div>
          </form>
        </>
      </Box1>
    </Background1>
  );
};
