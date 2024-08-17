"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalValidationPhoto = void 0;
var _index = require("./index");
var generalValidationPhoto = exports.generalValidationPhoto = function generalValidationPhoto(_ref) {
  var value = _ref.value,
    setValid = _ref.setValid,
    currentValid = _ref.currentValid,
    required = _ref.required,
    inputId = _ref.inputId;
  return (0, _index.validationPhoto)({
    value: value,
    inputId: inputId,
    setValid: setValid,
    currentValid: currentValid,
    required: required
  });
};