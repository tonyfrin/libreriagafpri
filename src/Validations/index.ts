import {
  validationInput,
  removeClass,
  addClass,
  validationHidden,
} from '../helpers';
import { ALERT } from '../constants';

export type ValidationInput = {
  value: string;
  currentValid: boolean;
  inputId: string;
  setValid: (value: boolean) => void;
  required?: boolean;
};

export type ValidationInputNumbersProps = {
  value: string | number;
  currentValid: boolean;
  inputId: string;
  setValid: (value: boolean) => void;
  required?: boolean;
};

export interface GeneralAttribute {
  name: string;
  value: string;
}

export type ValidationGeneralAttributesProps = {
  value: GeneralAttribute[];
  currentValid: boolean;
  inputId: string;
  setValid: (value: boolean) => void;
  required?: boolean;
};

export type ValidationGeneralLinkProps = {
  value: string;
  currentValid: boolean;
  inputId: string;
  setValid: (value: boolean) => void;
  required?: boolean;
};

export type ValidationStringArrayProps = {
  value: string[];
  currentValid: boolean;
  inputId: string;
  setValid: (value: boolean) => void;
  required?: boolean;
};

export const validationInputNameLastNameUserName = ({
  value,
  currentValid,
  inputId,
  setValid,
  required = true,
}: ValidationInput): boolean => {
  const valid = validationInput(
    value,
    /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,./&'@"*:;<>+=\s]+$/,
    inputId,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const validationInputPassword = ({
  value,
  inputId,
  setValid,
  currentValid,
  required = true,
}: ValidationInput): boolean => {
  const valid = validationInput(
    value,
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    inputId,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const validationInputSinglePassword = ({
  value,
  inputId,
  setValid,
  required = true,
}: ValidationInput): boolean => {
  const valid = validationInput(value, /^.+$/, inputId, required);
  setValid(valid);
  return valid;
};

export const validationInputDescription = ({
  value,
  inputId,
  setValid,
  currentValid,
  required = true,
}: ValidationInput): boolean => {
  const valid = validationInput(value, /^[\s\S]*$/, inputId, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const validationInputAddress = ({
  value,
  currentValid,
  inputId,
  setValid,
  required = true,
}: ValidationInput): boolean => {
  const valid = validationInput(
    value,
    /^[a-zA-Z0-9#]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/,
    inputId,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const validationInputSku = ({
  value,
  inputId,
  currentValid,
  setValid,
  required = true,
}: ValidationInput): boolean => {
  const valid = validationInput(value, /^[\d-]+$/, inputId, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const validationPhoto = ({
  value,
  inputId,
  currentValid,
  setValid,
  required = true,
}: ValidationInput): boolean => {
  const valid = validationInput(
    value,
    /^(?:(?:[a-z][a-z0-9+-.]*):\/\/)?(?:[a-z0-9_-]+(?::[a-z0-9_-]+)*@)?(?:[a-z0-9.-]+|(?:\[[a-f0-9:.]+\]))(?::\d+)?(?:\/[^\s#?]*(?:\?[^\s#?]*)?(?:#[^\s#?]*)?)?$/i,
    inputId,
    required
  );
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const validationInputArray = (
  values: string[],
  match: RegExp,
  componentId: string,
  required = false
): boolean => {
  let allValid = true;

  values.forEach((value) => {
    const isValid = value && validationHidden(value, match);

    if (required && !isValid) {
      allValid = false;
    }

    if (!required && value && !isValid) {
      allValid = false;
    }
  });

  if (allValid) {
    removeClass(componentId, ALERT);
  } else {
    addClass(componentId, ALERT);
  }

  return allValid;
};

export const validatePositiveNumber = (
  value: string | number,
  inputId: string,
  required = false
): boolean => {
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;
  const isNumber =
    typeof numericValue === 'number' && !Number.isNaN(numericValue);
  const isPositive = isNumber ? numericValue >= 0 : false;

  if (
    required &&
    (!isPositive || value === '' || value === null || value === undefined)
  ) {
    addClass(inputId, ALERT);
    return false;
  }

  if (value !== '' && isPositive) {
    removeClass(inputId, ALERT);
    return true;
  }

  if (!required && (value === '' || value === null || value === undefined)) {
    removeClass(inputId, ALERT);
    return true;
  }

  addClass(inputId, ALERT);
  return false;
};

export const validationInputNumbers = ({
  value,
  currentValid,
  inputId,
  setValid,
  required = true,
}: ValidationInputNumbersProps): boolean => {
  const valid = validatePositiveNumber(value, inputId, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export const validateNumberWithValue = (
  value: string | number,
  inputId: string,
  required = false
): boolean => {
  const numericValue = typeof value === 'string' ? parseInt(value, 10) : value;
  const isNumber =
    typeof numericValue === 'number' && !Number.isNaN(numericValue);
  const isPositive = isNumber ? numericValue > 0 : false;

  if (
    required &&
    (!isPositive || value === '' || value === null || value === undefined)
  ) {
    addClass(inputId, ALERT);
    return false;
  }

  if (value !== '' && isPositive) {
    removeClass(inputId, ALERT);
    return true;
  }

  if (!required && (value === '' || value === null || value === undefined)) {
    removeClass(inputId, ALERT);
    return true;
  }

  addClass(inputId, ALERT);
  return false;
};

export const validationInputNumbersWithValue = ({
  value,
  currentValid,
  inputId,
  setValid,
  required = true,
}: ValidationInputNumbersProps): boolean => {
  const valid = validateNumberWithValue(value, inputId, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export function validateGeneralAttributes(
  obj: GeneralAttribute[],
  inputId: string,
  required = false
): boolean {
  if (required && (!obj || !Array.isArray(obj))) {
    addClass(inputId, ALERT);
    return false;
  }

  if (obj && obj.length) {
    /* eslint-disable no-plusplus */
    for (let i = 0; i < obj.length; i++) {
      const attribute = obj[i];
      if (
        !attribute ||
        typeof attribute !== 'object' ||
        !('name' in attribute) ||
        !('value' in attribute)
      ) {
        addClass(inputId, ALERT);
        return false;
      }
    }
  }

  removeClass(inputId, ALERT);
  return true;
}

export const validationGeneralAttributes = ({
  value,
  currentValid,
  inputId,
  setValid,
  required = false,
}: ValidationGeneralAttributesProps): boolean => {
  const valid = validateGeneralAttributes(value, inputId, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export function incorrectLinkDetector(
  value: string | undefined,
  inputId: string,
  required = false
): boolean {
  // Expresión regular que busca caracteres especiales
  const regexCaracteresEspeciales = /[!#$%^&*()+{}[\]:;<>,?~\\/]/;

  // Expresión regular que busca letras mayúsculas, minúsculas con tildes
  const regexLetrasConTildes = /[A-ZÁÉÍÓÚÜáéíóúü]/;

  if (
    (required &&
      (!value ||
        regexCaracteresEspeciales.test(value) ||
        regexLetrasConTildes.test(value))) ||
    (!required &&
      value &&
      (regexCaracteresEspeciales.test(value) ||
        regexLetrasConTildes.test(value)))
  ) {
    addClass(inputId, ALERT);
    return false;
  }

  removeClass(inputId, ALERT);
  return true;
}

export const validationLink = ({
  value,
  currentValid,
  inputId,
  setValid,
  required = false,
}: ValidationGeneralLinkProps): boolean => {
  const valid = incorrectLinkDetector(value, inputId, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export function validateStringArray(
  arr: string[],
  inputId: string,
  required = false
): boolean {
  if ((required && (!arr || !Array.isArray(arr))) || arr.length === 0) {
    addClass(inputId, ALERT);
    return false;
  }

  if (arr && !arr.every((value) => typeof value === 'string')) {
    addClass(inputId, ALERT);
    return false;
  }

  removeClass(inputId, ALERT);
  return true;
}

export const validationStringArray = ({
  value,
  currentValid,
  inputId,
  setValid,
  required = false,
}: ValidationStringArrayProps): boolean => {
  const valid = validateStringArray(value, inputId, required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};

export { generalValidationDescription } from './generalValidationDescription';
export type { GeneralValidationDescriptionProps } from './generalValidationDescription';
export { generalValidationName } from './generalValidationName';
export type { GeneralValidationNameProps } from './generalValidationName';
export { generalValidationLastName } from './generalValidationLastName';
export type { GeneralValidationLastNameProps } from './generalValidationLastName';
export { generalValidationUserName } from './generalValidationUserName';
export type { GeneralValidationUserNameProps } from './generalValidationUserName';
export { generalValidationPassword } from './generalValidationPassword';
export type { GeneralValidationPasswordProps } from './generalValidationPassword';
export { generalValidationSinglePassword } from './generalValidationSinglePassword';
export type { GeneralValidationSinglePasswordProps } from './generalValidationSinglePassword';
export { generalValidationButtonNext } from './generalValidationButtonNext';
export type { GeneralValidationButtonNextProps } from './generalValidationButtonNext';
export { generalValidationAddress1 } from './generalValidationAddress1';
export type { GeneralValidationAddress1Props } from './generalValidationAddress1';
export { generalValidationAddress2 } from './generalValidationAddress2';
export type { GeneralValidationAddress2Props } from './generalValidationAddress2';
export { generalValidationAddressType } from './generalValidationAddressType';
export type { GeneralValidationAddressTypeProps } from './generalValidationAddressType';
export { generalValidationSelectCity } from './generalValidationSelectCity';
export type { GeneralValidationSelectCityProps } from './generalValidationSelectCity';
export { generalValidationSelectStateCountry } from './generalValidationSelectStateCountry';
export type { GeneralValidationSelectStateCountryProps } from './generalValidationSelectStateCountry';
export { generalValidationSelectCountry } from './generalValidationSelectCountry';
export type { GeneralValidationSelectCountryProps } from './generalValidationSelectCountry';
export { generalValidationPostCode } from './generalValidationPostCode';
export type { GeneralValidationPostCodeProps } from './generalValidationPostCode';
export { generalValidationSelectSite } from './generalValidationSelectSite';
export type { GeneralValidationSelectSiteProps } from './generalValidationSelectSite';
export { generalValidationSku } from './generalValidationSku';
export type { GeneralValidationSkuProps } from './generalValidationSku';
export { generalValidationPhotoCategory } from './generalValidationPhotoCategory';
export type { GeneralValidationPhotoCategoryProps } from './generalValidationPhotoCategory';
export { generalValidationPhotoEntity } from './generalValidationPhotoEntity';
export type { GeneralValidationPhotoEntityProps } from './generalValidationPhotoEntity';
export { generalValidationPhotoDocumentId } from './generalValidationPhotoDocumentId';
export type { GeneralValidationPhotoDocumentIdProps } from './generalValidationPhotoDocumentId';
export { generalValidationGalleryImage } from './generalValidationGalleryImage';
export type { GeneralValidationGalleryImageProps } from './generalValidationGalleryImage';
export { generalValidationParentId } from './generalValidationParentId';
export type { GeneralValidationParentIdProps } from './generalValidationParentId';
export { generalValidationStatus } from './generalValidationStatus';
export type { GeneralValidationStatusProps } from './generalValidationStatus';
export { generalValidationCurrenciesSymbol } from './generalValidationCurrenciesSymbol';
export type { GeneralValidationCurrenciesSymbolProps } from './generalValidationCurrenciesSymbol';
export { generalValidationTypeDocumentIdId } from './generalValidationTypeDocumentIdId';
export type { GeneralValidationTypeDocumentIdIdProps } from './generalValidationTypeDocumentIdId';
export { generalValidationTypeDocumentIdIndex } from './generalValidationTypeDocumentIdIndex';
export type { GeneralValidationTypeDocumentIdIndexProps } from './generalValidationTypeDocumentIdIndex';
export { generalValidationTypeDocumentIdDigit } from './generalValidationTypeDocumentIdDigit';
export type { GeneralValidationTypeDocumentIdDigitProps } from './generalValidationTypeDocumentIdDigit';
export { generalValidationEmail } from './generalValidationEmail';
export type { GeneralValidationEmailProps } from './generalValidationEmail';
export { generalValidationPhone } from './generalValidationPhone';
export type { GeneralValidationPhoneProps } from './generalValidationPhone';
export { generalValidationType } from './generalValidationType';
export type { GeneralValidationTypeProps } from './generalValidationType';
export { generalValidationSelectCurrencies } from './generalValidationSelectCurrencies';
export type { GeneralValidationSelectCurrenciesProps } from './generalValidationSelectCurrencies';
export { generalValidationSelectCurrenciesLocations } from './generalValidationSelectCurrenciesLocations';
export type { GeneralValidationSelectCurrenciesLocationsProps } from './generalValidationSelectCurrenciesLocations';
export { generalValidationSelectCurrenciesSeparator } from './generalValidationSelectCurrenciesSeparator';
export type { GeneralValidationSelectCurrenciesSeparatorProps } from './generalValidationSelectCurrenciesSeparator';
export { generalValidationSelectCurrenciesDecimalNumbers } from './generalValidationSelectCurrenciesDecimalNumbers';
export type { GeneralValidationSelectCurrenciesDecimalNumbersProps } from './generalValidationSelectCurrenciesDecimalNumbers';
export { generalValidationSelectTaxes } from './generalValidationSelectTaxes';
export type { GeneralValidationSelectTaxesProps } from './generalValidationSelectTaxes';
export { generalValidationWebSite } from './generalValidationWebSite';
export type { GeneralValidationWebSiteProps } from './generalValidationWebSite';
export { generalValidationAreaCode } from './generalValidationAreaCode';
export type { GeneralValidationAreaCodeProps } from './generalValidationAreaCode';
export { generalValidationRoles } from './generalValidationRoles';
export type { GeneralValidationRolesProps } from './generalValidationRoles';
export { generalValidationPhotoUsers } from './generalValidationPhotoUsers';
export type { GeneralValidationPhotoUsersProps } from './generalValidationPhotoUsers';
export { generalValidationNote } from './generalValidationNote';
export type { GeneralValidationNoteProps } from './generalValidationNote';
export { generalValidationPublicName } from './generalValidationPublicName';
export type { GeneralValidationPublicNameProps } from './generalValidationPublicName';
export { generalValidationSalesPrice } from './generalValidationSalesPrice';
export type { GeneralValidationSalesPriceProps } from './generalValidationSalesPrice';
export { generalValidationOfferPrice } from './generalValidationOfferPrice';
export type { GeneralValidationOfferPriceProps } from './generalValidationOfferPrice';
export { generalValidationCost } from './generalValidationCost';
export type { GeneralValidationCostProps } from './generalValidationCost';
export { generalValidationTaxStatus } from './generalValidationTaxStatus';
export type { GeneralValidationTaxStatusProps } from './generalValidationTaxStatus';
export { generalValidationTaxClass } from './generalValidationTaxClass';
export type { GeneralValidationTaxClassProps } from './generalValidationTaxClass';
export { generalValidationCategoryId } from './generalValidationCategoryId';
export type { GeneralValidationCategoryIdProps } from './generalValidationCategoryId';
export { generalValidationPackageType } from './generalValidationPackageType';
export type { GeneralValidationPackageTypeProps } from './generalValidationPackageType';
export { generalValidationQtyPack } from './generalValidationQtyPack';
export type { GeneralValidationQtyPackProps } from './generalValidationQtyPack';
export { generalValidationUndCbm } from './generalValidationUndCbm';
export type { GeneralValidationUndCbmProps } from './generalValidationUndCbm';
export { generalValidationProductAttributes } from './generalValidationProductAttributes';
export type { GeneralValidationProductAttributesProps } from './generalValidationProductAttributes';
export { generalValidationPermanentLink } from './generalValidationPermanentLink';
export type { GeneralValidationPermanentLinkProps } from './generalValidationPermanentLink';
export { generalValidationVisibility } from './generalValidationVisibility';
export type { GeneralValidationVisibilityProps } from './generalValidationVisibility';
export { generalValidationHeight } from './generalValidationHeight';
export type { GeneralValidationHeightProps } from './generalValidationHeight';
export { generalValidationWeight } from './generalValidationWeight';
export type { GeneralValidationWeightProps } from './generalValidationWeight';
export { generalValidationWidth } from './generalValidationWidth';
export type { GeneralValidationWidthProps } from './generalValidationWidth';
export { generalValidationLength } from './generalValidationLength';
export type { GeneralValidationLengthProps } from './generalValidationLength';
export { generalValidationCatalogOrder } from './generalValidationCatalogOrder';
export type { GeneralValidationCatalogOrderProps } from './generalValidationCatalogOrder';
export { generalValidationTags } from './generalValidationTags';
export type { GeneralValidationTagsProps } from './generalValidationTags';
export { generalValidationPhoto } from './generalValidationPhoto';
export type { GeneralValidationPhotoProps } from './generalValidationPhoto';
export { generalValidationRegion } from './generalValidationRegion';
export type { GeneralValidationRegionProps } from './generalValidationRegion';
export { generalValidationTaxClassesId } from './generalValidationTaxClassesId';
export type { GeneralValidationTaxClassesIdProps } from './generalValidationTaxClassesId';
export { generalValidationRate } from './generalValidationRate';
export type { GeneralValidationRateProps } from './generalValidationRate';
export { generalValidationCustomerId } from './generalValidationCustomerId';
export type { GeneralValidationCustomerIdProps } from './generalValidationCustomerId';
export { generalValidationReferredId } from './generalValidationReferredId';
export type { GeneralValidationReferredIdProps } from './generalValidationReferredId';
export { generalValidationShippingAreasId } from './generalValidationShippingAreasId';
export type { GeneralValidationShippingAreasIdProps } from './generalValidationShippingAreasId';
export { generalValidationShippingTimeDays } from './generalValidationShippingTimeDays';
export type { GeneralValidationShippingTimeDaysProps } from './generalValidationShippingTimeDays';
export { generalValidationAvailableShippingServices } from './generalValidationAvailableShippingServices';
export type { GeneralValidationAvailableShippingServicesProps } from './generalValidationAvailableShippingServices';
export { generalValidationSupplierId } from './generalValidationSupplierId';
export type { GeneralValidationSupplierIdProps } from './generalValidationSupplierId';
export { generalValidationExpensesTypeId } from './generalValidationExpensesTypeId';
export type { GeneralValidationExpensesTypeIdProps } from './generalValidationExpensesTypeId';
export { generalValidationProjectsId } from './generalValidationProjectsId';
export type { GeneralValidationProjectsIdProps } from './generalValidationProjectsId';
export { generalValidationCashRegisterType } from './generalValidationCashRegisterType';
export type { GeneralValidationCashRegisterTypeProps } from './generalValidationCashRegisterType';
export { generalValidationBankName } from './generalValidationBankName';
export type { GeneralValidationBankNameProps } from './generalValidationBankName';
export { generalValidationAccountNumber } from './generalValidationAccountNumber';
export type { GeneralValidationAccountNumberProps } from './generalValidationAccountNumber';
export { generalValidationSelectAccountType } from './generalValidationSelectAccountType';
export type { GeneralValidationSelectAccountTypeProps } from './generalValidationSelectAccountType';
export { generalValidationBankSettings } from './generalValidationBankSettings';
export type { GeneralValidationBankSettingsProps } from './generalValidationBankSettings';
export { generalValidationBankType } from './generalValidationBankType';
export type { GeneralValidationBankTypeProps } from './generalValidationBankType';
export { generalValidationCreditLimit } from './generalValidationCreditLimit';
export type { GeneralValidationCreditLimitProps } from './generalValidationCreditLimit';
export { generalValidationCreditTimeToPay } from './generalValidationCreditTimeToPay';
export type { GeneralValidationCreditTimeToPayProps } from './generalValidationCreditTimeToPay';
