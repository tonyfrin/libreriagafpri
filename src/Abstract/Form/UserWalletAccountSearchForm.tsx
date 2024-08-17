import React from 'react';
import { css, cx } from '@emotion/css';
import { SearchBox } from '../Box';
import { Button } from '../Button';
import { ContainerButton } from '../Containers';
import { InputEmail, InputPhone, InputUserName } from '../Input';
import type { UseGafpriWalletAccountReturn, UseUserReturn } from '../../states';

export type UserWalletAccountSearchFormStaylesContainerProps = {
  color?: string;
  fontSize?: string;
  paddingBottom?: string;
  custom?: string;
};

const userWalletAccountSearchFormStaylesContainer = (
  styles: UserWalletAccountSearchFormStaylesContainerProps
) => css`
  color: ${styles.color || '#616e7d'};
  font-size: ${styles.fontSize || '12px'};
  padding-bottom: ${styles.paddingBottom || '40px'};
  ${styles.custom || ''}
`;

export type UserWalletAccountSearchFormProps = {
  containerStyles?: UserWalletAccountSearchFormStaylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  use: UseGafpriWalletAccountReturn;
  useUser: UseUserReturn;
  returnModule: () => void;
};

export const UserWalletAccountSearchForm = ({
  containerStyles = {},
  containerProps = {},
  useUser,
  use,
  returnModule,
}: UserWalletAccountSearchFormProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          userWalletAccountSearchFormStaylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <SearchBox
          title1Props={{
            title: 'Modulo de billetera',
          }}
          title2Props={{
            title: 'Busqueda de usuario',
          }}
        >
          <>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <InputUserName
                changeUserName={(e: string) => useUser.actions.changeName(e)}
                props={{
                  styles: {
                    width: '100%',
                  },
                  inputProps: {
                    title: 'Nombre',
                    onKeyPress: use.pages.actions.processUserByUserName,
                  },
                }}
              />
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <InputPhone
                changePhone={(e: string) =>
                  useUser.actions.changePhoneNumber(e)
                }
                props={{
                  styles: {
                    width: '100%',
                  },
                  inputProps: {
                    title: 'Numero de telefono',
                    onKeyPress: use.pages.actions.processUserByPhone,
                  },
                }}
              />
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <InputEmail
                changeEmail={(e: string) => useUser.actions.changeEmail(e)}
                props={{
                  styles: {
                    width: '100%',
                  },
                  inputProps: {
                    title: 'Email',
                    onKeyPress: use.pages.actions.processUserByEmail,
                  },
                }}
              />
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
                justifyContent: 'flex-start',
                custom: `
                  margin-top: 30px;`,
              }}
            >
              <Button
                title="regresar"
                buttonProps={{
                  onClick: () => returnModule(),
                }}
                styles={{
                  backgroundColor: '#c12429',
                }}
              />
            </ContainerButton>
          </>
        </SearchBox>
      </div>
    </>
  );
};
