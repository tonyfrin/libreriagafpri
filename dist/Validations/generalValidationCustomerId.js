"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationCustomerId = void 0;
var _constants = require("../constants");
var _index = require("./index");
var generalValidationCustomerId = exports.generalValidationCustomerId = function generalValidationCustomerId(_ref) {
  var value = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? true : _ref$required,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  var valid = value !== null ? value : 0;
  return (0, _index.validationInputNumbersWithValue)({
    value: valid,
    inputId: "".concat(_constants.CUSTOMER_ID_INPUT).concat(inputId),
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};