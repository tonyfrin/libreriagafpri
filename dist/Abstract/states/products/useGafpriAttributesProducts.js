"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesProducts = useGafpriAttributesProducts;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _constants = require("../../../constants");
var _Validations = require("../../../Validations");
var _helpers = require("../../../helpers");
var _Changes = require("../../../Changes");
function useGafpriAttributesProducts(_ref) {
  var optionsTaxClasses = _ref.optionsTaxClasses,
    useError = _ref.useError,
    useCategory = _ref.useCategory;
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    category = _useState2[0],
    setCategory = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    categoryValid = _useState4[0],
    setCategoryValid = _useState4[1];
  var categoryOptions = useCategory.actions.convertResponseToCategories();
  var _useState5 = (0, _react.useState)([]),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    tags = _useState6[0],
    setTags = _useState6[1];
  var _useState7 = (0, _react.useState)(true),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    tagsValid = _useState8[0],
    setTagsValid = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    selectedTagsValue = _useState10[0],
    setSelectedTagsValue = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    sku = _useState12[0],
    setSku = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    skuValid = _useState14[0],
    setSkuValid = _useState14[1];
  var _useState15 = (0, _react.useState)(''),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    description = _useState16[0],
    setDescription = _useState16[1];
  var _useState17 = (0, _react.useState)(true),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    descriptionValid = _useState18[0],
    setDescriptionValid = _useState18[1];
  var _useState19 = (0, _react.useState)(''),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    name = _useState20[0],
    setName = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    nameValid = _useState22[0],
    setNameValid = _useState22[1];
  var _useState23 = (0, _react.useState)(''),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    publicName = _useState24[0],
    setPublicName = _useState24[1];
  var _useState25 = (0, _react.useState)(true),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    publicNameValid = _useState26[0],
    setPublicNameValid = _useState26[1];
  var _useState27 = (0, _react.useState)(_constants.PRODUCT_IMAGE_DEFAULT),
    _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
    photo = _useState28[0],
    setPhoto = _useState28[1];
  var _useState29 = (0, _react.useState)(true),
    _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
    photoValid = _useState30[0],
    setPhotoValid = _useState30[1];
  var _useState31 = (0, _react.useState)(false),
    _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
    submitting = _useState32[0],
    setSubmitting = _useState32[1];
  var _useState33 = (0, _react.useState)([]),
    _useState34 = (0, _slicedToArray2["default"])(_useState33, 2),
    galleryImage = _useState34[0],
    setGalleryImage = _useState34[1];
  var _useState35 = (0, _react.useState)(true),
    _useState36 = (0, _slicedToArray2["default"])(_useState35, 2),
    galleryImageValid = _useState36[0],
    setGalleryImageValid = _useState36[1];
  var _useState37 = (0, _react.useState)(''),
    _useState38 = (0, _slicedToArray2["default"])(_useState37, 2),
    note = _useState38[0],
    setNote = _useState38[1];
  var _useState39 = (0, _react.useState)(true),
    _useState40 = (0, _slicedToArray2["default"])(_useState39, 2),
    noteValid = _useState40[0],
    setNoteValid = _useState40[1];
  var _useState41 = (0, _react.useState)(''),
    _useState42 = (0, _slicedToArray2["default"])(_useState41, 2),
    salesPrice = _useState42[0],
    setSalesPrice = _useState42[1];
  var _useState43 = (0, _react.useState)(false),
    _useState44 = (0, _slicedToArray2["default"])(_useState43, 2),
    salesPriceValid = _useState44[0],
    setSalesPriceValid = _useState44[1];
  var _useState45 = (0, _react.useState)(''),
    _useState46 = (0, _slicedToArray2["default"])(_useState45, 2),
    offerPrice = _useState46[0],
    setOfferPrice = _useState46[1];
  var _useState47 = (0, _react.useState)(true),
    _useState48 = (0, _slicedToArray2["default"])(_useState47, 2),
    offerPriceValid = _useState48[0],
    setOfferPriceValid = _useState48[1];
  var _useState49 = (0, _react.useState)(''),
    _useState50 = (0, _slicedToArray2["default"])(_useState49, 2),
    cost = _useState50[0],
    setCost = _useState50[1];
  var _useState51 = (0, _react.useState)(true),
    _useState52 = (0, _slicedToArray2["default"])(_useState51, 2),
    costValid = _useState52[0],
    setCostValid = _useState52[1];
  var _useState53 = (0, _react.useState)(''),
    _useState54 = (0, _slicedToArray2["default"])(_useState53, 2),
    type = _useState54[0],
    setType = _useState54[1];
  var _useState55 = (0, _react.useState)(false),
    _useState56 = (0, _slicedToArray2["default"])(_useState55, 2),
    typeValid = _useState56[0],
    setTypeValid = _useState56[1];
  var _useState57 = (0, _react.useState)(_constants.PRODUCT_TYPES_DEFAULT),
    _useState58 = (0, _slicedToArray2["default"])(_useState57, 2),
    typeDefault = _useState58[0],
    setTypeDefault = _useState58[1];
  var typeOptions = _constants.PRODUCT_TYPES;
  var _useState59 = (0, _react.useState)(''),
    _useState60 = (0, _slicedToArray2["default"])(_useState59, 2),
    taxStatus = _useState60[0],
    setTaxStatus = _useState60[1];
  var _useState61 = (0, _react.useState)(true),
    _useState62 = (0, _slicedToArray2["default"])(_useState61, 2),
    taxStatusValid = _useState62[0],
    setTaxStatusValid = _useState62[1];
  var _useState63 = (0, _react.useState)(_constants.TAX_STATUS_DEFAULT),
    _useState64 = (0, _slicedToArray2["default"])(_useState63, 2),
    taxStatusDefault = _useState64[0],
    setTaxStatusDefault = _useState64[1];
  var taxStatusOptions = _constants.TAX_STATUS;
  var _useState65 = (0, _react.useState)(''),
    _useState66 = (0, _slicedToArray2["default"])(_useState65, 2),
    taxClasses = _useState66[0],
    setTaxClasses = _useState66[1];
  var _useState67 = (0, _react.useState)(true),
    _useState68 = (0, _slicedToArray2["default"])(_useState67, 2),
    taxClassesValid = _useState68[0],
    setTaxClassesValid = _useState68[1];
  var _useState69 = (0, _react.useState)({
      label: 'Clase de impuesto',
      value: ''
    }),
    _useState70 = (0, _slicedToArray2["default"])(_useState69, 2),
    taxClassesDefault = _useState70[0],
    setTaxClassesDefault = _useState70[1];
  var taxClassesOptions = optionsTaxClasses;
  var _useState71 = (0, _react.useState)(''),
    _useState72 = (0, _slicedToArray2["default"])(_useState71, 2),
    packageType = _useState72[0],
    setPackageType = _useState72[1];
  var _useState73 = (0, _react.useState)(true),
    _useState74 = (0, _slicedToArray2["default"])(_useState73, 2),
    packageTypeValid = _useState74[0],
    setPackageTypeValid = _useState74[1];
  var _useState75 = (0, _react.useState)(_constants.PACKAGE_TYPE_DEFAULT),
    _useState76 = (0, _slicedToArray2["default"])(_useState75, 2),
    packageTypeDefault = _useState76[0],
    setPackageTypeDefault = _useState76[1];
  var packageTypeOptions = _constants.PACKAGE_TYPE;
  var _useState77 = (0, _react.useState)(''),
    _useState78 = (0, _slicedToArray2["default"])(_useState77, 2),
    qtyPack = _useState78[0],
    setQtyPack = _useState78[1];
  var _useState79 = (0, _react.useState)(true),
    _useState80 = (0, _slicedToArray2["default"])(_useState79, 2),
    qtyPackValid = _useState80[0],
    setQtyPackValid = _useState80[1];
  var _useState81 = (0, _react.useState)(''),
    _useState82 = (0, _slicedToArray2["default"])(_useState81, 2),
    undCbm = _useState82[0],
    setUndCbm = _useState82[1];
  var _useState83 = (0, _react.useState)(true),
    _useState84 = (0, _slicedToArray2["default"])(_useState83, 2),
    undCbmValid = _useState84[0],
    setUndCbmValid = _useState84[1];
  var _useState85 = (0, _react.useState)([]),
    _useState86 = (0, _slicedToArray2["default"])(_useState85, 2),
    attributes = _useState86[0],
    setAttributes = _useState86[1];
  var _useState87 = (0, _react.useState)(true),
    _useState88 = (0, _slicedToArray2["default"])(_useState87, 2),
    attributesValid = _useState88[0],
    setAttributesValid = _useState88[1];
  var _useState89 = (0, _react.useState)(''),
    _useState90 = (0, _slicedToArray2["default"])(_useState89, 2),
    valueAttributes = _useState90[0],
    setValueAttributes = _useState90[1];
  var _useState91 = (0, _react.useState)(''),
    _useState92 = (0, _slicedToArray2["default"])(_useState91, 2),
    descriptionAttributes = _useState92[0],
    setDescriptionAttributes = _useState92[1];
  var _useState93 = (0, _react.useState)(''),
    _useState94 = (0, _slicedToArray2["default"])(_useState93, 2),
    status = _useState94[0],
    setStatus = _useState94[1];
  var _useState95 = (0, _react.useState)(false),
    _useState96 = (0, _slicedToArray2["default"])(_useState95, 2),
    statusValid = _useState96[0],
    setStatusValid = _useState96[1];
  var _useState97 = (0, _react.useState)(_constants.PRODUCT_STATUS_DEFAULT),
    _useState98 = (0, _slicedToArray2["default"])(_useState97, 2),
    statusDefault = _useState98[0],
    setStatusDefault = _useState98[1];
  var statusOptions = _constants.PRODUCT_STATUS;
  var _useState99 = (0, _react.useState)(''),
    _useState100 = (0, _slicedToArray2["default"])(_useState99, 2),
    permanentLink = _useState100[0],
    setPermanentLink = _useState100[1];
  var _useState101 = (0, _react.useState)(true),
    _useState102 = (0, _slicedToArray2["default"])(_useState101, 2),
    permanentLinkValid = _useState102[0],
    setPermanentLinkValid = _useState102[1];
  var _useState103 = (0, _react.useState)(''),
    _useState104 = (0, _slicedToArray2["default"])(_useState103, 2),
    visibility = _useState104[0],
    setVisibility = _useState104[1];
  var _useState105 = (0, _react.useState)(false),
    _useState106 = (0, _slicedToArray2["default"])(_useState105, 2),
    visibilityValid = _useState106[0],
    setVisibilityValid = _useState106[1];
  var _useState107 = (0, _react.useState)(_constants.VISIBILITY_DEFAULT),
    _useState108 = (0, _slicedToArray2["default"])(_useState107, 2),
    visibilityDefault = _useState108[0],
    setVisibilityDefault = _useState108[1];
  var visibilityOptions = _constants.VISIBILITY;
  var _useState109 = (0, _react.useState)(''),
    _useState110 = (0, _slicedToArray2["default"])(_useState109, 2),
    weight = _useState110[0],
    setWeight = _useState110[1];
  var _useState111 = (0, _react.useState)(true),
    _useState112 = (0, _slicedToArray2["default"])(_useState111, 2),
    weightValid = _useState112[0],
    setWeightValid = _useState112[1];
  var _useState113 = (0, _react.useState)(''),
    _useState114 = (0, _slicedToArray2["default"])(_useState113, 2),
    height = _useState114[0],
    setHeight = _useState114[1];
  var _useState115 = (0, _react.useState)(true),
    _useState116 = (0, _slicedToArray2["default"])(_useState115, 2),
    heightValid = _useState116[0],
    setHeightValid = _useState116[1];
  var _useState117 = (0, _react.useState)(''),
    _useState118 = (0, _slicedToArray2["default"])(_useState117, 2),
    width = _useState118[0],
    setWidth = _useState118[1];
  var _useState119 = (0, _react.useState)(true),
    _useState120 = (0, _slicedToArray2["default"])(_useState119, 2),
    widthValid = _useState120[0],
    setWidthValid = _useState120[1];
  var _useState121 = (0, _react.useState)(''),
    _useState122 = (0, _slicedToArray2["default"])(_useState121, 2),
    length = _useState122[0],
    setLength = _useState122[1];
  var _useState123 = (0, _react.useState)(true),
    _useState124 = (0, _slicedToArray2["default"])(_useState123, 2),
    lengthValid = _useState124[0],
    setLengthValid = _useState124[1];
  var _useState125 = (0, _react.useState)(''),
    _useState126 = (0, _slicedToArray2["default"])(_useState125, 2),
    catalogOrder = _useState126[0],
    setCatalogOrder = _useState126[1];
  var _useState127 = (0, _react.useState)(true),
    _useState128 = (0, _slicedToArray2["default"])(_useState127, 2),
    catalogOrderValid = _useState128[0],
    setCatalogOrderValid = _useState128[1];
  var _useState129 = (0, _react.useState)(false),
    _useState130 = (0, _slicedToArray2["default"])(_useState129, 2),
    reviews = _useState130[0],
    setReviews = _useState130[1];
  var reviewsValid = true;
  var _useState131 = (0, _react.useState)(0),
    _useState132 = (0, _slicedToArray2["default"])(_useState131, 2),
    currentId = _useState132[0],
    setCurrentId = _useState132[1];
  var _useState133 = (0, _react.useState)(false),
    _useState134 = (0, _slicedToArray2["default"])(_useState133, 2),
    uploadCurrent = _useState134[0],
    setUploadCurrent = _useState134[1];
  var infoReset = function infoReset() {
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
    setPhoto(_constants.PRODUCT_IMAGE_DEFAULT);
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
    setTypeDefault(_constants.PRODUCT_TYPES_DEFAULT);
    setTaxStatus('');
    setTaxStatusValid(true);
    setTaxStatusDefault(_constants.TAX_STATUS_DEFAULT);
    setTaxClasses('');
    setTaxClassesValid(true);
    setTaxClassesDefault({
      label: 'Clase de impuesto',
      value: ''
    });
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
    setVisibilityDefault(_constants.VISIBILITY_DEFAULT);
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

  var validationCategory = function validationCategory(value) {
    return (0, _Validations.generalValidationCategoryId)({
      value: value,
      setValid: setCategoryValid,
      currentValid: categoryValid
    });
  };
  var validationTags = function validationTags(value) {
    return (0, _Validations.generalValidationTags)({
      value: value,
      setValid: setTagsValid,
      currentValid: tagsValid
    });
  };
  var validationSku = function validationSku(value) {
    return (0, _Validations.generalValidationSku)({
      value: value,
      setValid: setSkuValid,
      currentValid: skuValid
    });
  };
  var validationDescription = function validationDescription(value) {
    return (0, _Validations.generalValidationDescription)({
      value: value,
      setValid: setDescriptionValid,
      currentValid: descriptionValid,
      required: false
    });
  };
  var validationName = function validationName(value) {
    return (0, _Validations.generalValidationName)({
      value: value,
      setValid: setNameValid,
      currentValid: nameValid
    });
  };
  var validationPublicName = function validationPublicName(value) {
    return (0, _Validations.generalValidationPublicName)({
      value: value,
      setValid: setPublicNameValid,
      currentValid: publicNameValid,
      required: false
    });
  };
  var validationPhoto = function validationPhoto(value) {
    return (0, _Validations.generalValidationPhoto)({
      value: value,
      setValid: setPhotoValid,
      currentValid: photoValid,
      required: false,
      inputId: _constants.PHOTO_INPUT
    });
  };
  var validationGalleryImage = function validationGalleryImage(value) {
    return (0, _Validations.generalValidationGalleryImage)({
      value: value,
      setValid: setGalleryImageValid,
      currentValid: galleryImageValid,
      required: false
    });
  };
  var validationNote = function validationNote(value) {
    return (0, _Validations.generalValidationNote)({
      value: value,
      setValid: setNoteValid,
      currentValid: noteValid,
      required: false
    }); //
  };
  var validationSalesPrice = function validationSalesPrice(value) {
    return (0, _Validations.generalValidationSalesPrice)({
      value: value,
      setValid: setSalesPriceValid,
      currentValid: salesPriceValid
    }); //
  };
  var validationOfferPrice = function validationOfferPrice(value) {
    return (0, _Validations.generalValidationOfferPrice)({
      value: value,
      setValid: setOfferPriceValid,
      currentValid: offerPriceValid,
      required: false
    });
  };
  var validationCost = function validationCost(value) {
    return (0, _Validations.generalValidationCost)({
      value: value,
      setValid: setCostValid,
      currentValid: costValid,
      required: false
    });
  };
  var validationType = function validationType(value) {
    return (0, _Validations.generalValidationType)({
      value: value,
      setValid: setTypeValid,
      currentValid: typeValid
    }); //
  };
  var validationTaxStatus = function validationTaxStatus(value) {
    return (0, _Validations.generalValidationTaxStatus)({
      newValue: value,
      setValid: setTaxStatusValid,
      currentValid: taxStatusValid
    });
  };
  var validationTaxClasses = function validationTaxClasses(value) {
    return (0, _Validations.generalValidationTaxClass)({
      newValue: value,
      setValid: setTaxClassesValid,
      currentValid: taxClassesValid
    });
  };
  var validationPackageType = function validationPackageType(value) {
    return (0, _Validations.generalValidationPackageType)({
      newValue: value,
      setValid: setPackageTypeValid,
      currentValid: packageTypeValid
    });
  };
  var validationQtyPack = function validationQtyPack(value) {
    return (0, _Validations.generalValidationQtyPack)({
      value: value,
      setValid: setQtyPackValid,
      currentValid: qtyPackValid,
      required: false
    });
  };
  var validationUndCbm = function validationUndCbm(value) {
    return (0, _Validations.generalValidationUndCbm)({
      value: value,
      setValid: setUndCbmValid,
      currentValid: undCbmValid,
      required: false
    });
  };
  var validationProductAttributes = function validationProductAttributes(value) {
    return (0, _Validations.generalValidationProductAttributes)({
      value: value,
      setValid: setAttributesValid,
      currentValid: attributesValid,
      required: false
    });
  };
  var validationStatus = function validationStatus(value) {
    return (0, _Validations.generalValidationStatus)({
      value: value,
      setValid: setStatusValid,
      currentValid: statusValid
    });
  };
  var validationPermanentLink = function validationPermanentLink(value) {
    return (0, _Validations.generalValidationPermanentLink)({
      value: value,
      setValid: setPermanentLinkValid,
      currentValid: permanentLinkValid,
      required: false
    });
  };
  var validationVisibility = function validationVisibility(value) {
    return (0, _Validations.generalValidationVisibility)({
      value: value,
      setValid: setVisibilityValid,
      currentValid: visibilityValid
    });
  };
  var validationWeight = function validationWeight(value) {
    return (0, _Validations.generalValidationWeight)({
      value: value,
      setValid: setWeightValid,
      currentValid: weightValid,
      required: false
    });
  };
  var validationHeight = function validationHeight(value) {
    return (0, _Validations.generalValidationHeight)({
      value: value,
      setValid: setHeightValid,
      currentValid: heightValid,
      required: false
    });
  };
  var validationWidth = function validationWidth(value) {
    return (0, _Validations.generalValidationWidth)({
      value: value,
      setValid: setWidthValid,
      currentValid: widthValid,
      required: false
    });
  };
  var validationLength = function validationLength(value) {
    return (0, _Validations.generalValidationLength)({
      value: value,
      setValid: setLengthValid,
      currentValid: lengthValid,
      required: false
    });
  };
  var validationCatalogOrder = function validationCatalogOrder(value) {
    return (0, _Validations.generalValidationCatalogOrder)({
      value: value,
      setValid: setCatalogOrderValid,
      currentValid: catalogOrderValid,
      required: false
    });
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [skuValid, nameValid, salesPriceValid, typeValid, statusValid, visibilityValid],
      inputId: 'general-product'
    });
  };

  // Funciones de cambios
  var changeCategory = function changeCategory(value) {
    (0, _Changes.generalChangeCategoryId)({
      value: value,
      validation: validationCategory,
      setValue: setCategory
    });
  };
  var changeTags = function changeTags(value) {
    (0, _Changes.generalChangeTags)({
      value: value,
      validation: validationTags,
      tags: tags,
      setValue: setTags,
      setSelectedValue: setSelectedTagsValue
    });
  };
  var removeTag = function removeTag(tag) {
    setTags(function (prevRegions) {
      return prevRegions.filter(function (t) {
        return t !== tag;
      });
    });
  };
  var changeSku = function changeSku(value) {
    (0, _Changes.generalChangeSku)({
      value: value,
      validation: validationSku,
      setValue: setSku
    });
  };
  var changeDescription = function changeDescription(value) {
    (0, _Changes.generalChangeDescription)({
      value: value,
      validation: validationDescription,
      setValue: setDescription
    });
  };
  var changeName = function changeName(value) {
    var newName = (0, _Changes.generalChangeName)({
      value: value,
      validation: validationName,
      setValue: setName
    });
    setPermanentLink((0, _helpers.generatePermanentLink)(newName));
  };
  var changePublicName = function changePublicName(value) {
    (0, _Changes.generalChangeName)({
      value: value,
      validation: validationPublicName,
      setValue: setPublicName
    });
  };
  var changePhoto = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _Changes.generalChangePhoto)({
              e: e,
              changeError: useError.actions.changeError,
              setSubmitting: setSubmitting,
              setPhoto: setPhoto,
              validation: validationPhoto
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function changePhoto(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var changeGalleryImage = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(e) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _Changes.generalChangeGalleryPhoto)({
              e: e,
              changeError: useError.actions.changeError,
              setSubmitting: setSubmitting,
              setPhoto: setGalleryImage,
              validation: validationGalleryImage,
              selectedOptions: galleryImage
            });
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function changeGalleryImage(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var removeGalleryImage = function removeGalleryImage(image) {
    setGalleryImage(function (prevRegions) {
      return prevRegions.filter(function (i) {
        return i !== image;
      });
    });
  };
  var changeNote = function changeNote(value) {
    (0, _Changes.generalChangeNote)({
      value: value,
      validation: validationNote,
      setValue: setNote
    });
  };
  var changeSalesPrice = function changeSalesPrice(value) {
    (0, _Changes.generalChangeSalesPrice)({
      value: value,
      validation: validationSalesPrice,
      setValue: setSalesPrice
    });
  };
  var changeOfferPrice = function changeOfferPrice(value) {
    (0, _Changes.generalChangeOfferPrice)({
      value: value,
      validation: validationOfferPrice,
      setValue: setOfferPrice
    });
  };
  var changeCost = function changeCost(value) {
    (0, _Changes.generalChangeCost)({
      value: value,
      validation: validationCost,
      setValue: setCost
    });
  };
  var changeType = function changeType(value) {
    (0, _Changes.generalChangeType)({
      options: value,
      validation: validationType,
      setDefault: setTypeDefault,
      setValue: setType
    });
  };
  var changeTaxStatus = function changeTaxStatus(options) {
    (0, _Changes.generalChangeTaxStatus)({
      options: options,
      validation: validationTaxStatus,
      setDefault: setTaxStatusDefault,
      setValue: setTaxStatus
    });
  };
  var changeTaxClasses = function changeTaxClasses(options) {
    (0, _Changes.generalChangeTaxClass)({
      options: options,
      validation: validationTaxClasses,
      setDefault: setTaxClassesDefault,
      setValue: setTaxClasses
    });
  };
  var changePackageType = function changePackageType(options) {
    (0, _Changes.generalChangePackageType)({
      options: options,
      validation: validationPackageType,
      setDefault: setPackageTypeDefault,
      setValue: setPackageType
    });
  };
  var changeQtyPack = function changeQtyPack(value) {
    (0, _Changes.generalChangeQtyPack)({
      value: value,
      validation: validationQtyPack,
      setValue: setQtyPack
    });
  };
  var changeUndCbm = function changeUndCbm(value) {
    (0, _Changes.generalChangeUndCbm)({
      value: value,
      validation: validationUndCbm,
      setValue: setUndCbm
    });
  };
  var changeAttributes = function changeAttributes(value) {
    (0, _Changes.generalChangeAttributes)({
      newValue: value,
      selectedOptions: attributes,
      validation: validationProductAttributes,
      setValue: setAttributes
    });
  };
  var changeStatus = function changeStatus(options) {
    if (options === null) return;
    (0, _Changes.generalChangeStatus)({
      options: options,
      validation: validationStatus,
      setDefault: setStatusDefault,
      setValue: setStatus
    });
  };
  var changeLink = function changeLink(value) {
    (0, _Changes.generalChangeLink)({
      value: value,
      validation: validationPermanentLink,
      setValue: setPermanentLink
    });
  };
  var changeVisibility = function changeVisibility(value) {
    (0, _Changes.generalChangeVisibility)({
      options: value,
      validation: validationVisibility,
      setDefault: setVisibilityDefault,
      setValue: setVisibility
    });
  };
  var changeWeight = function changeWeight(value) {
    (0, _Changes.generalChangeWeight)({
      value: value,
      validation: validationWeight,
      setValue: setWeight
    });
  };
  var changeHeight = function changeHeight(value) {
    (0, _Changes.generalChangeHeight)({
      value: value,
      validation: validationHeight,
      setValue: setHeight
    });
  };
  var changeWidth = function changeWidth(value) {
    (0, _Changes.generalChangeWidth)({
      value: value,
      validation: validationWidth,
      setValue: setWidth
    });
  };
  var changeLength = function changeLength(value) {
    (0, _Changes.generalChangeLength)({
      value: value,
      validation: validationLength,
      setValue: setLength
    });
  };
  var changeCatalogOrder = function changeCatalogOrder(value) {
    (0, _Changes.generalChangeCatalogOrder)({
      value: value,
      validation: validationCatalogOrder,
      setValue: setCatalogOrder
    });
  };
  var changeReviews = function changeReviews() {
    setReviews(function (prevValue) {
      return !prevValue;
    });
  };

  /**
   * Otras funciones
   *
   *
   */
  var getStatusOptionByValue = function getStatusOptionByValue(value) {
    return _constants.PRODUCT_STATUS.find(function (option) {
      return option.value === value;
    });
  };
  var getVisibilityOptionByValue = function getVisibilityOptionByValue(value) {
    return _constants.VISIBILITY.find(function (option) {
      return option.value === value;
    });
  };
  var getTypeOptionByValue = function getTypeOptionByValue(value) {
    return _constants.PRODUCT_TYPES.find(function (option) {
      return option.value === value;
    });
  };
  var getPackageTypeOptionByValue = function getPackageTypeOptionByValue(value) {
    return _constants.PACKAGE_TYPE.find(function (option) {
      return option.value === value;
    });
  };
  var getTaxStatusOptionByValue = function getTaxStatusOptionByValue(value) {
    return _constants.TAX_STATUS.find(function (option) {
      return option.value === value;
    });
  };
  var getTaxClassesOptionByValue = function getTaxClassesOptionByValue(value) {
    return optionsTaxClasses.find(function (option) {
      return option.value === value;
    });
  };
  var addAttributes = function addAttributes() {
    if (valueAttributes && descriptionAttributes) {
      var newAttributes = {
        name: valueAttributes,
        value: descriptionAttributes
      };
      setValueAttributes('');
      setDescriptionAttributes('');
      changeAttributes(newAttributes);
    }
  };
  var onRemoveAttibutes = function onRemoveAttibutes(value) {
    var updatedAttributes = attributes.filter(function (attribute) {
      return attribute.name !== value;
    });
    setAttributes(updatedAttributes);
  };

  /**
   * Export
   *
   *
   */
  var states = {
    category: category,
    categoryValid: categoryValid,
    tags: tags,
    tagsValid: tagsValid,
    selectedTagsValue: selectedTagsValue,
    sku: sku,
    skuValid: skuValid,
    description: description,
    descriptionValid: descriptionValid,
    name: name,
    nameValid: nameValid,
    publicName: publicName,
    publicNameValid: publicNameValid,
    photo: photo,
    photoValid: photoValid,
    submitting: submitting,
    galleryImage: galleryImage,
    galleryImageValid: galleryImageValid,
    note: note,
    noteValid: noteValid,
    salesPrice: salesPrice,
    salesPriceValid: salesPriceValid,
    offerPrice: offerPrice,
    offerPriceValid: offerPriceValid,
    cost: cost,
    costValid: costValid,
    type: type,
    typeValid: typeValid,
    typeDefault: typeDefault,
    typeOptions: typeOptions,
    taxStatus: taxStatus,
    taxStatusValid: taxStatusValid,
    taxStatusDefault: taxStatusDefault,
    taxStatusOptions: taxStatusOptions,
    taxClasses: taxClasses,
    taxClassesValid: taxClassesValid,
    taxClassesDefault: taxClassesDefault,
    taxClassesOptions: taxClassesOptions,
    packageType: packageType,
    packageTypeValid: packageTypeValid,
    packageTypeDefault: packageTypeDefault,
    packageTypeOptions: packageTypeOptions,
    qtyPack: qtyPack,
    qtyPackValid: qtyPackValid,
    undCbm: undCbm,
    undCbmValid: undCbmValid,
    attributes: attributes,
    attributesValid: attributesValid,
    valueAttributes: valueAttributes,
    descriptionAttributes: descriptionAttributes,
    status: status,
    statusValid: statusValid,
    statusDefault: statusDefault,
    statusOptions: statusOptions,
    permanentLink: permanentLink,
    permanentLinkValid: permanentLinkValid,
    visibility: visibility,
    visibilityValid: visibilityValid,
    visibilityDefault: visibilityDefault,
    visibilityOptions: visibilityOptions,
    weight: weight,
    weightValid: weightValid,
    height: height,
    heightValid: heightValid,
    width: width,
    widthValid: widthValid,
    length: length,
    lengthValid: lengthValid,
    catalogOrder: catalogOrder,
    catalogOrderValid: catalogOrderValid,
    reviews: reviews,
    reviewsValid: reviewsValid,
    currentId: currentId,
    categoryOptions: categoryOptions,
    uploadCurrent: uploadCurrent
  };
  var actions = {
    infoReset: infoReset,
    validationCategory: validationCategory,
    validationTags: validationTags,
    validationSku: validationSku,
    validationDescription: validationDescription,
    validationName: validationName,
    validationPublicName: validationPublicName,
    validationPhoto: validationPhoto,
    validationGalleryImage: validationGalleryImage,
    validationNote: validationNote,
    validationSalesPrice: validationSalesPrice,
    validationOfferPrice: validationOfferPrice,
    validationCost: validationCost,
    validationType: validationType,
    validationTaxStatus: validationTaxStatus,
    validationTaxClasses: validationTaxClasses,
    validationPackageType: validationPackageType,
    validationQtyPack: validationQtyPack,
    validationUndCbm: validationUndCbm,
    validationProductAttributes: validationProductAttributes,
    validationStatus: validationStatus,
    validationPermanentLink: validationPermanentLink,
    validationVisibility: validationVisibility,
    validationWeight: validationWeight,
    validationHeight: validationHeight,
    validationWidth: validationWidth,
    validationLength: validationLength,
    validationCatalogOrder: validationCatalogOrder,
    validationButtonNext: validationButtonNext,
    changeCategory: changeCategory,
    changeTags: changeTags,
    changeSku: changeSku,
    changeDescription: changeDescription,
    changeName: changeName,
    changePublicName: changePublicName,
    changePhoto: changePhoto,
    changeGalleryImage: changeGalleryImage,
    changeNote: changeNote,
    changeSalesPrice: changeSalesPrice,
    changeOfferPrice: changeOfferPrice,
    changeCost: changeCost,
    changeType: changeType,
    changeTaxStatus: changeTaxStatus,
    changeTaxClasses: changeTaxClasses,
    changePackageType: changePackageType,
    changeQtyPack: changeQtyPack,
    changeUndCbm: changeUndCbm,
    changeAttributes: changeAttributes,
    setAttributes: setAttributes,
    setValueAttributes: setValueAttributes,
    setDescriptionAttributes: setDescriptionAttributes,
    changeStatus: changeStatus,
    changeLink: changeLink,
    changeVisibility: changeVisibility,
    changeWeight: changeWeight,
    changeHeight: changeHeight,
    changeWidth: changeWidth,
    changeLength: changeLength,
    changeCatalogOrder: changeCatalogOrder,
    changeReviews: changeReviews,
    setCurrentId: setCurrentId,
    setPhoto: setPhoto,
    setSubmitting: setSubmitting,
    getStatusOptionByValue: getStatusOptionByValue,
    getVisibilityOptionByValue: getVisibilityOptionByValue,
    getTypeOptionByValue: getTypeOptionByValue,
    removeTag: removeTag,
    setSelectedTagsValue: setSelectedTagsValue,
    removeGalleryImage: removeGalleryImage,
    getPackageTypeOptionByValue: getPackageTypeOptionByValue,
    addAttributes: addAttributes,
    onRemoveAttibutes: onRemoveAttibutes,
    setGalleryImage: setGalleryImage,
    setTags: setTags,
    getTaxStatusOptionByValue: getTaxStatusOptionByValue,
    getTaxClassesOptionByValue: getTaxClassesOptionByValue,
    setReviews: setReviews,
    setUploadCurrent: setUploadCurrent
  };
  return {
    states: states,
    actions: actions
  };
}