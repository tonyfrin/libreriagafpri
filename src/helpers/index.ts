/* eslint-disable object-shorthand */
import { SingleValue } from 'react-select';
import { ALERT, API_URL } from '../constants';
import { GeneralAttribute } from '../Validations';

export type SelectDefault = {
  value: string;
  label: string;
};

export const addClass = (element: string, className: string): void => {
  const input = document.getElementById(element);

  if (input && input.classList && !input.classList.contains(className)) {
    input.classList.add(className);
  }
};

export const removeClass = (element: string, className: string): void => {
  const input = document.getElementById(element);

  if (input && input.classList && input.classList.contains(className)) {
    input.classList.remove(className);
  }
};

export const validationSelect = (
  value: string,
  componentId: string
): boolean => {
  if (value === '') {
    addClass(componentId, ALERT);
    return false;
  }

  removeClass(componentId, ALERT);
  return true;
};

export function validationHidden(value: string, validate: RegExp): boolean {
  return validate.test(value);
}

export const validationInput = (
  value: string,
  match: RegExp,
  componentId: string,
  required = false
): boolean => {
  const valid = validationHidden(value, match);

  if (required && (!valid || !value)) {
    addClass(componentId, ALERT);
    return false;
  }

  if (value && valid) {
    removeClass(componentId, ALERT);
    return true;
  }

  if (!required && !value) {
    removeClass(componentId, ALERT);
    return true;
  }

  addClass(componentId, ALERT);
  return false;
};

export type ChangeInputText = {
  value: string;
  validation: (value: string) => boolean;
  setValue: (value: string) => void;
};

export const changeInputText = ({
  value,
  validation,
  setValue,
}: ChangeInputText): void => {
  let newValue = '';
  const valid: boolean = validation(value);
  if (valid) {
    newValue = value;
  }

  setValue(newValue);
};

export const changeInputNumers = (
  value: string,
  validation: (validValue: number) => boolean,
  setValue: (newValue: string) => void
): void => {
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;
  const valid: boolean = validation(numericValue);
  if (valid) {
    setValue(value);
  }
};

export function toTitleCase(str: string): string {
  const exceptions = ['de', 'del', 'la', 'los', 'un'];

  return str.replace(
    /(^|\s|\.|,|&)([a-z\u00E0-\u00FF]+)/g,
    (match, separator, word) => {
      const lowerWord = word.toLowerCase();
      if (exceptions.includes(lowerWord)) {
        return separator + lowerWord;
      }

      return separator + lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    }
  );
}

export type ChangeSelect = {
  newValue: SingleValue<{
    value: string | number | boolean | null;
    label: string;
  }>;
  validation: (value: string) => boolean;
  setDefault: (newValue: SelectDefault) => void;
  setValue:
    | ((value: string) => void)
    | ((value: number) => void)
    | ((value: boolean) => void)
    | ((value: null) => void);
};

export const changeSelect = ({
  newValue,
  validation,
  setDefault,
  setValue,
}: ChangeSelect): void => {
  if (newValue != null) {
    const valid: boolean = validation(`${newValue.value}`);
    if (valid) {
      const newDefaulValue = {
        label: newValue.label,
        value: `${newValue.value}`,
      };
      setDefault(newDefaulValue);

      if (typeof newValue.value === 'string' && setValue.length === 1) {
        (setValue as (value: string) => void)(newValue.value);
      } else if (typeof newValue.value === 'number' && setValue.length === 1) {
        (setValue as (value: number) => void)(newValue.value);
      } else if (typeof newValue.value === 'boolean' && setValue.length === 1) {
        (setValue as (value: boolean) => void)(newValue.value);
      } else if (typeof newValue.value === 'object' && setValue.length === 1) {
        (setValue as (value: null) => void)(newValue.value);
      }
    }
  }
};

