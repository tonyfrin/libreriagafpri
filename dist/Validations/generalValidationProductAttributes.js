"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationProductAttributes = void 0;
var _index = require("./index");
var _constants = require("../constants");
var generalValidationProductAttributes = exports.generalValidationProductAttributes = function generalValidationProductAttributes(_ref) {
  var value = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? true : _ref$required,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  return (0, _index.validationGeneralAttributes)({
    value: value,
    inputId: "".concat(_constants.PRODUCT_ATTRIBUTES_INPUT).concat(inputId),
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};