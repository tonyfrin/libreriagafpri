"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationAreaCode = void 0;
var _constants = require("../constants");
var _helpers = require("../helpers");
var generalValidationAreaCode = exports.generalValidationAreaCode = function generalValidationAreaCode(_ref) {
  var newValue = _ref.newValue,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  var valid = (0, _helpers.validationSelect)(newValue, "".concat(_constants.AREA_CODE_INPUT).concat(inputId));
  if (valid !== currentValid) {
    setValid(valid);
  }
  return valid;
};