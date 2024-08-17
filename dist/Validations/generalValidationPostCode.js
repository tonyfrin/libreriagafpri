"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationPostCode = void 0;
var _helpers = require("../helpers");
var _constants = require("../constants");
var generalValidationPostCode = exports.generalValidationPostCode = function generalValidationPostCode(_ref) {
  var value = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  var valid = (0, _helpers.validationInput)(value, /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/, "".concat(_constants.ZIP_CODE_INPUT).concat(inputId), required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};