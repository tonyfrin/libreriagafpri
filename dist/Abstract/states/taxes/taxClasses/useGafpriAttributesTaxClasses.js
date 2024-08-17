"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesTaxClasses = useGafpriAttributesTaxClasses;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Validations = require("../../../../Validations");
var _Changes = require("../../../../Changes");
function useGafpriAttributesTaxClasses() {
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
    description = _useState6[0],
    setDescription = _useState6[1];
  var _useState7 = (0, _react.useState)(true),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    descriptionValid = _useState8[0],
    setDescriptionValid = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    currentId = _useState10[0],
    setCurrentId = _useState10[1];
  var infoReset = function infoReset() {
    setName('');
    setNameValid(false);
    setDescription('');
    setDescriptionValid(true);
    setCurrentId(0);
  };

  // Funciones de Validacion
  var validationName = function validationName(value) {
    return (0, _Validations.generalValidationName)({
      value: value,
      setValid: setNameValid,
      currentValid: nameValid
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
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [nameValid, descriptionValid]
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
  var changeDescription = function changeDescription(value) {
    (0, _Changes.generalChangeDescription)({
      value: value,
      validation: validationDescription,
      setValue: setDescription
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
    description: description,
    descriptionValid: descriptionValid,
    currentId: currentId
  };
  var actions = {
    infoReset: infoReset,
    validationName: validationName,
    validationDescription: validationDescription,
    validationButtonNext: validationButtonNext,
    changeName: changeName,
    changeDescription: changeDescription,
    setCurrentId: setCurrentId
  };
  return {
    states: states,
    actions: actions
  };
}