export type ChangeMultipleArrayStringSelectProps = {
  newValue: SingleValue<{
    value: string;
    label: string;
  }>;
  selectedOptions: string[];
  validation: (value: string[]) => boolean;
  setValue: (value: string[]) => void;
  setSelectedValue: (value: string) => void;
};

export const changeMultipleArrayStringSelect = ({
  newValue,
  selectedOptions,
  validation,
  setValue,
  setSelectedValue,
}: ChangeMultipleArrayStringSelectProps): void => {
  if (newValue != null) {
    const selectedOption = newValue.value;
    if (!selectedOptions.includes(selectedOption)) {
      const updatedOptions = [...selectedOptions, selectedOption];

      const valid: boolean = validation(updatedOptions);

      if (valid) {
        setValue(updatedOptions);
        setSelectedValue('');
      }
    }
  }
};

export type ChangeMultipleArrayStringInputProps = {
  newValue: string;
  selectedOptions: string[];
  validation: (value: string[]) => boolean;
  setValue: (value: string[]) => void;
  setSelectedValue: (value: string) => void;
};

export const changeMultipleArrayStringInput = ({
  newValue,
  selectedOptions,
  validation,
  setValue,
  setSelectedValue,
}: ChangeMultipleArrayStringInputProps): void => {
  if (newValue != null) {
    const selectedOption = newValue;
    if (!selectedOptions.includes(selectedOption)) {
      const updatedOptions = [...selectedOptions, selectedOption];

      const valid: boolean = validation(updatedOptions);

      if (valid) {
        setValue(updatedOptions);
        setSelectedValue('');
      }
    }
  }
};

export type ValidationInputName = {
  name: string;
  inputId: string;
  setValid: (value: boolean) => void;
  required?: boolean;
};

export const validationInputName = ({
  name,
  inputId,
  setValid,
  required = true,
}: ValidationInputName): boolean => {
  const valid = validationInput(
    name,
    /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&'@-\s]+$/,
    inputId,
    required
  );
  setValid(valid);
  return valid;
};

export type ValidationInputAdress = {
  value: string;
  inputId: string;
  setValid: (value: boolean) => void;
  required?: boolean;
};

export const validationInputPostcode = ({
  value,
  inputId,
  setValid,
  required = true,
}: ValidationInputAdress): boolean => {
  const valid = validationInput(
    value,
    /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/,
    inputId,
    required
  );
  setValid(valid);
  return valid;
};

export const validationInputEmail = ({
  value,
  inputId,
  setValid,
  required = true,
}: ValidationInputAdress): boolean => {
  const valid = validationInput(
    value,
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    inputId,
    required
  );
  setValid(valid);
  return valid;
};

export const validationInputPhone = ({
  value,
  inputId,
  setValid,
  required = true,
}: ValidationInputAdress): boolean => {
  const valid = validationInput(value, /^[0-9]{10,20}/, inputId, required);
  setValid(valid);
  return valid;
};

export interface InitToken {
  token?: string | undefined;
}

interface FetchOptions<T = unknown> {
  initMethod: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  initApi?: string;
  initRoute: string;
  initToken?: InitToken;
  initCredentials?: T;
  functionFetching?: () => void;
  functionSuccess?: (data: T) => void;
  functionError?: (data: T) => void;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function gafpriFetch<T = unknown>({
  initMethod,
  initApi = API_URL,
  initRoute,
  initToken,
  initCredentials,
  functionFetching,
  functionSuccess,
  functionError,
}: FetchOptions<T>): Promise<any> {
  if (functionFetching !== undefined) {
    functionFetching();
  }

  let headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (initToken !== undefined) {
    headers = {
      ...headers,
      Authorization: `Bearer ${initToken.token}`,
    };
  }

  const options: RequestInit = {
    method: initMethod,
    headers: headers,
    body: JSON.stringify(initCredentials),
  };

  const resp = await fetch(`${initApi}${initRoute}`, options)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        if (functionSuccess !== undefined) {
          functionSuccess(data);
        }
      } else if (functionError !== undefined) {
        functionError(data);
      }
      return data;
    })
    .catch((error) => {
      if (functionError !== undefined) {
        functionError(error);
      }
      return error;
    });
  return resp;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export const isSelectDefault = (obj: unknown): obj is SelectDefault => {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  const selectDefaultCandidate = obj as SelectDefault;

  return (
    typeof selectDefaultCandidate.value === 'string' &&
    typeof selectDefaultCandidate.label === 'string'
  );
};

