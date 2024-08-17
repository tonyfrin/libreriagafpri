"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesExpensesType = useGafpriAttributesExpensesType;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Validations = require("../../../Validations");
var _Changes = require("../../../Changes");
function useGafpriAttributesExpensesType(_ref) {
  var useError = _ref.useError;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    nameValid = _useState4[0],
    setNameValid = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    parentId = _useState6[0],
    setParentId = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    parentIdValid = _useState8[0],
    setParentIdValid = _useState8[1];
  var _useState9 = (0, _react.useState)({
      value: '',
      label: 'Sin categoría padre'
    }),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    parentIdDefault = _useState10[0],
    setParentIdDefault = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    parentIdOptions = _useState12[0],
    setParentIdOptions = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    description = _useState14[0],
    setDescription = _useState14[1];
  var _useState15 = (0, _react.useState)(true),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    descriptionValid = _useState16[0],
    setDescriptionValid = _useState16[1];
  var _useState17 = (0, _react.useState)('active'),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    status = _useState18[0],
    setStatus = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    statusValid = _useState20[0],
    setStatusValid = _useState20[1];
  var _useState21 = (0, _react.useState)({
      value: 'active',
      label: 'Activo'
    }),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    statusDefault = _useState22[0],
    setStatusDefault = _useState22[1];
  var statusOptions = [{
    value: 'active',
    label: 'Activo'
  }, {
    value: 'disabled',
    label: 'Desactivo'
  }];
  var _useState23 = (0, _react.useState)(0),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    currentId = _useState24[0],
    setCurrentId = _useState24[1];
  var infoReset = function infoReset() {
    setName('');
    setNameValid(false);
    setParentId('');
    setParentIdValid(false);
    setDescription('');
    setDescriptionValid(true);
    setStatus('active');
    setStatusValid(false);
    setCurrentId(0);
    useError.actions.resetError();
  };

  // Funciones de Validacion
  var validationName = function validationName(value) {
    return (0, _Validations.generalValidationName)({
      value: value,
      setValid: setNameValid,
      currentValid: nameValid
    });
  };
  var validationParentId = function validationParentId(newValue) {
    return (0, _Validations.generalValidationParentId)({
      value: newValue,
      setValid: setParentIdValid,
      currentValid: parentIdValid
    });
  };
  var validationDescription = function validationDescription(newValue) {
    return (0, _Validations.generalValidationDescription)({
      value: newValue,
      setValid: setDescriptionValid,
      currentValid: descriptionValid
    });
  };
  var validationStatus = function validationStatus(newValue) {
    return (0, _Validations.generalValidationStatus)({
      value: newValue,
      setValid: setStatusValid,
      currentValid: statusValid
    });
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [nameValid, parentIdValid, descriptionValid, statusValid]
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
  var changeParentId = function changeParentId(options) {
    (0, _Changes.generalChangeParentId)({
      options: options,
      validation: validationParentId,
      setDefault: setParentIdDefault,
      setValue: setParentId
    });
  };
  var changeDescription = function changeDescription(value) {
    (0, _Changes.generalChangeDescription)({
      value: value,
      validation: validationDescription,
      setValue: setDescription
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
    name: name,
    nameValid: nameValid,
    parentId: parentId,
    parentIdValid: parentIdValid,
    parentIdDefault: parentIdDefault,
    parentIdOptions: parentIdOptions,
    description: description,
    descriptionValid: descriptionValid,
    status: status,
    statusValid: statusValid,
    statusDefault: statusDefault,
    statusOptions: statusOptions,
    currentId: currentId
  };
  var actions = {
    changeName: changeName,
    validationName: validationName,
    changeDescription: changeDescription,
    validationDescription: validationDescription,
    changeParentId: changeParentId,
    validationParentId: validationParentId,
    changeStatus: changeStatus,
    validationStatus: validationStatus,
    validationButtonNext: validationButtonNext,
    infoReset: infoReset,
    setCurrentId: setCurrentId,
    setParentIdOptions: setParentIdOptions
  };
  return {
    states: states,
    actions: actions
  };
}