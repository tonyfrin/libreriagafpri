"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesCashRegisterType = useGafpriAttributesCashRegisterType;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Validations = require("../../../Validations");
var _Changes = require("../../../Changes");
function useGafpriAttributesCashRegisterType(_ref) {
  var _useSites$states$site;
  var useCrtu = _ref.useCrtu,
    useSites = _ref.useSites;
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
    site = _useState6[0],
    setSite = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    siteValid = _useState8[0],
    setSiteValid = _useState8[1];
  var _useState9 = (0, _react.useState)({
      value: '',
      label: 'Elija sucursal'
    }),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    siteDefault = _useState10[0],
    setSiteDefault = _useState10[1];
  var siteOptions = ((_useSites$states$site = useSites.states.sites.data) === null || _useSites$states$site === void 0 || (_useSites$states$site = _useSites$states$site.items) === null || _useSites$states$site === void 0 ? void 0 : _useSites$states$site.map(function (item) {
    return {
      value: "".concat(item.id),
      label: item.name
    };
  })) || [];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    currentId = _useState12[0],
    setCurrentId = _useState12[1];
  var infoReset = function infoReset() {
    setName('');
    setSite('');
    setSiteDefault({
      value: '',
      label: 'Elija sucursal'
    });
    setNameValid(false);
    setSiteValid(false);
    setCurrentId(0);
    useCrtu.actions.infoReset();
  };

  // Funciones de Validacion
  var validationName = function validationName(value) {
    return (0, _Validations.generalValidationName)({
      value: value,
      setValid: setNameValid,
      currentValid: nameValid
    });
  };
  var validationSite = function validationSite(value) {
    return (0, _Validations.generalValidationSelectSite)({
      value: value,
      setValid: setSiteValid,
      currentValid: siteValid
    });
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [nameValid, siteValid]
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
  var changeSite = function changeSite(options) {
    (0, _Changes.generalChangeSite)({
      options: options,
      validation: validationSite,
      setDefault: setSiteDefault,
      setValue: setSite
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
    site: site,
    siteValid: siteValid,
    siteDefault: siteDefault,
    siteOptions: siteOptions,
    currentId: currentId
  };
  var actions = {
    validationName: validationName,
    validationSite: validationSite,
    validationButtonNext: validationButtonNext,
    changeName: changeName,
    changeSite: changeSite,
    infoReset: infoReset,
    setCurrentId: setCurrentId
  };
  return {
    states: states,
    actions: actions
  };
}