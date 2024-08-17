"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesAccountsReceivable = useGafpriAttributesAccountsReceivable;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Validations = require("../../../Validations");
var _Changes = require("../../../Changes");
var _constants = require("../../../constants");
function useGafpriAttributesAccountsReceivable() {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    entityId = _useState2[0],
    setEntityId = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    entityIdValid = _useState4[0],
    setEntityIdValid = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    authorizedLogin = _useState6[0],
    setAuthorizedLogin = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    authorizedLoginValid = _useState8[0],
    setAuthorizedLoginValid = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    authorizedPassword = _useState10[0],
    setAuthorizedPassword = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    authorizedPasswordValid = _useState12[0],
    setAuthorizedPasswordValid = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    limit = _useState14[0],
    setLimit = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    limitValid = _useState16[0],
    setLimitValid = _useState16[1];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    timeToPay = _useState18[0],
    setTimeToPay = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    timeToPayValid = _useState20[0],
    setTimeToPayValid = _useState20[1];
  var _useState21 = (0, _react.useState)(null),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    entity = _useState22[0],
    setEntity = _useState22[1];
  var _useState23 = (0, _react.useState)(0),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    currentId = _useState24[0],
    setCurrentId = _useState24[1];
  var infoReset = function infoReset() {
    setEntityId(0);
    setEntityIdValid(false);
    setAuthorizedLogin('');
    setAuthorizedLoginValid(false);
    setAuthorizedPassword('');
    setAuthorizedPasswordValid(false);
    setLimit('');
    setLimitValid(false);
    setTimeToPay('');
    setTimeToPayValid(false);
    setCurrentId(0);
  };

  // Funciones de Validacion
  var validationEntityId = function validationEntityId(value) {
    return (0, _Validations.generalValidationCustomerId)({
      value: value,
      setValid: setEntityIdValid,
      currentValid: entityIdValid
    });
  };
  var validationAuthorizedLogin = function validationAuthorizedLogin(value) {
    return (0, _Validations.generalValidationUserName)({
      value: value,
      setValid: setAuthorizedLoginValid,
      currentValid: authorizedLoginValid
    });
  };
  var validationAuthorizedPassword = function validationAuthorizedPassword(value) {
    return (0, _Validations.generalValidationSinglePassword)({
      value: value,
      setValid: setAuthorizedPasswordValid,
      currentValid: authorizedPasswordValid
    });
  };
  var validationLimit = function validationLimit(value) {
    return (0, _Validations.generalValidationCreditLimit)({
      value: value,
      setValid: setLimitValid,
      currentValid: limitValid
    });
  };
  var validationTimeToPay = function validationTimeToPay(value) {
    return (0, _Validations.generalValidationCreditTimeToPay)({
      value: value,
      setValid: setTimeToPayValid,
      currentValid: timeToPayValid
    });
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [entityIdValid, limitValid, timeToPayValid],
      inputId: _constants.ACCOUNTS_RECEIVABLE_ROUTE
    });
  };
  var validationButtonNextLogin = function validationButtonNextLogin() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [entityIdValid, authorizedLoginValid, authorizedPasswordValid, limitValid, timeToPayValid],
      inputId: "".concat(_constants.ACCOUNTS_RECEIVABLE_ROUTE, "-login")
    });
  };

  // Funciones de cambios
  var changeEntityId = function changeEntityId(value) {
    var valid = validationEntityId(value);
    if (valid) setEntityId(value);
  };
  var changeAuthorizedLogin = function changeAuthorizedLogin(value) {
    (0, _Changes.generalChangeUserName)({
      value: value,
      validation: validationAuthorizedLogin,
      setValue: setAuthorizedLogin
    });
  };
  var changeAuthorizedPassword = function changeAuthorizedPassword(value) {
    (0, _Changes.generalChangePassword)({
      value: value,
      validation: validationAuthorizedPassword,
      setValue: setAuthorizedPassword
    });
  };
  var changeLimit = function changeLimit(value) {
    var valid = validationLimit(value);
    if (valid) {
      setLimit(value);
    }
  };
  var changeTimeToPay = function changeTimeToPay(value) {
    var valid = validationTimeToPay(value);
    if (valid) {
      setTimeToPay(value);
    }
  };

  /**
   * Export
   *
   *
   */
  var states = {
    entityId: entityId,
    entityIdValid: entityIdValid,
    authorizedLogin: authorizedLogin,
    authorizedLoginValid: authorizedLoginValid,
    authorizedPassword: authorizedPassword,
    authorizedPasswordValid: authorizedPasswordValid,
    limit: limit,
    limitValid: limitValid,
    timeToPay: timeToPay,
    timeToPayValid: timeToPayValid,
    entity: entity,
    currentId: currentId
  };
  var actions = {
    infoReset: infoReset,
    validationEntityId: validationEntityId,
    validationAuthorizedLogin: validationAuthorizedLogin,
    validationAuthorizedPassword: validationAuthorizedPassword,
    validationLimit: validationLimit,
    validationTimeToPay: validationTimeToPay,
    validationButtonNext: validationButtonNext,
    validationButtonNextLogin: validationButtonNextLogin,
    changeEntityId: changeEntityId,
    changeAuthorizedLogin: changeAuthorizedLogin,
    changeAuthorizedPassword: changeAuthorizedPassword,
    changeLimit: changeLimit,
    changeTimeToPay: changeTimeToPay,
    setCurrentId: setCurrentId,
    setEntity: setEntity
  };
  return {
    states: states,
    actions: actions
  };
}