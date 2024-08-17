"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationAddress1 = void 0;
var _constants = require("../constants");
var _index = require("./index");
var generalValidationAddress1 = exports.generalValidationAddress1 = function generalValidationAddress1(_ref) {
  var value = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? true : _ref$required,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  return (0, _index.validationInputAddress)({
    value: value,
    inputId: "".concat(_constants.ADDRESS1_INPUT).concat(inputId),
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};