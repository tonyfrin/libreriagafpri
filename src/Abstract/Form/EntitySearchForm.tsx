import React, { KeyboardEvent } from 'react';
import { css, cx } from '@emotion/css';
import { SearchBox } from '../Box';
import { Button } from '../Button';
import { ContainerButton } from '../Containers';
import {
  InputDocumentiIdDigit,
  InputEmail,
  InputName,
  InputPhone,
  Input,
} from '../Input';
import type { UseGafpriEntityReturn, UseGafpriOrderReturn } from '../../states';
import type { UseGafpriPagesSalesModuleReturn } from '../states';

export type EntitySearchFormStaylesContainerProps = {
  color?: string;
  fontSize?: string;
  paddingBottom?: string;
  custom?: string;
};

const EntitySearchFormStaylesContainer = (
  styles: EntitySearchFormStaylesContainerProps
) => css`
  color: ${styles.color || '#616e7d'};
  font-size: ${styles.fontSize || '12px'};
  padding-bottom: ${styles.paddingBottom || '40px'};
  ${styles.custom || ''}
`;

export type EntitySearchFormProps = {
  containerStyles?: EntitySearchFormStaylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  useOrder: UseGafpriOrderReturn;
  useEntity: UseGafpriEntityReturn;
  usePagesSalesModule: UseGafpriPagesSalesModuleReturn;
  uploadOrder: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export const EntitySearchForm = ({
  containerStyles = {},
  containerProps = {},
  useOrder,
  useEntity,
  usePagesSalesModule,
  uploadOrder,
}: EntitySearchFormProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          EntitySearchFormStaylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <SearchBox
          title1Props={{
            title: 'Modulo de ventas',
          }}
          title2Props={{
            title: 'Busqueda de clientes',
          }}
        >
          <>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <InputDocumentiIdDigit
                changeDocumentiIdDigit={(e: string) =>
                  useEntity.attributes.actions.changeDigit(e)
                }
                props={{
                  styles: {
                    width: '100%',
                  },
                  inputProps: {
                    title: 'Cedula o RIF',
                    onKeyPress:
                      useOrder.pages.actions.processEntityBydocumentId,
                  },
                }}
              />
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <InputName
                changeName={(e: string) =>
                  useEntity.attributes.actions.changeName(e)
                }
                props={{
                  styles: {
                    width: '100%',
                  },
                  inputProps: {
                    title: 'Nombre',
                    onKeyPress: useOrder.pages.actions.processEntityByName,
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
                  useEntity.attributes.actions.changePhone(e)
                }
                props={{
                  styles: {
                    width: '100%',
                  },
                  inputProps: {
                    title: 'Numero de telefono',
                    onKeyPress: useOrder.pages.actions.processEntityByPhone,
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
                changeEmail={(e: string) =>
                  useEntity.attributes.actions.changeEmail(e)
                }
                props={{
                  styles: {
                    width: '100%',
                  },
                  inputProps: {
                    title: 'Email',
                    onKeyPress: useOrder.pages.actions.processEntityByEmail,
                  },
                }}
              />
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <Input
                styles={{
                  width: '100%',
                }}
                inputProps={{
                  title: 'Cargar Pedido/Presupuesto',
                  placeholder: 'Ingrese el numero de pedido o presupuesto',
                  onKeyPress: uploadOrder,
                  onChange: (e) =>
                    useOrder.attributes.actions.setCurrentId(
                      parseInt(e.target.value, 10)
                    ),
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
                  onClick: () => usePagesSalesModule.actions.onInit(),
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
