"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesShippingAreas = useGafpriAttributesShippingAreas;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Validations = require("../../../../Validations");
var _Changes = require("../../../../Changes");
var _constants = require("../../../../constants");
function useGafpriAttributesShippingAreas() {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    nameValid = _useState4[0],
    setNameValid = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    region = _useState6[0],
    setRegion = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    regionValid = _useState8[0],
    setRegionValid = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    selectedRegionValue = _useState10[0],
    setSelectedRegionValue = _useState10[1];
  var regionDefault = {
    value: '',
    label: 'Selecciona una región'
  };
  var regionOptions = (0, _constants.OPTIONS_REGION)();
  var _useState11 = (0, _react.useState)(0),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    currentId = _useState12[0],
    setCurrentId = _useState12[1];
  var infoReset = function infoReset() {
    setName('');
    setNameValid(false);
    setRegion([]);
    setRegionValid(false);
    setSelectedRegionValue('');
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
  var validationRegion = function validationRegion(value) {
    return (0, _Validations.generalValidationRegion)({
      value: value,
      setValid: setRegionValid,
      currentValid: regionValid,
      required: true
    });
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [nameValid, regionValid]
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
  var changeRegion = function changeRegion(value) {
    (0, _Changes.generalChangeRegion)({
      options: value,
      validation: validationRegion,
      region: region,
      setValue: setRegion,
      setSelectedValue: setSelectedRegionValue
    });
  };
  var removeRegion = function removeRegion(valueDelete) {
    setRegion(function (prevRegions) {
      return prevRegions.filter(function (r) {
        return r !== valueDelete;
      });
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
    region: region,
    regionValid: regionValid,
    selectedRegionValue: selectedRegionValue,
    currentId: currentId,
    regionDefault: regionDefault,
    regionOptions: regionOptions
  };
  var actions = {
    infoReset: infoReset,
    validationName: validationName,
    validationRegion: validationRegion,
    setRegion: setRegion,
    validationButtonNext: validationButtonNext,
    changeName: changeName,
    changeRegion: changeRegion,
    setCurrentId: setCurrentId,
    removeRegion: removeRegion
  };
  return {
    states: states,
    actions: actions
  };
}