"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesCreditOpening = useGafpriAttributesCreditOpening;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Validations = require("../../../../Validations");
function useGafpriAttributesCreditOpening() {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    entityId = _useState2[0],
    setEntityId = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    authorizedLogin = _useState4[0],
    setAuthorizedLogin = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    authorizedLoginValid = _useState6[0],
    setAuthorizedLoginValid = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    authorizedPassword = _useState8[0],
    setAuthorizedPassword = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    authorizedPasswordValid = _useState10[0],
    setAuthorizedPasswordValid = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    amount = _useState12[0],
    setAmount = _useState12[1];
  var infoReset = function infoReset() {
    setEntityId(0);
    setAuthorizedLogin('');
    setAuthorizedLoginValid(false);
    setAuthorizedPassword('');
    setAuthorizedPasswordValid(false);
    setAmount(0);
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

  /**
   * Export
   *
   *
   */
  var states = {
    entityId: entityId,
    authorizedLogin: authorizedLogin,
    authorizedLoginValid: authorizedLoginValid,
    authorizedPassword: authorizedPassword,
    authorizedPasswordValid: authorizedPasswordValid,
    amount: amount
  };
  var actions = {
    infoReset: infoReset,
    setEntityId: setEntityId,
    setAuthorizedLogin: setAuthorizedLogin,
    setAuthorizedPassword: setAuthorizedPassword,
    setAmount: setAmount,
    validationAuthorizedLogin: validationAuthorizedLogin,
    validationAuthorizedPassword: validationAuthorizedPassword
  };
  return {
    states: states,
    actions: actions
  };
}