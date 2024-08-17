"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesEntity = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _Validations = require("../../../Validations");
var _Changes = require("../../../Changes");
var _constants = require("../../../constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useGafpriAttributesEntity = exports.useGafpriAttributesEntity = function useGafpriAttributesEntity(_ref) {
  var _useTypeDocumentId$st;
  var useTypeDocumentId = _ref.useTypeDocumentId,
    useError = _ref.useError;
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isReset = _useState2[0],
    setIsReset = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    name = _useState4[0],
    setName = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    nameValid = _useState6[0],
    setNameValid = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    lastName = _useState8[0],
    setLastName = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    lastNameValid = _useState10[0],
    setLastNameValid = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    typeDocumentIdId = _useState12[0],
    setTypeDocumentIdId = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    typeDocumentIdIdValid = _useState14[0],
    setTypeDocumentIdIdValid = _useState14[1];
  var _useState15 = (0, _react.useState)({
      value: '',
      label: 'Elija el tipo de Documento'
    }),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    typeDocumentIdIdDefault = _useState16[0],
    setTypeDocumentIdIdDefault = _useState16[1];
  var typeDocumentIdIdOptions = ((_useTypeDocumentId$st = useTypeDocumentId.states.typeDocumentId.data) === null || _useTypeDocumentId$st === void 0 || (_useTypeDocumentId$st = _useTypeDocumentId$st.items) === null || _useTypeDocumentId$st === void 0 ? void 0 : _useTypeDocumentId$st.map(function (item) {
    var countryName = _constants.Countries[0][item.country];
    var label = "".concat(item.name, " (").concat(countryName, ")");
    return {
      value: "".concat(item.id),
      label: label
    };
  })) || [];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    index = _useState18[0],
    setIndex = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    indexValid = _useState20[0],
    setIndexValid = _useState20[1];
  var _useState21 = (0, _react.useState)({
      value: '',
      label: 'Elija el tipo de Documento'
    }),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    indexDefault = _useState22[0],
    setIndexDefault = _useState22[1];
  var indexOptions = [{
    label: 'J',
    value: 'J'
  }, {
    label: 'V',
    value: 'V'
  }, {
    label: 'G',
    value: 'G'
  }, {
    label: 'No Aplica',
    value: 'null'
  }];
  var _useState23 = (0, _react.useState)(''),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    digit = _useState24[0],
    setDigit = _useState24[1];
  var _useState25 = (0, _react.useState)(false),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    digitValid = _useState26[0],
    setDigitValid = _useState26[1];
  var _useState27 = (0, _react.useState)('bill'),
    _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
    addressType = _useState28[0],
    setAddressType = _useState28[1];
  var _useState29 = (0, _react.useState)(true),
    _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
    addressTypeValid = _useState30[0],
    setAddressTypeValid = _useState30[1];
  var _useState31 = (0, _react.useState)({
      value: 'bill',
      label: 'Facturación'
    }),
    _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
    addressTypeDefault = _useState32[0],
    setAddressTypeDefault = _useState32[1];
  var addressTypeOptions = [{
    label: 'Envío',
    value: 'shipping'
  }, {
    label: 'Facturación',
    value: 'bill'
  }];
  var _useState33 = (0, _react.useState)(''),
    _useState34 = (0, _slicedToArray2["default"])(_useState33, 2),
    address1 = _useState34[0],
    setAddress1 = _useState34[1];
  var _useState35 = (0, _react.useState)(false),
    _useState36 = (0, _slicedToArray2["default"])(_useState35, 2),
    address1Valid = _useState36[0],
    setAddress1Valid = _useState36[1];
  var _useState37 = (0, _react.useState)(''),
    _useState38 = (0, _slicedToArray2["default"])(_useState37, 2),
    address2 = _useState38[0],
    setAddress2 = _useState38[1];
  var _useState39 = (0, _react.useState)(true),
    _useState40 = (0, _slicedToArray2["default"])(_useState39, 2),
    address2Valid = _useState40[0],
    setAddress2Valid = _useState40[1];
  var _useState41 = (0, _react.useState)(_constants.CITY_DEFAULT.value),
    _useState42 = (0, _slicedToArray2["default"])(_useState41, 2),
    city = _useState42[0],
    setCity = _useState42[1];
  var _useState43 = (0, _react.useState)(true),
    _useState44 = (0, _slicedToArray2["default"])(_useState43, 2),
    cityValid = _useState44[0],
    setCityValid = _useState44[1];
  var _useState45 = (0, _react.useState)(_constants.CITY_DEFAULT),
    _useState46 = (0, _slicedToArray2["default"])(_useState45, 2),
    cityDefault = _useState46[0],
    setCityDefault = _useState46[1];
  var _useState47 = (0, _react.useState)([]),
    _useState48 = (0, _slicedToArray2["default"])(_useState47, 2),
    cityOptions = _useState48[0],
    setCityOptions = _useState48[1];
  var _useState49 = (0, _react.useState)(_constants.STATE_COUNTRY_DEFAULT.value),
    _useState50 = (0, _slicedToArray2["default"])(_useState49, 2),
    state = _useState50[0],
    setStateCountry = _useState50[1];
  var _useState51 = (0, _react.useState)(true),
    _useState52 = (0, _slicedToArray2["default"])(_useState51, 2),
    stateCountryValid = _useState52[0],
    setStateCountryValid = _useState52[1];
  var _useState53 = (0, _react.useState)(_constants.STATE_COUNTRY_DEFAULT),
    _useState54 = (0, _slicedToArray2["default"])(_useState53, 2),
    stateCountryDefault = _useState54[0],
    setStateCountryDefault = _useState54[1];
  var _useState55 = (0, _react.useState)([]),
    _useState56 = (0, _slicedToArray2["default"])(_useState55, 2),
    stateCountryOptions = _useState56[0],
    setStateCountryOptions = _useState56[1];
  var _useState57 = (0, _react.useState)(_constants.COUNTRY_DEFAULT.value),
    _useState58 = (0, _slicedToArray2["default"])(_useState57, 2),
    country = _useState58[0],
    setCountry = _useState58[1];
  var _useState59 = (0, _react.useState)(true),
    _useState60 = (0, _slicedToArray2["default"])(_useState59, 2),
    countryValid = _useState60[0],
    setCountryValid = _useState60[1];
  var _useState61 = (0, _react.useState)(_constants.COUNTRY_DEFAULT),
    _useState62 = (0, _slicedToArray2["default"])(_useState61, 2),
    countryDefault = _useState62[0],
    setCountryDefault = _useState62[1];
  var countryOptions = [];
  _constants.Countries.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
      countryOptions.push({
        value: key,
        label: item[key]
      });
    });
  });
  var _useState63 = (0, _react.useState)(''),
    _useState64 = (0, _slicedToArray2["default"])(_useState63, 2),
    postCode = _useState64[0],
    setPostCode = _useState64[1];
  var _useState65 = (0, _react.useState)(true),
    _useState66 = (0, _slicedToArray2["default"])(_useState65, 2),
    postCodeValid = _useState66[0],
    setPostCodeValid = _useState66[1];
  var _useState67 = (0, _react.useState)(''),
    _useState68 = (0, _slicedToArray2["default"])(_useState67, 2),
    email = _useState68[0],
    setEmail = _useState68[1];
  var _useState69 = (0, _react.useState)(false),
    _useState70 = (0, _slicedToArray2["default"])(_useState69, 2),
    emailValid = _useState70[0],
    setEmailValid = _useState70[1];
  var _useState71 = (0, _react.useState)(''),
    _useState72 = (0, _slicedToArray2["default"])(_useState71, 2),
    phone = _useState72[0],
    setPhone = _useState72[1];
  var _useState73 = (0, _react.useState)(false),
    _useState74 = (0, _slicedToArray2["default"])(_useState73, 2),
    phoneValid = _useState74[0],
    setPhoneValid = _useState74[1];
  var _useState75 = (0, _react.useState)(''),
    _useState76 = (0, _slicedToArray2["default"])(_useState75, 2),
    type = _useState76[0],
    setType = _useState76[1];
  var _useState77 = (0, _react.useState)(false),
    _useState78 = (0, _slicedToArray2["default"])(_useState77, 2),
    typeValid = _useState78[0],
    setTypeValid = _useState78[1];
  var _useState79 = (0, _react.useState)({
      value: '',
      label: 'Elija el tipo de Entidad'
    }),
    _useState80 = (0, _slicedToArray2["default"])(_useState79, 2),
    typeDefault = _useState80[0],
    setTypeDefault = _useState80[1];
  var typeOptions = [{
    value: 'personal',
    label: 'Natural'
  }, {
    value: 'legal',
    label: 'Jurídica'
  }];
  var _useState81 = (0, _react.useState)('https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'),
    _useState82 = (0, _slicedToArray2["default"])(_useState81, 2),
    photo = _useState82[0],
    setPhoto = _useState82[1];
  var _useState83 = (0, _react.useState)(false),
    _useState84 = (0, _slicedToArray2["default"])(_useState83, 2),
    photoValid = _useState84[0],
    setPhotoValid = _useState84[1];
  var _useState85 = (0, _react.useState)(false),
    _useState86 = (0, _slicedToArray2["default"])(_useState85, 2),
    submitting = _useState86[0],
    setSubmitting = _useState86[1];
  var _useState87 = (0, _react.useState)('https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'),
    _useState88 = (0, _slicedToArray2["default"])(_useState87, 2),
    documentPhoto = _useState88[0],
    setDocumentPhoto = _useState88[1];
  var _useState89 = (0, _react.useState)(false),
    _useState90 = (0, _slicedToArray2["default"])(_useState89, 2),
    documentPhotoValid = _useState90[0],
    setDocumentPhotoValid = _useState90[1];
  var _useState91 = (0, _react.useState)(false),
    _useState92 = (0, _slicedToArray2["default"])(_useState91, 2),
    documentSubmitting = _useState92[0],
    setDocumentSubmitting = _useState92[1];
  var _useState93 = (0, _react.useState)('active'),
    _useState94 = (0, _slicedToArray2["default"])(_useState93, 2),
    status = _useState94[0],
    setStatus = _useState94[1];
  var _useState95 = (0, _react.useState)(false),
    _useState96 = (0, _slicedToArray2["default"])(_useState95, 2),
    statusValid = _useState96[0],
    setStatusValid = _useState96[1];
  var _useState97 = (0, _react.useState)({
      value: 'active',
      label: 'Activo'
    }),
    _useState98 = (0, _slicedToArray2["default"])(_useState97, 2),
    statusDefault = _useState98[0],
    setStatusDefault = _useState98[1];
  var statusOptions = [{
    label: 'Activo',
    value: 'active'
  }, {
    label: 'Inactivo',
    value: 'inactive'
  }];
  var _useState99 = (0, _react.useState)([]),
    _useState100 = (0, _slicedToArray2["default"])(_useState99, 2),
    documentId = _useState100[0],
    setDocumentId = _useState100[1];
  var _useState101 = (0, _react.useState)([]),
    _useState102 = (0, _slicedToArray2["default"])(_useState101, 2),
    address = _useState102[0],
    setAddress = _useState102[1];
  var _useState103 = (0, _react.useState)(false),
    _useState104 = (0, _slicedToArray2["default"])(_useState103, 2),
    addressValid = _useState104[0],
    setAddressValid = _useState104[1];
  var _useState105 = (0, _react.useState)(0),
    _useState106 = (0, _slicedToArray2["default"])(_useState105, 2),
    currentId = _useState106[0],
    setCurrentId = _useState106[1];
  var _useState107 = (0, _react.useState)('personal'),
    _useState108 = (0, _slicedToArray2["default"])(_useState107, 2),
    formType = _useState108[0],
    setFormType = _useState108[1];
  var infoReset = function infoReset() {
    setIsReset(true);
    setName('');
    setNameValid(false);
    setLastName('');
    setLastNameValid(true);
    setTypeDocumentIdId(null);
    setTypeDocumentIdIdValid(false);
    setTypeDocumentIdIdDefault({
      value: '',
      label: 'Elija el tipo de Documento'
    });
    setIndex('');
    setIndexValid(false);
    setIndexDefault({
      value: '',
      label: 'Elija el tipo de Documento'
    });
    setDigit('');
    setDigitValid(false);
    setAddressType('bill');
    setAddressTypeValid(true);
    setAddressTypeDefault({
      value: 'bill',
      label: 'Facturación'
    });
    setAddress1('');
    setAddress1Valid(false);
    setAddress2('');
    setAddress2Valid(true);
    setCity(_constants.CITY_DEFAULT.value);
    setCityValid(true);
    setCityDefault(_constants.CITY_DEFAULT);
    setStateCountry(_constants.STATE_COUNTRY_DEFAULT.value);
    setStateCountryValid(true);
    setStateCountryDefault(_constants.STATE_COUNTRY_DEFAULT);
    setStateCountryOptions([]);
    setCountry(_constants.COUNTRY_DEFAULT.value);
    setCountryValid(true);
    setCountryDefault(_constants.COUNTRY_DEFAULT);
    setPostCode('');
    setPostCodeValid(true);
    setEmail('');
    setEmailValid(false);
    setPhone('');
    setPhoneValid(false);
    setType('');
    setTypeValid(false);
    setTypeDefault({
      value: '',
      label: 'Elija el tipo de Entidad'
    });
    setPhoto('https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png');
    setPhotoValid(false);
    setSubmitting(false);
    setStatus('active');
    setStatusValid(false);
    setStatusDefault({
      value: 'active',
      label: 'Activo'
    });
    setAddress([]);
    setAddressValid(true);
    setCurrentId(0);
    setFormType('personal');
  };

  // Funciones de Validacion
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [nameValid, lastNameValid, typeDocumentIdIdValid, indexValid, digitValid, addressTypeValid, address1Valid, address2Valid, cityValid, stateCountryValid, countryValid, postCodeValid, emailValid, phoneValid, typeValid, photoValid, statusValid],
      inputId: _constants.ENTITY_ROUTE
    });
  };
  var validationButtonNextAddress = function validationButtonNextAddress() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [addressTypeValid, address1Valid, address2Valid, cityValid, stateCountryValid, countryValid, postCodeValid]
    });
  };
  var validationButtonNextDocument = function validationButtonNextDocument() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [typeDocumentIdIdValid, indexValid, digitValid, documentPhotoValid]
    });
  };
  var validationButtonNextUpdate = function validationButtonNextUpdate() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [nameValid, lastNameValid, emailValid, phoneValid, typeValid, photoValid, statusValid]
    });
  };
  var validationName = function validationName(value) {
    return (0, _Validations.generalValidationName)({
      value: value,
      setValid: setNameValid,
      currentValid: nameValid
    });
  };
  var validationLastName = function validationLastName(value) {
    return (0, _Validations.generalValidationLastName)({
      value: value,
      setValid: setLastNameValid,
      currentValid: lastNameValid,
      required: false
    });
  };
  var validationTypeDocumentIdId = function validationTypeDocumentIdId(value) {
    return (0, _Validations.generalValidationTypeDocumentIdId)({
      value: value,
      setValid: setTypeDocumentIdIdValid,
      currentValid: typeDocumentIdIdValid
    });
  };
  var validationIndex = function validationIndex(value) {
    return (0, _Validations.generalValidationTypeDocumentIdIndex)({
      value: value,
      setValid: setIndexValid,
      currentValid: indexValid
    });
  };
  var validationDigit = function validationDigit(value) {
    return (0, _Validations.generalValidationTypeDocumentIdDigit)({
      value: value,
      setValid: setDigitValid,
      currentValid: digitValid
    });
  };
  var validationAddressType = function validationAddressType(value) {
    return (0, _Validations.generalValidationAddressType)({
      newValue: value,
      setValid: setAddressTypeValid,
      currentValid: addressTypeValid
    });
  };
  var validationAddress1 = function validationAddress1(value) {
    return (0, _Validations.generalValidationAddress1)({
      value: value,
      setValid: setAddress1Valid,
      currentValid: address1Valid
    });
  };
  var validationAddress2 = function validationAddress2(value) {
    return (0, _Validations.generalValidationAddress2)({
      value: value,
      setValid: setAddress2Valid,
      currentValid: address2Valid,
      required: false
    });
  };
  var validationCity = function validationCity(value) {
    return (0, _Validations.generalValidationSelectCity)({
      value: value,
      setValid: setCityValid,
      currentValid: cityValid
    });
  };
  var validationStateCountry = function validationStateCountry(value) {
    return (0, _Validations.generalValidationSelectStateCountry)({
      value: value,
      setValid: setStateCountryValid,
      currentValid: stateCountryValid
    });
  };
  var validationCountry = function validationCountry(value) {
    return (0, _Validations.generalValidationSelectCountry)({
      value: value,
      setValid: setCountryValid,
      currentValid: countryValid
    });
  };
  var validationPostCode = function validationPostCode(value) {
    return (0, _Validations.generalValidationPostCode)({
      value: value,
      setValid: setPostCodeValid,
      currentValid: postCodeValid,
      required: false
    });
  };
  var validationEmail = function validationEmail(value) {
    return (0, _Validations.generalValidationEmail)({
      value: value,
      setValid: setEmailValid,
      currentValid: emailValid
    });
  };
  var validationPhone = function validationPhone(value) {
    return (0, _Validations.generalValidationPhone)({
      value: value,
      setValid: setPhoneValid,
      currentValid: phoneValid
    });
  };
  var validationType = function validationType(value) {
    return (0, _Validations.generalValidationType)({
      value: value,
      setValid: setTypeValid,
      currentValid: typeValid
    });
  };
  var validationPhoto = function validationPhoto(value) {
    return (0, _Validations.generalValidationPhotoEntity)({
      value: value,
      setValid: setPhotoValid,
      currentValid: photoValid
    });
  };
  var validationDocumentPhoto = function validationDocumentPhoto(value) {
    return (0, _Validations.generalValidationPhotoDocumentId)({
      value: value,
      setValid: setDocumentPhotoValid,
      currentValid: documentPhotoValid
    });
  };
  var validationStatus = function validationStatus(value) {
    return (0, _Validations.generalValidationStatus)({
      value: value,
      setValid: setStatusValid,
      currentValid: statusValid
    });
  };

  // Funciones de cambios
  var changeName = function changeName(value) {
    (0, _Changes.generalChangeName)({
      value: value,
      validation: validationName,
      setValue: setName
    });
  };
  var changeLastName = function changeLastName(value) {
    (0, _Changes.generalChangeLastName)({
      value: value,
      validation: validationLastName,
      setValue: setLastName
    });
  };
  var changeTypeDocumentIdId = function changeTypeDocumentIdId(options) {
    (0, _Changes.generalChangeTypeDocumentIdId)({
      options: options,
      validation: validationTypeDocumentIdId,
      setDefault: setTypeDocumentIdIdDefault,
      setValue: setTypeDocumentIdId
    });
  };
  var changeIndex = function changeIndex(options) {
    (0, _Changes.generalChangeDocumentIdIndex)({
      options: options,
      validation: validationIndex,
      setDefault: setIndexDefault,
      setValue: setIndex
    });
  };
  var changeDigit = function changeDigit(newDigit) {
    (0, _Changes.generalChangeDocumentIdDigit)({
      value: newDigit,
      validation: validationDigit,
      setValue: setDigit
    });
  };
  var changeAddressType = function changeAddressType(options) {
    (0, _Changes.generalChangeAddressType)({
      options: options,
      validation: validationAddressType,
      setDefault: setAddressTypeDefault,
      setValue: setAddressType
    });
  };
  var changeAddress1 = function changeAddress1(value) {
    (0, _Changes.generalChangeAddress)({
      value: value,
      validation: validationAddress1,
      setValue: setAddress1
    });
  };
  var changeAddress2 = function changeAddress2(value) {
    (0, _Changes.generalChangeAddress)({
      value: value,
      validation: validationAddress2,
      setValue: setAddress2
    });
  };
  var changeTypeInAllAddresses = function changeTypeInAllAddresses(addresses, newType) {
    return addresses.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        type: newType
      });
    });
  };
  var updateAddressTypeById = function updateAddressTypeById(addresses, id, newType) {
    return addresses.map(function (item) {
      if (item.id === id) {
        return _objectSpread(_objectSpread({}, item), {}, {
          type: newType
        });
      }
      return item;
    });
  };
  var changeCity = function changeCity(options) {
    (0, _Changes.generalChangeCityStateCountry)({
      options: options,
      validation: validationCity,
      setDefault: setCityDefault,
      setValue: setCity,
      setIsReset: setIsReset
    });
  };
  var changeCityOptions = _react["default"].useCallback(function () {
    (0, _Changes.generalChangeCityOptions)({
      country: country,
      state: state,
      setCityDefault: setCityDefault,
      setCity: setCity,
      setCityOptions: setCityOptions,
      isReset: isReset
    });
  }, [country, state]); // eslint-disable-line react-hooks/exhaustive-deps

  var changeStateCountry = function changeStateCountry(options) {
    (0, _Changes.generalChangeCityStateCountry)({
      options: options,
      validation: validationStateCountry,
      setDefault: setStateCountryDefault,
      setValue: setStateCountry,
      setIsReset: setIsReset
    });
  };
  var changeStateCountryOptions = _react["default"].useCallback(function () {
    (0, _Changes.generalChangeStateCountryOptions)({
      country: country,
      setStateCountryDefault: setStateCountryDefault,
      setStateCountry: setStateCountry,
      setStateCountryOptions: setStateCountryOptions,
      isReset: isReset
    });
  }, [country]); // eslint-disable-line react-hooks/exhaustive-deps

  var changeCountry = function changeCountry(options) {
    (0, _Changes.generalChangeCityStateCountry)({
      options: options,
      validation: validationCountry,
      setDefault: setCountryDefault,
      setValue: setCountry,
      setIsReset: setIsReset
    });
  };
  var changePostCode = function changePostCode(newPostCode) {
    (0, _Changes.generalChangePostCode)({
      value: newPostCode,
      validation: validationPostCode,
      setValue: setPostCode
    });
  };
  var changeEmail = function changeEmail(inputValue) {
    (0, _Changes.generalChangeEmail)({
      value: inputValue,
      validation: validationEmail,
      setValue: setEmail
    });
  };
  var changePhone = function changePhone(newPhone) {
    (0, _Changes.generalChangePhone)({
      value: newPhone,
      validation: validationPhone,
      setValue: setPhone
    });
  };
  var changeType = function changeType(options) {
    (0, _Changes.generalChangeType)({
      options: options,
      validation: validationType,
      setDefault: setTypeDefault,
      setValue: setType
    });
  };
  var changePhoto = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            (0, _Changes.generalChangePhoto)({
              e: e,
              changeError: useError.actions.changeError,
              setSubmitting: setSubmitting,
              setPhoto: setPhoto,
              validation: validationPhoto
            });
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function changePhoto(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var changeDocumentPhoto = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(e) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            (0, _Changes.generalChangePhoto)({
              e: e,
              changeError: useError.actions.changeError,
              setSubmitting: setDocumentSubmitting,
              setPhoto: setDocumentPhoto,
              validation: validationDocumentPhoto
            });
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function changeDocumentPhoto(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var changeStatus = function changeStatus(options) {
    (0, _Changes.generalChangeStatus)({
      options: options,
      validation: validationStatus,
      setDefault: setStatusDefault,
      setValue: setStatus
    });
  };
  var states = {
    name: name,
    nameValid: nameValid,
    lastName: lastName,
    lastNameValid: lastNameValid,
    typeDocumentIdId: typeDocumentIdId,
    typeDocumentIdIdValid: typeDocumentIdIdValid,
    typeDocumentIdIdDefault: typeDocumentIdIdDefault,
    typeDocumentIdIdOptions: typeDocumentIdIdOptions,
    index: index,
    indexValid: indexValid,
    indexDefault: indexDefault,
    indexOptions: indexOptions,
    digit: digit,
    digitValid: digitValid,
    addressType: addressType,
    addressTypeValid: addressTypeValid,
    addressTypeDefault: addressTypeDefault,
    addressTypeOptions: addressTypeOptions,
    address1: address1,
    address1Valid: address1Valid,
    address2: address2,
    address2Valid: address2Valid,
    city: city,
    cityValid: cityValid,
    cityDefault: cityDefault,
    cityOptions: cityOptions,
    state: state,
    stateCountryValid: stateCountryValid,
    stateCountryDefault: stateCountryDefault,
    stateCountryOptions: stateCountryOptions,
    country: country,
    countryValid: countryValid,
    countryDefault: countryDefault,
    countryOptions: countryOptions,
    postCode: postCode,
    postCodeValid: postCodeValid,
    email: email,
    emailValid: emailValid,
    phone: phone,
    phoneValid: phoneValid,
    type: type,
    typeValid: typeValid,
    typeDefault: typeDefault,
    typeOptions: typeOptions,
    photo: photo,
    photoValid: photoValid,
    submitting: submitting,
    documentPhoto: documentPhoto,
    documentPhotoValid: documentPhotoValid,
    documentSubmitting: documentSubmitting,
    status: status,
    statusValid: statusValid,
    statusDefault: statusDefault,
    statusOptions: statusOptions,
    documentId: documentId,
    address: address,
    addressValid: addressValid,
    currentId: currentId,
    formType: formType
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    validationButtonNext: validationButtonNext,
    validationButtonNextAddress: validationButtonNextAddress,
    validationButtonNextDocument: validationButtonNextDocument,
    validationButtonNextUpdate: validationButtonNextUpdate,
    validationName: validationName,
    validationLastName: validationLastName,
    validationTypeDocumentIdId: validationTypeDocumentIdId,
    validationIndex: validationIndex,
    validationDigit: validationDigit,
    validationAddressType: validationAddressType,
    validationAddress1: validationAddress1,
    validationAddress2: validationAddress2,
    validationCity: validationCity,
    validationStateCountry: validationStateCountry,
    validationCountry: validationCountry,
    validationPostCode: validationPostCode,
    validationEmail: validationEmail,
    validationPhone: validationPhone,
    validationType: validationType,
    validationPhoto: validationPhoto,
    validationDocumentPhoto: validationDocumentPhoto,
    validationStatus: validationStatus,
    changeName: changeName,
    changeLastName: changeLastName,
    changeTypeDocumentIdId: changeTypeDocumentIdId,
    changeIndex: changeIndex,
    changeDigit: changeDigit,
    changeAddressType: changeAddressType,
    changeAddress1: changeAddress1,
    changeAddress2: changeAddress2,
    changeCity: changeCity,
    changeCityOptions: changeCityOptions,
    changeStateCountry: changeStateCountry,
    changeStateCountryOptions: changeStateCountryOptions,
    changeCountry: changeCountry,
    changePostCode: changePostCode,
    changeEmail: changeEmail,
    changePhone: changePhone,
    changeType: changeType,
    changePhoto: changePhoto,
    changeDocumentPhoto: changeDocumentPhoto,
    setPhoto: setPhoto,
    setDocumentPhoto: setDocumentPhoto,
    setSubmitting: setSubmitting,
    setDocumentSubmitting: setDocumentSubmitting,
    changeStatus: changeStatus,
    setAddress: setAddress,
    setDocumentId: setDocumentId,
    infoReset: infoReset,
    setCurrentId: setCurrentId,
    setType: setType,
    setFormType: setFormType,
    changeTypeInAllAddresses: changeTypeInAllAddresses,
    updateAddressTypeById: updateAddressTypeById
  };
  return {
    states: states,
    actions: actions
  };
};