"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationReferredId = void 0;
var _constants = require("../constants");
var _index = require("./index");
var generalValidationReferredId = exports.generalValidationReferredId = function generalValidationReferredId(_ref) {
  var value = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? true : _ref$required,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  var valid = value !== null ? value : 1;
  return (0, _index.validationInputNumbersWithValue)({
    value: valid,
    inputId: "".concat(_constants.REFFERED_ID_INPUT).concat(inputId),
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};