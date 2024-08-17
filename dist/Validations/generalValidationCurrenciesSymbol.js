"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationCurrenciesSymbol = void 0;
var _helpers = require("../helpers");
var _constants = require("../constants");
var generalValidationCurrenciesSymbol = exports.generalValidationCurrenciesSymbol = function generalValidationCurrenciesSymbol(_ref) {
  var newValue = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  var valid = (0, _helpers.validationInput)(newValue, /\$|Bs|€/, "".concat(_constants.CURRENCIES_SYMBOL_INPUT).concat(inputId), required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};