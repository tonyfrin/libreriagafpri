import React from 'react';
import { Box1 } from '../Box';
import { ContainerForm } from '../Containers';
import type { ContainerFormPropsExtended } from '../Containers';
import { Title1, Title2 } from '../Title';
import type { Title1Props, Title2Props } from '../Title';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';
import { Error } from '../Error';
import type { ErrorProps } from '../Error';
import type { Box1Props } from '../Box';
import { css } from '@emotion/css';
import { BUTTON_NEXT_INPUT } from '../../constants';

const defaultTitleContainerStyle = css`
  margin-top: 22px;
  padding-left: 38px;
  margin-bottom: 30px;
`;

const defaultActionButtonContainerStyle = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 0px;
  justify-content: flex-end;
  margin-top: 22px;
  width: 85%;
`;

const defaultReturnButtonConatinerStyle = css`
  border-top: 0.1rem solid rgb(227, 223, 218);
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 100px;
`;

interface BoxProps {
  styles?: Box1Props['styles'];
  Class?: Box1Props['Class'];
}

export type ModelFormProps = {
  boxProps?: BoxProps;
  titles: {
    title1: string;
    title2: string;
  };
  title1Props?: Title1Props;
  title2Props?: Title2Props;
  handleActions: (action: string, value: any) => void;
  buttonConditional?: boolean;
  buttonTitles: {
    mainButton?: string;
    returnButton: string;
  };
  mainButtonProps?: ButtonProps;
  buttonNextId?: string;
  returnButtonStyle?: ButtonProps['styles'];
  returnButtonProps?: ButtonProps;
  children: React.ReactElement;
  error: string[] | null;
  errorProps?: ErrorProps;
  childrenContainerProps?: ContainerFormPropsExtended;
  titleContainerStyle?: string;
  actionButtonContainerStyle?: string;
  returnButtonConatinerStyle?: string;
};

export type ModelFormPropsExtended = {
  boxProps?: BoxProps;
  title1Props?: Title1Props;
  title2Props?: Title2Props;
  handleActions?: (action: string, value: any) => void;
  buttonConditional?: boolean;
  buttonTitles: {
    mainButton?: string;
    returnButton: string;
  };
  mainButtonProps?: ButtonProps;
  buttonNextId?: string;
  returnButtonStyle?: ButtonProps['styles'];
  returnButtonProps?: ButtonProps;
  error?: string[] | null;
  errorProps?: ErrorProps;
  childrenContainerProps?: ContainerFormPropsExtended;
  titleContainerStyle?: string;
  actionButtonContainerStyle?: string;
  returnButtonConatinerStyle?: string;
};

export const ModelForm = ({
  boxProps,
  titles,
  title1Props,
  title2Props,
  handleActions,
  buttonConditional = true,
  buttonTitles,
  mainButtonProps,
  buttonNextId = '',
  returnButtonStyle,
  returnButtonProps,
  children,
  error,
  errorProps,
  childrenContainerProps,
  titleContainerStyle = defaultTitleContainerStyle,
  actionButtonContainerStyle = defaultActionButtonContainerStyle,
  returnButtonConatinerStyle = defaultReturnButtonConatinerStyle,
}: ModelFormProps): JSX.Element => {
  return (
    <Box1 {...boxProps}>
      <>
        <div className={css(titleContainerStyle)}>
          <Title1 title={titles.title1} {...title1Props} />
          <Title2 title={titles.title2} {...title2Props} />
        </div>
        <Error error={error} {...errorProps} />
        <ContainerForm {...childrenContainerProps}>{children}</ContainerForm>
        {buttonConditional && buttonTitles?.mainButton && (
          <div className={css(actionButtonContainerStyle)}>
            <Button
              title={buttonTitles.mainButton}
              buttonProps={{
                onClick: () => handleActions('submit', {}),
                id: `${BUTTON_NEXT_INPUT}${buttonNextId}`,
              }}
              {...mainButtonProps}
            />
          </div>
        )}
        {buttonConditional && buttonTitles?.returnButton !== '' && (
          <div className={css(returnButtonConatinerStyle)}>
            <Button
              title={buttonTitles.returnButton}
              styles={{
                ...returnButtonStyle,
                backgroundColor: '#c12429',
              }}
              buttonProps={{
                onClick: () => handleActions('return', {}),
              }}
              {...returnButtonProps}
            />
          </div>
        )}
      </>
    </Box1>
  );
};
