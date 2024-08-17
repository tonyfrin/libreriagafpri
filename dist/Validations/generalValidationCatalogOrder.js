"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationCatalogOrder = void 0;
var _index = require("./index");
var _constants = require("../constants");
var generalValidationCatalogOrder = exports.generalValidationCatalogOrder = function generalValidationCatalogOrder(_ref) {
  var value = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? true : _ref$required,
    _ref$input = _ref.input,
    input = _ref$input === void 0 ? '' : _ref$input;
  return (0, _index.validationInputNumbers)({
    value: value,
    inputId: "".concat(_constants.CATALOG_ORDER_INPUT).concat(input),
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};