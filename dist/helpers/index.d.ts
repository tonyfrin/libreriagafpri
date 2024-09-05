import { SingleValue } from 'react-select';
import { GeneralAttribute } from '../Validations';
export type SelectDefault = {
    value: string;
    label: string;
};
export declare const addClass: (element: string, className: string) => void;
export declare const removeClass: (element: string, className: string) => void;
export declare const validationSelect: (value: string, componentId: string) => boolean;
export declare function validationHidden(value: string, validate: RegExp): boolean;
export declare const validationInput: (value: string, match: RegExp, componentId: string, required?: boolean) => boolean;
export type ChangeInputText = {
    value: string;
    validation: (value: string) => boolean;
    setValue: (value: string) => void;
};
export declare const changeInputText: ({ value, validation, setValue, }: ChangeInputText) => void;
export declare const changeInputNumers: (value: string, validation: (validValue: number) => boolean, setValue: (newValue: string) => void) => void;
export declare function toTitleCase(str: string): string;
export type ChangeSelect = {
    newValue: SingleValue<{
        value: string | number | boolean | null;
        label: string;
    }>;
    validation: (value: string) => boolean;
    setDefault: (newValue: SelectDefault) => void;
    setValue: ((value: string) => void) | ((value: number) => void) | ((value: boolean) => void) | ((value: null) => void);
};
export declare const changeSelect: ({ newValue, validation, setDefault, setValue, }: ChangeSelect) => void;
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
export declare const changeMultipleArrayStringSelect: ({ newValue, selectedOptions, validation, setValue, setSelectedValue, }: ChangeMultipleArrayStringSelectProps) => void;
export type ChangeMultipleArrayStringInputProps = {
    newValue: string;
    selectedOptions: string[];
    validation: (value: string[]) => boolean;
    setValue: (value: string[]) => void;
    setSelectedValue: (value: string) => void;
};
export declare const changeMultipleArrayStringInput: ({ newValue, selectedOptions, validation, setValue, setSelectedValue, }: ChangeMultipleArrayStringInputProps) => void;
export type ValidationInputName = {
    name: string;
    inputId: string;
    setValid: (value: boolean) => void;
    required?: boolean;
};
export declare const validationInputName: ({ name, inputId, setValid, required, }: ValidationInputName) => boolean;
export type ValidationInputAdress = {
    value: string;
    inputId: string;
    setValid: (value: boolean) => void;
    required?: boolean;
};
export declare const validationInputPostcode: ({ value, inputId, setValid, required, }: ValidationInputAdress) => boolean;
export declare const validationInputEmail: ({ value, inputId, setValid, required, }: ValidationInputAdress) => boolean;
export declare const validationInputPhone: ({ value, inputId, setValid, required, }: ValidationInputAdress) => boolean;
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
export declare function gafpriFetch<T = unknown>({ initMethod, initApi, initRoute, initToken, initCredentials, functionFetching, functionSuccess, functionError, }: FetchOptions<T>): void;
export declare const isSelectDefault: (obj: unknown) => obj is SelectDefault;
export declare const isSelectDefaultArray: (obj: unknown) => obj is SelectDefault[];
export declare const getLastEntryDateAndCount: (service: string) => Promise<{
    date: Date | null;
    count: number;
} | null>;
export type ErrorResponseProps = {
    error: string;
    message: string;
    statusCode: number;
    success: boolean;
};
export declare const isErrorResponse: (obj: unknown) => obj is ErrorResponseProps;
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
export declare function isCustomErrorResponse(obj: unknown): obj is CustomErrorResponseProps;
export declare function getMimeTypeByExtension(filename: string): string | null;
export declare function formatPhoneNumber(phoneNumber: string): string;
export interface RoleArray {
    id: string;
    name: string;
    role: string;
}
export declare const getBase64: (img: File, callback: (result: string | ArrayBuffer | null) => void) => void;
export type MultipleObjectAttributesInput = {
    newValue: GeneralAttribute;
    selectedOptions: GeneralAttribute[];
    validation: (value: GeneralAttribute[]) => boolean;
    setValue: (value: GeneralAttribute[]) => void;
};
export declare const changeMultipleObjectAttributesInput: ({ newValue, selectedOptions, validation, setValue, }: MultipleObjectAttributesInput) => void;
export declare const removeAccentsAndSpecialChars: (str: string) => string;
export declare const generatePermanentLink: (name: string) => string;
export declare const scrollToTop: () => void;
export interface FormatOptions {
    miles: ',' | '.';
    decimal: ',' | '.';
}
export declare const decimalFormatPriceConverter: (str: string | number, dig: number, currencySymbol: string, currencyLocation: 'left' | 'right', formatOptions?: FormatOptions) => string;
export declare const formatDate: (date: string) => string;
export declare function truncarTexto(texto: string, longitudMaxima: number): string;
export {};
