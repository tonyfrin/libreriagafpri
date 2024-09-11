import React, { useState } from 'react';
import { css, cx } from '@emotion/css';
import {
  ContainerButton,
  ContainerButtonPropsExtended,
} from '../../Containers';
import { ModelForm, ModelFormPropsExtended } from '../../Form';
import { InputName, InputProps, GsSelect, Input } from '../../Input';
import { Button, ButtonOptionsContainer } from '../../Button';
import type { UseGafpriShippingAreasReturn } from '../../../states';
import { ListContainer } from '../../List';
import { Modal } from '../../Modal';
import { ShippingMethods } from '../../../Components';
import { MapComponent } from '../../Map';
import { API_GOOGLE } from '../../../constants';

export type ShippingAreasFormProps = {
  use: UseGafpriShippingAreasReturn;
  formType: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  keyApi: string;
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
  keyApi,
}: ShippingAreasFormProps): JSX.Element => {
  const [type, SetType] = useState<string>('');
  const optionsType = [
    { label: 'Código Potal', value: 'postalCodes' },
    { label: 'Ciudades', value: 'cities' },
    { label: 'Estados', value: 'statesCountries' },
    { label: 'Paises', value: 'countries' },
  ];
  const key = keyApi;

  const changeType = (e: { label: string; value: string } | null) => {
    if (e) {
      SetType(e.value);
    }
  };

  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const currentItem = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.name]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.nameValid,
    use.attributes.states.postalCodes,
    use.attributes.states.cities,
    use.attributes.states.statesCountries,
    use.attributes.states.countries,
  ]);

  React.useEffect(() => {
    if (currentItem) {
      use.attributes.actions.changeName(currentItem.name);
      use.attributes.actions.setPostalCodes(currentItem.postalCodes);
      use.attributes.actions.setCities(currentItem.cities);
      use.attributes.actions.setStatesCountries(currentItem.states);
      use.attributes.actions.setCountries(currentItem.countries);
    }
  }, []);

  const title1Text = isAddForm ? 'Nueva Zona' : 'Actualizar Zona';
  const title2Text = isAddForm
    ? 'Agrega una nueva Zona de Envío'
    : `Actualiza la información de la zona #${currentItem?.id}`;

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

  const changePlace = React.useCallback(
    (
      value: {
        lat: number;
        lng: number;
        placeId: string;
        city?: string;
        state?: string;
        country?: string;
        route?: string;
        postalCode?: string;
        formattedAddress?: string;
      } | null
    ) => {
      if (value && type !== '') {
        if (type === 'postalCodes') {
          use.attributes.actions.changePostalCode(
            value.postalCode || '',
            value.city || '',
            value.state || '',
            value.country || ''
          );
        } else if (type === 'cities') {
          use.attributes.actions.changeCities(
            value.city || '',
            value.state || '',
            value.country || ''
          );
        } else if (type === 'statesCountries') {
          use.attributes.actions.changeStateCountry(
            value.state || '',
            value.country || ''
          );
        } else if (type === 'countries') {
          use.attributes.actions.changeCountry(value.country || '');
        }
      }
    },
    [type] // Aseguramos que changePlace se actualice cuando cambie 'type' o 'actions'
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
      buttonNextId="shipping-form"
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
        {!type && key !== undefined ? (
          <ContainerButton
            styles={{
              width: '96.5%',
            }}
            {...infoContainerProps}
          >
            <>
              <GsSelect
                options={optionsType}
                onChange={(e) => changeType(e)}
                placeholder="Selecciona el tipo de Zona"
                title="Tipo de Zona"
              />
            </>
          </ContainerButton>
        ) : (
          <ContainerButton
            styles={{
              width: '96.5%',
            }}
            {...infoContainerProps}
          >
            <Input
              inputProps={{
                readOnly: true,
                value: type,
              }}
            />
          </ContainerButton>
        )}
        {type !== '' && key !== undefined && (
          <MapComponent setPlace={changePlace} keyApi={key} />
        )}

        <ContainerButton
          styles={{
            width: '96.5%',
            custom: `
              flex-direction: column;
              align-items: center;
              margin-bottom: 15px;
            `,
          }}
          {...infoContainerProps}
        >
          <>
            <span className={cx(regionsTitleStyles)}>Códigos postales</span>
            <div className={cx(regionsContainerStyles)}>
              {use.attributes.states.postalCodes.map((item) => {
                return (
                  <div
                    key={`container-postal-code-${item}`}
                    className={cx(regionItemStyles)}
                  >
                    <div
                      key={`postal-code-${item}`}
                      className={cx(regionContainerStyles)}
                    >
                      <span
                        key={`x-${item}`}
                        className={cx(closeButtonStyles)}
                        onClick={() =>
                          use.attributes.actions.removePostalCode(item)
                        }
                      >
                        x
                      </span>
                      <button
                        key={`button-${item}`}
                        className={cx(regionButtonStyles)}
                      >
                        {item}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
            custom: `
              flex-direction: column;
              align-items: center;
              margin-bottom: 15px;
            `,
          }}
          {...infoContainerProps}
        >
          <>
            <span className={cx(regionsTitleStyles)}>Ciudades</span>
            <div className={cx(regionsContainerStyles)}>
              {use.attributes.states.cities.map((item) => {
                return (
                  <div
                    key={`container-cities-${item}`}
                    className={cx(regionItemStyles)}
                  >
                    <div
                      key={`cities-${item}`}
                      className={cx(regionContainerStyles)}
                    >
                      <span
                        key={`x-cities-${item}`}
                        className={cx(closeButtonStyles)}
                        onClick={() =>
                          use.attributes.actions.removeCities(item)
                        }
                      >
                        x
                      </span>
                      <button
                        key={`button-cities-${item}`}
                        className={cx(regionButtonStyles)}
                      >
                        {item}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
            custom: `
              flex-direction: column;
              align-items: center;
              margin-bottom: 15px;
            `,
          }}
          {...infoContainerProps}
        >
          <>
            <span className={cx(regionsTitleStyles)}>Estados</span>
            <div className={cx(regionsContainerStyles)}>
              {use.attributes.states.statesCountries.map((item) => {
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
                          use.attributes.actions.removeStatesCountries(item)
                        }
                      >
                        x
                      </span>
                      <button
                        key={`button-states-countries-${item}`}
                        className={cx(regionButtonStyles)}
                      >
                        {item}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
            custom: `
              flex-direction: column;
              align-items: center;
              margin-bottom: 15px;
            `,
          }}
          {...infoContainerProps}
        >
          <>
            <span className={cx(regionsTitleStyles)}>Paises</span>
            <div className={cx(regionsContainerStyles)}>
              {use.attributes.states.countries.map((item) => {
                return (
                  <div
                    key={`container-countries-${item}`}
                    className={cx(regionItemStyles)}
                  >
                    <div
                      key={`countries-${item}`}
                      className={cx(regionContainerStyles)}
                    >
                      <span
                        key={`x-countries-${item}`}
                        className={cx(closeButtonStyles)}
                        onClick={() =>
                          use.attributes.actions.removeCountries(item)
                        }
                      >
                        x
                      </span>
                      <button
                        key={`button-countries-${item}`}
                        className={cx(regionButtonStyles)}
                      >
                        {item}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
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
