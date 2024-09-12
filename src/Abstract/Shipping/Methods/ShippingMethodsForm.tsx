import React, { ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import { css, cx } from '@emotion/css';
import {
  ContainerButton,
  ContainerButtonPropsExtended,
} from '../../Containers';
import { ModelForm, ModelFormPropsExtended } from '../../Form';
import {
  InputName,
  SelectStatus,
  InputDescription,
  InputProps,
  InputCost,
  SelectType,
  SelectRoles,
  Input,
} from '../../Input';
import type {
  UseGafpriShippingMethodsReturn,
  UseRolesReturn,
} from '../../../states';
import { SHIPPING_METHODS_ROUTE, ALERT } from '../../../constants';
import { Button } from '../../Button';
import { workDaysHoursToArray } from '../../../helpers';

export type ShippingMethodsFormProps = {
  use: UseGafpriShippingMethodsReturn;
  useRoles: UseRolesReturn;
  formType: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  descriptionInputProps?: InputProps;
};

export type ShippingMethodsFormPropsExtended = {
  use?: UseGafpriShippingMethodsReturn;
  formType?: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  descriptionInputProps?: InputProps;
};

const regionsContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px 10px;
  padding: 15px 0px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 91%;
`;

const regionsTitleStyles = css`
  font-size: x-small;
  color: #8d8d8d;
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

const mainContainerStyle = css``;

const titleContainerStyle = css`
  transition: all 1s ease 0s;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: rgb(38, 35, 33);
  display: table-cell;
  width: auto;
  padding-bottom: 20px;
  vertical-align: middle;
  line-height: 1.25rem;
`;

const checkBoxContainerStyle = css`
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
`;

const nameStyle = css`
  margin-left: 0.25rem;
`;

const infoContainerStyle = css`
  display: flex;
  justify-content: space-around;
`;

const checkBoxStyle = css``;

export const ShippingMethodsForm = ({
  use,
  useRoles,
  formType,
  modelFormProps,
  infoContainerProps,
  nameInputProps,
}: ShippingMethodsFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';
  const [inputType, setInputType] = React.useState(<></>);
  const [inputStatus, setInputStatus] = React.useState(<></>);
  const [workDay, setWorkDay] = React.useState('');
  const [workOpenHour, setWorkOpenHour] = React.useState('');
  const [workCloseHour, setWorkCloseHour] = React.useState('');
  const [buttonAddValid, setButtonAddValid] = React.useState(false);

  const validationButtonAdd = (): boolean => {
    return (
      workDay !== '' &&
      workOpenHour !== '' &&
      workCloseHour !== '' &&
      parseInt(workOpenHour) < parseInt(workCloseHour)
    );
  };

  const currentItem = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    const valid = validationButtonAdd();
    setButtonAddValid(valid);
  }, [workDay, workOpenHour, workCloseHour]);

  const addWorkDayHours = (): void => {
    if (validationButtonAdd()) {
      use.attributes.actions.pushWorkDayHour(
        parseInt(workDay, 10),
        `${workOpenHour}-${workCloseHour}`
      );
    }
  };

  React.useEffect(() => {
    use.attributes.actions.validationShippingAreasId(
      parseInt(use.attributes.states.shippingAreasId, 10)
    );
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationDescription(
      use.attributes.states.description
    );
    use.attributes.actions.validationCost(
      parseFloat(use.attributes.states.cost)
    );
    use.attributes.actions.validationStatus(use.attributes.states.status);
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.shippingAreasId,
    use.attributes.states.name,
    use.attributes.states.description,
    use.attributes.states.cost,
    use.attributes.states.type,
    use.attributes.states.status,
    inputType,
    inputStatus,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.shippingAreasIdValid,
    use.attributes.states.nameValid,
    use.attributes.states.descriptionValid,
    use.attributes.states.costValid,
    use.attributes.states.typeValid,
    use.attributes.states.statusValid,
    use.attributes.states.roles,
    use.attributes.states.workDaysHours,
    use.attributes.states.preparationTime,
    use.attributes.states.pickupTime,
    use.attributes.states.deliveryTime,
    use.attributes.states.typeStart,
    use.attributes.states.valueStart,
    use.attributes.states.conditional,
    use.attributes.states.typeConditional,
    use.attributes.states.valueConditional,
  ]);

  React.useEffect(() => {
    if (isUpdateForm && currentItem) {
      use.attributes.actions.changeShippingAreasId(
        `${currentItem.shippingAreasId}`
      );
      use.attributes.actions.changeName(currentItem.name);
      use.attributes.actions.changeDescription(currentItem.description);
      use.attributes.actions.changeCost(`${currentItem.cost}`);

      const type = use.attributes.states.typeOptions.find(
        (item) => item.value === currentItem.type
      ) || { value: '', label: 'Elija tipo' };
      use.attributes.actions.changeType(type);

      const status = use.attributes.states.statusOptions.find(
        (item) => item.value === currentItem.status
      ) || { value: '', label: 'Elija estado' };
      use.attributes.actions.changeStatus(status);
    }
  }, []);

  React.useEffect(() => {
    if (isAddForm) {
      setInputType(
        <SelectType
          changeType={use.attributes.actions.changeType}
          props={{
            title: 'Tipo',
            options: use.attributes.states.typeOptions,
            defaultValue: use.attributes.states.typeDefault,
            styles: {
              width: '90%',
            },
            // ...nameInputProps
          }}
          inputId={SHIPPING_METHODS_ROUTE}
        />
      );

      setInputStatus(
        <SelectStatus
          changeStatus={use.attributes.actions.changeStatus}
          props={{
            title: 'Estado',
            options: use.attributes.states.statusOptions,
            defaultValue: use.attributes.states.statusDefault,
            styles: {
              width: '104%',
            },
            // ...nameInputProps
          }}
          inputId={SHIPPING_METHODS_ROUTE}
        />
      );
    }
  }, []);

  React.useEffect(() => {
    if (isUpdateForm) {
      if (use.attributes.states.typeDefault.value !== '') {
        setInputType(
          <SelectType
            changeType={use.attributes.actions.changeType}
            props={{
              title: 'Tipo',
              options: use.attributes.states.typeOptions,
              defaultValue: use.attributes.states.typeDefault,
              styles: {
                width: '90%',
              },
              // ...nameInputProps
            }}
            inputId={SHIPPING_METHODS_ROUTE}
          />
        );
      }

      if (use.attributes.states.statusDefault.value !== '') {
        setInputStatus(
          <SelectStatus
            changeStatus={use.attributes.actions.changeStatus}
            props={{
              title: 'Estado',
              options: use.attributes.states.statusOptions,
              defaultValue: use.attributes.states.statusDefault,
              styles: {
                width: '104%',
              },
              // ...nameInputProps
            }}
            inputId={SHIPPING_METHODS_ROUTE}
          />
        );
      }
    }
  }, [use.attributes.states.typeDefault, use.attributes.states.statusDefault]);

  const title1Text = isAddForm
    ? 'Nuevo metodo de envío'
    : 'Actualizar metodo de envío';
  const title2Text = isAddForm
    ? 'Agrega un nuevo metodo de envío'
    : `Actualiza la información del metodo de envío #${currentItem?.id}`;

  const optionsRoles: {
    value: string;
    label: string;
  }[] = [];

  useRoles.states.roles.data.items?.map((item) => {
    const option = {
      label: item.name,
      value: item.id.toString(),
    };
    optionsRoles.push(option);
    return null;
  });

  const optionsWorkDays: {
    value: string;
    label: string;
  }[] = [
    { label: 'Lunes', value: '1' },
    { label: 'Martes', value: '2' },
    { label: 'Miércoles', value: '3' },
    { label: 'Jueves', value: '4' },
    { label: 'Viernes', value: '5' },
    { label: 'Sábado', value: '6' },
    { label: 'Domingo', value: '7' },
  ];

  const optionsTypeStart: {
    value: string;
    label: string;
  }[] = [
    { label: 'Al instante', value: 'immediate' },
    { label: 'Personalizado', value: 'custom' },
  ];

  const getLabelByValue = (value: string) => {
    const option = optionsRoles.find((option) => option.value === value);
    return option ? option.label : 'Etiqueta no encontrada';
  };

  const add = async (): Promise<void> => {
    if (use.attributes.actions.validationButtonNext()) {
      try {
        use.pages.actions.onFetching();
        const data = await use.api.actions.add();
        if (data.success) {
          use.data.actions.handleNewItem(data.item);
          use.pages.actions.onInit();
        } else {
          use.error.actions.changeError([data.message]);
          use.pages.actions.onAdd();
        }
      } catch (error) {
        use.error.actions.changeError([`${error}`]);
        use.pages.actions.onAdd();
      }
    }
  };

  const buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  const buttonAction = isAddForm ? add : use.api.actions.update;

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

  const changeRoles = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    if (options) {
      use.attributes.actions.pushRole(options.value);
    }
  };

  const changeWorkDay = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    if (options) {
      setWorkDay(options.value);
    }
  };

  const changeTypeStart = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    if (options) {
      use.attributes.actions.setTypeStart(options.value);
    }
  };

  const handlePermissionChange = (event: ChangeEvent<HTMLInputElement>) => {
    use.attributes.actions.changeConditional(
      !use.attributes.states.conditional
    );
  };

  return (
    <ModelForm
      boxProps={{
        styles: {
          width: '100%',
          height: 'auto',
          margin: '30px auto 0px',
        },
      }}
      mainButtonProps={{
        styles: {
          fontSize: '10px',
        },
        title: buttonTitle,
      }}
      returnButtonProps={{
        styles: {
          fontSize: '10px',
          backgroundColor: '#c12429',
        },
        title: 'volver',
        buttonProps: {
          onClick: use.pages.actions.returnInit,
        },
      }}
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
      buttonNextId={SHIPPING_METHODS_ROUTE}
      {...modelFormProps}
    >
      <>
        <ContainerButton
          styles={{
            width: '100%',
          }}
          {...infoContainerProps}
        >
          <>
            <InputName
              changeName={use.attributes.actions.changeName}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.name,
                  title: 'Nombre',
                },
                styles: {
                  width: '90%',
                },
                ...nameInputProps,
              }}
              inputId={SHIPPING_METHODS_ROUTE}
            />
            <InputDescription
              changeDescription={use.attributes.actions.changeDescription}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.description,
                  title: 'Descripción',
                },
                styles: {
                  width: '90%',
                },
                // ...nameInputProps
              }}
              inputId={SHIPPING_METHODS_ROUTE}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'space-between',
          }}
          {...infoContainerProps}
        >
          <>{inputStatus}</>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            custom: `
              align-items: center;
            `,
          }}
          {...infoContainerProps}
        >
          <>
            {inputType}
            <InputCost
              changeCost={use.attributes.actions.changeCost}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.cost,
                  title: 'Precio',
                },
                styles: {
                  width: '90%',
                },
                containerStyles: {
                  custom: `
                    display: flex;
                    flex-direction: column;
                  `,
                },
              }}
              inputId={SHIPPING_METHODS_ROUTE}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            custom: `
              align-items: center;
            `,
          }}
          {...infoContainerProps}
        >
          <>
            <SelectRoles
              changeRoles={changeRoles}
              props={{
                title: 'Rol',
                options: optionsRoles,
                styles: {
                  width: '90%',
                },
              }}
            />
            <>
              <div
                style={{
                  width: '90%',
                }}
              >
                <span className={cx(regionsTitleStyles)}>Roles</span>
                <div className={cx(regionsContainerStyles)}>
                  {use.attributes.states.roles.map((item) => {
                    const label = getLabelByValue(item.toString());
                    return (
                      <div
                        key={`container-states-countries-${item}`}
                        className={cx(regionItemStyles)}
                      >
                        <div
                          key={`states-countries-${item}`}
                          className={cx(regionContainerStyles)}
                        >
                          <span
                            key={`x-states-countries-${item}`}
                            className={cx(closeButtonStyles)}
                            onClick={() =>
                              use.attributes.actions.removeRole(item)
                            }
                          >
                            x
                          </span>
                          <button
                            key={`button-states-countries-${item}`}
                            className={cx(regionButtonStyles)}
                          >
                            {label}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            custom: `
              align-items: center;
              margin: 10px 0px;
            `,
          }}
          {...infoContainerProps}
        >
          <>
            <SelectType
              changeType={changeWorkDay}
              props={{
                title: 'Día',
                options: optionsWorkDays,
                styles: {
                  width: '90%',
                },
                containerStyles: {
                  width: '70%',
                },
              }}
            />
            <Input
              inputProps={{
                type: 'number',
                min: '1',
                max: '23',
                title: 'Hora de Apertura',
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  setWorkOpenHour(event.currentTarget.value),
              }}
              containerStyles={{
                width: '50%',
                margin: '0px 10px 0px 0px',
              }}
            />
            <Input
              inputProps={{
                type: 'number',
                min: '1',
                max: '23',
                title: 'Hora de Cierre',
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  setWorkCloseHour(event.currentTarget.value),
              }}
              containerStyles={{
                width: '50%',
                margin: '0px 10px 0px 0px',
              }}
            />
            <Button
              title="Agregar"
              Class={!buttonAddValid ? 'gs-disabled' : ''}
              buttonProps={{
                onClick: addWorkDayHours,
              }}
              styles={{
                height: 'fit-content',
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
          {...infoContainerProps}
        >
          <>
            <div
              style={{
                width: '100%',
              }}
            >
              <span className={cx(regionsTitleStyles)}>Días laborales</span>
              <div className={cx(regionsContainerStyles)}>
                {workDaysHoursToArray(use.attributes.states.workDaysHours).map(
                  (item) => {
                    return (
                      <div
                        key={`container-states-countries-${item}`}
                        className={cx(regionItemStyles)}
                      >
                        <div
                          key={`states-countries-${item}`}
                          className={cx(regionContainerStyles)}
                        >
                          <span
                            key={`x-states-countries-${item}`}
                            className={cx(closeButtonStyles)}
                            onClick={() =>
                              use.attributes.actions.removeWorkDayHour(item.day)
                            }
                          >
                            x
                          </span>
                          <button
                            key={`button-states-countries-${item}`}
                            className={cx(regionButtonStyles)}
                          >
                            {item.hoursString}
                          </button>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
          {...infoContainerProps}
        >
          <>
            <Input
              inputProps={{
                type: 'number',
                min: '1',
                title: 'Tiempo de preparación',
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  use.attributes.actions.setPreparationTime(
                    event.currentTarget.value
                  ),
              }}
              containerStyles={{
                width: '30%',
                margin: '0px 10px 0px 0px',
              }}
            />
            <Input
              inputProps={{
                type: 'number',
                min: '1',
                title: 'Tiempo de recogida',
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  use.attributes.actions.setPickupTime(
                    event.currentTarget.value
                  ),
              }}
              containerStyles={{
                width: '30%',
                margin: '0px 10px 0px 0px',
              }}
            />
            <Input
              inputProps={{
                type: 'number',
                min: '1',
                max: '23',
                title: 'Tiempo de entrega',
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  use.attributes.actions.setDeliveryTime(
                    event.currentTarget.value
                  ),
              }}
              containerStyles={{
                width: '30%',
                margin: '0px 10px 0px 0px',
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            custom: `
              align-items: center;
              margin: 10px 0px;
            `,
          }}
          {...infoContainerProps}
        >
          <>
            <SelectType
              changeType={changeTypeStart}
              props={{
                title: 'Tipo de inicio',
                options: optionsTypeStart,
                styles: {
                  width: '90%',
                },
                containerStyles: {
                  width: '70%',
                },
              }}
            />
            <Input
              inputProps={{
                type: 'text',
                title: 'Valor de inicio',
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  use.attributes.actions.setValueStart(
                    event.currentTarget.value
                  ),
              }}
              containerStyles={{
                width: '90%',
                margin: '0px 10px 0px 0px',
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
        >
          <>
            <div className={css(mainContainerStyle)}>
              <div className={css(titleContainerStyle)}>
                {'¿Tiene otra condicional?'}
              </div>
              <div className={css(infoContainerStyle)}>
                <label className={css(checkBoxContainerStyle)}>
                  <input
                    type="checkbox"
                    onChange={handlePermissionChange}
                    checked={use.attributes.states.conditional}
                    className={css(checkBoxStyle)}
                  />
                  <span className={css(nameStyle)}>{'Si'}</span>
                </label>
              </div>
            </div>
          </>
        </ContainerButton>
        {use.attributes.states.conditional && (
          <ContainerButton
            styles={{
              width: '100%',
              custom: `
              align-items: center;
              margin: 10px 0px;
            `,
            }}
            {...infoContainerProps}
          >
            <>
              <SelectType
                changeType={use.attributes.actions.changeTypeConditional}
                props={{
                  title: 'Tipo de condicional',
                  options: use.attributes.states.typeConditionalOptions,
                  styles: {
                    width: '90%',
                  },
                }}
              />
              {use.attributes.states.typeConditional !== undefined && (
                <Input
                  inputProps={{
                    type: 'text',
                    title: 'Valor de la condicional',
                    onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                      use.attributes.actions.changeValueConditional(
                        event.currentTarget.value
                      ),
                  }}
                  containerStyles={{
                    width: '90%',
                    margin: '0px 10px 0px 0px',
                  }}
                />
              )}
            </>
          </ContainerButton>
        )}
      </>
    </ModelForm>
  );
};
