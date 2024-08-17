import { useState, ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import {
  PHOTO_INPUT,
  PRODUCT_TYPES,
  PRODUCT_TYPES_DEFAULT,
  PRODUCT_STATUS,
  PRODUCT_STATUS_DEFAULT,
  TAX_STATUS,
  TAX_STATUS_DEFAULT,
  PACKAGE_TYPE,
  PACKAGE_TYPE_DEFAULT,
  VISIBILITY,
  VISIBILITY_DEFAULT,
  PRODUCT_IMAGE_DEFAULT,
} from '../../../constants';
import {
  GeneralAttribute,
  generalValidationType,
  generalValidationStatus,
  generalValidationButtonNext,
  generalValidationDescription,
  generalValidationName,
  generalValidationSku,
  generalValidationPhoto,
  generalValidationGalleryImage,
  generalValidationNote,
  generalValidationPublicName,
  generalValidationSalesPrice,
  generalValidationOfferPrice,
  generalValidationCost,
  generalValidationTaxStatus,
  generalValidationTaxClass,
  generalValidationCategoryId,
  generalValidationPackageType,
  generalValidationQtyPack,
  generalValidationUndCbm,
  generalValidationProductAttributes,
  generalValidationPermanentLink,
  generalValidationVisibility,
  generalValidationHeight,
  generalValidationWeight,
  generalValidationWidth,
  generalValidationLength,
  generalValidationCatalogOrder,
  generalValidationTags,
} from '../../../Validations';
import { SelectDefault, generatePermanentLink } from '../../../helpers';
import { UseCategoryReturn, Category, UseErrorReturn } from '../../../states';
import {
  generalChangePhoto,
  generalChangeGalleryPhoto,
  generalChangeType,
  generalChangeStatus,
  generalChangeName,
  generalChangeDescription,
  generalChangeNote,
  generalChangeCategoryId,
  generalChangeTags,
  generalChangeSku,
  generalChangeSalesPrice,
  generalChangeOfferPrice,
  generalChangeCost,
  generalChangeTaxStatus,
  generalChangeTaxClass,
  generalChangePackageType,
  generalChangeQtyPack,
  generalChangeUndCbm,
  generalChangeAttributes,
  generalChangeLink,
  generalChangeVisibility,
  generalChangeWeight,
  generalChangeHeight,
  generalChangeWidth,
  generalChangeLength,
  generalChangeCatalogOrder,
} from '../../../Changes';

type State = {
  category: number | null;
  categoryValid: boolean;

  tags: string[];
  tagsValid: boolean;
  selectedTagsValue: string;

  sku: string;
  skuValid: boolean;

  description: string;
  descriptionValid: boolean;

  name: string;
  nameValid: boolean;

  publicName: string;
  publicNameValid: boolean;

  photo: string;
  photoValid: boolean;
  submitting: boolean;

  galleryImage: string[];
  galleryImageValid: boolean;

  note: string;
  noteValid: boolean;

  salesPrice: string;
  salesPriceValid: boolean;

  offerPrice: string;
  offerPriceValid: boolean;

  cost: string;
  costValid: boolean;

  type: string;
  typeValid: boolean;
  typeDefault: SelectDefault;
  typeOptions: SelectDefault[];

  taxStatus: string;
  taxStatusValid: boolean;
  taxStatusDefault: SelectDefault;
  taxStatusOptions: SelectDefault[];

  taxClasses: string;
  taxClassesValid: boolean;
  taxClassesDefault: SelectDefault;
  taxClassesOptions: SelectDefault[];

  packageType: string;
  packageTypeValid: boolean;
  packageTypeDefault: SelectDefault;
  packageTypeOptions: SelectDefault[];

  qtyPack: string;
  qtyPackValid: boolean;

  undCbm: string;
  undCbmValid: boolean;

  attributes: GeneralAttribute[];
  attributesValid: boolean;
  valueAttributes: string;
  descriptionAttributes: string;

  status: string;
  statusValid: boolean;
  statusDefault: SelectDefault;
  statusOptions: SelectDefault[];

  permanentLink: string;
  permanentLinkValid: boolean;

  visibility: string;
  visibilityValid: boolean;
  visibilityDefault: SelectDefault;
  visibilityOptions: SelectDefault[];

  weight: string;
  weightValid: boolean;

  height: string;
  heightValid: boolean;

  width: string;
  widthValid: boolean;

  length: string;
  lengthValid: boolean;

  catalogOrder: string;
  catalogOrderValid: boolean;

  reviews: boolean;
  reviewsValid: boolean;

  currentId: number;
  uploadCurrent: boolean;
  categoryOptions: Category[];
};

type Actions = {
  infoReset: () => void;

  validationCategory: (value: number | null) => boolean;
  validationTags: (value: string[]) => boolean;
  validationSku: (value: string) => boolean;
  validationDescription: (value: string) => boolean;
  validationName: (value: string) => boolean;
  validationPublicName: (value: string) => boolean;
  validationPhoto: (value: string) => boolean;
  validationGalleryImage: (value: string[]) => boolean;
  validationNote: (value: string) => boolean;
  validationSalesPrice: (value: number) => boolean;
  validationOfferPrice: (value: number) => boolean;
  validationCost: (value: number) => boolean;
  validationType: (value: string) => boolean;
  validationTaxStatus: (value: string) => boolean;
  validationTaxClasses: (value: string) => boolean;
  validationPackageType: (value: string) => boolean;
  validationQtyPack: (value: number) => boolean;
  validationUndCbm: (value: number) => boolean;
  validationProductAttributes: (value: GeneralAttribute[]) => boolean;
  validationStatus: (value: string) => boolean;
  validationPermanentLink: (value: string) => boolean;
  validationVisibility: (value: string) => boolean;
  validationWeight: (value: number) => boolean;
  validationHeight: (value: number) => boolean;
  validationWidth: (value: number) => boolean;
  validationLength: (value: number) => boolean;
  validationCatalogOrder: (value: number) => boolean;
  validationButtonNext: () => void;

  changeCategory: (value: number | null) => void;
  changeTags: (value: string) => void;
  changeSku: (value: string) => void;
  changeDescription: (value: string) => void;
  changeName: (value: string) => void;
  changePublicName: (value: string) => void;
  changePhoto: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  changeGalleryImage: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  changeNote: (value: string) => void;
  changeSalesPrice: (value: string) => void;
  changeOfferPrice: (value: string) => void;
  changeCost: (value: string) => void;
  changeType: (value: SingleValue<{ value: string; label: string }>) => void;
  changeTaxStatus: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  changeTaxClasses: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  changePackageType: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  changeQtyPack: (value: string) => void;
  changeUndCbm: (value: string) => void;
  changeAttributes: (value: GeneralAttribute) => void;
  setAttributes: (value: GeneralAttribute[]) => void;
  setValueAttributes: (value: string) => void;
  setDescriptionAttributes: (value: string) => void;
  changeStatus: (value: SingleValue<{ value: string; label: string }>) => void;
  changeLink: (value: string) => void;
  changeVisibility: (
    value: SingleValue<{ value: string; label: string }>
  ) => void;
  changeWeight: (value: string) => void;
  changeHeight: (value: string) => void;
  changeWidth: (value: string) => void;
  changeLength: (value: string) => void;
  changeCatalogOrder: (value: string) => void;
  changeReviews: () => void;
  setCurrentId: (id: number) => void;
  setPhoto: (value: string) => void;
  setSubmitting: (value: boolean) => void;
  getStatusOptionByValue: (
    value: string
  ) => SingleValue<{ label: string; value: string }> | undefined;
  getVisibilityOptionByValue: (
    value: string
  ) => SingleValue<{ label: string; value: string }> | undefined;
  getTypeOptionByValue: (
    value: string
  ) => SingleValue<{ label: string; value: string }> | undefined;
  removeTag: (tag: string) => void;
  setSelectedTagsValue: (value: string) => void;
  removeGalleryImage: (image: string) => void;
  getPackageTypeOptionByValue: (
    value: string
  ) => SingleValue<{ label: string; value: string }> | undefined;
  addAttributes: () => void;
  onRemoveAttibutes: (name: string) => void;
  setGalleryImage: (value: string[]) => void;
  setTags: (value: string[]) => void;
  getTaxStatusOptionByValue: (
    value: string
  ) => SingleValue<{ label: string; value: string }> | undefined;
  getTaxClassesOptionByValue: (
    value: string
  ) => SingleValue<{ label: string; value: string }> | undefined;
  setReviews: (value: boolean) => void;
  setUploadCurrent: (value: boolean) => void;
};

export type UseGafpriAttributesProductsReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriAttributesProductsProps = {
  optionsTaxClasses: SelectDefault[];
  useError: UseErrorReturn;
  useCategory: UseCategoryReturn;
};

export function useGafpriAttributesProducts({
  optionsTaxClasses,
  useError,
  useCategory,
}: UseGafpriAttributesProductsProps): UseGafpriAttributesProductsReturn {
  const [category, setCategory] = useState<number | null>(null);
  const [categoryValid, setCategoryValid] = useState(true);
  const categoryOptions = useCategory.actions.convertResponseToCategories();

  const [tags, setTags] = useState<string[]>([]);
  const [tagsValid, setTagsValid] = useState(true);
  const [selectedTagsValue, setSelectedTagsValue] = useState('');

  const [sku, setSku] = useState('');
  const [skuValid, setSkuValid] = useState(false);

  const [description, setDescription] = useState('');
  const [descriptionValid, setDescriptionValid] = useState(true);

  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [publicName, setPublicName] = useState('');
  const [publicNameValid, setPublicNameValid] = useState(true);

  const [photo, setPhoto] = useState(PRODUCT_IMAGE_DEFAULT);
  const [photoValid, setPhotoValid] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [galleryImage, setGalleryImage] = useState<string[]>([]);
  const [galleryImageValid, setGalleryImageValid] = useState(true);

  const [note, setNote] = useState('');
  const [noteValid, setNoteValid] = useState(true);

  const [salesPrice, setSalesPrice] = useState('');
  const [salesPriceValid, setSalesPriceValid] = useState(false);

  const [offerPrice, setOfferPrice] = useState('');
  const [offerPriceValid, setOfferPriceValid] = useState(true);

  const [cost, setCost] = useState('');
  const [costValid, setCostValid] = useState(true);

  const [type, setType] = useState('');
  const [typeValid, setTypeValid] = useState(false);
  const [typeDefault, setTypeDefault] = useState<SelectDefault>(
    PRODUCT_TYPES_DEFAULT
  );
  const typeOptions = PRODUCT_TYPES;

  const [taxStatus, setTaxStatus] = useState('');
  const [taxStatusValid, setTaxStatusValid] = useState(true);
  const [taxStatusDefault, setTaxStatusDefault] =
    useState<SelectDefault>(TAX_STATUS_DEFAULT);
  const taxStatusOptions = TAX_STATUS;

  const [taxClasses, setTaxClasses] = useState('');
  const [taxClassesValid, setTaxClassesValid] = useState(true);
  const [taxClassesDefault, setTaxClassesDefault] = useState<SelectDefault>({
    label: 'Clase de impuesto',
    value: '',
  });
  const taxClassesOptions = optionsTaxClasses;

  const [packageType, setPackageType] = useState('');
  const [packageTypeValid, setPackageTypeValid] = useState(true);
  const [packageTypeDefault, setPackageTypeDefault] =
    useState<SelectDefault>(PACKAGE_TYPE_DEFAULT);
  const packageTypeOptions = PACKAGE_TYPE;

  const [qtyPack, setQtyPack] = useState('');
  const [qtyPackValid, setQtyPackValid] = useState(true);

  const [undCbm, setUndCbm] = useState('');
  const [undCbmValid, setUndCbmValid] = useState(true);

  const [attributes, setAttributes] = useState<GeneralAttribute[]>([]);
  const [attributesValid, setAttributesValid] = useState(true);
  const [valueAttributes, setValueAttributes] = useState('');
  const [descriptionAttributes, setDescriptionAttributes] = useState('');

  const [status, setStatus] = useState('');
  const [statusValid, setStatusValid] = useState(false);
  const [statusDefault, setStatusDefault] = useState<SelectDefault>(
    PRODUCT_STATUS_DEFAULT
  );
  const statusOptions = PRODUCT_STATUS;

  const [permanentLink, setPermanentLink] = useState<string>('');
  const [permanentLinkValid, setPermanentLinkValid] = useState(true);

  const [visibility, setVisibility] = useState('');
  const [visibilityValid, setVisibilityValid] = useState(false);
  const [visibilityDefault, setVisibilityDefault] =
    useState<SelectDefault>(VISIBILITY_DEFAULT);
  const visibilityOptions = VISIBILITY;

  const [weight, setWeight] = useState('');
  const [weightValid, setWeightValid] = useState(true);

  const [height, setHeight] = useState('');
  const [heightValid, setHeightValid] = useState(true);

  const [width, setWidth] = useState('');
  const [widthValid, setWidthValid] = useState(true);

  const [length, setLength] = useState('');
  const [lengthValid, setLengthValid] = useState(true);

  const [catalogOrder, setCatalogOrder] = useState('');
  const [catalogOrderValid, setCatalogOrderValid] = useState(true);

  const [reviews, setReviews] = useState(false);
  const reviewsValid = true;

  const [currentId, setCurrentId] = useState(0);
  const [uploadCurrent, setUploadCurrent] = useState(false);

  const infoReset = (): void => {
    setName('');
    setNameValid(false);

    setPublicName('');
    setPublicNameValid(true);

    setDescription('');
    setDescriptionValid(true);

    setCategory(null);
    setCategoryValid(true);

    setTags([]);
    setTagsValid(true);
    setSelectedTagsValue('');

    setSku('');
    setSkuValid(false);

    setPhoto(PRODUCT_IMAGE_DEFAULT);
    setPhotoValid(true);
    setSubmitting(false);

    setGalleryImage([]);
    setGalleryImageValid(true);

    setNote('');
    setNoteValid(true);

    setSalesPrice('');
    setSalesPriceValid(false);

    setOfferPrice('');
    setOfferPriceValid(true);

    setCost('');
    setCostValid(true);

    setType('');
    setTypeValid(false);
    setTypeDefault(PRODUCT_TYPES_DEFAULT);

    setTaxStatus('');
    setTaxStatusValid(true);
    setTaxStatusDefault(TAX_STATUS_DEFAULT);

    setTaxClasses('');
    setTaxClassesValid(true);
    setTaxClassesDefault({ label: 'Clase de impuesto', value: '' });

    setPackageType('');
    setPackageTypeValid(true);

    setQtyPack('');
    setQtyPackValid(true);

    setUndCbm('');
    setUndCbmValid(true);

    setAttributes([]);
    setAttributesValid(true);

    setStatus('');
    setStatusValid(false);

    setPermanentLink('');
    setPermanentLinkValid(true);

    setVisibility('');
    setVisibilityValid(false);
    setVisibilityDefault(VISIBILITY_DEFAULT);

    setWeight('');
    setWeightValid(true);

    setHeight('');
    setHeightValid(true);

    setWidth('');
    setWidthValid(true);

    setLength('');
    setLengthValid(true);

    setCatalogOrder('');
    setCatalogOrderValid(true);

    setReviews(false);
  };

  // Funciones de Validacion

  const validationCategory = (value: number | null): boolean => {
    return generalValidationCategoryId({
      value,
      setValid: setCategoryValid,
      currentValid: categoryValid,
    });
  };

  const validationTags = (value: string[]): boolean => {
    return generalValidationTags({
      value,
      setValid: setTagsValid,
      currentValid: tagsValid,
    });
  };

  const validationSku = (value: string): boolean => {
    return generalValidationSku({
      value,
      setValid: setSkuValid,
      currentValid: skuValid,
    });
  };

  const validationDescription = (value: string): boolean => {
    return generalValidationDescription({
      value,
      setValid: setDescriptionValid,
      currentValid: descriptionValid,
      required: false,
    });
  };

  const validationName = (value: string): boolean => {
    return generalValidationName({
      value,
      setValid: setNameValid,
      currentValid: nameValid,
    });
  };

  const validationPublicName = (value: string): boolean => {
    return generalValidationPublicName({
      value,
      setValid: setPublicNameValid,
      currentValid: publicNameValid,
      required: false,
    });
  };

  const validationPhoto = (value: string): boolean => {
    return generalValidationPhoto({
      value,
      setValid: setPhotoValid,
      currentValid: photoValid,
      required: false,
      inputId: PHOTO_INPUT,
    });
  };

  const validationGalleryImage = (value: string[]): boolean => {
    return generalValidationGalleryImage({
      value,
      setValid: setGalleryImageValid,
      currentValid: galleryImageValid,
      required: false,
    });
  };

  const validationNote = (value: string): boolean => {
    return generalValidationNote({
      value,
      setValid: setNoteValid,
      currentValid: noteValid,
      required: false,
    }); //
  };

  const validationSalesPrice = (value: number): boolean => {
    return generalValidationSalesPrice({
      value,
      setValid: setSalesPriceValid,
      currentValid: salesPriceValid,
    }); //
  };

  const validationOfferPrice = (value: number): boolean => {
    return generalValidationOfferPrice({
      value,
      setValid: setOfferPriceValid,
      currentValid: offerPriceValid,
      required: false,
    });
  };

  const validationCost = (value: number): boolean => {
    return generalValidationCost({
      value,
      setValid: setCostValid,
      currentValid: costValid,
      required: false,
    });
  };

  const validationType = (value: string): boolean => {
    return generalValidationType({
      value,
      setValid: setTypeValid,
      currentValid: typeValid,
    }); //
  };

  const validationTaxStatus = (value: string): boolean => {
    return generalValidationTaxStatus({
      newValue: value,
      setValid: setTaxStatusValid,
      currentValid: taxStatusValid,
    });
  };

  const validationTaxClasses = (value: string): boolean => {
    return generalValidationTaxClass({
      newValue: value,
      setValid: setTaxClassesValid,
      currentValid: taxClassesValid,
    });
  };

  const validationPackageType = (value: string): boolean => {
    return generalValidationPackageType({
      newValue: value,
      setValid: setPackageTypeValid,
      currentValid: packageTypeValid,
    });
  };

  const validationQtyPack = (value: number): boolean => {
    return generalValidationQtyPack({
      value,
      setValid: setQtyPackValid,
      currentValid: qtyPackValid,
      required: false,
    });
  };

  const validationUndCbm = (value: number): boolean => {
    return generalValidationUndCbm({
      value,
      setValid: setUndCbmValid,
      currentValid: undCbmValid,
      required: false,
    });
  };

  const validationProductAttributes = (value: GeneralAttribute[]): boolean => {
    return generalValidationProductAttributes({
      value,
      setValid: setAttributesValid,
      currentValid: attributesValid,
      required: false,
    });
  };

  const validationStatus = (value: string): boolean => {
    return generalValidationStatus({
      value,
      setValid: setStatusValid,
      currentValid: statusValid,
    });
  };

  const validationPermanentLink = (value: string): boolean => {
    return generalValidationPermanentLink({
      value,
      setValid: setPermanentLinkValid,
      currentValid: permanentLinkValid,
      required: false,
    });
  };

  const validationVisibility = (value: string): boolean => {
    return generalValidationVisibility({
      value,
      setValid: setVisibilityValid,
      currentValid: visibilityValid,
    });
  };

  const validationWeight = (value: number): boolean => {
    return generalValidationWeight({
      value,
      setValid: setWeightValid,
      currentValid: weightValid,
      required: false,
    });
  };

  const validationHeight = (value: number): boolean => {
    return generalValidationHeight({
      value,
      setValid: setHeightValid,
      currentValid: heightValid,
      required: false,
    });
  };

  const validationWidth = (value: number): boolean => {
    return generalValidationWidth({
      value,
      setValid: setWidthValid,
      currentValid: widthValid,
      required: false,
    });
  };

  const validationLength = (value: number): boolean => {
    return generalValidationLength({
      value,
      setValid: setLengthValid,
      currentValid: lengthValid,
      required: false,
    });
  };

  const validationCatalogOrder = (value: number): boolean => {
    return generalValidationCatalogOrder({
      value,
      setValid: setCatalogOrderValid,
      currentValid: catalogOrderValid,
      required: false,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [
        skuValid,
        nameValid,
        salesPriceValid,
        typeValid,
        statusValid,
        visibilityValid,
      ],
      inputId: 'general-product',
    });
  };

  // Funciones de cambios
  const changeCategory = (value: number | null): void => {
    generalChangeCategoryId({
      value,
      validation: validationCategory,
      setValue: setCategory,
    });
  };

  const changeTags = (value: string): void => {
    generalChangeTags({
      value,
      validation: validationTags,
      tags,
      setValue: setTags,
      setSelectedValue: setSelectedTagsValue,
    });
  };

  const removeTag = (tag: string): void => {
    setTags((prevRegions) => prevRegions.filter((t) => t !== tag));
  };

  const changeSku = (value: string): void => {
    generalChangeSku({
      value,
      validation: validationSku,
      setValue: setSku,
    });
  };

  const changeDescription = (value: string): void => {
    generalChangeDescription({
      value,
      validation: validationDescription,
      setValue: setDescription,
    });
  };

  const changeName = (value: string): void => {
    const newName = generalChangeName({
      value,
      validation: validationName,
      setValue: setName,
    });
    setPermanentLink(generatePermanentLink(newName));
  };

  const changePublicName = (value: string): void => {
    generalChangeName({
      value,
      validation: validationPublicName,
      setValue: setPublicName,
    });
  };

  const changePhoto = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    await generalChangePhoto({
      e,
      changeError: useError.actions.changeError,
      setSubmitting,
      setPhoto,
      validation: validationPhoto,
    });
  };

  const changeGalleryImage = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    await generalChangeGalleryPhoto({
      e,
      changeError: useError.actions.changeError,
      setSubmitting,
      setPhoto: setGalleryImage,
      validation: validationGalleryImage,
      selectedOptions: galleryImage,
    });
  };

  const removeGalleryImage = (image: string): void => {
    setGalleryImage((prevRegions) => prevRegions.filter((i) => i !== image));
  };

  const changeNote = (value: string): void => {
    generalChangeNote({
      value,
      validation: validationNote,
      setValue: setNote,
    });
  };
  const changeSalesPrice = (value: string): void => {
    generalChangeSalesPrice({
      value,
      validation: validationSalesPrice,
      setValue: setSalesPrice,
    });
  };

  const changeOfferPrice = (value: string): void => {
    generalChangeOfferPrice({
      value,
      validation: validationOfferPrice,
      setValue: setOfferPrice,
    });
  };

  const changeCost = (value: string): void => {
    generalChangeCost({
      value,
      validation: validationCost,
      setValue: setCost,
    });
  };

  const changeType = (
    value: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeType({
      options: value,
      validation: validationType,
      setDefault: setTypeDefault,
      setValue: setType,
    });
  };

  const changeTaxStatus = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeTaxStatus({
      options,
      validation: validationTaxStatus,
      setDefault: setTaxStatusDefault,
      setValue: setTaxStatus,
    });
  };

  const changeTaxClasses = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeTaxClass({
      options,
      validation: validationTaxClasses,
      setDefault: setTaxClassesDefault,
      setValue: setTaxClasses,
    });
  };

  const changePackageType = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangePackageType({
      options,
      validation: validationPackageType,
      setDefault: setPackageTypeDefault,
      setValue: setPackageType,
    });
  };

  const changeQtyPack = (value: string): void => {
    generalChangeQtyPack({
      value,
      validation: validationQtyPack,
      setValue: setQtyPack,
    });
  };

  const changeUndCbm = (value: string): void => {
    generalChangeUndCbm({
      value,
      validation: validationUndCbm,
      setValue: setUndCbm,
    });
  };

  const changeAttributes = (value: GeneralAttribute): void => {
    generalChangeAttributes({
      newValue: value,
      selectedOptions: attributes,
      validation: validationProductAttributes,
      setValue: setAttributes,
    });
  };

  const changeStatus = (
    options: SingleValue<{ value: string; label: string }> | null
  ): void => {
    if (options === null) return;
    generalChangeStatus({
      options,
      validation: validationStatus,
      setDefault: setStatusDefault,
      setValue: setStatus,
    });
  };

  const changeLink = (value: string): void => {
    generalChangeLink({
      value,
      validation: validationPermanentLink,
      setValue: setPermanentLink,
    });
  };

  const changeVisibility = (
    value: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeVisibility({
      options: value,
      validation: validationVisibility,
      setDefault: setVisibilityDefault,
      setValue: setVisibility,
    });
  };

  const changeWeight = (value: string): void => {
    generalChangeWeight({
      value,
      validation: validationWeight,
      setValue: setWeight,
    });
  };

  const changeHeight = (value: string): void => {
    generalChangeHeight({
      value,
      validation: validationHeight,
      setValue: setHeight,
    });
  };

  const changeWidth = (value: string): void => {
    generalChangeWidth({
      value,
      validation: validationWidth,
      setValue: setWidth,
    });
  };

  const changeLength = (value: string): void => {
    generalChangeLength({
      value,
      validation: validationLength,
      setValue: setLength,
    });
  };

  const changeCatalogOrder = (value: string): void => {
    generalChangeCatalogOrder({
      value,
      validation: validationCatalogOrder,
      setValue: setCatalogOrder,
    });
  };

  const changeReviews = (): void => {
    setReviews((prevValue) => !prevValue);
  };

  /**
   * Otras funciones
   *
   *
   */
  const getStatusOptionByValue = (
    value: string
  ): SingleValue<{ label: string; value: string }> | undefined => {
    return PRODUCT_STATUS.find((option) => option.value === value);
  };

  const getVisibilityOptionByValue = (
    value: string
  ): SingleValue<{ label: string; value: string }> | undefined => {
    return VISIBILITY.find((option) => option.value === value);
  };

  const getTypeOptionByValue = (
    value: string
  ): SingleValue<{ label: string; value: string }> | undefined => {
    return PRODUCT_TYPES.find((option) => option.value === value);
  };

  const getPackageTypeOptionByValue = (
    value: string
  ): SingleValue<{ label: string; value: string }> | undefined => {
    return PACKAGE_TYPE.find((option) => option.value === value);
  };

  const getTaxStatusOptionByValue = (
    value: string
  ): SingleValue<{ label: string; value: string }> | undefined => {
    return TAX_STATUS.find((option) => option.value === value);
  };

  const getTaxClassesOptionByValue = (
    value: string
  ): SingleValue<{ label: string; value: string }> | undefined => {
    return optionsTaxClasses.find((option) => option.value === value);
  };

  const addAttributes = (): void => {
    if (valueAttributes && descriptionAttributes) {
      const newAttributes: GeneralAttribute = {
        name: valueAttributes,
        value: descriptionAttributes,
      };
      setValueAttributes('');
      setDescriptionAttributes('');
      changeAttributes(newAttributes);
    }
  };

  const onRemoveAttibutes = (value: string): void => {
    const updatedAttributes = attributes.filter(
      (attribute) => attribute.name !== value
    );
    setAttributes(updatedAttributes);
  };

  /**
   * Export
   *
   *
   */
  const states = {
    category,
    categoryValid,

    tags,
    tagsValid,
    selectedTagsValue,

    sku,
    skuValid,

    description,
    descriptionValid,

    name,
    nameValid,

    publicName,
    publicNameValid,

    photo,
    photoValid,
    submitting,

    galleryImage,
    galleryImageValid,

    note,
    noteValid,

    salesPrice,
    salesPriceValid,

    offerPrice,
    offerPriceValid,

    cost,
    costValid,

    type,
    typeValid,
    typeDefault,
    typeOptions,

    taxStatus,
    taxStatusValid,
    taxStatusDefault,
    taxStatusOptions,

    taxClasses,
    taxClassesValid,
    taxClassesDefault,
    taxClassesOptions,

    packageType,
    packageTypeValid,
    packageTypeDefault,
    packageTypeOptions,

    qtyPack,
    qtyPackValid,

    undCbm,
    undCbmValid,

    attributes,
    attributesValid,
    valueAttributes,
    descriptionAttributes,

    status,
    statusValid,
    statusDefault,
    statusOptions,

    permanentLink,
    permanentLinkValid,

    visibility,
    visibilityValid,
    visibilityDefault,
    visibilityOptions,

    weight,
    weightValid,

    height,
    heightValid,

    width,
    widthValid,

    length,
    lengthValid,

    catalogOrder,
    catalogOrderValid,

    reviews,
    reviewsValid,

    currentId,
    categoryOptions,
    uploadCurrent,
  };

  const actions = {
    infoReset,

    validationCategory,
    validationTags,
    validationSku,
    validationDescription,
    validationName,
    validationPublicName,
    validationPhoto,
    validationGalleryImage,
    validationNote,
    validationSalesPrice,
    validationOfferPrice,
    validationCost,
    validationType,
    validationTaxStatus,
    validationTaxClasses,
    validationPackageType,
    validationQtyPack,
    validationUndCbm,
    validationProductAttributes,
    validationStatus,
    validationPermanentLink,
    validationVisibility,
    validationWeight,
    validationHeight,
    validationWidth,
    validationLength,
    validationCatalogOrder,
    validationButtonNext,

    changeCategory,
    changeTags,
    changeSku,
    changeDescription,
    changeName,
    changePublicName,
    changePhoto,
    changeGalleryImage,
    changeNote,
    changeSalesPrice,
    changeOfferPrice,
    changeCost,
    changeType,
    changeTaxStatus,
    changeTaxClasses,
    changePackageType,
    changeQtyPack,
    changeUndCbm,
    changeAttributes,
    setAttributes,
    setValueAttributes,
    setDescriptionAttributes,
    changeStatus,
    changeLink,
    changeVisibility,
    changeWeight,
    changeHeight,
    changeWidth,
    changeLength,
    changeCatalogOrder,
    changeReviews,

    setCurrentId,
    setPhoto,
    setSubmitting,

    getStatusOptionByValue,
    getVisibilityOptionByValue,
    getTypeOptionByValue,
    removeTag,
    setSelectedTagsValue,
    removeGalleryImage,
    getPackageTypeOptionByValue,
    addAttributes,
    onRemoveAttibutes,
    setGalleryImage,
    setTags,
    getTaxStatusOptionByValue,
    getTaxClassesOptionByValue,
    setReviews,
    setUploadCurrent,
  };

  return {
    states,
    actions,
  };
}
