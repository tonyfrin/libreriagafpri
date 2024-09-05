import { ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import type { SelectDefault } from '../../../helpers';
import type { UseTypeDocumentIdReturn, UseErrorReturn } from '../../../states';
export interface typeDocumentId {
    id: number;
    country: string;
    name: string;
}
export interface DocumentIdAttributes {
    id?: number;
    index?: string;
    digit: string;
    photo?: string;
    entityId?: number;
    typeDocumentIdId: number | null;
    typeDocumentId?: typeDocumentId;
}
export interface AddressAttributes {
    id?: number;
    type: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    postCode?: string;
    country: string;
    entityId?: number;
}
export interface EntityAttributes {
    id: number;
    login: string;
    email?: string;
    phone?: string;
    type: string;
    name: string;
    lastName?: string;
    status: string;
    photo?: string;
    createdAt: Date;
    modifiedAt: Date;
    address: AddressAttributes[];
    documentId: DocumentIdAttributes[];
}
export type UseGafpriAttributesEntityReturn = {
    states: {
        name: string;
        nameValid: boolean;
        lastName: string;
        lastNameValid: boolean;
        typeDocumentIdId: number | null;
        typeDocumentIdIdValid: boolean;
        typeDocumentIdIdDefault: SelectDefault;
        typeDocumentIdIdOptions: SelectDefault[];
        index: string;
        indexValid: boolean;
        indexDefault: SelectDefault;
        indexOptions: SelectDefault[];
        digit: string;
        digitValid: boolean;
        addressType: string;
        addressTypeValid: boolean;
        addressTypeDefault: SelectDefault;
        addressTypeOptions: SelectDefault[];
        address1: string;
        address1Valid: boolean;
        address2: string;
        address2Valid: boolean;
        city: string;
        cityValid: boolean;
        cityDefault: SelectDefault;
        cityOptions: SelectDefault[];
        state: string;
        stateCountryValid: boolean;
        stateCountryDefault: SelectDefault;
        stateCountryOptions: SelectDefault[];
        country: string;
        countryValid: boolean;
        countryDefault: SelectDefault;
        countryOptions: SelectDefault[];
        postCode: string;
        postCodeValid: boolean;
        email: string;
        emailValid: boolean;
        phone: string;
        phoneValid: boolean;
        type: string;
        typeValid: boolean;
        typeDefault: SelectDefault;
        typeOptions: SelectDefault[];
        photo: string;
        photoValid: boolean;
        submitting: boolean;
        documentPhoto: string;
        documentPhotoValid: boolean;
        documentSubmitting: boolean;
        status: string;
        statusValid: boolean;
        statusDefault: SelectDefault;
        statusOptions: SelectDefault[];
        documentId: DocumentIdAttributes[];
        address: AddressAttributes[];
        addressValid: boolean;
        currentId: number;
        formType: 'personal' | 'legal';
    };
    actions: {
        validationButtonNext: () => void;
        validationButtonNextAddress: () => void;
        validationButtonNextDocument: () => void;
        validationButtonNextUpdate: () => void;
        validationName: (value: string) => boolean;
        validationLastName: (value: string) => boolean;
        validationTypeDocumentIdId: (value: string) => boolean;
        validationIndex: (value: string) => boolean;
        validationDigit: (value: string) => boolean;
        validationAddressType: (value: string) => boolean;
        validationAddress1: (value: string) => boolean;
        validationAddress2: (value: string) => boolean;
        validationCity: (value: string) => boolean;
        validationStateCountry: (value: string) => boolean;
        validationCountry: (value: string) => boolean;
        validationPostCode: (value: string) => boolean;
        validationEmail: (value: string) => boolean;
        validationPhone: (value: string) => boolean;
        validationType: (value: string) => boolean;
        validationPhoto: (value: string) => boolean;
        validationDocumentPhoto: (value: string) => boolean;
        validationStatus: (value: string) => boolean;
        changeName: (value: string) => void;
        changeLastName: (value: string) => void;
        changeTypeDocumentIdId: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeIndex: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeDigit: (newDigit: string) => void;
        changeAddressType: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeAddress1: (value: string) => void;
        changeAddress2: (value: string) => void;
        changeCity: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeCityOptions: () => void;
        changeStateCountry: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changeStateCountryOptions: () => void;
        changeCountry: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changePostCode: (newPostCode: string) => void;
        changeEmail: (inputValue: string) => void;
        changePhone: (newPhone: string) => void;
        changeType: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        changePhoto: (e: ChangeEvent<HTMLInputElement>) => void;
        changeDocumentPhoto: (e: ChangeEvent<HTMLInputElement>) => void;
        setPhoto: (value: string) => void;
        setDocumentPhoto: (value: string) => void;
        setSubmitting: (value: boolean) => void;
        setDocumentSubmitting: (value: boolean) => void;
        changeStatus: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        setAddress: (value: AddressAttributes[]) => void;
        setDocumentId: (value: DocumentIdAttributes[]) => void;
        infoReset: () => void;
        setCurrentId: (value: number) => void;
        setType: (value: string) => void;
        setFormType: (value: 'personal' | 'legal') => void;
        changeTypeInAllAddresses: (addresses: AddressAttributes[], newType: string) => AddressAttributes[];
        updateAddressTypeById: (addresses: AddressAttributes[], id: number, newType: string) => AddressAttributes[];
    };
};
export type UseGafpriAttributesEntityProps = {
    useTypeDocumentId: UseTypeDocumentIdReturn;
    useError: UseErrorReturn;
};
export declare const useGafpriAttributesEntity: ({ useTypeDocumentId, useError, }: UseGafpriAttributesEntityProps) => UseGafpriAttributesEntityReturn;