export const isSelectDefaultArray = (obj: unknown): obj is SelectDefault[] => {
  if (!Array.isArray(obj)) {
    return false;
  }

  return obj.every(isSelectDefault);
};

export const getLastEntryDateAndCount = async (
  service: string
): Promise<{ date: Date | null; count: number } | null> => {
  try {
    const response = await fetch(`${API_URL}${service}/date-and-count`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching last entry date:', error);
  }
  return null;
};

export type ErrorResponseProps = {
  error: string;
  message: string;
  statusCode: number;
  success: boolean;
};

export const isErrorResponse = (obj: unknown): obj is ErrorResponseProps => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'error' in obj &&
    'message' in obj &&
    'statusCode' in obj &&
    'success' in obj
  );
};

export type ValidationErrorInfo = {
  instance: Record<string, unknown>;
  message: string;
  origin: string;
  path: string;
  type: string;
  validatorArgs: unknown[];
  validatorKey: string;
  validatorName: string | null;
  value: string;
};

export type CustomErrorResponseProps = {
  errors: ValidationErrorInfo[];
  message: string;
  statusCode: number;
  success: boolean;
};

export function isCustomErrorResponse(
  obj: unknown
): obj is CustomErrorResponseProps {
  const customErrorObj = obj as CustomErrorResponseProps;

  return (
    typeof customErrorObj?.statusCode === 'number' &&
    typeof customErrorObj?.success === 'boolean' &&
    typeof customErrorObj?.message === 'string' &&
    Array.isArray(customErrorObj?.errors) &&
    customErrorObj.errors.every((error) => {
      return (
        typeof error.message === 'string' &&
        typeof error.origin === 'string' &&
        typeof error.path === 'string' &&
        typeof error.type === 'string' &&
        Array.isArray(error.validatorArgs) &&
        typeof error.validatorKey === 'string' &&
        (typeof error.validatorName === 'string' ||
          error.validatorName === null) &&
        typeof error.value === 'string' &&
        typeof error.instance === 'object' &&
        error.instance !== null
      );
    })
  );
}

export function getMimeTypeByExtension(filename: string): string | null {
  const extension = filename.split('.').pop()?.toLowerCase();

  switch (extension) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    default:
      return null;
  }
}

export function formatPhoneNumber(phoneNumber: string): string {
  const countryCode = parseInt(
    phoneNumber.slice(0, phoneNumber.length - 10),
    10
  ).toString();
  const areaCode = phoneNumber.slice(
    phoneNumber.length - 10,
    phoneNumber.length - 7
  );
  const firstPart = phoneNumber.slice(
    phoneNumber.length - 7,
    phoneNumber.length - 4
  );
  const secondPart = phoneNumber.slice(phoneNumber.length - 4);

  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
}

export interface RoleArray {
  id: string;
  name: string;
  role: string;
}

export const getBase64 = (
  img: File,
  callback: (result: string | ArrayBuffer | null) => void
): void => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

export type MultipleObjectAttributesInput = {
  newValue: GeneralAttribute;
  selectedOptions: GeneralAttribute[];
  validation: (value: GeneralAttribute[]) => boolean;
  setValue: (value: GeneralAttribute[]) => void;
};

