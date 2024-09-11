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
  var _useState23 = (0, _react.useState)(_constants.OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT.value),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    status = _useState24[0],
    setStatus = _useState24[1];
  var _useState25 = (0, _react.useState)(true),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    statusValid = _useState26[0],
    setStatusValid = _useState26[1];
  var _useState27 = (0, _react.useState)(_constants.OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT),
    _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
    statusDefault = _useState28[0],
    setStatusDefault = _useState28[1];
  var statusOptions = _constants.OPTIONS_SHIPPING_METHODS_STATUS;
  var _useState29 = (0, _react.useState)([]),
    _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
    roles = _useState30[0],
    setRoles = _useState30[1];
  var _useState31 = (0, _react.useState)({}),
    _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
    workDaysHours = _useState32[0],
    setWorkDaysHours = _useState32[1];
  var _useState33 = (0, _react.useState)(''),
    _useState34 = (0, _slicedToArray2["default"])(_useState33, 2),
    preparationTime = _useState34[0],
    setPreparationTime = _useState34[1];
  var _useState35 = (0, _react.useState)(''),
    _useState36 = (0, _slicedToArray2["default"])(_useState35, 2),
    pickupTime = _useState36[0],
    setPickupTime = _useState36[1];
  var _useState37 = (0, _react.useState)(''),
    _useState38 = (0, _slicedToArray2["default"])(_useState37, 2),
    deliveryTime = _useState38[0],
    setDeliveryTime = _useState38[1];
  var _useState39 = (0, _react.useState)(''),
    _useState40 = (0, _slicedToArray2["default"])(_useState39, 2),
    typeStart = _useState40[0],
    setTypeStart = _useState40[1];
  var _useState41 = (0, _react.useState)(''),
    _useState42 = (0, _slicedToArray2["default"])(_useState41, 2),
    valueStart = _useState42[0],
    setValueStart = _useState42[1];
  var _useState43 = (0, _react.useState)(false),
    _useState44 = (0, _slicedToArray2["default"])(_useState43, 2),
    conditional = _useState44[0],
    setConditional = _useState44[1];
  var _useState45 = (0, _react.useState)(undefined),
    _useState46 = (0, _slicedToArray2["default"])(_useState45, 2),
    typeConditional = _useState46[0],
    setTypeConditional = _useState46[1];
  var typeConditionalOptions = [{
    label: 'Valor de pedido',
    value: 'total_order'
  }, {
    label: 'Cantidad de productos',
    value: 'total_qty'
  }];
  var _useState47 = (0, _react.useState)(undefined),
    _useState48 = (0, _slicedToArray2["default"])(_useState47, 2),
    valueConditional = _useState48[0],
    setValueConditional = _useState48[1];
  var _useState49 = (0, _react.useState)(0),
    _useState50 = (0, _slicedToArray2["default"])(_useState49, 2),
    currentId = _useState50[0],
    setCurrentId = _useState50[1];
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
    setStatus(_constants.OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT.value);
    setStatusValid(true);
    setStatusDefault(_constants.OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT);
    setCurrentId(0);
    setRoles([]);
    setWorkDaysHours({});
    setPreparationTime('');
    setPickupTime('');
    setDeliveryTime('');
    setTypeStart('');
    setValueStart('');
    setConditional(false);
    setTypeConditional(undefined);
    setValueConditional(undefined);
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
  var validationStatus = function validationStatus(value) {
    return (0, _Validations.generalValidationStatus)({
      value: value,
      setValid: setStatusValid,
      currentValid: statusValid,
      inputId: _constants.SHIPPING_METHODS_ROUTE
    });
  };
  var validationWorkDaysHours = function validationWorkDaysHours() {
    return Object.keys(workDaysHours).length > 0;
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [nameValid, descriptionValid, costValid, typeValid, statusValid, roles.length > 0, validationWorkDaysHours(), parseInt(preparationTime, 10) > 0, parseInt(pickupTime, 10) > 0, parseInt(deliveryTime, 10) > 0, typeStart !== '', valueStart !== '', !conditional || typeConditional !== undefined && typeConditional !== '' && valueConditional !== undefined && valueConditional !== ''],
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
  var changeStatus = function changeStatus(options) {
    (0, _Changes.generalChangeStatus)({
      options: options,
      validation: validationStatus,
      setDefault: setStatusDefault,
      setValue: setStatus
    });
  };
  var changeConditional = function changeConditional(value) {
    setConditional(value);
    if (!value) {
      setTypeConditional(undefined);
      setValueConditional(undefined);
    }
  };
  var changeTypeConditional = function changeTypeConditional(option) {
    if (option) {
      setTypeConditional(option.value);
    }
  };
  var changeValueConditional = function changeValueConditional(option) {
    if (option) {
      setValueConditional(option.value);
    }
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
    status: status,
    statusValid: statusValid,
    statusDefault: statusDefault,
    statusOptions: statusOptions,
    roles: roles,
    workDaysHours: workDaysHours,
    preparationTime: preparationTime,
    pickupTime: pickupTime,
    deliveryTime: deliveryTime,
    typeStart: typeStart,
    valueStart: valueStart,
    conditional: conditional,
    typeConditional: typeConditional,
    typeConditionalOptions: typeConditionalOptions,
    valueConditional: valueConditional,
    currentId: currentId
  };
  var actions = {
    infoReset: infoReset,
    validationShippingAreasId: validationShippingAreasId,
    validationName: validationName,
    validationDescription: validationDescription,
    validationCost: validationCost,
    validationType: validationType,
    validationStatus: validationStatus,
    validationButtonNext: validationButtonNext,
    changeShippingAreasId: changeShippingAreasId,
    changeName: changeName,
    changeDescription: changeDescription,
    changeCost: changeCost,
    changeType: changeType,
    changeStatus: changeStatus,
    setRoles: setRoles,
    setWorkDaysHours: setWorkDaysHours,
    setPreparationTime: setPreparationTime,
    setPickupTime: setPickupTime,
    setDeliveryTime: setDeliveryTime,
    setTypeStart: setTypeStart,
    setValueStart: setValueStart,
    changeConditional: changeConditional,
    changeTypeConditional: changeTypeConditional,
    changeValueConditional: changeValueConditional,
    setCurrentId: setCurrentId
  };
  return {
    states: states,
    actions: actions
  };
}