import React from 'react';
import { css, cx } from '@emotion/css';
import {
  ContainerButton,
  ContainerButtonPropsExtended,
} from '../../Containers';
import { ModelForm, ModelFormPropsExtended } from '../../Form';
import { InputName, InputProps, SelectRegion } from '../../Input';
import { Button, ButtonOptionsContainer } from '../../Button';
import { Countries, StatesCountries } from '../../../constants';
import type { UseGafpriShippingAreasReturn } from '../../../states';
import { ListContainer } from '../../List';
import { Modal } from '../../Modal';
import { ShippingMethods } from '../../../Components';

export type ShippingAreasFormProps = {
  use: UseGafpriShippingAreasReturn;
  formType: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
};

export type ShippingAreasFormPropsExtended = {
  use?: UseGafpriShippingAreasReturn;
  formType?: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
};

const regionsContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 10px;
  padding: 15px 0px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 91%;
`;

const containerButtonsStyles = css`
  display: flex;
  justify-content: center;
`;

const regionItemStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const regionContainerStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const regionButtonStyles = css`
  margin-right: 8px;
  padding: 8px;
  color: #8d8d8d;
  border-radius: 4px;
  border: 1px solid #dfdbdb;
`;

const closeButtonStyles = css`
  position: absolute;
  top: 0px;
  transform: translateY(-50%);
  right: 0px;
  cursor: pointer;
  color: #fff;
  background-color: #f44336;
  border-radius: 100%;
  padding: 2px 5px 4px 5px;
  font-size: 8px;
`;

export const ShippingAreasForm = ({
  use,
  formType,
  modelFormProps,
  infoContainerProps,
  nameInputProps,
}: ShippingAreasFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const currentItem = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationRegion(use.attributes.states.region);
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.name, use.attributes.states.region]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.nameValid, use.attributes.states.regionValid]);

  React.useEffect(() => {
    if (currentItem) {
      use.attributes.actions.changeName(currentItem.name);
      use.attributes.actions.setRegion(currentItem.region);
    }
  }, []);

  const title1Text = isAddForm ? 'Nueva Zona' : 'Actualizar Zona';
  const title2Text = isAddForm
    ? 'Agrega una nueva Zona de Envío'
    : `Actualiza la información de la zona #${currentItem?.id}`;

  const buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  const buttonAction = isAddForm ? use.api.actions.add : use.api.actions.update;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.pages.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  const goToShippingMethods = () => {
    if (currentItem?.id) {
      use.useShippingMethoods.pages.actions.onAdd();
      use.useShippingMethoods.attributes.actions.changeShippingAreasId(
        `${currentItem?.id}`
      );
      use.pages.actions.openModalPage();
    }
  };

  //Items for the list
  const goToShippingMethodsUpdate = (id: number) => {
    use.useShippingMethoods.pages.actions.goUpdate(id);
    use.pages.actions.openModalPage();
  };

  const ButtonActionsShippingMethods: React.FC<{ id: number }> = ({ id }) => {
    return (
      <>
        <div className={css(containerButtonsStyles)}>
          <ButtonOptionsContainer
            props={{
              title: 'Actualizar',
              buttonProps: {
                onClick: () => goToShippingMethodsUpdate(id),
              },
              styles: {
                fontSize: '10px',
                margin: '0px 5px 0px 0px',
              },
            }}
          />
          <ButtonOptionsContainer
            props={{
              title: 'Borrar',
              buttonProps: {
                onClick: () => use.useShippingMethoods.api.actions.erase(id),
              },
              styles: {
                fontSize: '10px',
                backgroundColor: '#c12429',
              },
            }}
          />
        </div>
      </>
    );
  };

  const shippingMethods = currentItem?.id
    ? use.useShippingMethoods.data.actions.filterByShippingAreasId(
        currentItem?.id
      )
    : [];

  shippingMethods.sort((a, b) => {
    if (a.id && b.id) {
      return a.id - b.id;
    } else {
      return 0;
    }
  });

  const shippingMethodsPaginated =
    use.useShippingMethoods.paginations.actions.getPaginated(
      shippingMethods,
      use.useShippingMethoods.paginations.states.currentPage,
      use.useShippingMethoods.paginations.states.itemsPerPage
    );

  //id

  const shippingMethodsItems =
    shippingMethodsPaginated?.map((item) => {
      return [
        item.name,
        item.type,
        item.status,
        <ButtonActionsShippingMethods id={item.id} />,
      ];
    }) ?? [];

  const headers = ['Name', 'Tipo', 'Estatus', 'Acción'];

  const totalPages = Math.ceil(
    shippingMethods.length /
      use.useShippingMethoods.paginations.states.itemsPerPage
  );

  return (
    <ModelForm
      titles={{
        title1: title1Text,
        title2: title2Text,
      }}
      buttonTitles={{
        mainButton: buttonTitle,
        returnButton: 'Volver',
      }}
      handleActions={handleActions}
      error={use.error.states.error}
      {...modelFormProps}
    >
      <>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...infoContainerProps}
        >
          <>
            <InputName
              changeName={use.attributes.actions.changeName}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.name,
                },
                styles: {
                  width: '100%',
                },
                ...nameInputProps,
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...infoContainerProps}
        >
          <>
            <SelectRegion
              changeRegion={(event) =>
                use.attributes.actions.changeRegion(event)
              }
              props={{
                defaultValue: use.attributes.states.regionDefault,
                styles: {
                  width: '100%',
                },
                options: use.attributes.states.regionOptions,
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...infoContainerProps}
        >
          <div className={cx(regionsContainerStyles)}>
            {use.attributes.states.region.map((region) => {
              const label =
                Countries[0][region] ||
                StatesCountries[0]['VE'][0][region] ||
                region;
              return (
                <div key={region} className={cx(regionItemStyles)}>
                  <div className={cx(regionContainerStyles)}>
                    <span
                      className={cx(closeButtonStyles)}
                      onClick={() =>
                        use.attributes.actions.removeRegion(region)
                      }
                    >
                      x
                    </span>
                    <button className={cx(regionButtonStyles)}>{label}</button>
                  </div>
                </div>
              );
            })}
          </div>
        </ContainerButton>
        {isUpdateForm && shippingMethods.length > 0 ? (
          <>
            <ListContainer
              propsList={{
                title: 'Métodos de Envío',
                items: shippingMethodsItems,
                headers: headers,
                columns: 4,
                propsPagination: {
                  currentPage:
                    use.useShippingMethoods.paginations.states.currentPage,
                  setCurrentPage:
                    use.useShippingMethoods.paginations.actions.setCurrentPage,
                  totalPages: totalPages,
                },
                actionButton: {
                  title: 'Agregar',
                  buttonProps: {
                    onClick: () => goToShippingMethods(),
                  },
                },
              }}
            />
          </>
        ) : (
          isUpdateForm && (
            <>
              <ContainerButton
                styles={{
                  width: '96.5%',
                }}
                {...infoContainerProps}
              >
                <Button
                  title="Agregar Metodos de Envío"
                  buttonProps={{ onClick: () => goToShippingMethods() }}
                />
              </ContainerButton>
            </>
          )
        )}
        <Modal open={use.pages.states.modalPage}>
          <>
            <ShippingMethods use={use.useShippingMethoods} />
          </>
        </Modal>
      </>
    </ModelForm>
  );
};
