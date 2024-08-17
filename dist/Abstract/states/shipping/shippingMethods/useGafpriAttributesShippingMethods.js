"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesShippingMethods = useGafpriAttributesShippingMethods;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Validations = require("../../../../Validations");
var _Changes = require("../../../../Changes");
var _constants = require("../../../../constants");
function useGafpriAttributesShippingMethods() {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    shippingAreasId = _useState2[0],
    setShippingAreasId = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    shippingAreasIdValid = _useState4[0],
    setShippingAreasIdValid = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    name = _useState6[0],
    setName = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    nameValid = _useState8[0],
    setNameValid = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    description = _useState10[0],
    setDescription = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    descriptionValid = _useState12[0],
    setDescriptionValid = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    cost = _useState14[0],
    setCost = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    costValid = _useState16[0],
    setCostValid = _useState16[1];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    type = _useState18[0],
    setType = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    typeValid = _useState20[0],
    setTypeValid = _useState20[1];
  var _useState21 = (0, _react.useState)(_constants.OPTIONS_SHIPPING_METHODS_TYPE_DEFAULT),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    typeDefault = _useState22[0],
    setTypeDefault = _useState22[1];
  var typeOptions = _constants.OPTIONS_SHIPPING_METHODS_TYPE;
  var _useState23 = (0, _react.useState)(''),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    shippingTimeDays = _useState24[0],
    setShippingTimeDays = _useState24[1];
  var _useState25 = (0, _react.useState)(false),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    shippingTimeDaysValid = _useState26[0],
    setShippingTimeDaysValid = _useState26[1];
  var _useState27 = (0, _react.useState)(''),
    _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
    availableShippingServices = _useState28[0],
    setAvailableShippingServices = _useState28[1];
  var _useState29 = (0, _react.useState)(false),
    _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
    availableShippingServicesValid = _useState30[0],
    setAvailableShippingServicesValid = _useState30[1];
  var _useState31 = (0, _react.useState)(_constants.OPTIONS_SHIPPING_SERVICES_DEFAULT),
    _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
    availableShippingServicesDefault = _useState32[0],
    setAvailableShippingServicesDefault = _useState32[1];
  var availableShippingServicesOptions = _constants.OPTIONS_SHIPPING_SERVICES;
  var _useState33 = (0, _react.useState)(''),
    _useState34 = (0, _slicedToArray2["default"])(_useState33, 2),
    taxStatus = _useState34[0],
    setTaxStatus = _useState34[1];
  var _useState35 = (0, _react.useState)(false),
    _useState36 = (0, _slicedToArray2["default"])(_useState35, 2),
    taxStatusValid = _useState36[0],
    setTaxStatusValid = _useState36[1];
  var _useState37 = (0, _react.useState)(_constants.TAX_STATUS_DEFAULT),
    _useState38 = (0, _slicedToArray2["default"])(_useState37, 2),
    taxStatusDefault = _useState38[0],
    setTaxStatusDefault = _useState38[1];
  var _useState39 = (0, _react.useState)(_constants.TAX_STATUS),
    _useState40 = (0, _slicedToArray2["default"])(_useState39, 2),
    taxStatusOptions = _useState40[0],
    setTaxStatusOptions = _useState40[1];
  var _useState41 = (0, _react.useState)(''),
    _useState42 = (0, _slicedToArray2["default"])(_useState41, 2),
    taxClass = _useState42[0],
    setTaxClass = _useState42[1];
  var _useState43 = (0, _react.useState)(false),
    _useState44 = (0, _slicedToArray2["default"])(_useState43, 2),
    taxClassValid = _useState44[0],
    setTaxClassValid = _useState44[1];
  var _useState45 = (0, _react.useState)({
      label: '',
      value: ''
    }),
    _useState46 = (0, _slicedToArray2["default"])(_useState45, 2),
    taxClassDefault = _useState46[0],
    setTaxClassDefault = _useState46[1];
  var taxClassOptions = [{
    label: 'prueba',
    value: 'Prueba'
  }];
  var _useState47 = (0, _react.useState)(_constants.OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT.value),
    _useState48 = (0, _slicedToArray2["default"])(_useState47, 2),
    status = _useState48[0],
    setStatus = _useState48[1];
  var _useState49 = (0, _react.useState)(true),
    _useState50 = (0, _slicedToArray2["default"])(_useState49, 2),
    statusValid = _useState50[0],
    setStatusValid = _useState50[1];
  var _useState51 = (0, _react.useState)(_constants.OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT),
    _useState52 = (0, _slicedToArray2["default"])(_useState51, 2),
    statusDefault = _useState52[0],
    setStatusDefault = _useState52[1];
  var statusOptions = _constants.OPTIONS_SHIPPING_METHODS_STATUS;
  var _useState53 = (0, _react.useState)(0),
    _useState54 = (0, _slicedToArray2["default"])(_useState53, 2),
    currentId = _useState54[0],
    setCurrentId = _useState54[1];
  var infoReset = function infoReset() {
    setShippingAreasId('');
    setShippingAreasIdValid(false);
    setName('');
    setNameValid(false);
    setDescription('');
    setDescriptionValid(false);
    setCost('');
    setCostValid(false);
    setType('');
    setTypeValid(false);
    setTypeDefault(_constants.OPTIONS_SHIPPING_METHODS_TYPE_DEFAULT);
    setShippingTimeDays('');
    setShippingTimeDaysValid(false);
    setAvailableShippingServices('');
    setAvailableShippingServicesValid(false);
    setAvailableShippingServicesDefault(_constants.OPTIONS_SHIPPING_SERVICES_DEFAULT);
    setTaxStatus('');
    setTaxStatusValid(false);
    setTaxStatusDefault(_constants.TAX_STATUS_DEFAULT);
    setTaxStatusOptions(_constants.TAX_STATUS);
    setTaxClass('');
    setTaxClassValid(false);
    setStatus(_constants.OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT.value);
    setStatusValid(true);
    setStatusDefault(_constants.OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT);
    setCurrentId(0);
  };

  // Funciones de Validacion
  var validationShippingAreasId = function validationShippingAreasId(value) {
    return (0, _Validations.generalValidationShippingAreasId)({
      value: value,
      setValid: setShippingAreasIdValid,
      currentValid: shippingAreasIdValid,
      required: true,
      inputId: _constants.SHIPPING_METHODS_ROUTE
    });
  };
  var validationName = function validationName(value) {
    return (0, _Validations.generalValidationName)({
      value: value,
      setValid: setNameValid,
      currentValid: nameValid,
      required: true,
      inputId: _constants.SHIPPING_METHODS_ROUTE
    });
  };
  var validationDescription = function validationDescription(value) {
    return (0, _Validations.generalValidationDescription)({
      value: value,
      setValid: setDescriptionValid,
      currentValid: descriptionValid,
      required: true,
      inputId: _constants.SHIPPING_METHODS_ROUTE
    });
  };
  var validationCost = function validationCost(value) {
    return (0, _Validations.generalValidationCost)({
      value: value,
      setValid: setCostValid,
      currentValid: costValid,
      required: true,
      inputId: _constants.SHIPPING_METHODS_ROUTE
    });
  };
  var validationType = function validationType(value) {
    return (0, _Validations.generalValidationType)({
      value: value,
      setValid: setTypeValid,
      currentValid: typeValid,
      inputId: _constants.SHIPPING_METHODS_ROUTE
    });
  };
  var validationShippingTimeDays = function validationShippingTimeDays(value) {
    return (0, _Validations.generalValidationShippingTimeDays)({
      value: value,
      setValid: setShippingTimeDaysValid,
      currentValid: shippingTimeDaysValid,
      required: true,
      inputId: _constants.SHIPPING_METHODS_ROUTE
    });
  };
  var validationAvailableShippingServices = function validationAvailableShippingServices(value) {
    return (0, _Validations.generalValidationAvailableShippingServices)({
      newValue: value,
      setValid: setAvailableShippingServicesValid,
      currentValid: availableShippingServicesValid,
      inputId: _constants.SHIPPING_METHODS_ROUTE
    });
  };
  var validationTaxStatus = function validationTaxStatus(value) {
    return (0, _Validations.generalValidationTaxStatus)({
      newValue: value,
      setValid: setTaxStatusValid,
      currentValid: taxStatusValid,
      inputId: _constants.SHIPPING_METHODS_ROUTE
    });
  };
  var validationTaxClass = function validationTaxClass(value) {
    return (0, _Validations.generalValidationTaxClass)({
      newValue: value,
      setValid: setTaxClassValid,
      currentValid: taxClassValid,
      inputId: _constants.SHIPPING_METHODS_ROUTE
    });
  };
  var validationStatus = function validationStatus(value) {
    return (0, _Validations.generalValidationStatus)({
      value: value,
      setValid: setStatusValid,
      currentValid: statusValid,
      inputId: _constants.SHIPPING_METHODS_ROUTE
    });
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [nameValid, descriptionValid, costValid, typeValid, shippingTimeDaysValid, availableShippingServicesValid, taxStatusValid, taxClassValid, statusValid],
      inputId: _constants.SHIPPING_METHODS_ROUTE
    });
  };

  // Funciones de cambios

  var changeShippingAreasId = function changeShippingAreasId(value) {
    (0, _Changes.generalChangeShippingAreas)({
      value: value,
      validation: validationShippingAreasId,
      setValue: setShippingAreasId
    });
  };
  var changeName = function changeName(value) {
    (0, _Changes.generalChangeName)({
      value: value,
      validation: validationName,
      setValue: setName
    });
  };
  var changeDescription = function changeDescription(value) {
    (0, _Changes.generalChangeDescription)({
      value: value,
      validation: validationDescription,
      setValue: setDescription
    });
  };
  var changeCost = function changeCost(value) {
    (0, _Changes.generalChangeCost)({
      value: value,
      validation: validationCost,
      setValue: setCost
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
  var changeShippingTimeDays = function changeShippingTimeDays(value) {
    (0, _Changes.generalChangeShippingTimeDays)({
      value: value,
      validation: validationShippingTimeDays,
      setValue: setShippingTimeDays
    });
  };
  var changeAvailableShippingServices = function changeAvailableShippingServices(options) {
    (0, _Changes.generalChangeAvailableShippingServices)({
      newValue: options,
      validation: validationAvailableShippingServices,
      setDefault: setAvailableShippingServicesDefault,
      setValue: setAvailableShippingServices
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
  var changeTaxClass = function changeTaxClass(options) {
    (0, _Changes.generalChangeTaxClass)({
      options: options,
      validation: validationTaxClass,
      setDefault: setTaxClassDefault,
      setValue: setTaxClass
    });
  };
  var changeStatus = function changeStatus(options) {
    (0, _Changes.generalChangeStatus)({
      options: options,
      validation: validationStatus,
      setDefault: setStatusDefault,
      setValue: setStatus
    });
  };

  /**
   * Export
   *
   *
   */
  var states = {
    shippingAreasId: shippingAreasId,
    shippingAreasIdValid: shippingAreasIdValid,
    name: name,
    nameValid: nameValid,
    description: description,
    descriptionValid: descriptionValid,
    cost: cost,
    costValid: costValid,
    type: type,
    typeValid: typeValid,
    typeDefault: typeDefault,
    typeOptions: typeOptions,
    shippingTimeDays: shippingTimeDays,
    shippingTimeDaysValid: shippingTimeDaysValid,
    availableShippingServices: availableShippingServices,
    availableShippingServicesValid: availableShippingServicesValid,
    availableShippingServicesDefault: availableShippingServicesDefault,
    availableShippingServicesOptions: availableShippingServicesOptions,
    taxStatus: taxStatus,
    taxStatusValid: taxStatusValid,
    taxStatusDefault: taxStatusDefault,
    taxStatusOptions: taxStatusOptions,
    taxClass: taxClass,
    taxClassValid: taxClassValid,
    taxClassDefault: taxClassDefault,
    taxClassOptions: taxClassOptions,
    status: status,
    statusValid: statusValid,
    statusDefault: statusDefault,
    statusOptions: statusOptions,
    currentId: currentId
  };
  var actions = {
    infoReset: infoReset,
    validationShippingAreasId: validationShippingAreasId,
    validationName: validationName,
    validationDescription: validationDescription,
    validationCost: validationCost,
    validationType: validationType,
    validationShippingTimeDays: validationShippingTimeDays,
    validationAvailableShippingServices: validationAvailableShippingServices,
    validationTaxStatus: validationTaxStatus,
    validationTaxClass: validationTaxClass,
    validationStatus: validationStatus,
    validationButtonNext: validationButtonNext,
    changeShippingAreasId: changeShippingAreasId,
    changeName: changeName,
    changeDescription: changeDescription,
    changeCost: changeCost,
    changeType: changeType,
    changeShippingTimeDays: changeShippingTimeDays,
    changeAvailableShippingServices: changeAvailableShippingServices,
    changeTaxStatus: changeTaxStatus,
    changeTaxClass: changeTaxClass,
    changeStatus: changeStatus,
    setCurrentId: setCurrentId
  };
  return {
    states: states,
    actions: actions
  };
}