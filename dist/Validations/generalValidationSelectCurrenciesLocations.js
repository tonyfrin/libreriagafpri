"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationSelectCurrenciesLocations = void 0;
var _constants = require("../constants");
var _helpers = require("../helpers");
var generalValidationSelectCurrenciesLocations = exports.generalValidationSelectCurrenciesLocations = function generalValidationSelectCurrenciesLocations(_ref) {
  var value = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  var validation = (0, _helpers.validationSelect)(value, "".concat(_constants.CURRENCIES_LOCATIONS_INPUT).concat(inputId));
  if (validation !== currentValid) {
    setValid(validation);
  }
  return validation;
};