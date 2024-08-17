"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationPhone = void 0;
var _constants = require("../constants");
var _helpers = require("../helpers");
var generalValidationPhone = exports.generalValidationPhone = function generalValidationPhone(_ref) {
  var newValue = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  var valid = (0, _helpers.validationInput)(newValue, /^[0-9]{10,20}/, "".concat(_constants.PHONE_INPUT).concat(inputId), required);
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};