export const changeMultipleObjectAttributesInput = ({
  newValue,
  selectedOptions,
  validation,
  setValue,
}: MultipleObjectAttributesInput): void => {
  if (newValue != null) {
    // Verificar si el nombre del nuevo atributo ya existe en la lista
    const attributeExists = selectedOptions.some(
      (attribute) => attribute.name === newValue.name
    );

    if (!attributeExists) {
      const valid = validation([newValue]);

      if (valid) {
        // Agregar el nuevo atributo solo si no existe en la lista
        const newAttributes: GeneralAttribute[] = [
          ...selectedOptions,
          newValue,
        ];
        setValue(newAttributes);
      }
    }
  }
};

export const removeAccentsAndSpecialChars = (str: string): string => {
  const accentsMap: Record<string, string> = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u',
    ü: 'u',
    ñ: 'n',
    ç: 'c',
    ' ': '-',
    Á: 'A',
    É: 'E',
    Í: 'I',
    Ó: 'O',
    Ú: 'U',
    Ü: 'U',
    Ñ: 'N',
    Ç: 'C',
    // Puedes agregar más caracteres según tus necesidades
  };

  const normalizedString = str.replace(/[^\w\s]/gi, (match) => {
    return accentsMap[match] || match;
  });

  return normalizedString.toLowerCase();
};

export const generatePermanentLink = (name: string): string => {
  // Remueve acentos y caracteres especiales, y convierte a minúsculas
  const normalizedString = removeAccentsAndSpecialChars(name);

  // Reemplaza espacios con guiones
  const permanentLink = normalizedString.replace(/\s+/g, '-');

  return permanentLink;
};

export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export interface FormatOptions {
  miles: ',' | '.';
  decimal: ',' | '.';
}

export const decimalFormatPriceConverter = (
  str: string | number,
  dig: number,
  currencySymbol: string,
  currencyLocation: 'left' | 'right',
  formatOptions: FormatOptions = { miles: ',', decimal: '.' }
): string => {
  let data = 0;

  if (typeof str === 'number') {
    data = str;
  } else if (typeof str === 'string') {
    const sanitizedStr = str
      .replace(new RegExp(`\\${formatOptions.miles}`, 'g'), '')
      .replace(formatOptions.decimal, '.');
    const check = parseFloat(sanitizedStr);

    if (!Number.isNaN(check)) {
      data = check;
    }
  }

  // Asegurarse de que haya siempre la cantidad deseada de decimales
  const fixedDecimal = data.toFixed(dig);

  // Formatear con separadores de miles y decimales
  const parts = fixedDecimal.split('.');
  const formattedNumber =
    parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, formatOptions.miles) +
    (parts[1] ? formatOptions.decimal + parts[1] : ''); // Agregado manejo de casos sin decimales

  if (currencyLocation === 'left') {
    return `${currencySymbol} ${formattedNumber}`;
  }

  return `${formattedNumber} ${currencySymbol}`;
};

export const formatDate = (date: string): string => {
  const newDate = new Date(date);
  // Formatear la fecha
  const format = new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return format.format(newDate);
};

export function truncarTexto(texto: string, longitudMaxima: number): string {
  if (texto.length <= longitudMaxima) {
    return texto;
  }

  return `${texto.substring(0, longitudMaxima - 3)}...`;
}

export const dayNames: Record<number, string> = {
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado',
  7: 'Domingo',
};

export const formatHours = (hours: string): string => {
  const [start, end] = hours.split('-').map((hour) => parseInt(hour, 10));
  const formatHour = (hour: number): string =>
    `${hour.toString().padStart(2, '0')}:00`;

  return `de ${formatHour(start)} a ${formatHour(end)}`;
};

export const workDaysHoursToArray = (
  workDaysHours: Record<number, string>
): { day: number; hoursString: string }[] => {
  return Object.entries(workDaysHours).map(([day, hours]) => {
    const dayName = dayNames[parseInt(day, 10)];
    const formattedHours = formatHours(hours);
    return {
      day: parseInt(day, 10),
      hoursString: `${dayName} ${formattedHours}`,
    };
  });
};
