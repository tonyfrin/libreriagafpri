import React from 'react';
import { css } from '@emotion/css';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import { PhotoProduct } from '../Form';
import { UseGafpriProductsReturn } from '../../states';
import {
  InputPublicName,
  InputName,
  SelectStatus,
  InputPermanentLink,
  ParagraphDescription,
  SelectVisibility,
  SelectType,
} from '../Input';

export type GeneralFormProps = {
  use: UseGafpriProductsReturn;
  formType: 'add' | 'update';
};

export type GeneralFormExtended = {
  use?: UseGafpriProductsReturn;
  formType?: 'add' | 'update';
};

const defaultFormContainerStyle = css`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const defaultImageContainerStyle = css`
  width: 50%;
`;

const defaultTitleContainerStyle = css`
  width: 50%;
`;

export const GeneralForm = ({
  use,
  formType,
}: GeneralFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';
  const [InputStatus, setInputStatus] = React.useState(<></>);
  const [InputVisibility, setInputVisibility] = React.useState(<></>);
  const [InputType, setInputType] = React.useState(<></>);

  const current = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationStatus(use.attributes.states.status);
    use.attributes.actions.validationVisibility(
      use.attributes.states.visibility
    );
    use.attributes.actions.validationType(use.attributes.states.type);
  }, [
    use.attributes.states.name,
    use.attributes.states.status,
    use.attributes.states.visibility,
    use.attributes.states.type,
    InputStatus,
    InputVisibility,
    InputType,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.nameValid,
    use.attributes.states.statusValid,
    use.attributes.states.visibilityValid,
    use.attributes.states.typeValid,
  ]);

  React.useEffect(() => {
    if (current) {
      use.attributes.actions.setUploadCurrent(false);
      if (current.name) use.attributes.actions.changeName(current.name);
      if (current.publicName)
        use.attributes.actions.changePublicName(current.publicName);
      if (current.image) use.attributes.actions.setPhoto(current.image);
      if (current.posts.permanentLink)
        use.attributes.actions.changeLink(current.posts.permanentLink);
      if (current.description)
        use.attributes.actions.changeDescription(current.description);
      if (current.posts.status) {
        const status = use.attributes.actions.getStatusOptionByValue(
          current.posts.status
        );
        if (status) use.attributes.actions.changeStatus(status);
      }
      if (current.posts.visibility) {
        const visibility = use.attributes.actions.getVisibilityOptionByValue(
          current.posts.visibility
        );
        if (visibility) use.attributes.actions.changeVisibility(visibility);
      }
      use.attributes.actions.setUploadCurrent(true);
    }
  }, [current]);

  React.useEffect(() => {
    if (isAddForm) {
      setInputStatus((): JSX.Element => {
        return (
          <SelectStatus
            changeStatus={(e) => use.attributes.actions.changeStatus(e)}
            props={{
              options: use.attributes.states.statusOptions,
              defaultValue: use.attributes.states.statusDefault,
              styles: {
                width: '100%',
              },
              title: 'Estado',
            }}
          />
        );
      });

      setInputVisibility((): JSX.Element => {
        return (
          <SelectVisibility
            change={(e) => use.attributes.actions.changeVisibility(e)}
            props={{
              options: use.attributes.states.visibilityOptions,
              defaultValue: use.attributes.states.visibilityDefault,
              styles: {
                width: '100%',
              },
              title: 'Estado',
            }}
          />
        );
      });
    }

    setInputType((): JSX.Element => {
      return (
        <SelectType
          changeType={(e) => use.attributes.actions.changeType(e)}
          props={{
            options: use.attributes.states.typeOptions,
            defaultValue: use.attributes.states.typeDefault,
            styles: {
              width: '100%',
            },
            title: 'Tipo',
          }}
        />
      );
    });
  }, []);

  React.useEffect(() => {
    if (isUpdateForm && current && use.attributes.states.uploadCurrent) {
      setInputStatus((): JSX.Element => {
        return (
          <SelectStatus
            changeStatus={(e) => use.attributes.actions.changeStatus(e)}
            props={{
              options: use.attributes.states.statusOptions,
              defaultValue: use.attributes.states.statusDefault,
              styles: {
                width: '100%',
              },
              title: 'Estado',
            }}
          />
        );
      });

      setInputVisibility((): JSX.Element => {
        return (
          <SelectVisibility
            change={(e) => use.attributes.actions.changeVisibility(e)}
            props={{
              options: use.attributes.states.visibilityOptions,
              defaultValue: use.attributes.states.visibilityDefault,
              styles: {
                width: '100%',
              },
              title: 'Estado',
            }}
          />
        );
      });
    }
  }, [current, use.attributes.states.uploadCurrent]);

  const title1Text = isAddForm ? 'General' : 'Actualización General';
  const title2Text = isAddForm ? '' : '';

  const buttonTitle = 'Siguiente';
  const buttonAction = use.subPages.actions.onPrice;

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

  return (
    <ModelForm
      boxProps={{
        styles: {
          width: '90%',
          padding: '0',
          margin: '0',
        },
      }}
      childrenContainerProps={{
        styles: {
          width: '100%',
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
    >
      <>
        <div className={css(defaultFormContainerStyle)}>
          <div className={css(defaultImageContainerStyle)}>
            <PhotoProduct
              photo={use.attributes.states.photo}
              changePhoto={use.attributes.actions.changePhoto}
              changeError={use.error.actions.changeError}
              submitting={use.attributes.states.submitting}
              setSubmitting={use.attributes.actions.setSubmitting}
            />
          </div>
          <div className={css(defaultTitleContainerStyle)}>
            <ContainerButton
              styles={{
                width: '100%',
                justifyContent: 'end',
              }}
            >
              <>
                <InputName
                  changeName={use.attributes.actions.changeName}
                  props={{
                    inputProps: {
                      title: 'Nombre',
                      defaultValue: use.attributes.states.name,
                    },
                    styles: {
                      width: '100%',
                      padding: '10px 19px',
                    },
                  }}
                />
              </>
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
                justifyContent: 'end',
              }}
            >
              <>
                <InputPublicName
                  change={use.attributes.actions.changePublicName}
                  props={{
                    inputProps: {
                      defaultValue: use.attributes.states.publicName,
                    },
                    styles: {
                      width: '100%',
                      padding: '10px 19px',
                    },
                  }}
                />
              </>
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
                justifyContent: 'end',
              }}
            >
              <>
                <InputPermanentLink
                  change={use.attributes.actions.changeLink}
                  props={{
                    inputProps: {
                      defaultValue: use.attributes.states.permanentLink,
                    },
                    styles: {
                      width: '100%',
                      padding: '10px 19px',
                    },
                  }}
                />
              </>
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
                justifyContent: 'end',
              }}
            >
              <>{InputStatus}</>
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
                justifyContent: 'end',
              }}
            >
              <>{InputVisibility}</>
            </ContainerButton>
          </div>
        </div>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'end',
          }}
        >
          <>
            <ParagraphDescription
              changeDescription={use.attributes.actions.changeDescription}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.description,
                },
                styles: {
                  width: '90%',
                  padding: '10px 19px',
                  height: '200px',
                },
              }}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
