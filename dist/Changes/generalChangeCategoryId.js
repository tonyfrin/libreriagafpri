"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeCategoryId = void 0;
var generalChangeCategoryId = exports.generalChangeCategoryId = function generalChangeCategoryId(_ref) {
  var value = _ref.value,
    validation = _ref.validation,
    setValue = _ref.setValue;
  if (value === null) {
    setValue(null);
    return;
  }
  var defaultValidation = function defaultValidation() {
    return true;
  };
  var newValidations = validation || defaultValidation;
  var valid = newValidations(value);
  if (valid) {
    setValue(value);
  }
};