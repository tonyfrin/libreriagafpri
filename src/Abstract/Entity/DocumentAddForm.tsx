import React from 'react';
import { css } from '@emotion/css';
import {
  SelectTypeDocumentIdId,
  SelectDocumentIdIndex,
  InputDocumentiIdDigit,
} from '../Input';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { ModelForm, PhotoDocumentId } from '../Form';
import type { ModelFormPropsExtended, PhotoDocumentIdProps } from '../Form';
import type { UseGafpriEntityReturn } from '../../states';

export type DocumentAddFormProps = {
  use: UseGafpriEntityReturn;
  photoMainContainerStyle?: string;
  photoInfoContainerStyle?: string;
  nameLastNameContainerStyle?: string;
  inputTypeDocumentIdIdProps?: GsSelectPropsExtended;
  inputIndexProps?: GsSelectPropsExtended;
  mainTitle?: string;
  subTitle?: string;
  modelFormProps?: ModelFormPropsExtended;
  inputDigitProps?: InputProps;
  propsPhoto?: PhotoDocumentIdProps['props'];
};

export type DocumentAddFormPropsExtended = {
  use: UseGafpriEntityReturn;
  photoMainContainerStyle?: string;
  photoInfoContainerStyle?: string;
  nameLastNameContainerStyle?: string;
  inputTypeDocumentIdIdProps?: GsSelectPropsExtended;
  inputIndexProps?: GsSelectPropsExtended;
  mainTitle?: string;
  subTitle?: string;
  modelFormProps?: ModelFormPropsExtended;
  inputDigitProps?: InputProps;
  propsPhoto?: PhotoDocumentIdProps['props'];
};

const photoInfoContainerStyleDefault = css`
  width: 100%;
`;

const photoMainContainerStyleDefault = css`
  display: flex;
  justify-content: space-between;
`;

const nameLastNameContainerStyleDefault = css`
  width: 100%;
`;

export const DocumentAddForm = ({
  use,
  photoMainContainerStyle = photoMainContainerStyleDefault,
  photoInfoContainerStyle = photoInfoContainerStyleDefault,
  nameLastNameContainerStyle = nameLastNameContainerStyleDefault,
  inputTypeDocumentIdIdProps,
  inputIndexProps,
  mainTitle = 'Nuevo documento',
  subTitle = 'Agrega un nuevo documento de identificación',
  modelFormProps,
  inputDigitProps,
  propsPhoto,
}: DocumentAddFormProps): JSX.Element => {
  const [InputTypeDocumentIdId, setInputTypeDocumentIdId] = React.useState(
    <></>
  );
  const [InputIndex, setInputIndex] = React.useState(<></>);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    use.attributes.actions.validationDocumentPhoto(
      use.attributes.states.documentPhoto
    );
    const typeDocumentIdId =
      use.attributes.states.typeDocumentIdId === null
        ? ''
        : `${use.attributes.states.typeDocumentIdId}`;
    use.attributes.actions.validationTypeDocumentIdId(typeDocumentIdId);
    use.attributes.actions.validationIndex(use.attributes.states.index);
    use.attributes.actions.validationDigit(use.attributes.states.digit);
  }, [
    use.attributes.states.documentPhoto,
    use.attributes.states.typeDocumentIdId,
    InputTypeDocumentIdId,
    use.attributes.states.index,
    InputIndex,
    use.attributes.states.digit,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNextDocument();
  }, [
    use.attributes.states.documentPhotoValid,
    use.attributes.states.typeDocumentIdIdValid,
    use.attributes.states.indexValid,
    use.attributes.states.digitValid,
  ]);

  const buttonTitle = 'Agregar';

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        use.api.actions.addDocument();
        break;
      case 'return':
        use.pages.actions.goUpdate(use.attributes.states.currentId);
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  React.useEffect(() => {
    setInputTypeDocumentIdId((): JSX.Element => {
      return (
        <SelectTypeDocumentIdId
          changeTypeDocumentIdId={use.attributes.actions.changeTypeDocumentIdId}
          props={{
            options: use.attributes.states.typeDocumentIdIdOptions,
            defaultValue: use.attributes.states.typeDocumentIdIdDefault,
            styles: {
              width: '92%',
            },
            ...inputTypeDocumentIdIdProps,
          }}
        />
      );
    });

    setInputIndex((): JSX.Element => {
      return (
        <SelectDocumentIdIndex
          changeIndex={use.attributes.actions.changeIndex}
          props={{
            options: use.attributes.states.indexOptions,
            defaultValue: use.attributes.states.indexDefault,
            styles: {
              width: '92%',
            },
            ...inputIndexProps,
          }}
        />
      );
    });
  }, []);

  return (
    <ModelForm
      titles={{
        title1: mainTitle,
        title2: subTitle,
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
        <div className={css(photoMainContainerStyle)}>
          <div className={css(photoInfoContainerStyle)}>
            <PhotoDocumentId
              photo={use.attributes.states.documentPhoto}
              changePhoto={use.attributes.actions.changeDocumentPhoto}
              submitting={use.attributes.states.submitting}
              changeError={use.error.actions.changeError}
              setSubmitting={use.attributes.actions.setSubmitting}
              props={propsPhoto}
            />
          </div>
          <div className={css(nameLastNameContainerStyle)}>
            <>
              {InputTypeDocumentIdId}
              {InputIndex}
              <InputDocumentiIdDigit
                changeDocumentiIdDigit={(event) =>
                  use.attributes.actions.changeDigit(event)
                }
                props={{
                  inputProps: {
                    defaultValue: use.attributes.states.digit,
                  },
                  styles: {
                    width: '92%',
                    padding: '09px 19px',
                  },
                  ...inputDigitProps,
                }}
              />
            </>
          </div>
        </div>
      </>
    </ModelForm>
  );
};
