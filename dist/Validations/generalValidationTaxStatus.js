"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationTaxStatus = void 0;
var _helpers = require("../helpers");
var _constants = require("../constants");
var generalValidationTaxStatus = exports.generalValidationTaxStatus = function generalValidationTaxStatus(_ref) {
  var newValue = _ref.newValue,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  var valid = (0, _helpers.validationSelect)(newValue, "".concat(_constants.TAX_STATUS_INPUT).concat(inputId));
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};